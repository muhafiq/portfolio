import { ProjectCard } from "@/components/project-card";

export default function Projects() {
  const dummyProjects = [
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
  return (
    <div className="p-12">
      <h1 className="text-4xl my-4 text-center font-bold">Projects</h1>
      <p className="text-center mb-8">
        This page lists all the projects that i have worked on.
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {dummyProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
