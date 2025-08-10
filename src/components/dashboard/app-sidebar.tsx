"use client";

import Link from "next/link";
import clsx from "clsx";
import {
  Home,
  FileText,
  MonitorCog,
  Image as ImageIcon,
  LogOutIcon,
} from "lucide-react";
import { logoutAction } from "@/lib/actions";
import Image from "next/image";
import { useSidebar } from "./sidebar-context";

export default function AppSidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  const menus = [
    { name: "Dashboard", href: "/dashboard", Icon: Home },
    { name: "Blog Manager", href: "/dashboard/posts", Icon: FileText },
    { name: "Projects", href: "/dashboard/projects", Icon: MonitorCog },
    { name: "Assets Manager", href: "/dashboard/assets", Icon: ImageIcon },
  ];

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeSidebar}
      />

      <aside
        className={clsx(
          "fixed lg:static top-0 left-0 h-full bg-white shadow-md z-50 transform transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
          "lg:transition-[width] lg:duration-300",
          isOpen ? "lg:w-64" : "lg:w-16"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="text-lg flex flex-col items-center py-8 mx-4 border-b border-slate-300">
            {isOpen ? (
              <>
                <Image
                  src="/profile.jpg"
                  alt="profile picture"
                  width={100}
                  height={100}
                  className="rounded-full mb-2 border-2 border-slate-400 shadow"
                />
                <Link href="/dashboard" className="font-bold">
                  Muh. Afiq Ma&apos;mun
                </Link>
              </>
            ) : (
              <Image
                src="/profile.jpg"
                alt="profile picture"
                width={40}
                height={40}
                className="rounded-full border border-slate-400 shadow"
              />
            )}
          </div>

          <ul className="p-4 space-y-4">
            {menus.map(({ name, href, Icon }) => (
              <li
                key={name}
                className="hover:bg-blue-100 hover:text-blue-600 rounded duration-200 transition-all"
              >
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 p-2"
                  onClick={() => {
                    if (window.innerWidth < 1024) closeSidebar();
                  }}
                >
                  <Icon size={18} />
                  {isOpen && <span>{name}</span>}
                </Link>
              </li>
            ))}
            <li className="hover:bg-blue-100 hover:text-blue-600 rounded duration-200 transition-all cursor-pointer">
              <form action={logoutAction} className="cursor-pointer">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 p-2 cursor-pointer"
                >
                  <LogOutIcon size={18} />
                  {isOpen && <span>Logout</span>}
                </button>
              </form>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
