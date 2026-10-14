import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";

const MotionDiv = m.div;
const ELECTRIC_DURATION_MS = 900;
const REDUCED_ELECTRIC_DURATION_MS = 180;

export default function ElectricBorderEffect() {
  const [bursts, setBursts] = useState([]);
  const nextId = useRef(0);
  const timeouts = useRef(new Map());
  const pendingTargets = useRef(new WeakSet());
  const replayedTargets = useRef(new WeakSet());

  useEffect(() => {
    const handleClick = (event) => {
      if (!(event.target instanceof Element)) return;

      const target = event.target.closest(
        'button, a, [role="button"], [role="link"], [data-electric-target]',
      );
      if (!target || target.getAttribute("aria-disabled") === "true") return;
      if (replayedTargets.current.has(target)) {
        replayedTargets.current.delete(target);
        return;
      }
      if (pendingTargets.current.has(target)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      const { left, top, width, height } = target.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;

      event.preventDefault();
      event.stopPropagation();
      pendingTargets.current.add(target);

      const id = nextId.current++;
      const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? REDUCED_ELECTRIC_DURATION_MS
        : ELECTRIC_DURATION_MS;
      const borderRadius = window.getComputedStyle(target).borderRadius;

      setBursts((current) => [...current, { id, left, top, width, height, borderRadius, duration }]);
      timeouts.current.set(
        id,
        window.setTimeout(() => {
          setBursts((current) => current.filter((burst) => burst.id !== id));
          timeouts.current.delete(id);
          pendingTargets.current.delete(target);

          if (target.isConnected) {
            replayedTargets.current.add(target);
            target.click();
          }
        }, duration),
      );
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      timeouts.current.forEach((timeout) => window.clearTimeout(timeout));
      timeouts.current.clear();
    };
  }, []);

  return (
    <div className="electric-effects-layer" aria-hidden="true">
      {bursts.map(({ id, duration, ...bounds }) => (
        <MotionDiv
          key={id}
          className="electric-click-effect"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 1, 0.72, 0] }}
          transition={{
            duration: duration / 1000,
            times: [0, 0.18, 0.62, 1],
            ease: "easeOut",
          }}
          style={bounds}
        />
      ))}
    </div>
  );
}
