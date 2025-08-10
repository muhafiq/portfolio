import { BlogList } from "@/components/blog-card";
import { ProjectList } from "@/components/project-card";
import TechStack from "@/components/tech-stack";
import Image from "next/image";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";
import Github from "@/assets/github.svg";
import Instagram from "@/assets/instagram.svg";
import LinkedIn from "@/assets/linkedin.svg";
import crypto from "node:crypto";

export default function Home() {
  const projects = [
    {
      id: crypto.randomUUID(),
      title: "DevLogger",
      slug: "devlogger",
      description:
        "A simple RESTful API for logging developer activities built with Express and PostgreSQL.",
      thumbnail: "https://placehold.co/600x400?text=DevLogger",
      tech: ["Express.js", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/afiqmamun/devlogger",
      demoUrl: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      title: "GoTodoCLI",
      slug: "gotodocli",
      description:
        "A CLI app built with Go to manage your to-do list from terminal.",
      thumbnail: "https://placehold.co/600x400?text=GoTodoCLI",
      tech: ["Go", "Cobra", "SQLite"],
      githubUrl: "https://github.com/afiqmamun/gotodocli",
      demoUrl: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      title: "MiniURL",
      slug: "miniurl",
      description:
        "A URL shortener with hit tracking built in TypeScript and deployed on Vercel.",
      thumbnail: "https://placehold.co/600x400?text=MiniURL",
      tech: ["Next.js", "TypeScript", "Prisma", "PlanetScale"],
      githubUrl: "https://github.com/afiqmamun/miniurl",
      demoUrl: "https://miniurl.vercel.app",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
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
  const contacts = [
    {
      icon: Instagram,
      href: "https://instagram.com/muhafiqq_",
      alt: "Instagram account",
    },
    {
      icon: LinkedIn,
      href: "https://www.linkedin.com/in/muh-afiq-mamun/",
      alt: "LinkedIn profile",
    },
    { icon: Github, href: "https://github.com/muhafiq", alt: "Github profile" },
  ];
  return (
    <main className="px-8 md:px-12 py-4 min-h-screen">
      <section className="my-16">
        <div className="flex flex-col items-center w-full">
          <Image
            src="/profile.jpg"
            alt="Profile picture of me"
            width={160}
            height={160}
            className="mb-4 rounded-full border-4 border-gray-400 shadow-lg"
          />
          <div className="text-center">
            <h1 className="font-bold text-2xl md:text-3xl">
              Hey, I&apos;m{" "}
              <span className="underline underline-offset-4 decoration-gray-500">
                Muh. Afiq Ma&apos;mun
              </span>
            </h1>
            <h2 className="text-lg text-slate-600 mt-1">
              Web | Backend Developer
            </h2>
            <p className="mt-4 text-slate-700 max-w-md">
              I&apos;m a web and backend developer who enjoys building reliable
              systems and working behind the scenes. Recently, I&apos;ve been
              exploring more into DevOps learning tools like Docker and cloud
              infrastructure to better automate and scale projects
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            {contacts.map((contact) => (
              <li key={contact.href} className="list-none">
                <Link href={contact.href} target="_blank">
                  <Image src={contact.icon} alt={contact.alt} />
                </Link>
              </li>
            ))}
          </div>
        </div>
      </section>

      <section>
        <TechStack />
      </section>

      <section className="my-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold underline">Projects</h2>
          <Link
            href="/projects"
            className="bg-slate-600 px-6 py-2 text-white shadow hover:bg-slate-800 duration-300 inline-flex gap-2 items-center"
          >
            <span>Projects</span>
            <CircleArrowRight />
          </Link>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectList key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="my-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold underline">Blog & Writing</h2>
          <Link
            href="/blog"
            className="bg-slate-600 px-6 py-2 text-white shadow hover:bg-slate-800 duration-300 inline-flex gap-2 items-center"
          >
            <span>My Blog</span>
            <CircleArrowRight />
          </Link>
        </div>
        <div>
          {blogs.map((blog, idx) => (
            <BlogList key={idx} {...blog} />
          ))}
        </div>
      </section>

      <section className="my-12">
        <p className="text-slate-700 mb-4">
          If you want to collaborate, discuss, or just say hi. Feel free to
          connect!
        </p>
        <div className="flex gap-4 mt-4 justify-center">
          {contacts.map((contact) => (
            <li key={contact.href} className="list-none">
              <Link href={contact.href} target="_blank">
                <Image src={contact.icon} alt={contact.alt} className="w-12" />
              </Link>
            </li>
          ))}
        </div>
      </section>
    </main>
  );
}
