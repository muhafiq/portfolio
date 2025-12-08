import { experiences } from "@/content/common/work-experiences";
import Image from "next/image";
export default function WorkExperiences() {
  return (
    <section className="w-full py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Work Experiences</h2>

      <div className="space-y-2 max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="flex gap-4 p-4 rounded-xl border bg-card shadow-sm hover:shadow-md transition"
          >
            <Image
              src={exp.thumbnail}
              alt={exp.company}
              height={50}
              width={50}
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-muted-foreground text-sm">{exp.company}</p>
              <p className="text-sm mt-1">{exp.description}</p>
              <p className="text-xs text-muted-foreground mt-2">{exp.years}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
