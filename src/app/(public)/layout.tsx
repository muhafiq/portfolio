import PublicFooter from "@/components/public-footer";
import PublicHeader from "@/components/public-header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-3xl bg-white-300 shadow">
      <PublicHeader />
      <div className="min-h-screen">{children}</div>
      <PublicFooter />
    </div>
  );
}
