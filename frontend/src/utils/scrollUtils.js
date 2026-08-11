export const EASE_OUT_EXPO = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function getScrollDuration(targetY) {
  const distance = Math.abs(targetY - window.scrollY);
  return distance < window.innerHeight * 0.5 ? 1.1 : 1.65;
}
