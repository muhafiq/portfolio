import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Viewport configuration untuk mobile & theme
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Muh. Afiq Ma'mun | Full-Stack Developer & Designer",
    template: "%s | Afiq Ma'mun",
  },

  description:
    "Portfolio of Afiq Ma'mun - Full-Stack Developer specializing in Next.js, React, and modern web technologies. Building performant, accessible, and beautiful web applications.",

  keywords: [
    "full-stack developer",
    "nextjs developer",
    "react developer",
    "web developer",
    "frontend developer",
    "portfolio",
    "indonesia developer",
    "javascript",
    "typescript",
    "tailwind css",
  ],

  authors: [
    {
      name: "Muh. Afiq Ma'mun",
      url: "https://github.com/muhafiq",
    },
  ],

  creator: "Muh. Afiq Ma'mun",
  publisher: "Muh. Afiq Ma'mun",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Afiq Ma'mun Portfolio & Blog",
    title: "Muh. Afiq Ma'mun | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afiq Ma'mun Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muh. Afiq Ma'mun | Full-Stack Developer",
    description:
      "Building performant, accessible, and beautiful web applications.",
    images: ["/twitter-image.png"],
  },

  // Verification untuk search console
  verification: {
    // google: "your-google-verification-code",
  },

  alternates: {
    canonical: baseUrl,
  },

  // Icons & Manifest
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },

  manifest: "/manifest.json",

  category: "technology",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect untuk performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon untuk berbagai platform */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* RSS Feed untuk blog */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for Afiq's Blog"
          href="/rss.xml"
        />
      </head>

      <body
        className={`
          ${poppins.variable}
          font-sans
          antialiased
          bg-background
          text-foreground
          min-h-screen
          selection:bg-primary/20 selection:text-primary
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content untuk accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
          focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground
          focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Skip to main content
          </a>

          <div
            id="main-content"
            className="
            mx-auto
            max-w-3xl
            min-h-screen
            px-4
            py-8
            border-x-2
            bg-card
            border-muted/80
          "
          >
            {children}
            <Footer />
          </div>

          <Menu />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
