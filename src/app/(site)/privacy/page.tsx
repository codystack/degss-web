import LegalDocument from "@/components/LegalDocument";
import { getSiteContent } from "@/lib/data/siteContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How DEGSS Limited collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default async function PrivacyPage() {
  return <LegalDocument content={await getSiteContent("privacy")} />;
}
