"use client";

import { createContext, useContext } from "react";
import { navigationPage } from "@/lib/content/pages/site";

export type NavContent = typeof navigationPage.defaults;

const SiteNavContext = createContext<NavContent>(navigationPage.defaults);

/** Supplies the admin-edited navigation to every <Navbar /> on the page. */
export function SiteNavProvider({
  nav,
  children,
}: {
  nav: NavContent;
  children: React.ReactNode;
}) {
  return <SiteNavContext.Provider value={nav}>{children}</SiteNavContext.Provider>;
}

export function useSiteNav(): NavContent {
  return useContext(SiteNavContext);
}
