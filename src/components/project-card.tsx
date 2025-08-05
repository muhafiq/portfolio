import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div className="w-full border-b py-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-slate-600 mt-1">{description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-sm bg-slate-100 text-slate-800 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-sm text-blue-600 items-center">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Github size={16} /> GitHub
          </Link>
        )}
        {demoUrl && (
          <Link
            href={demoUrl}
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
