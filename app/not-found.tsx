import Link from "next/link";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
        <AlertCircle className="relative h-24 w-24 text-primary" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        404 - Page Not Found
      </h1>

      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Oops! The page you&apos;re looking for seems to have wandered off into
        the digital void. Maybe it&apos;s on coffee break?
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="gap-2">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            Visit Blog
          </Link>
        </Button>
      </div>

      <div className="mt-12 text-sm text-muted-foreground/50">
        <p>Error Code: 404_NOT_FOUND</p>
        <p className="mt-1">If you believe this is an error, let me know!</p>
      </div>
    </div>
  );
}
