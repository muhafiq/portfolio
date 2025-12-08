import SocialMedia from "./social-media";

export default function Footer() {
  return (
    <footer className="w-full border-t py-8 mt-12">
      <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Afiq — Personal Portfolio. Built with
          Next.js & shadcn/ui.
        </p>

        <SocialMedia />
      </div>
    </footer>
  );
}
