import Image from "next/image";

import { AutoCarousel } from "@/components/auto-carousel";
import { ButtonLink, placeholderFor, SectionIntro, type SectionProps } from "@/components/brand";
import { Icon } from "@/components/icons";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { collections } from "@/content/site";
import { whatsappLink } from "@/lib/links";

export function Collections({ heading }: SectionProps) {
  const total = String(collections.items.length).padStart(2, "0");

  return (
    <section className="section-y flex flex-1 items-start overflow-hidden">
      <div className="container-page">
        <AutoCarousel>
          <div className="flex flex-col gap-(--space) sm:flex-row sm:items-end sm:justify-between">
            <SectionIntro
              eyebrow={collections.eyebrow}
              title={collections.title}
              subtitle={collections.subtitle}
              heading={heading}
            />
            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <CarouselPrevious variant="outline" size="icon-xl" className="static translate-y-0" />
              <CarouselNext variant="outline" size="icon-xl" className="static translate-y-0" />
            </div>
          </div>

          <CarouselContent className="mt-(--space-lg) -ml-5">
            {collections.items.map((item, i) => (
              <CarouselItem key={item.title} className="basis-[80%] pl-5 sm:basis-[46%] lg:basis-1/4">
                <a
                  href={whatsappLink(`Hi MitraVee, I'm interested in your ${item.title} collection.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[26rem] flex-col overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-card transition-colors duration-500 hover:border-primary/40 desk:h-[clamp(17rem,46dvh,27rem)]"
                >
                  <div className="relative min-h-0 flex-1 overflow-hidden bg-muted">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      placeholder={placeholderFor(item.image.src)}
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 80vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {item.tag && (
                      <span className="label-caps absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1.5 text-foreground backdrop-blur-sm">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <div className="shrink-0 p-5 desk:p-(--space)">
                    <div className="flex items-center justify-between">
                      <span className="label-caps text-muted-foreground">
                        {String(i + 1).padStart(2, "0")} / {total}
                      </span>
                      <Icon
                        name="arrowUpRight"
                        className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </div>
                    <h3 className="mt-2.5 truncate font-display text-xl leading-snug font-light">{item.title}</h3>
                    <p className="mt-1.5 line-clamp-2 min-h-[2lh] text-[0.8125rem] leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </AutoCarousel>

        <div className="mt-(--space-lg) flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.875rem] text-muted-foreground">Tap any collection to enquire on WhatsApp.</p>
          <ButtonLink href={collections.cta.href} variant="outline" arrow>
            {collections.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
