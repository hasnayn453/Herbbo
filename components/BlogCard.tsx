import Link from "next/link";

type BlogPost = {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
};

const AUTHOR_BADGE = "Herbbo Team";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col rounded-xl border border-solid border-accent bg-white shadow-sm transition-all hover:shadow-xl hover:border-primary/30"
    >
      <div className="h-48 overflow-hidden rounded-t-lg bg-accent">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-secondary shadow-sm backdrop-blur">
          <span className="flex h-2.5 w-2.5 rounded-full bg-primary" />
          {AUTHOR_BADGE}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-2">
        <time className="text-xs text-accent font-medium uppercase tracking-wider">
          {post.date}
        </time>
        <h3 className="font-bold text-[#0f172a] leading-tight group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-[#0f172a]/70 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
