import Image from "next/image";
import { techStack } from "@/content/common/tech-stacks";

export default function TechStack() {
  return (
    <section className="w-full py-12">
      <div className="px-4 space-y-8">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <p className="text-muted-foreground">
          Tools and technologies I use to build, break, and rebuild things.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 w-20 hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={48}
                height={48}
                className={`${tech.invert ? "invert-0 dark:invert" : ""}`}
              />
              <span className="text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
