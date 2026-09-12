import { useEffect, useRef, useState } from "react";

/**
 * A zone of the night sky where, while scrolling, a fire becomes visible.
 * Nothing is announced: the ember appears with the movement of the page.
 */
export function EmberSky({ label }: { label: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [heat, setHeat] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const p = 1 - (rect.top + rect.height / 2) / window.innerHeight;
      setHeat(Math.min(1, Math.max(0, p * 1.6)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <span
      ref={ref}
      role="img"
      aria-label={label}
      className="pointer-events-none absolute right-[14%] bottom-[8%] h-[38%] w-[26%]"
    >
      <span
        className="ember absolute inset-0"
        style={{ opacity: heat * 0.9, transform: `scale(${0.85 + heat * 0.25})` }}
      />
      <span
        className="ember-tongue absolute bottom-[22%] left-[38%]"
        style={{ opacity: heat }}
      />
      <span
        className="ember-tongue absolute bottom-[18%] left-[52%]"
        style={{ opacity: heat * 0.8, animationDelay: "0.7s" }}
      />
      <span
        className="ember-tongue absolute bottom-[26%] left-[46%]"
        style={{ opacity: heat * 0.6, animationDelay: "1.3s" }}
      />
    </span>
  );
}
