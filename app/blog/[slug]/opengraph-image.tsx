import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function og({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 60,
        color: "white",
      }}
    >
      <div style={{ fontSize: 60, fontWeight: "bold", marginBottom: 20 }}>
        {post?.title || "Blog Post"}
      </div>
      <div style={{ fontSize: 32, opacity: 0.8 }}>
        {post?.description || "Read more on our blog"}
      </div>
      <div style={{ fontSize: 24, marginTop: "auto", opacity: 0.6 }}>
        {process.env.NEXT_PUBLIC_BASE_URL}
      </div>
    </div>,
    size,
  );
}
