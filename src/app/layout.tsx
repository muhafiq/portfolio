import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/toast-context";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muh. Afiq Ma'mun | Web & Backend Developer",
  description: "Portfolio and blog of Muh. Afiq Ma'mun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
