import { Icon } from "@/components/icons";
import { highlights } from "@/content/site";
import { cn } from "@/lib/utils";

export function Highlights() {
  return (
    <section aria-label="Why choose us" className="container-page shrink-0">
      <h2 className="sr-only">Why choose us</h2>
      <ul className="stagger grid grid-cols-2 border-t border-foreground/10 sm:grid-cols-3 lg:grid-cols-5">
        {highlights.map((item, i) => (
          <li
            key={item.title}
            className={cn(
              "flex items-center justify-center gap-3 py-6 desk:py-(--space-lg)",
              i > 0 && "lg:border-l lg:border-foreground/10",
              i === highlights.length - 1 && "max-sm:col-span-2",
            )}
          >
            <Icon name={item.icon} className="size-5 shrink-0 text-highlight" strokeWidth={1.25} />
            <span className="text-[0.875rem] font-medium tracking-wide text-foreground">{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
