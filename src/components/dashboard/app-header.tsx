"use client";

import { Menu } from "lucide-react";
import { useSidebar } from "./sidebar-context";

export default function AppHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md">
      <button
        onClick={toggleSidebar}
        className="inline-flex items-center gap-4"
        aria-label="Toggle Sidebar"
      >
        <Menu size={32} className="cursor-pointer" />{" "}
        <span className="text-xl font-bold">Dashboard</span>
      </button>
    </header>
  );
}
