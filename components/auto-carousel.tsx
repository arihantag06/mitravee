"use client";

import { useState, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@/components/ui/carousel";

/** Carousel that advances on its own, pausing while hovered or focused. */
export function AutoCarousel({ children, delay = 3200 }: { children: ReactNode; delay?: number }) {
  const [plugins] = useState(() => [
    Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true }),
  ]);

  return (
    <Carousel opts={{ align: "start", loop: true, duration: 40 }} plugins={plugins}>
      {children}
    </Carousel>
  );
}
