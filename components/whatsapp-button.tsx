import { Icon } from "@/components/icons";
import { whatsappLink } from "@/lib/links";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-30 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <Icon name="whatsapp" className="size-6" strokeWidth={1.8} />
    </a>
  );
}
