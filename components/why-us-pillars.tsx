"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

import { ButtonLink, placeholderFor } from "@/components/brand";
import type { about } from "@/content/site";
import { cn } from "@/lib/utils";

type Pillar = (typeof about.points)[number];

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * A photo stage paired with a list of pillars. The list advances on its own (paused on hover,
 * stopped once the visitor interacts) and the stage crossfades to the active pillar's photo.
 */
export function WhyUsPillars({
  intro,
  pillars,
  quote,
  cta,
}: {
  intro: ReactNode;
  pillars: Pillar[];
  quote: string;
  cta: { label: string; href: string };
}) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [auto, setAuto] = useState(true);
  const current = pillars[active];

  return (
    <div
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className="container-page grid gap-(--space-lg) lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-(--gutter) lg:gap-y-(--space) desk:min-h-0"
    >
      <div className="lg:col-start-2">{intro}</div>

      <figure className="fade-up relative isolate h-[26rem] overflow-hidden rounded-[1.5rem] bg-primary-dark text-primary-foreground sm:h-[32rem] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-auto lg:min-h-[22rem]">
        {pillars.map((pillar, i) => (
          <Image
            key={pillar.title}
            src={pillar.image.src}
            alt={pillar.image.alt}
            fill
            preload={i === 0}
            placeholder={placeholderFor(pillar.image.src)}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={cn(
              "-z-10 object-cover transition-[opacity,scale] duration-1000 ease-out",
              i === active ? "scale-105 opacity-100" : "scale-100 opacity-0",
            )}
          />
        ))}
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-dark/95 via-primary-dark/25 to-primary-dark/5" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 desk:p-(--space)">
          <div aria-live="polite" className="rounded-2xl bg-card px-4 py-3 text-foreground shadow-sm">
            <p className="font-display text-3xl leading-none font-light text-primary">{current.stat.value}</p>
            <p className="label-caps mt-1.5 text-muted-foreground">{current.stat.label}</p>
          </div>
          <span className="label-caps rounded-full bg-primary-dark/45 px-3 py-1.5 text-primary-foreground/85 backdrop-blur-sm">
            {pad(active + 1)} / {pad(pillars.length)}
          </span>
        </div>

        <figcaption className="absolute inset-x-0 bottom-0 p-6 desk:p-(--space-lg)">
          <blockquote className="max-w-sm font-display text-2xl leading-snug font-light italic desk:text-[clamp(1.5rem,3.6dvh,2rem)]">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <p className="label-caps mt-(--space) text-highlight-soft">The MitraVee promise</p>
        </figcaption>
      </figure>

      <div className="lg:col-start-2 lg:self-end">
        <ol className="border-t border-foreground/15" onFocus={() => setAuto(false)}>
          {pillars.map((pillar, i) => {
            const isActive = i === active;
            return (
              <li key={pillar.title} className="relative border-b border-foreground/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`pillar-${i}`}
                    onClick={() => {
                      setActive(i);
                      setAuto(false);
                    }}
                    onMouseEnter={() => setActive(i)}
                    className="group flex w-full cursor-pointer items-baseline gap-5 py-4 text-left desk:py-[clamp(0.5rem,1.6dvh,1.125rem)] outline-none focus-visible:text-primary"
                  >
                    <span className="font-display text-base text-highlight italic">{pad(i + 1)}</span>
                    <span
                      className={cn(
                        "flex-1 font-display text-xl leading-tight font-light transition-colors duration-300 desk:text-[clamp(1.25rem,3dvh,1.5rem)]",
                        isActive ? "text-foreground" : "text-foreground/45 group-hover:text-foreground",
                      )}
                    >
                      {pillar.title}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "relative size-3 shrink-0 self-center before:absolute before:inset-x-0 before:top-1/2 before:h-px before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-300",
                        isActive ? "text-primary after:scale-y-0" : "text-foreground/45",
                      )}
                    />
                  </button>
                </h3>

                <div
                  id={`pillar-${i}`}
                  role="region"
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="min-h-0 overflow-hidden pl-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    <span className="block max-w-md pb-4 desk:pb-[clamp(0.5rem,1.6dvh,1.125rem)]">{pillar.text}</span>
                  </p>
                </div>

                {isActive && auto && (
                  <span
                    key={active}
                    aria-hidden
                    onAnimationEnd={() => setActive((active + 1) % pillars.length)}
                    style={{ animationPlayState: hovered ? "paused" : "running" }}
                    className="absolute inset-x-0 -bottom-px hidden h-px origin-left bg-primary motion-safe:block motion-safe:animate-[progress_6s_linear_forwards]"
                  />
                )}
              </li>
            );
          })}
        </ol>

        <ButtonLink href={cta.href} arrow className="mt-(--space)">
          {cta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
