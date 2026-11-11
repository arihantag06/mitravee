"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { placeholderFor } from "@/components/brand";
import { Icon } from "@/components/icons";
import type { services } from "@/content/site";
import { cn } from "@/lib/utils";

type Service = (typeof services.items)[number];

/**
 * Side-by-side photo panels. On desktop the active panel widens to reveal its details;
 * on smaller screens every panel is shown expanded in a stack.
 */
export function ServicePanels({ items }: { items: Service[] }) {
  const [active, setActive] = useState(0);
  const total = String(items.length).padStart(2, "0");

  return (
    <ul className="flex flex-col gap-4 lg:min-h-0 lg:flex-1 lg:flex-row">
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <li
            key={item.title}
            data-active={isActive}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={cn(
              "group relative h-[30rem] overflow-hidden rounded-[1.5rem] bg-primary-dark text-primary-foreground transition-[flex-grow] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] lg:h-auto lg:min-h-[22rem]",
              isActive ? "lg:flex-[3.2]" : "lg:flex-1",
            )}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              placeholder={placeholderFor(item.image.src)}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 ease-out lg:group-data-[active=true]:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/55 to-primary-dark/5 transition-opacity duration-700 lg:group-data-[active=false]:via-primary-dark/40"
            />

            <button
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={isActive}
              aria-controls={`service-${i}`}
              className="absolute inset-0 z-10 cursor-pointer rounded-[1.5rem] outline-none focus-visible:ring-3 focus-visible:ring-highlight-soft/70 lg:group-data-[active=true]:pointer-events-none"
            >
              <span className="sr-only">Show {item.title}</span>
            </button>

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 desk:p-(--space)">
              <span className="grid size-11 place-items-center rounded-full border border-primary-foreground/30 bg-primary-dark/30 text-highlight-soft backdrop-blur-sm">
                <Icon name={item.icon} className="size-5" strokeWidth={1.25} />
              </span>
              <span className="label-caps text-primary-foreground/70 lg:group-data-[active=false]:hidden">
                {String(i + 1).padStart(2, "0")} / {total}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 desk:p-(--space-lg) lg:group-data-[active=false]:p-6">
              <span className="label-caps hidden text-highlight-soft lg:block lg:group-data-[active=true]:hidden">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-3xl leading-tight font-light lg:group-data-[active=false]:text-xl desk:text-[clamp(1.75rem,4.4dvh,2.5rem)]">
                {item.title}
              </h3>

              <div
                id={`service-${i}`}
                className="grid transition-[grid-template-rows,opacity] duration-700 lg:group-data-[active=false]:grid-rows-[0fr] lg:group-data-[active=false]:opacity-0 lg:group-data-[active=true]:grid-rows-[1fr] lg:group-data-[active=true]:delay-200"
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-primary-foreground/80">{item.description}</p>
                  <ul className="mt-(--space) flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-primary-foreground/25 bg-primary-dark/30 px-3.5 py-1.5 text-[0.8125rem] backdrop-blur-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="relative z-20 mt-(--space) inline-flex items-center gap-2 text-[0.875rem] font-semibold text-highlight-soft transition-colors hover:text-primary-foreground"
                  >
                    Discuss {item.title.toLowerCase()}
                    <Icon name="arrowRight" className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
