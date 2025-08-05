import Link from "next/link";
import Github from "@/assets/github.svg";
import Instagram from "@/assets/instagram.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Image from "next/image";

export default function PublicFooter() {
  const links = [
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
    <footer className="flex flex-col gap-8 px-12 py-4 items-center justify-between shadow-none [box-shadow:0px_-1px_2px_rgba(0,0,0,0.1)] md:flex-row md:gap-0">
      <div>
        <Link className="font-bold select-none" href="/">
          Muh. Afiq Ma'mun
        </Link>
      </div>
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} target="_blank">
              <Image src={link.icon} alt={link.alt} />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
