import Image from "next/image";
import { projects } from "@/content/common/projects";

export default function Projects() {
  return (
    <section className="w-full py-12">
      <div className="px-4 space-y-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground max-w-lg">
          A handful of things I’ve built or tinkered with recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="border rounded-xl shadow-sm p-4 bg-card backdrop-blur-sm"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={proj.thumbnail}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
