import { SectionIntro, type SectionProps } from "@/components/brand";
import { WhyUsPillars } from "@/components/why-us-pillars";
import { about } from "@/content/site";

export function About({ heading }: SectionProps) {
  return (
    <section className="section-y flex flex-1 desk:min-h-0">
      <WhyUsPillars
        intro={<SectionIntro eyebrow={about.eyebrow} title={about.title} subtitle={about.body} heading={heading} />}
        pillars={about.points}
        quote={about.quote}
        cta={about.cta}
      />
    </section>
  );
}
