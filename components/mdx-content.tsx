import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  const components = useMDXComponents();
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
