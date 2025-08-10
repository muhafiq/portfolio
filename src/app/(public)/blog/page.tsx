import { BlogCard } from "@/components/blog-card";

export default function Blog() {
  const blogs = [
    {
      id: crypto.randomUUID(),
      title: "Cara Menyusun Struktur REST API yang Rapi di Express",
      slug: "cara-menyusun-struktur-rest-api-yang-rapi-di-express",
      excerpt:
        "Dalam tulisan ini, aku bahas cara membuat struktur folder REST API Express yang scalable dan mudah dipelihara...",
      content: null,
      thumbnail: "https://placehold.co/600x400?text=RESTAPI",
      draft: false,
      categoryId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      title: "Belajar Golang: Kenapa Aku Beralih dari JavaScript?",
      slug: "belajar-golang-kenapa-aku-beralih-dari-javascript",
      excerpt:
        "Aku jelaskan pengalaman pribadi kenapa memutuskan belajar Golang setelah bertahun-tahun pakai JavaScript di backend...",
      content: null,
      thumbnail: "https://placehold.co/600x400?text=GOLANG",
      draft: false,
      categoryId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      title: "CI/CD Sederhana di GitHub Actions untuk Backend",
      slug: "ci-cd-sederhana-di-github-actions-untuk-backend",
      excerpt:
        "Langkah demi langkah setup CI/CD sederhana dengan GitHub Actions: test, lint, build, dan deploy otomatis ke server...",
      content: null,
      thumbnail: "https://placehold.co/600x400?text=CI/CD",
      draft: false,
      categoryId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return (
    <div className="p-12">
      <h1 className="text-4xl my-4 text-center font-bold">Blog & Writing</h1>
      <p className="text-center mb-8">
        This page lists all articles that I have written. The topics range from
        programming, backend development, and cloud computing to personal
        thoughts and learning experiences I've gathered along the way.
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
    </div>
  );
}
