"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {

  const pathname = usePathname();

  const lenisRef = useRef(null);

  useEffect(() => {

    if (lenisRef.current?.lenis) {

      lenisRef.current.lenis.scrollTo(0, { immediate: true });

    }

  }, [pathname]);

  return (

    <ReactLenis
      root
      ref={lenisRef}
      options={{ stopInertiaOnNavigate: true }}
    />

  );

}
