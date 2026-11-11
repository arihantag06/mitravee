import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { Icon } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { brand } from "@/content/site";
import { isExternal } from "@/lib/links";

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type ButtonLinkProps = Omit<ComponentProps<"a">, "href"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    arrow?: boolean;
  };

export function ButtonLink({
  href,
  variant = "default",
  size = "xl",
  arrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          data-icon="inline-end"
          name="arrowRight"
          className="size-4 transition-transform duration-300 group-hover/button:translate-x-1"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  return (
    <Button asChild variant={variant} size={size} className={className}>
      {href.startsWith("/") ? (
        <Link href={href} {...props}>
          {content}
        </Link>
      ) : (
        <a href={href} {...(isExternal(href) && { target: "_blank", rel: "noopener noreferrer" })} {...props}>
          {content}
        </a>
      )}
    </Button>
  );
}

/* ------------------------------------------------------------------ */
/* Typography                                                          */
/* ------------------------------------------------------------------ */

/** Every section accepts the heading level so only the first section on a page renders an `h1`. */
export type SectionProps = { heading?: "h1" | "h2" };

/** Renders `*word*` segments as italic accent text. */
export function Emphasis({ text, className = "text-primary" }: { text: string; className?: string }) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i} className={cn("font-display italic", className)}>
        {part.slice(1, -1)}
      </em>
    ) : (
      part
    ),
  );
}

export function Eyebrow({ children, className, tone = "default" }: { children: ReactNode; className?: string; tone?: "default" | "light" }) {
  return (
    <p
      className={cn(
        "label-caps inline-flex items-center",
        tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}

type DisplayTitleProps = {
  text: string;
  as?: "h1" | "h2";
  size?: "hero" | "page" | "card";
  className?: string;
  emphasisClassName?: string;
};

const titleSizes = {
  hero: "text-[2.5rem] leading-[1.05] sm:text-6xl desk:text-[clamp(2.75rem,8dvh,4.5rem)]",
  page: "text-[2.1rem] leading-[1.1] sm:text-[2.75rem] desk:text-[clamp(2rem,5.4dvh,3.125rem)]",
  card: "text-2xl leading-[1.15] sm:text-3xl",
};

export function DisplayTitle({ text, as: Tag = "h2", size = "page", className, emphasisClassName }: DisplayTitleProps) {
  return (
    <Tag className={cn("font-display font-light tracking-[-0.025em] text-balance", titleSizes[size], className)}>
      <Emphasis text={text} className={emphasisClassName} />
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Decorative                                                          */
/* ------------------------------------------------------------------ */

export function Logo({ className = "h-11 w-auto", preload = false }: { className?: string; preload?: boolean }) {
  return <Image src={brand.logo.src} alt={brand.logo.alt} className={className} sizes="140px" preload={preload} />;
}

/** Blur-up placeholders are only available for locally imported images. */
export function placeholderFor(src: unknown) {
  return typeof src === "string" ? "empty" : "blur";
}

/** Standard section heading block: eyebrow, title and optional supporting copy. */
export function SectionIntro({
  eyebrow,
  title,
  subtitle,
  heading = "h2",
  tone = "default",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  heading?: "h1" | "h2";
  tone?: "default" | "light";
  className?: string;
}) {
  return (
    <div className={cn("fade-up", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <DisplayTitle
        text={title}
        as={heading}
        className="mt-(--space)"
        emphasisClassName={tone === "light" ? "text-highlight-soft" : undefined}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-(--space) max-w-lg text-base leading-relaxed",
            tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
