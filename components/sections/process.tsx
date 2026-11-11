import { SectionIntro, type SectionProps } from "@/components/brand";
import { process } from "@/content/site";

export function Process({ heading }: SectionProps) {
  return (
    <section className="section-y flex flex-1 items-start">
      <div className="container-page">
        <SectionIntro eyebrow={process.eyebrow} title={process.title} heading={heading} className="max-w-2xl" />

        <ol className="stagger mt-(--space-lg) grid gap-(--space-lg) sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <li key={step.title} className="border-t border-foreground/15 pt-(--space)">
              <span className="font-display text-4xl leading-none font-light text-primary/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-(--space) font-display text-xl leading-snug font-normal text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-[17rem] text-[0.875rem] leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
