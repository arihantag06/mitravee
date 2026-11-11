"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { Cta } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileMenu({ links, cta }: { links: Cta[]; cta: Cta }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const items = [{ label: "Home", href: "/" }, ...links];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="rounded-full lg:hidden" aria-label="Open menu">
          <Icon name="menu" className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 bg-background p-0 sm:max-w-sm">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Mobile" className="flex flex-1 flex-col px-7 pt-20 pb-8">
          <ol className="flex flex-col">
            {items.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className="group flex items-baseline gap-5 border-b py-4"
                  >
                    <span className="label-caps w-6 text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={cn(
                        "font-display text-3xl font-light transition-colors",
                        active ? "italic text-primary" : "text-foreground group-hover:text-primary",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
          <Button asChild size="xl" className="mt-auto w-full">
            <Link href={cta.href} onClick={() => setOpen(false)}>
              {cta.label}
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
