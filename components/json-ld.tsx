import { BlogPost } from "@/lib/mdx";
import Script from "next/script";

interface JsonLdProps {
  post: BlogPost;
  url: string;
}

export function ArticleJsonLd({ post, url }: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.thumbnail,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      url: process.env.NEXT_PUBLIC_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Muhafiq Blog's",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_URL}/profile.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url: url,
  };

  return (
    <Script
      id="article-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
