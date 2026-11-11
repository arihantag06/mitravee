import { Icon } from "@/components/icons";
import { brand, contact, socials } from "@/content/site";
import { mailLink, telLink } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="shrink-0 border-t border-foreground/8 text-[0.8125rem] text-muted-foreground">
      <div className="container-page flex flex-col items-center justify-center gap-2 py-6 sm:h-(--header-height) sm:flex-row sm:justify-between sm:py-0">
        <p>
          © {brand.name}. {brand.parent}.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
          <li>
            <a href={telLink(contact.phones[0])} className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Icon name="phone" className="size-3.5 text-highlight" />
              {contact.phones[0]}
            </a>
          </li>
          <li className="hidden sm:block">
            <a href={mailLink()} className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Icon name="mail" className="size-3.5 text-highlight" />
              {contact.email}
            </a>
          </li>
          {socials.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition-colors hover:text-foreground"
              >
                <Icon name={s.icon} className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
