import { SectionIntro, type SectionProps } from "@/components/brand";
import { Icon, type IconName } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { contact, contactSection } from "@/content/site";
import { mailLink, telLink } from "@/lib/links";

export function Contact({ heading }: SectionProps) {
  const details: { icon: IconName; label: string; lines: string[]; href?: string }[] = [
    { icon: "phone", label: "Call", lines: contact.phones, href: telLink(contact.phones[0]) },
    { icon: "mail", label: "Write", lines: [contact.email], href: mailLink() },
    { icon: "pin", label: "Visit", lines: contact.address.lines, href: contact.address.mapUrl },
    { icon: "clock", label: "Hours", lines: [contact.hours] },
  ];
  const FormTitle = heading === "h1" ? "h2" : "h3";

  return (
    <section className="section-y flex flex-1 items-start">
      <div className="container-page grid items-center gap-(--space-lg) lg:grid-cols-2 lg:gap-(--gutter)">
        <div>
          <SectionIntro
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            subtitle={contactSection.subtitle}
            heading={heading}
          />

          <ul className="stagger mt-(--space-lg) grid gap-(--space) sm:grid-cols-2 sm:gap-x-8">
            {details.map((item) => {
              const body = (
                <>
                  <span className="label-caps flex items-center gap-2 text-muted-foreground">
                    <Icon name={item.icon} className="size-3.5 text-highlight" strokeWidth={1.5} />
                    {item.label}
                  </span>
                  {item.lines.map((line) => (
                    <span key={line} className="mt-1.5 block text-[0.875rem] break-words text-foreground">
                      {line}
                    </span>
                  ))}
                </>
              );
              return (
                <li key={item.label} className="border-t border-foreground/15 pt-(--space)">
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      className="block transition-colors hover:text-primary"
                    >
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="fade-up rounded-[1.5rem] border border-foreground/10 bg-card p-7 sm:p-9 desk:p-(--space-lg)">
          <div className="flex items-baseline justify-between gap-4">
            <FormTitle className="font-display text-2xl leading-tight font-light">{contactSection.form.title}</FormTitle>
            <p className="hidden text-[0.8125rem] text-muted-foreground sm:block">{contactSection.form.note}</p>
          </div>
          <div className="mt-(--space)">
            <QuoteForm
              submitVia={contactSection.form.submitVia}
              submitLabel={contactSection.form.submitLabel}
              whatsapp={contact.whatsapp}
              email={contact.email}
              requirementOptions={contactSection.form.requirementOptions}
              quantityOptions={contactSection.form.quantityOptions}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
