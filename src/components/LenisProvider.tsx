"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      // smoothWheel: true,
      // smoothTouch: false,
      // // lerp: 0.3, // Increased further
      // duration: 0.6,
      // wheelMultiplier: 1.4,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
