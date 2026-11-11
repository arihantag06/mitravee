import Image from "next/image";

import { ButtonLink, DisplayTitle, Eyebrow, placeholderFor, type SectionProps } from "@/components/brand";
import { hero } from "@/content/site";

export function Hero({ heading = "h1" }: SectionProps) {
  return (
    <section className="section-y flex flex-1 items-start">
      <div className="container-page grid items-center gap-(--space-lg) lg:grid-cols-2 lg:gap-(--gutter)">
        <div className="fade-up">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <DisplayTitle text={hero.title} as={heading} size="hero" className="mt-(--space)" />
          <p className="mt-(--space) max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="mt-(--space-lg) flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href} arrow>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <figure className="fade-up mx-auto w-[min(100%,22rem)] lg:mr-0 desk:w-[min(100%,40dvh,25rem)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-muted shadow-[0_40px_80px_-40px_rgb(36_37_92/0.35)]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              preload
              placeholder={placeholderFor(hero.image.src)}
              sizes="(min-width: 1024px) 25rem, 22rem"
              className="object-cover object-[58%_50%]"
            />
          </div>
          <figcaption className="mt-(--space) flex items-baseline justify-between gap-4 border-t border-foreground/15 pt-(--space)">
            <span className="font-display text-lg text-foreground">{hero.note.title}</span>
            <span className="text-[0.8125rem] text-muted-foreground">{hero.note.text}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
