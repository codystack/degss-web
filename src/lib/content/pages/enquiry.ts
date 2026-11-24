import { definePage, FORMATTING_HINT } from "../schema";
import { heroSection } from "./shared";

export const contactPage = definePage({
  key: "contact",
  label: "Contact us",
  group: "pages",
  description: "Hero, form heading and the address, email and phone cards. The map follows the address.",
  viewPath: "/contact",
  revalidate: [{ path: "/contact" }],
  sections: [
    heroSection({ textHint: "Each line shows as its own line on the right." }),
    {
      title: "Form",
      fields: [
        { key: "formHeading", label: "Heading", type: "text" },
        { key: "formIntro", label: "Text", type: "textarea", rows: 2 },
        { key: "formSuccess", label: "Message after sending", type: "text" },
      ],
    },
    {
      title: "Contact details",
      fields: [
        { key: "detailsImage", label: "Background image", type: "image" },
        { key: "address", label: "Address", type: "textarea", rows: 2, hint: "Also used for the map." },
        { key: "email", label: "Email", type: "text" },
        { key: "phone", label: "Phone", type: "text" },
      ],
    },
  ],
  defaults: {
    heroTitle: "Start a\nConversation",
    heroText:
      "Looking for a property?\nThinking about an investment?\nExploring a partnership?\nOr simply curious about what we are building?",
    heroImage: "/contact-hero.jpg",
    heroImageAlt: "Contact DEGSS",
    formHeading: "Get in Touch",
    formIntro: "Tell us a little about what you're looking for. We'll take it from there.",
    formSuccess: "Thanks — your message has been sent. We'll be in touch soon.",
    detailsImage: "/contcat-bg.jpg",
    address: "4, Adedayo Ogidan Close, Green Park Estate, Abijo, Lagos.",
    email: "hello@degsslimited.com",
    phone: "+234 803 866 6532",
  },
});

export const getStartedPage = definePage({
  key: "get-started",
  label: "Get started",
  group: "pages",
  description: "Form heading, the interest and timeline options, and the side panel.",
  viewPath: "/get-started",
  revalidate: [{ path: "/get-started" }],
  sections: [
    {
      title: "Form",
      fields: [
        { key: "heading", label: "Heading", type: "textarea", rows: 2, hint: `${FORMATTING_HINT} Text in *asterisks* shows in blue italics.` },
        { key: "intro", label: "Text", type: "textarea", rows: 2 },
        { key: "interests", label: "“I'm interested in” options", type: "textarea", rows: 5, hint: "One option per line. The first is selected by default." },
        { key: "timelines", label: "“When do you plan to buy?” options", type: "textarea", rows: 5, hint: "One option per line." },
        { key: "submitNote", label: "Note next to the send button", type: "text" },
        { key: "formSuccess", label: "Message after sending", type: "text" },
      ],
    },
    {
      title: "Message from leadership",
      fields: [
        { key: "personPhoto", label: "Photo", type: "image" },
        { key: "personName", label: "Name", type: "text" },
        { key: "personRole", label: "Role", type: "text" },
        { key: "personMessage", label: "Message", type: "textarea", rows: 3 },
        { key: "responseNote", label: "Response time note", type: "text" },
      ],
    },
    {
      title: "Office details",
      fields: [
        { key: "officeHeading", label: "Heading", type: "text" },
        { key: "officeAddress", label: "Address", type: "text" },
        { key: "officeHours", label: "Hours", type: "text" },
        { key: "officePhone", label: "Direct line", type: "text" },
      ],
    },
    {
      title: "Privacy note",
      fields: [
        { key: "privacyHeading", label: "Heading", type: "text" },
        { key: "privacyText", label: "Text", type: "textarea", rows: 3 },
      ],
    },
  ],
  defaults: {
    heading: "What can DEGSS help *you with?*",
    intro:
      "Tell us what you're looking for, and one of our property consultants will contact you with suitable options.",
    interests: "Land\nHouse\nPrimeCycle\nFarmland\nCommercial Property",
    timelines: "Immediately\nWithin 3 months\n3 – 6 months\n6 – 12 months\nJust exploring",
    submitNote: "The DEGSS team reads every message personally and responds within 24 hours.",
    formSuccess: "Thanks — we've got your details. Our team will reach out within 24 hours.",
    personPhoto: "/team/Daniel.jpeg",
    personName: "Daniel Onwuzuka",
    personRole: "Managing Director",
    personMessage:
      "Every enquiry that comes through this form is reviewed personally by the DEGSS leadership team.",
    responseNote: "Responds within 24 hours",
    officeHeading: "Office details",
    officeAddress: "Ibeju-Lekki, Lagos",
    officeHours: "Mon – Sat, 9am – 5pm",
    officePhone: "+234 803 866 6532",
    privacyHeading: "Your privacy is protected",
    privacyText:
      "All enquiries are handled with discretion. Your details are never shared with third parties.",
  },
});
