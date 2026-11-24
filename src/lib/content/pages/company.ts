import { definePage, FORMATTING_HINT } from "../schema";
import { heroSection } from "./shared";

const MUTED_HINT = `${FORMATTING_HINT} Text in *asterisks* shows in grey.`;
const PARAGRAPHS_HINT = "Leave a blank line between paragraphs. Press Enter once for a line break.";

export const aboutPage = definePage({
  key: "about",
  label: "About us",
  group: "pages",
  description: "Hero, mission & vision, who we are, call-to-action banner and the success stats.",
  viewPath: "/about",
  revalidate: [{ path: "/about" }],
  sections: [
    heroSection(),
    {
      title: "Mission & vision",
      fields: [
        { key: "missionEyebrow", label: "Small label", type: "text" },
        { key: "missionHeading", label: "Heading", type: "textarea", rows: 2, hint: MUTED_HINT },
        { key: "missionBody", label: "Text", type: "textarea", rows: 3 },
        { key: "missionButtonLabel", label: "Button label", type: "text" },
        { key: "missionButtonHref", label: "Button link", type: "link" },
        { key: "visionTitle", label: "Vision heading", type: "text" },
        { key: "visionText", label: "Vision text", type: "textarea", rows: 3 },
        { key: "missionTitle", label: "Mission heading", type: "text" },
        { key: "missionText", label: "Mission text", type: "textarea", rows: 3 },
      ],
    },
    {
      title: "Who we are",
      fields: [
        { key: "beliefImage", label: "Image", type: "image" },
        { key: "beliefEyebrow", label: "Small label", type: "text" },
        { key: "beliefHeading", label: "Heading", type: "text" },
        { key: "beliefBody", label: "Text", type: "textarea", rows: 8, hint: PARAGRAPHS_HINT },
        { key: "beliefSubheading", label: "Second heading", type: "text" },
        { key: "beliefBody2", label: "Second text", type: "textarea", rows: 8, hint: PARAGRAPHS_HINT },
      ],
    },
    {
      title: "Call-to-action banner",
      fields: [
        { key: "ctaImage", label: "Background image", type: "image" },
        { key: "ctaHeading", label: "Heading", type: "text" },
        { key: "ctaText", label: "Text", type: "textarea", rows: 3 },
        { key: "ctaPrimaryLabel", label: "Main button label", type: "text" },
        { key: "ctaPrimaryHref", label: "Main button link", type: "link" },
        { key: "ctaSecondaryLabel", label: "Second button label", type: "text" },
        { key: "ctaSecondaryHref", label: "Second button link", type: "link" },
      ],
    },
    {
      title: "Success stats",
      fields: [
        { key: "statsEyebrow", label: "Small label", type: "text" },
        { key: "statsHeading", label: "Heading", type: "textarea", rows: 2, hint: `${FORMATTING_HINT} Text in *asterisks* shows in grey on its own line.` },
        { key: "statsText", label: "Text", type: "textarea", rows: 3 },
        {
          key: "stats",
          label: "Stats",
          type: "list",
          itemLabel: "Stat",
          maxItems: 8,
          fields: [
            { key: "value", label: "Number", type: "text", hint: 'Counts up from 0, e.g. "50+" or "98%".' },
            { key: "label", label: "Label", type: "text" },
          ],
        },
      ],
    },
  ],
  defaults: {
    heroTitle: "About us",
    heroText:
      "We don’t just develop property. We create opportunities, build communities, and shape what’s next.",
    heroImage: "/abt-hero.jpg",
    heroImageAlt: "Modern residential building in Lagos",
    missionEyebrow: "Mission & Vision",
    missionHeading: "What if real estate could do more? *That question sits at the heart of DEGSS.*",
    missionBody:
      "We are a diversified property, hospitality and community-development company creating opportunities across landbanking, agro-real estate, housing and development.",
    missionButtonLabel: "Get in touch",
    missionButtonHref: "/contact",
    visionTitle: "Our Vision",
    visionText:
      "To be Africa’s most transformative real estate brand, where land feeds, homes inspire, and communities flourish.",
    missionTitle: "Our Mission",
    missionText:
      "To enable individuals and families build, grow and preserve wealth through real estate solutions, creating meaningful lives and lasting legacies for generations.",
    beliefImage: "/abt-img.jpg",
    beliefEyebrow: "Our Belief",
    beliefHeading: "WHO WE ARE",
    beliefBody:
      "DEGSS is built for people who think ahead.\n\nProfessionals building their first asset.\nFamilies looking for a place to grow.\nEntrepreneurs looking for strategic opportunities.\nAfricans in the diaspora looking for meaningful ways to invest back home.\nAnd partners who believe the future is worth building.",
    beliefSubheading: "We don't believe land should sit still",
    beliefBody2:
      "Land can feed.\nIt can shelter.\nIt can create wealth.\nIt can bring people together.\nIt can become a legacy.\n\nSo we approach real estate with a bigger ambition:\nto turn land into lasting wealth, spaces into thriving communities, and ownership into opportunity.",
    ctaImage: "/about-cta.jpg",
    ctaHeading: "Turn land into lasting wealth.",
    ctaText:
      "Whether you're building your first asset, growing your family, or investing from the diaspora, explore our listings or talk to our team about what's next.",
    ctaPrimaryLabel: "View properties",
    ctaPrimaryHref: "/properties",
    ctaSecondaryLabel: "Contact us",
    ctaSecondaryHref: "/contact",
    statsEyebrow: "/Success Matrix",
    statsHeading: "Don't wait to own land. *Own land and watch it grow.*",
    statsText:
      "Property value grows with location, development, and time. Our team helps you get the timing, paperwork, and details right from day one.",
    stats: [
      { value: "50+", label: "Properties Listed" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "5+", label: "Years of Service" },
      { value: "300+", label: "Families Housed" },
    ],
  },
});

export const teamPage = definePage({
  key: "team",
  label: "Team",
  group: "pages",
  description: "Hero, introduction and the call-to-action banner. Team members are managed under Team.",
  viewPath: "/about/team",
  revalidate: [{ path: "/about/team" }],
  sections: [
    heroSection(),
    {
      title: "Introduction",
      fields: [
        { key: "introEyebrow", label: "Small label", type: "text" },
        { key: "introHeading", label: "Heading", type: "textarea", rows: 2, hint: MUTED_HINT },
        { key: "introBody", label: "Text", type: "textarea", rows: 4, hint: PARAGRAPHS_HINT },
      ],
    },
    {
      title: "Call-to-action banner",
      fields: [
        { key: "ctaHeading", label: "Heading", type: "text" },
        { key: "ctaText", label: "Text", type: "textarea", rows: 3 },
        { key: "ctaButtonLabel", label: "Button label", type: "text" },
        { key: "ctaButtonHref", label: "Button link", type: "link" },
      ],
    },
  ],
  defaults: {
    heroTitle: "Our Team",
    heroText:
      "The people behind DEGSS — bringing local expertise and a client-first approach to every property decision.",
    heroImage: "/team-hero.jpg",
    heroImageAlt: "The DEGSS team",
    introEyebrow: "Meet the Team",
    introHeading: "The people behind the places. *Good places don't happen by accident.*",
    introBody:
      "They are imagined, questioned, planned, built and cared for by people who believe the details matter.\n\nMeet the people helping DEGSS turn possibility into places.",
    ctaHeading: "Want to work with us?",
    ctaText:
      "We're always glad to hear from people who share our approach to real estate. Reach out and let's talk.",
    ctaButtonLabel: "Get in touch",
    ctaButtonHref: "/contact",
  },
});
