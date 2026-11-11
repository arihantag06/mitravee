import { ButtonLink, DisplayTitle, Eyebrow } from "@/components/brand";

export default function NotFound() {
  return (
    <section className="section-y flex flex-1 items-center">
      <div className="container-page max-w-3xl text-center">
        <Eyebrow className="justify-center">Error 404</Eyebrow>
        <DisplayTitle text="This page took a *different* route." as="h1" className="mt-6" />
        <p className="mt-6 text-lg text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <ButtonLink href="/" className="mt-10" arrow>
          Back to home
        </ButtonLink>
      </div>
    </section>
  );
}
