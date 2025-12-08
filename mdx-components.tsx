import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="mt-12 mb-6 text-4xl font-bold leading-tight tracking-tight"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-10 mb-4 text-3xl font-semibold leading-snug tracking-tight"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 mb-4 text-2xl font-semibold leading-snug"
        {...props}
      />
    ),
    h4: (props) => (
      <h4 className="mt-6 mb-3 text-xl font-semibold" {...props} />
    ),
    h5: (props) => (
      <h5 className="mt-4 mb-2 text-lg font-semibold" {...props} />
    ),
    h6: (props) => (
      <h6 className="mt-4 mb-2 text-base font-semibold" {...props} />
    ),

    p: (props) => (
      <p className="my-4 leading-relaxed text-muted-foreground" {...props} />
    ),

    a: (props) => (
      <a
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition"
        {...props}
      />
    ),

    ul: (props) => (
      <ul className="my-4 list-disc list-outside ml-6 space-y-1" {...props} />
    ),
    ol: (props) => (
      <ol
        className="my-4 list-decimal list-outside ml-6 space-y-1"
        {...props}
      />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,

    blockquote: (props) => (
      <blockquote
        className="
          my-6 border-l-4 border-primary/50 pl-4 italic
          text-muted-foreground
        "
        {...props}
      />
    ),

    hr: () => <hr className="my-8 border-border" />,

    strong: (props) => (
      <strong className="font-semibold text-foreground" {...props} />
    ),

    em: (props) => <em className="italic text-foreground/90" {...props} />,

    code: (props) => (
      <code
        className="
          px-1 py-0.5
          rounded
          bg-muted
          text-sm
          font-mono
          text-foreground/90
        "
        {...props}
      />
    ),

    pre: (props) => (
      <pre
        className="
          my-6 p-4
          rounded-xl
          bg-muted
          overflow-x-auto
          text-sm
          leading-relaxed
        "
        {...props}
      />
    ),

    img: (props: { alt: string; src: string }) => (
      <Image
        alt={props.alt}
        src={props.src}
        width={800}
        height={500}
        className="rounded-lg my-6"
      />
    ),

    table: ({ children, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),

    thead: ({ children, ...props }) => (
      <thead className="border-b [&_tr]:border-b" {...props}>
        {children}
      </thead>
    ),

    tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,

    tr: ({ children, ...props }) => (
      <tr className="m-0 border-t p-0 even:bg-muted" {...props}>
        {children}
      </tr>
    ),

    th: ({ children, ...props }) => (
      <th
        className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      >
        {children}
      </th>
    ),

    td: ({ children, ...props }) => (
      <td
        className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      >
        {children}
      </td>
    ),
  };
}
