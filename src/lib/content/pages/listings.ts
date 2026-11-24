import { definePage, FORMATTING_HINT } from "../schema";
import { heroSection } from "./shared";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`;

const emptyStateSection = {
  title: "When there's nothing to show",
  fields: [{ key: "emptyText" as const, label: "Empty message", type: "text" as const }],
};

export const propertiesPage = definePage({
  key: "properties",
  label: "Properties",
  group: "pages",
  description: "Hero for the property listings page. Listings are managed under Properties.",
  viewPath: "/properties",
  revalidate: [{ path: "/properties" }],
  sections: [heroSection(), emptyStateSection],
  defaults: {
    heroTitle: "Properties",
    heroText: "Find the perfect property with detailed listings tailored to your needs and lifestyle.",
    heroImage: unsplash("1583608205776-bfd35f0d9f83"),
    heroImageAlt: "DEGSS property",
    emptyText: "No properties listed yet — check back soon.",
  },
});

export const blogPage = definePage({
  key: "blog",
  label: "Blog",
  group: "pages",
  description: "Hero for the journal page. Posts are managed under Blog.",
  viewPath: "/blog",
  revalidate: [{ path: "/blog" }],
  sections: [heroSection(), emptyStateSection],
  defaults: {
    heroTitle: "The DEGSS journal",
    heroText: "Ideas, market insights and the thinking behind what we build.",
    heroImage: unsplash("1486406146926-c627a92ad1ab"),
    heroImageAlt: "DEGSS journal",
    emptyText: "No posts published yet — check back soon.",
  },
});

export const servicesPage = definePage({
  key: "services",
  label: "What we do",
  group: "pages",
  description: "Hero for the services overview page. Services are managed under Services.",
  viewPath: "/services",
  revalidate: [{ path: "/services" }],
  sections: [heroSection()],
  defaults: {
    heroTitle: "What we do",
    heroText:
      "From development to Prime Circle, every service built around real estate that works harder for you.",
    heroImage: unsplash("1486406146926-c627a92ad1ab"),
    heroImageAlt: "DEGSS services",
  },
});

const SERVICE_TOKEN_HINT = "{service} is replaced with the service name.";

export const serviceDetailPage = definePage({
  key: "service-detail",
  label: "Service pages (shared)",
  group: "pages",
  description:
    "Wording shared by every individual service page. Each service's hero image, intro and features are edited under Services.",
  viewPath: "/services/development",
  revalidate: [{ path: "/services/[slug]", type: "page" }],
  sections: [
    {
      title: "Main column",
      fields: [{ key: "featuresHeading", label: "Features heading", type: "text" }],
    },
    {
      title: "Side panel",
      fields: [
        { key: "panelHeading", label: "Heading", type: "text", hint: SERVICE_TOKEN_HINT },
        { key: "panelText", label: "Text", type: "textarea", rows: 2 },
        { key: "panelEnquireLabel", label: "Enquire button label", type: "text" },
        { key: "panelGetStartedLabel", label: "Get started button label", type: "text" },
      ],
    },
    {
      title: "Bottom banner",
      fields: [
        { key: "ctaHeading", label: "Heading", type: "text", hint: SERVICE_TOKEN_HINT },
        { key: "ctaText", label: "Text", type: "textarea", rows: 2 },
        { key: "ctaPrimaryLabel", label: "Get started button label", type: "text" },
        { key: "ctaSecondaryLabel", label: "Contact button label", type: "text" },
      ],
    },
  ],
  defaults: {
    featuresHeading: "What's included",
    panelHeading: "Talk to us about {service}",
    panelText:
      "Tell us what you're looking for and one of our property consultants will reach out with next steps.",
    panelEnquireLabel: "Enquire now",
    panelGetStartedLabel: "Get started",
    ctaHeading: "Ready to talk about {service}?",
    ctaText:
      "Tell us what you're looking for and one of our property consultants will reach out with next steps.",
    ctaPrimaryLabel: "Get started",
    ctaSecondaryLabel: "Contact us",
  },
});

export const faqsPage = definePage({
  key: "faqs",
  label: "FAQs",
  group: "pages",
  description: "Heading and introduction. The questions are managed under FAQs.",
  viewPath: "/faqs",
  revalidate: [{ path: "/faqs" }],
  sections: [
    {
      title: "Header",
      fields: [
        { key: "heading", label: "Heading", type: "text" },
        { key: "intro", label: "Text", type: "textarea", rows: 3, hint: FORMATTING_HINT },
      ],
    },
  ],
  defaults: {
    heading: "Frequently Asked Questions",
    intro:
      "Can't find the answer you're looking for?\nReach out to our team on the [Contact us](/contact) page and we'll be happy to help.",
  },
});
