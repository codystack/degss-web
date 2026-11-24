import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import BlogPostCard from "@/components/BlogPostCard";
import { listPublishedBlogPosts } from "@/lib/data/blog";
import { getSiteContent } from "@/lib/data/siteContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "The DEGSS Journal",
  description:
    "Ideas, market insights and updates from DEGSS Limited — thinking beyond the plot.",
  path: "/blog",
});

export default async function BlogPage() {
  const [posts, content] = await Promise.all([
    listPublishedBlogPosts(),
    getSiteContent("blog"),
  ]);

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-neutral-50 pb-24 pt-32 sm:pt-26">
        <PageHero
          title={content.heroTitle}
          description={content.heroText}
          image={content.heroImage}
          imageAlt={content.heroImageAlt}
        />

        <div className="mx-auto max-w-7xl px-6 pt-12 sm:px-10 sm:pt-16 lg:px-16">
          {posts.length === 0 ? (
            <p className="rounded-3xl border border-black/10 bg-white p-10 text-center text-neutral-500">
              {content.emptyText}
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
