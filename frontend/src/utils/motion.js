export const EASE = [0.22, 1, 0.36, 1];
export const EASE_SOFT = [0.21, 0.47, 0.32, 0.98];

export const SPRING_SOFT = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
};

export const SPRING_HOVER = {
  type: "spring",
  stiffness: 420,
  damping: 30,
};

export function fadeUp(y = 24, delay = 0, duration = 0.6, ease = EASE) {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease },
    },
  };
}

export function fadeIn(delay = 0, duration = 0.5, ease = EASE) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, delay, ease },
    },
  };
}

export function fadeSlide(x = 12, delay = 0, duration = 0.55, ease = EASE) {
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease },
    },
  };
}

export function staggerContainer(stagger = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export function lineReveal(delay = 0, duration = 0.7, ease = EASE) {
  return {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration, delay, ease },
    },
  };
}