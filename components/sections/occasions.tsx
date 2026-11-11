import Image from "next/image";

import { ButtonLink, placeholderFor, SectionIntro, type SectionProps } from "@/components/brand";
import { Icon } from "@/components/icons";
import { occasions } from "@/content/site";
import { whatsappLink } from "@/lib/links";

export function Occasions({ heading }: SectionProps) {
  const count = occasions.groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section className="section-y flex flex-1 desk:min-h-0">
      <div className="container-page grid gap-(--space-lg) lg:grid-cols-2 lg:gap-(--gutter) desk:min-h-0">
        <div className="flex flex-col gap-(--space-lg) lg:justify-between">
          <SectionIntro eyebrow={occasions.eyebrow} title={occasions.title} subtitle={occasions.subtitle} heading={heading} />

          <div>
            <dl className="grid grid-cols-2 border-y border-foreground/10">
              <div className="flex flex-col-reverse gap-2 py-(--space) pr-6">
                <dt className="label-caps text-muted-foreground">Occasions covered</dt>
                <dd className="font-display text-4xl leading-none font-light text-primary">{count}</dd>
              </div>
              <div className="flex flex-col-reverse gap-2 border-l border-foreground/10 py-(--space) pl-6">
                <dt className="label-caps text-muted-foreground">Gifting themes</dt>
                <dd className="font-display text-4xl leading-none font-light text-primary">{occasions.groups.length}</dd>
              </div>
            </dl>

            <ButtonLink href={occasions.cta.href} arrow className="mt-(--space-lg)">
              {occasions.cta.label}
            </ButtonLink>
            <p className="mt-(--space) text-[0.8125rem] text-muted-foreground">{occasions.hint}</p>
          </div>
        </div>

        <ul className="stagger grid gap-4 sm:grid-cols-2 lg:grid-rows-2 desk:min-h-0">
          {occasions.groups.map((group) => (
            <li
              key={group.title}
              className="group relative isolate flex h-80 flex-col justify-end overflow-hidden rounded-[1.5rem] bg-primary-dark p-6 text-primary-foreground sm:h-96 lg:h-auto lg:min-h-[15rem]"
            >
              <Image
                src={group.image.src}
                alt={group.image.alt}
                fill
                placeholder={placeholderFor(group.image.src)}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-focus-within:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent transition-colors duration-700 group-hover:via-primary-dark/70 group-focus-within:via-primary-dark/70"
              />

              <span className="label-caps absolute top-5 right-5 rounded-full bg-card/90 px-3 py-1.5 text-foreground backdrop-blur-sm">
                {group.items.length} {group.items.length === 1 ? "occasion" : "occasions"}
              </span>

              <h3 className="font-display text-2xl leading-tight font-light">{group.title}</h3>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-primary-foreground/75">{group.text}</p>

              <div className="grid transition-[grid-template-rows,opacity] duration-500 pointer-fine:lg:grid-rows-[0fr] pointer-fine:lg:opacity-0 pointer-fine:lg:group-hover:grid-rows-[1fr] pointer-fine:lg:group-hover:opacity-100 pointer-fine:lg:group-focus-within:grid-rows-[1fr] pointer-fine:lg:group-focus-within:opacity-100">
                <ul className="flex min-h-0 flex-wrap gap-2 overflow-hidden pt-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a
                        href={whatsappLink(`Hi MitraVee, I'd like gifting ideas for ${item.toLowerCase()}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 bg-primary-dark/30 px-3 py-1.5 text-[0.8125rem] backdrop-blur-sm transition-colors hover:border-highlight-soft hover:bg-highlight-soft hover:text-primary-dark"
                      >
                        {item}
                        <Icon name="arrowUpRight" className="size-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
