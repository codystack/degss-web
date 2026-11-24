import Image from "next/image";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getSiteContent } from "@/lib/data/siteContent";
import { buildMetadata } from "@/lib/seo";
import { submitContactForm } from "./actions";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with DEGSS Limited — whether you're buying, investing, or just exploring, we're here to guide you every step of the way.",
  path: "/contact",
  image: "/contact-hero.jpg",
});

type IconComponent = (props: { className?: string }) => React.JSX.Element;

function buildContactCards(content: { address: string; email: string; phone: string }) {
  const cards: { label: string; detail: string; icon: IconComponent; wide?: boolean }[] = [
    { label: "Address", detail: content.address, icon: MapPinIcon, wide: true },
    { label: "Email", detail: content.email, icon: MailIcon },
    { label: "Phone", detail: content.phone, icon: PhoneIcon },
  ];
  return cards;
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    sent?: string;
    error?: string;
    property?: string;
    service?: string;
  }>;
}) {
  const [{ sent, error, property, service }, content] = await Promise.all([
    searchParams,
    getSiteContent("contact"),
  ]);
  const contactCards = buildContactCards(content);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const prefilledMessage = property
    ? `I'm interested in ${property.trim().slice(0, 200)}. `
    : service
      ? `I'd like to know more about ${service.trim().slice(0, 200)}. `
      : undefined;

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-neutral-50 pb-24 pt-32 sm:pt-26">
        <PageHero
          variant="feature"
          title={content.heroTitle}
          description={content.heroText}
          image={content.heroImage}
          imageAlt={content.heroImageAlt}
        />

        <div className="mx-auto grid max-w-7xl gap-6 px-6 pt-12 sm:px-10 sm:pt-16 lg:grid-cols-2 lg:px-16">
          <div id="contact-form" className="rounded-3xl bg-neutral-100 p-8 sm:p-10 scroll-mt-32">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              {content.formHeading}
            </h1>
            <p className="mt-2 text-neutral-600">
              {content.formIntro}
            </p>

            {sent && (
              <p className="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                {content.formSuccess}
              </p>
            )}
            {error === "captcha" && (
              <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Please complete the verification challenge and try again.
              </p>
            )}
            {error && error !== "captcha" && (
              <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Something went wrong. Please fill in your name and email and try again.
              </p>
            )}

            <form action={submitContactForm} className="mt-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="firstName" placeholder="Jane" required />
                <Field label="Last name" name="lastName" placeholder="Doe" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                />
                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  placeholder="+234 816 268 0095"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  defaultValue={prefilledMessage}
                  placeholder="Type your message here"
                  className="w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950/10"
                />
              </div>

              {turnstileSiteKey && (
                <>
                  <Script
                    src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                    strategy="afterInteractive"
                    async
                    defer
                  />
                  <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
                </>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-[#39548b] py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#263d6b]"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-neutral-950">
            <Image
              src={content.detailsImage}
              alt=""
              fill
              priority
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-neutral-950/45"
            />

            <div className="relative grid h-full grid-cols-2 gap-4 p-4 sm:p-6">
              {contactCards.map(({ label, detail, icon: Icon, wide }) => (
                <div
                  key={label}
                  className={`flex flex-col justify-between gap-8 rounded-2xl bg-white p-6 ${
                    wide ? "col-span-2" : ""
                  }`}
                >
                  <Icon className="h-6 w-6 text-neutral-950" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950">
                      {label}
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-sm text-neutral-600">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="overflow-hidden rounded-3xl border border-black/10">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(content.address)}&z=12&output=embed`}
              width="100%"
              height="550"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="DEGSS Limited location"
            />
          </div>
        </div>
      </main>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-neutral-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950/10"
      />
    </div>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.5 6.5 12 12l7.5-5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.5 3.5h2.4l1.4 4.2-2 1.4a11.5 11.5 0 0 0 5.6 5.6l1.4-2 4.2 1.4v2.4c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 4.5 6.5c0-1.1.9-3 2-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
