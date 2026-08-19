/**
 * Helpers para el componente BorderGlow.
 * Puerto vanilla del original de React Bits
 * (https://reactbits.dev/components/border-glow) — el CSS y la física son los mismos,
 * solo cambiamos React por generación de CSS variables en build time.
 */

export interface BorderGlowVars {
  [key: string]: string;
}

/**
 * Parsea una string HSL tipo "14 90 60" o "14 90 60%" a { h, s, l }.
 */
export function parseHSL(hslStr: string): { h: number; s: number; l: number } {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 40, s: 80, l: 80 };
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
}

/**
 * Genera las CSS variables del glow en distintos niveles de opacidad.
 * Se usan en el `::after` del `.edge-light` para crear el box-shadow apilado.
 */
export function buildGlowVars(glowColor: string, intensity: number): BorderGlowVars {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
  const vars: BorderGlowVars = {};
  for (let i = 0; i < opacities.length; i++) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
  }
  return vars;
}

/**
 * Genera las CSS variables del mesh gradient (7 radial-gradients en posiciones fijas)
 * que pintan el border y el fill del card. El color array es de 3 hex, mapeado
 * a 7 posiciones según COLOR_MAP.
 */
const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const GRADIENT_KEYS = [
  '--gradient-one', '--gradient-two', '--gradient-three',
  '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven',
];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

export function buildGradientVars(colors: string[]): BorderGlowVars {
  const vars: BorderGlowVars = {};
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`;
  }
  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

/**
 * Une todos los style objects (scalar + glow + gradient) en uno solo
 * para pasar a `style={...}` en el elemento.
 */
export function buildBorderGlowStyle(
  scalars: Record<string, string | number>,
  glowColor: string,
  glowIntensity: number,
  colors: string[]
): BorderGlowVars {
  return {
    ...scalars,
    ...buildGlowVars(glowColor, glowIntensity),
    ...buildGradientVars(colors),
  };
}
