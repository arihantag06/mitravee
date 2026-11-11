"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type QuoteFormProps = {
  submitVia: "whatsapp" | "email";
  submitLabel: string;
  whatsapp: string;
  email: string;
  requirementOptions: string[];
  quantityOptions: string[];
};

const fieldHeight = "h-12 desk:h-[clamp(2.5rem,5.6dvh,3rem)]";
const fieldClass = cn(fieldHeight, "rounded-xl border-foreground/15 bg-background px-4 text-sm shadow-none md:text-sm");
const selectClass = cn(
  fieldClass,
  "w-full data-[size=default]:h-12 desk:data-[size=default]:h-[clamp(2.5rem,5.6dvh,3rem)]",
);

export function QuoteForm({
  submitVia,
  submitLabel,
  whatsapp,
  email,
  requirementOptions,
  quantityOptions,
}: QuoteFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      "New enquiry from the website",
      `Name: ${get("name")}`,
      get("company") && `Company: ${get("company")}`,
      `Phone: ${get("phone")}`,
      get("email") && `Email: ${get("email")}`,
      `Requirement: ${get("requirement")}`,
      get("quantity") && `Quantity: ${get("quantity")}`,
      get("message") && `Details: ${get("message")}`,
    ].filter(Boolean);
    const text = lines.join("\n");

    const url =
      submitVia === "whatsapp"
        ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`
        : `mailto:${email}?subject=${encodeURIComponent(`Enquiry: ${get("requirement")}`)}&body=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-4 gap-y-(--space) sm:grid-cols-2">
      <Field label="Your name" htmlFor="name">
        <Input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Full name" />
      </Field>
      <Field label="Company" htmlFor="company" optional>
        <Input id="company" name="company" autoComplete="organization" className={fieldClass} placeholder="Company name" />
      </Field>
      <Field label="Phone" htmlFor="phone">
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\-\s()]{7,}"
          className={fieldClass}
          placeholder="+91"
        />
      </Field>
      <Field label="Email" htmlFor="email" optional>
        <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@company.com" />
      </Field>
      <Field label="Requirement" htmlFor="requirement">
        <Select name="requirement" required>
          <SelectTrigger id="requirement" className={selectClass}>
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent position="popper">
            {requirementOptions.map((option) => (
              <SelectItem key={option} value={option} className="py-2">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Quantity" htmlFor="quantity" optional>
        <Select name="quantity">
          <SelectTrigger id="quantity" className={selectClass}>
            <SelectValue placeholder="Approximate units" />
          </SelectTrigger>
          <SelectContent position="popper">
            {quantityOptions.map((option) => (
              <SelectItem key={option} value={option} className="py-2">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Tell us more" htmlFor="message" optional className="sm:col-span-2">
        <Textarea
          id="message"
          name="message"
          rows={3}
          className="h-24 min-h-0 resize-none rounded-xl border-foreground/15 bg-background px-4 py-3 text-sm shadow-none md:text-sm desk:h-[clamp(4rem,11dvh,6rem)]"
          placeholder="Occasion, budget per gift, delivery date, branding needs…"
        />
      </Field>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="xl">
          <Icon name={submitVia === "whatsapp" ? "whatsapp" : "mail"} className="size-5" />
          {submitLabel}
        </Button>
        <p role="status" className="text-[0.8125rem] text-muted-foreground">
          {sent
            ? "Thanks! Finish sending in the window that just opened."
            : submitVia === "whatsapp"
              ? "Opens WhatsApp with your details filled in."
              : "Opens your email app with your details filled in."}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={htmlFor} className="flex items-baseline justify-between text-[0.8125rem] font-medium">
        {label}
        {optional && <span className="text-xs font-normal text-muted-foreground">Optional</span>}
      </Label>
      {children}
    </div>
  );
}
