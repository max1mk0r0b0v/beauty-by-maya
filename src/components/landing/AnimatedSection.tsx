"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
} & Omit<HTMLAttributes<HTMLElement>, "className">;

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as: Component = "section",
  style,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setIsVisible(true));

      return () => cancelAnimationFrame(frame);
    }

    const isMobileViewport = window.matchMedia("(max-width: 640px)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      isMobileViewport
        ? { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
        : { threshold: 0.18, rootMargin: "0px 0px -70px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={setRef}
      className={`reveal-motion ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </Component>
  );
}
