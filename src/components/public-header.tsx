"use client";

import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function PublicHeader() {
  const links = [
    { name: "About", href: "/about" },
    { name: "Tools", href: "/tools" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-12 py-4 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <Link className="font-bold select-none text-lg" href="/">
          Muh. Afiq Ma&apos;mun
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <AlignJustify />
        </button>

        {/* Navigation for md and above */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="hover:underline transition-all duration-300"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Navigation for mobile */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        <nav>
          <ul className="flex flex-col items-start gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="block px-1 hover:underline transition-all duration-300"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
