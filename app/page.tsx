import Me from "@/components/me";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import WorkExperiences from "@/components/work-experiences";

export default function HomePage() {
  return (
    <div>
      <Me />
      <WorkExperiences />
      <TechStack />
      <Projects />
    </div>
  );
}
