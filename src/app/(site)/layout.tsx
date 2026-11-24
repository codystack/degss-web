import Footer from "@/components/Footer";
import { SiteNavProvider } from "@/components/SiteNavProvider";
import { getSiteContent } from "@/lib/data/siteContent";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [nav, footer] = await Promise.all([
    getSiteContent("navigation"),
    getSiteContent("footer"),
  ]);

  return (
    <SiteNavProvider nav={nav}>
      {children}
      <Footer content={footer} />
    </SiteNavProvider>
  );
}
