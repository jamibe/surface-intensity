import { useEffect, useRef, useState } from "react";
import onde from "@/assets/sabbia-onde.jpg";

type Props = {
  src: string;
  alt: string;
  caption: string;
};

/**
 * Portrait and wave image held in one continuous field:
 * the water layer drifts with scroll and answers the pointer.
 */
export function AboutScene({ src, alt, caption }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [drift, setDrift] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [near, setNear] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setDrift(Math.min(1, Math.max(0, progress)));
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

  const onMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const rise = (drift - 0.5) * 40;

  return (
    <figure
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => setNear(true)}
      onPointerLeave={() => {
        setNear(false);
        setPointer({ x: 0, y: 0 });
      }}
      className="group relative mt-16 overflow-hidden rounded-lg outline outline-border"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-[transform,filter] duration-700 ease-out"
          style={{
            transform: `scale(${near ? 1.05 : 1.02}) translate3d(${pointer.x * -18}px, ${
              pointer.y * -12 + rise * 0.3
            }px, 0)`,
            filter: near ? "saturate(1.05)" : "saturate(0.94)",
          }}
        />
        <img
          src={onde}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] w-full object-cover mix-blend-multiply transition-[opacity,transform] duration-700 ease-out"
          style={{
            opacity: near ? 0.86 : 0.5,
            transform: `translate3d(${pointer.x * 26}px, ${
              (near ? 8 : 26) - rise * 0.8 + pointer.y * 10
            }px, 0) scale(1.08)`,
            maskImage: "linear-gradient(to top, black 45%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 45%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: near ? 0.35 : 0.6,
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--background) 70%, transparent), transparent 55%)",
          }}
        />
      </div>
      <figcaption className="label px-5 py-4">{caption}</figcaption>
    </figure>
  );
}
