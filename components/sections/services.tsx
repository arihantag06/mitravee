import { DisplayTitle, Eyebrow, type SectionProps } from "@/components/brand";
import { Icon } from "@/components/icons";
import { ServicePanels } from "@/components/service-panels";
import { services } from "@/content/site";

export function Services({ heading }: SectionProps) {
  return (
    <section className="section-y flex flex-1 flex-col desk:min-h-0">
      <div className="container-page flex flex-1 flex-col desk:min-h-0">
        <div className="fade-up grid gap-(--space) lg:grid-cols-2 lg:items-end lg:gap-(--gutter)">
          <div>
            <Eyebrow>{services.eyebrow}</Eyebrow>
            <DisplayTitle text={services.title} as={heading} className="mt-(--space)" />
          </div>
          <div className="lg:pb-1.5">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">{services.subtitle}</p>
            <p className="label-caps mt-(--space) hidden items-center gap-2 text-primary lg:flex">
              <Icon name="arrowRight" className="size-3.5" strokeWidth={2} />
              {services.hint}
            </p>
          </div>
        </div>

        <div className="fade-up mt-(--space-lg) flex flex-col desk:min-h-0 desk:flex-1">
          <ServicePanels items={services.items} />
        </div>
      </div>
    </section>
  );
}
