import type { PageDefinition } from "./schema";
import { aboutPage, teamPage } from "./pages/company";
import { contactPage, getStartedPage } from "./pages/enquiry";
import { homePage } from "./pages/home";
import { privacyPage, termsPage } from "./pages/legal";
import {
  blogPage,
  faqsPage,
  propertiesPage,
  serviceDetailPage,
  servicesPage,
} from "./pages/listings";
import { footerPage, navigationPage } from "./pages/site";

export const contentPages = {
  navigation: navigationPage,
  footer: footerPage,
  home: homePage,
  about: aboutPage,
  team: teamPage,
  services: servicesPage,
  "service-detail": serviceDetailPage,
  properties: propertiesPage,
  blog: blogPage,
  contact: contactPage,
  "get-started": getStartedPage,
  faqs: faqsPage,
  privacy: privacyPage,
  terms: termsPage,
} as const;

export type ContentKey = keyof typeof contentPages;
export type ContentFor<K extends ContentKey> = (typeof contentPages)[K]["defaults"];

export function isContentKey(value: string): value is ContentKey {
  return Object.hasOwn(contentPages, value);
}

export function getPageDefinition(key: ContentKey): PageDefinition {
  return contentPages[key] as unknown as PageDefinition;
}

export function listPageDefinitions(): PageDefinition[] {
  return (Object.keys(contentPages) as ContentKey[]).map(getPageDefinition);
}
