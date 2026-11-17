import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-accent font-sans">
        <main className="flex-1 max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-[#0f172a] mb-6">Blog Post Not Found</h1>
          <div className="bg-white rounded-xl border border-solid border-accent p-6 shadow-sm">
            <p className="text-[#0f172a]/70 mb-4">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
            >
              Back to Blogs <span aria-hidden="true">→</span>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-accent font-sans">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link
            href="/blogs"
            className="text-sm text-accent/70 hover:text-primary transition-colors"
          >
            ← Back to Blogs
          </Link>
        </nav>

        <article className="bg-white rounded-xl border border-solid border-accent p-8 shadow-sm">
          <div className="relative h-64 rounded-lg overflow-hidden bg-accent mb-6">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              fill
              sizes="(max-width: 768px) 90vw, 800px"
              priority
            />
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <time className="text-sm text-accent/70 uppercase font-medium tracking-wider">
              {post.date}
            </time>
            <span className="text-xs text-accent/60">·</span>
            <span className="text-sm font-bold text-secondary">
              5 min read
            </span>
          </div>

          <h1 className="text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-lg text-[#0f172a]/90 max-w-none">
            <p>{post.excerpt}</p>
            <p>
              This article explores the benefits and uses of {post.title.toLowerCase()}.
              Our laboratory-certified formulations are crafted to the highest standards
              of purity and safety.
            </p>
            <h3 className="text-xl font-bold text-[#0f172a] my-6">Key Benefits</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-[#0f172a]/80">
              <li>Natural, laboratory-certified ingredients</li>
              <li>Formulated for effectiveness and safety</li>
              <li>Trusted by thousands of customers across Pakistan</li>
            </ul>
            <h3 className="text-xl font-bold text-[#0f172a] my-6">How to Use</h3>
            <p className="text-[#0f172a]/80 leading-relaxed">
              Follow the recommended dosage on the product packaging. Consult with a
              healthcare professional before starting any new supplement regimen.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-solid border-accent">
            <Link
              href="/collection"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
            >
              Shop Related Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
