import LegalDocument from "@/components/LegalDocument";
import { getSiteContent } from "@/lib/data/siteContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of the DEGSS Limited website and services.",
  path: "/terms",
});

export default async function TermsPage() {
  return <LegalDocument content={await getSiteContent("terms")} />;
}
