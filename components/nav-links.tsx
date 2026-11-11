"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Cta } from "@/content/site";
import { cn } from "@/lib/utils";

export function NavLinks({ links }: { links: Cta[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative block py-1.5 text-[0.875rem] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300",
                active
                  ? "text-foreground after:scale-x-100"
                  : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100",
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
