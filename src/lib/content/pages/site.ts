import { definePage } from "../schema";

export const NAV_ITEM_TYPES = [
  { value: "link", label: "Single link" },
  { value: "dropdown", label: "Dropdown (links below)" },
  { value: "services", label: "Services dropdown (from Services)" },
] as const;

export const SOCIAL_PLATFORMS = [
  { value: "facebook", label: "Facebook" },
  { value: "x", label: "X (Twitter)" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
] as const;

const LINK_LINES_HINT = 'One link per line as "Label | /page", e.g. "About us | /about".';

export const navigationPage = definePage({
  key: "navigation",
  label: "Navigation bar",
  group: "site",
  description: "Logo, menu links and the call-to-action button shown at the top of every page.",
  viewPath: "/",
  revalidate: [{ path: "/", type: "layout" }],
  sections: [
    {
      title: "Logo",
      fields: [{ key: "logo", label: "Logo", type: "image", hint: "Shown on a white background. SVG or PNG with transparency works best." }],
    },
    {
      title: "Menu",
      description: "Menu items appear left to right in this order. The services dropdown is filled automatically from the Services section.",
      fields: [
        {
          key: "items",
          label: "Menu items",
          type: "list",
          itemLabel: "Menu item",
          maxItems: 10,
          fields: [
            { key: "label", label: "Label", type: "text" },
            { key: "type", label: "Type", type: "select", options: NAV_ITEM_TYPES },
            { key: "href", label: "Link", type: "text", optional: true, hint: "Only for single links, e.g. /properties" },
            { key: "links", label: "Dropdown links", type: "textarea", rows: 3, optional: true, hint: `Only for dropdowns. ${LINK_LINES_HINT}` },
          ],
        },
      ],
    },
    {
      title: "Call-to-action button",
      fields: [
        { key: "ctaLabel", label: "Button label", type: "text" },
        { key: "ctaHref", label: "Button link", type: "link" },
      ],
    },
  ],
  defaults: {
    logo: "/logo-dark.svg",
    items: [
      { label: "Company", type: "dropdown", href: "", links: "About us | /about\nTeam | /about/team" },
      { label: "What We Do", type: "services", href: "", links: "" },
      { label: "Properties", type: "link", href: "/properties", links: "" },
      { label: "Blog", type: "link", href: "/blog", links: "" },
      { label: "Contact us", type: "link", href: "/contact", links: "" },
    ],
    ctaLabel: "Get started",
    ctaHref: "/get-started",
  },
});

export const footerPage = definePage({
  key: "footer",
  label: "Footer",
  group: "site",
  description: "Newsletter heading, social links, link columns, address and legal links at the bottom of every page.",
  viewPath: "/",
  revalidate: [{ path: "/", type: "layout" }],
  sections: [
    {
      title: "Newsletter & social",
      fields: [
        { key: "newsletterHeading", label: "Newsletter heading", type: "text" },
        {
          key: "socials",
          label: "Social links",
          type: "list",
          itemLabel: "Social link",
          maxItems: 6,
          fields: [
            { key: "platform", label: "Platform", type: "select", options: SOCIAL_PLATFORMS },
            { key: "url", label: "Profile URL", type: "link" },
          ],
        },
      ],
    },
    {
      title: "Link columns",
      fields: [
        { key: "column1Heading", label: "First column heading", type: "text" },
        { key: "column1Links", label: "First column links", type: "textarea", rows: 4, hint: LINK_LINES_HINT },
        { key: "column2Heading", label: "Second column heading", type: "text" },
        { key: "column2Links", label: "Second column links", type: "textarea", rows: 4, hint: LINK_LINES_HINT },
        { key: "locationHeading", label: "Location heading", type: "text" },
        { key: "address", label: "Address", type: "textarea", rows: 2 },
      ],
    },
    {
      title: "Bottom bar",
      fields: [
        { key: "copyright", label: "Copyright text", type: "text", hint: "{year} is replaced with the current year." },
        { key: "legalLinks", label: "Legal links", type: "textarea", rows: 3, hint: LINK_LINES_HINT },
      ],
    },
  ],
  defaults: {
    newsletterHeading: "Subscribe to our newsletter",
    socials: [
      { platform: "facebook", url: "https://www.facebook.com/people/Degss-Limited/61580249255835/" },
      { platform: "x", url: "https://x.com/DegssLimited" },
      { platform: "instagram", url: "https://www.instagram.com/degsslimited" },
    ],
    column1Heading: "Main pages",
    column1Links: "Home | /\nAbout | /about\nServices | /services",
    column2Heading: "Quick Links",
    column2Links: "FAQs | /faqs\nContact us | /contact\nProperties | /properties",
    locationHeading: "Location",
    address: "4, Adedayo Ogidan Close, Green Park Estate, Abijo, Lagos.",
    copyright: "© {year} DEGSS. All rights reserved.",
    legalLinks: "Terms & Conditions | /terms\nPrivacy Policy | /privacy",
  },
});
