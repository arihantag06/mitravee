import { stats } from "@/content/site";

export function Stats() {
  return (
    <section aria-label="At a glance" className="container-page shrink-0 pb-(--page-y)">
      <dl className="stagger grid grid-cols-2 gap-y-8 rounded-[1.5rem] bg-card px-6 py-10 lg:grid-cols-4 lg:divide-x lg:divide-foreground/10 desk:py-(--space-lg)">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse items-center gap-2 text-center lg:px-6">
            <dt className="label-caps text-muted-foreground">{stat.label}</dt>
            <dd className="font-display text-3xl leading-none font-light whitespace-nowrap text-primary desk:text-[clamp(1.75rem,4.6dvh,2.5rem)]">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
