"use client";

import { Menu } from "lucide-react";
import { useContext } from "react";
import { SidebarContext } from "./contexts/sidebar-context";

export default function AppHeader() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white border-b shadow-sm sticky top-0 z-30">
      <button onClick={toggleSidebar} className="" aria-label="Toggle Sidebar">
        <Menu size={28} />
      </button>
    </header>
  );
}
