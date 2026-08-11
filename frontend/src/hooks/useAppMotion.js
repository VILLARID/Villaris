import { useReducedMotion } from "framer-motion";
import { isFullMotion, motionMode } from "../config/motion";

export default function useAppMotion() {
  const systemReducedMotion = useReducedMotion();
  const shouldReduceMotion = isFullMotion ? false : Boolean(systemReducedMotion);
  return { shouldReduceMotion, motionMode };
}