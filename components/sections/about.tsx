import Image from "next/image";

import { placeholderFor, SectionIntro, type SectionProps } from "@/components/brand";
import { about } from "@/content/site";

export function About({ heading }: SectionProps) {
  return (
    <section className="section-y flex flex-1 items-start">
      <div className="container-page grid items-center gap-(--space-lg) lg:grid-cols-2 lg:gap-(--gutter)">
        <figure className="fade-up mx-auto w-[min(100%,22rem)] lg:ml-0 desk:w-[min(100%,38dvh,24rem)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-muted">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              preload
              placeholder={placeholderFor(about.image.src)}
              sizes="(min-width: 1024px) 24rem, 22rem"
              className="object-cover"
            />
          </div>
          <blockquote className="mt-(--space) border-l-2 border-highlight pl-5 font-display text-lg leading-snug font-light text-foreground italic">
            &ldquo;{about.quote}&rdquo;
          </blockquote>
        </figure>

        <div>
          <SectionIntro eyebrow={about.eyebrow} title={about.title} subtitle={about.body} heading={heading} />

          <ol className="stagger mt-(--space-lg) grid gap-(--space) sm:grid-cols-3">
            {about.points.map((point, i) => (
              <li key={point.title} className="border-t border-foreground/15 pt-(--space)">
                <span className="font-display text-base text-highlight italic">0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted-foreground">{point.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
