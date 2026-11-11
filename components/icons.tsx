import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  Check,
  Clock,
  Gift,
  GlassWater,
  Mail,
  MapPin,
  MapPinned,
  Megaphone,
  Menu,
  NotebookPen,
  Package,
  PenLine,
  Phone,
  ShoppingBag,
  Sparkles,
  Speaker,
  Truck,
  Users,
  Wallet,
  X,
} from "lucide-react";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number | string }>;

function brandIcon(paths: ReactNode): SvgIcon {
  return function BrandIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

const WhatsApp = brandIcon(
  <>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <path d="M9.2 8.4c.1-.3.4-.5.7-.5h.6l.9 2-.7.9c.5 1 1.3 1.8 2.3 2.3l.9-.7 2 .9v.6c0 .3-.2.6-.5.7-3.2.8-7-3-6.2-6.2Z" />
  </>,
);

const Instagram = brandIcon(
  <>
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <path d="M17.5 6.5h.01" />
  </>,
);

const LinkedIn = brandIcon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </>,
);

const icons = {
  award: Award,
  pen: PenLine,
  package: Package,
  truck: Truck,
  map: MapPinned,
  gift: Gift,
  box: Boxes,
  users: Users,
  megaphone: Megaphone,
  notebook: NotebookPen,
  bottle: GlassWater,
  speaker: Speaker,
  sparkles: Sparkles,
  wallet: Wallet,
  bag: ShoppingBag,
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  clock: Clock,
  check: Check,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  menu: Menu,
  close: X,
  whatsapp: WhatsApp,
  instagram: Instagram,
  linkedin: LinkedIn,
} satisfies Record<string, SvgIcon>;

export type IconName = keyof typeof icons;

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; strokeWidth?: number };

export function Icon({ name, className = "size-6", strokeWidth = 1.5, ...props }: IconProps) {
  const Component: SvgIcon = icons[name];
  return <Component aria-hidden="true" focusable="false" className={className} strokeWidth={strokeWidth} {...props} />;
}
