"use client";

import { Home, FileText, Folder, BookOpen, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Menu() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { href: "/", icon: Home, label: "Home" },
    {
      href: "/resume.pdf",
      icon: FileText,
      label: "Resume",
      download: true,
      target: "_blank",
    },
    { href: "/portfolio", icon: Folder, label: "Portfolio" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-3
          px-6 py-3 rounded-full
          border border-border
          bg-background/80 backdrop-blur-xl
          shadow-lg shadow-black/10
          dark:shadow-black/30
          hover:shadow-xl transition-all
          animate-in fade-in slide-in-from-bottom-4 duration-500
        "
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.label}
              download={item.download}
              target={item.target}
              className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
            >
              <Button
                variant="ghost"
                size="icon"
                className="
                  rounded-full transition-all
                  hover:scale-110 active:scale-95
                  hover:bg-accent hover:text-accent-foreground
                  p-2.5
                  h-auto w-auto
                  relative
                  group
                "
                aria-label={item.label}
              >
                <Icon className="h-5 w-5" />
                {/* Tooltip */}
                <span
                  className="
                  absolute -top-8 left-1/2 -translate-x-1/2
                  px-2 py-1 rounded-md text-xs
                  bg-foreground text-background
                  opacity-0 group-hover:opacity-100
                  transition-opacity pointer-events-none
                  whitespace-nowrap
                "
                >
                  {item.label}
                </span>
              </Button>
            </Link>
          );
        })}

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="
            rounded-full transition-all
            hover:scale-110 active:scale-95
            hover:bg-accent hover:text-accent-foreground
            p-2.5
            h-auto w-auto
            relative
            group
          "
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {/* Tampilkan loading state sampai mounted */}
          {!mounted ? (
            <div className="h-5 w-5 animate-pulse bg-muted rounded" />
          ) : theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}

          {/* Tooltip untuk theme toggle */}
          <span
            className="
            absolute -top-8 left-1/2 -translate-x-1/2
            px-2 py-1 rounded-md text-xs
            bg-foreground text-background
            opacity-0 group-hover:opacity-100
            transition-opacity pointer-events-none
            whitespace-nowrap
          "
          >
            {mounted
              ? `Switch to ${theme === "dark" ? "light" : "dark"} theme`
              : "Theme"}
          </span>
        </Button>
      </div>
    </div>
  );
}
