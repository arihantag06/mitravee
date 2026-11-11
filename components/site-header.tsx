import Link from "next/link";

import { ButtonLink, Logo } from "@/components/brand";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLinks } from "@/components/nav-links";
import { brand, navigation } from "@/content/site";
import { navLinks } from "@/lib/pages";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 shrink-0 border-b border-foreground/8 bg-background/85 backdrop-blur-md">
      <div className="container-page grid h-(--header-height) grid-cols-[1fr_auto] items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="justify-self-start" aria-label={`${brand.name} home`}>
          <Logo preload className="h-10 w-auto desk:h-[clamp(2.25rem,5.4dvh,2.75rem)]" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <NavLinks links={navLinks} />
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <ButtonLink href={navigation.cta.href} size="lg" className="h-10 rounded-full px-5 text-[0.8125rem] font-semibold max-sm:hidden">
            {navigation.cta.label}
          </ButtonLink>
          <MobileMenu links={navLinks} cta={navigation.cta} />
        </div>
      </div>
    </header>
  );
}
