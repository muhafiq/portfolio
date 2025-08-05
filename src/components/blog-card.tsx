import Link from "next/link";
import { CalendarDays, ExternalLink } from "lucide-react";

type BlogCardProps = {
  title: string;
  summary: string;
  date: string;
  link: string;
};

export default function BlogCard({
  title,
  summary,
  date,
  link,
}: BlogCardProps) {
  return (
    <div className="w-full border-b py-6">
      <h3 className="text-lg font-semibold hover:underline text-blue-600">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
      </h3>

      <div className="text-sm text-slate-500 flex items-center gap-2 mt-1">
        <CalendarDays size={16} />
        <span>{date}</span>
      </div>

      <p className="text-slate-700 mt-2">{summary}</p>

      <div className="mt-2">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-500 hover:underline gap-1"
        >
          Baca selengkapnya <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}
