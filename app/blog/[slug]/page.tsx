import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MdxContent } from "@/components/mdx-content";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Home, BookOpen } from "lucide-react";
import { Metadata } from "next";
import { ArticleJsonLd } from "@/components/json-ld";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post was not found",
    };
  }

  return {
    title: `${post.title} | Muhafiq's Blog`,
    description: post.description,

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags || [],
      images: [
        {
          url: post.thumbnail,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.thumbnail],
    },

    // Keywords & Robots
    keywords: post.tags || [],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Alternates
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
    },
  };
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const url = `${baseUrl}/blog/${slug}`;

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Blog", url: `${baseUrl}/blog` },
    { name: post.title, url: `${baseUrl}/blog/${slug}` },
  ];

  return (
    <>
      <ArticleJsonLd post={post} url={url} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <div className="container mx-auto max-w-3xl">
        <div className="mb-2 p-4">
          <Breadcrumb>
            <BreadcrumbList>
              {/* Home dengan icon */}
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>

              {/* Blog dengan icon */}
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/blog"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Blog</span>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>

              {/* Current Page */}
              <BreadcrumbItem>
                <BreadcrumbPage className="truncate max-w-[200px] font-medium">
                  {post.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <article className="bg-card p-4">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <MdxContent source={post.content} />
          </div>

          <footer className="mt-12 pt-8 border-t">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">← Back to Blog</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </footer>
        </article>
      </div>
    </>
  );
}
