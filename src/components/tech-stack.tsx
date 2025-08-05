import { FaDocker } from "react-icons/fa";
import {
  SiGo,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiGooglecloud,
} from "react-icons/si";

export default function TechStack() {
  const techs = [
    {
      name: "Golang",
      icon: <SiGo size={32} />,
      color: "#00ADD8",
    },
    {
      name: "Docker",
      icon: <FaDocker size={32} />,
      color: "#2496ED",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={32} />,
      color: "#336791",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={32} />,
      color: "#3178C6",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={32} />,
      color: "#F7DF1E",
    },
    {
      name: "GCP",
      icon: <SiGooglecloud size={32} />,
      color: "#F7DF1E",
    },
  ];

  return (
    <div className="my-20">
      <h3 className="text-2xl text-center font-semibold mb-6">My Tech Stack</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center transition-transform duration-200 hover:scale-110"
          >
            <div
              className="p-4 rounded-xl shadow-md transition duration-300"
              style={{
                boxShadow: `0 0 0 transparent`,
              }}
            >
              <div
                className="transition duration-300"
                style={{
                  color: tech.color,
                }}
              >
                {tech.icon}
              </div>
            </div>
            <span className="mt-2 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
