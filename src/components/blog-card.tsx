import Link from "next/link";
import { CalendarDays, ExternalLink } from "lucide-react";
import { PostsSelect } from "@/lib/db/schema";

export function BlogList(article: PostsSelect) {
  return (
    <div className="w-full border-b py-6">
      <h3 className="text-lg font-semibold hover:underline text-blue-600">
        <Link
          href={`/articles/${article.slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {article.title}
        </Link>
      </h3>

      <div className="text-sm text-slate-500 flex items-center gap-2 mt-1">
        <CalendarDays size={16} />
        <span>{article.createdAt.toDateString()}</span>
      </div>

      <p className="text-slate-700 mt-2">{article.excerpt}</p>

      <div className="mt-2">
        <Link
          href={`/articles/${article.slug}`}
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-500 hover:underline gap-1"
        >
          Baca selengkapnya <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}

export function BlogCard(article: PostsSelect) {
  return (
    <article className="rounded overflow-hidden shadow hover:shadow-md transition">
      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <div className="text-sm text-gray-500">
          {new Date(article.createdAt).toLocaleDateString()}
        </div>
        <h2 className="text-xl font-semibold line-clamp-2">{article.title}</h2>
        <p className="text-gray-700 text-sm line-clamp-3">{article.excerpt}</p>
        <a
          href={`/articles/${article.slug}`}
          className="mt-2 text-blue-600 text-sm hover:underline"
        >
          Read more →
        </a>
      </div>
    </article>
  );
}
