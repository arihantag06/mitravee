import type { ComponentType } from "react";

import type { SectionProps } from "@/components/brand";
import { About } from "@/components/sections/about";
import { Collections } from "@/components/sections/collections";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Occasions } from "@/components/sections/occasions";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import type { SectionId } from "@/content/site";

const registry: Record<SectionId, ComponentType<SectionProps>> = {
  hero: Hero,
  highlights: Highlights,
  services: Services,
  about: About,
  collections: Collections,
  occasions: Occasions,
  process: Process,
  stats: Stats,
  contact: Contact,
};

export function PageSections({ sections }: { sections: SectionId[] }) {
  return (
    <div className="page-enter flex flex-1 flex-col">
      {sections.map((id, i) => {
        const Section = registry[id];
        return <Section key={id} heading={i === 0 ? "h1" : "h2"} />;
      })}
    </div>
  );
}
