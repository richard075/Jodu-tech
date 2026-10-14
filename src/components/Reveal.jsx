import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";

const MotionDiv = m.div;

function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.12, margin: "0px 0px -36px 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 22 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.65,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.2, 0.75, 0.25, 1],
      }}
      style={style}
    >
      {children}
    </MotionDiv>
  );
}

export default Reveal;
