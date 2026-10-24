import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "@/data";

export default function BlogSection() {
  return (
    <section className="py-16 bg-accent">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">
            Healthcare Blogs:
          </h2>
          <p className="mt-3 text-sm text-secondary font-medium uppercase tracking-wider">
            Expert wellness insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
