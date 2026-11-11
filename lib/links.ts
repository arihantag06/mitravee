import { contact } from "@/content/site";

export function whatsappLink(message: string = contact.whatsappGreeting) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mailLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${contact.email}${query ? `?${query}` : ""}`;
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}
