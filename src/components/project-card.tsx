import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { ProjectsSelect } from "@/lib/db/schema";
import Image from "next/image";

export function ProjectList(project: ProjectsSelect) {
  return (
    <div className="w-full border-b py-6">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-slate-600 mt-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech?.map((t, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-sm bg-slate-100 text-slate-800 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-sm text-blue-600 items-center">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Github size={16} /> GitHub
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <ExternalLink size={16} /> Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}

export function ProjectCard(project: ProjectsSelect) {
  return (
    <div className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{project.description}</p>

        <a
          href={`/projects/${project.slug}`}
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
