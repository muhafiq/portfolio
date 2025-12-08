import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        Explore our latest blog posts on various topics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border rounded-xl shadow-sm p-4 bg-card backdrop-blur-sm"
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
