# Redsys payments security design

Status: approved for implementation on 2026-08-21.

## Scope

Add one-off card payments and recurring subscriptions to the static Astro site without allowing card data or Redsys signing secrets to reach the browser.

## Decisions

- Keep the Astro marketing site statically generated.
- Add an isolated Cloudflare Worker for payment HTTP routes, D1 persistence, Queue consumption, and scheduled renewal discovery.
- Use Redsys hosted Redirection for one-off payments and the customer-initiated first subscription transaction.
- Let Redsys create and retain the card credential. Store only an encrypted Redsys reference, the COF transaction id, expiry, brand, and last four digits.
- Execute later renewals server-to-server as MIT transactions using the Redsys reference.
- Never accept amount, currency, discount, Redsys order, callback URL, or renewal dates from the browser. The browser submits only a versioned price id, locale, customer contact data, and recurring-consent acknowledgement.
- Treat the signed Redsys notification or signed REST response as authoritative. Browser OK/KO returns are display-only.
- Keep Redirection and REST signature algorithms independently configurable because current Redsys documentation differs by channel. Unknown signature versions fail closed.
- A scheduled event only materializes due invoices and enqueues jobs. The Queue consumer performs MIT calls. At-least-once delivery is handled through database uniqueness and state transitions.
- A network timeout is an `unknown` payment state, never an automatic retry with a new order.

## Data flow and trust boundaries

```text
[Untrusted browser]
    | priceId, locale, customer, consent
    v
[Payments Worker] ---- signed form ----> [Redsys hosted checkout]
    |                                         |
    |                                         | signed notification
    v                                         v
[D1 ledger] <-------------------------- [Payments Worker]
    ^
    | due invoices              reference-only MIT request
[Cron] -> [Queue] -> [Payments Worker] --------------------> [Redsys REST]
```

Trust boundaries are browser/Worker, Worker/D1, Worker/Queue, and Worker/Redsys. Every external payload is untrusted until structurally validated and, for Redsys messages, cryptographically authenticated.

## HTTP contract

- `POST /api/payments/checkouts`
  - JSON allowlist: `priceId`, `locale`, `customer.email`, optional `customer.name`, and recurring `consent`.
  - Requires `Idempotency-Key`, an allowed `Origin`, body size limit, and rate limiting at the edge.
  - Returns an opaque checkout id plus the Redsys POST target and signed fields. It never returns a credential or signing key.
- `POST /api/redsys/notification`
  - Accepts a small `application/x-www-form-urlencoded` body.
  - Reads the order from decoded-but-untrusted parameters only to derive the per-operation signature key, verifies the signature over the original encoded payload, then validates every semantic field against the stored attempt.
  - Persists the deduplicated event and valid state transition before returning 2xx. Provisioning and email use an outbox/queue path.
- `GET /api/payments/checkouts/:publicId/status`
  - Returns a minimal display status with `Cache-Control: no-store`; no internal ids or payment reference.
- `POST /api/subscriptions/:publicId/cancel`
  - Requires an authenticated customer session or a short-lived, single-use management token. It never relies on an enumerable id alone.

## Stored data

- `prices`: immutable/versioned server-authoritative amount in minor units, currency, billing interval, and activation state.
- `customers`: minimal billing contact identity.
- `orders` and `payment_attempts`: unique Redsys order, immutable amount/currency snapshot, state, response class, and timestamps.
- `payment_methods`: AES-GCM encrypted Redsys reference with key version, COF transaction id, last four digits, brand, expiry, and status. No PAN or CVV.
- `mandates`: terms version, exact pricing rule/frequency/duration, acceptance time, customer identity, and revocation.
- `subscriptions` and `invoices`: calendar-aware billing periods and `UNIQUE(subscription_id, period_start)`.
- `payment_events`: deduplication fingerprint and whitelisted normalized fields; no raw MerchantParameters, signature, token, or full PII.
- `outbox`: durable side effects after the payment-state transaction commits.

## State and idempotency

- Payment attempt: `created -> waiting_customer -> authorized | declined | expired | unknown`; authorized attempts may later become refunded.
- Invoice: `open -> processing -> paid | failed | unknown | void`.
- Subscription: `pending_activation -> active -> past_due | requires_action | cancelled | ended`.
- `payment_attempts.redsys_order` is unique.
- Checkout idempotency is scoped to caller plus a hash of the accepted request.
- Queue delivery reuses the same attempt/order. It must not create a fresh charge on retry.
- Late or duplicate notifications may add audit evidence but cannot repeat provisioning, email, invoice creation, or subscription activation.

## Security controls

- Redsys secrets are runtime secrets, separated for test and production, never source/config/public environment variables.
- Signature verification uses constant-time comparison and an allowlist of signature versions configured for the channel and terminal.
- After signature verification, compare order, amount, currency, merchant/FUC, terminal, transaction type, environment, and operation-specific success code.
- Fixed Redsys endpoints and return URLs; no user-controlled redirect or outbound URL.
- TLS only, restrictive CORS, CSRF/origin checks for browser writes, strict schemas, small bodies, and rate limits.
- No request bodies, MerchantParameters, signatures, references, or secrets in logs. Audit logs contain opaque ids and normalized outcomes.
- Customer cancellation is easy and authenticated. Deleting a reference through Redsys transaction type 44 occurs only when no other active agreement needs it.
- Refund/admin actions require MFA-capable admin authentication, least privilege, and an audit trail; the first release may keep refunds in the Redsys Portal.
- Reconcile `unknown` and pending attempts against Redsys before any retry. Retry only response codes and COF cases explicitly approved by the acquiring bank.

## Abuse cases and mitigations

- Customer changes a displayed price -> server ignores client amounts and resolves the immutable price id.
- Attacker posts a fake success -> signature and stored-attempt comparison fail closed.
- Redsys or Queue delivers twice -> unique constraints plus monotonic state transitions make processing idempotent.
- Worker times out after Redsys charged -> mark unknown, reconcile/anul according to the terminal runbook, do not submit another order.
- Token leaks from database -> encrypted reference is unusable without a separately held key and remains scoped to the Redsys commerce/terminal; rotate and revoke on incident.
- Scheduler races cancellation -> invoice claim and cancellation use transactional state checks before enqueue and again before charge.

## Preconditions still requiring the acquiring bank

- Enable Redirection, online HTTP notification, tokenization/Card-on-File, COF recurring/MIT, direct payment with a reference, REST renewals, and reference deletion.
- Confirm signature version and test vectors separately for Redirection and REST.
- Confirm required COF/3DS fields, including `recurringFrequency` and `recurringExpiry`, and how calendar-month/year plans are represented.
- Confirm operation-specific success and retry codes, timeout/anul procedure, reconciliation access, sandbox certification, and the applicable PCI questionnaire.

## Verification gates

- Official signature vectors for every enabled algorithm/channel.
- Unit tests for response classification, state transitions, price snapshots, month-end/year-end/leap-year scheduling, and token encryption.
- Integration tests for tampered fields, malformed payloads, duplicate/out-of-order notifications, duplicate Queue delivery, return-before-notification, cancellation races, and ambiguous timeouts.
- Redsys sandbox tests for success, denial, 3DS frictionless/challenge, token creation, MIT renewal, expired/deleted reference, and refund/anul flows.
- Production rollout behind independent checkout and MIT kill switches, starting with one-off canary payments and daily reconciliation.
