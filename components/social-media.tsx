import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function SocialMedia() {

  const socialMedia = [
    {
      name: "Github",
      icon: <Github className="h-5 w-5" />,
      link: "https://github.com/muhafiq",
    },
    {
      name: "Linkedin",
      icon: <Linkedin className="h-5 w-5" />,
      link: "https://linkedin.com/in/muh-afiq-mamun",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      link: "https://instagram.com/muhafiqq_",
    },
  ]

  return (
    <div className="flex items-center gap-4">
      {socialMedia.map((media) => (
        <Link
          key={media.name}
          href={media.link}
          target="_blank"
          className="hover:scale-110 transition-transform duration-300"
        >
          {media.icon}
        </Link>
      ))}
    </div>
  );
}
