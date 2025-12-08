import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  thumbnail: string;
  tags: string[];
}

const postsDirectory = path.join(process.cwd(), "content/article");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    } as BlogPost;
  });

  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  } as BlogPost;
}
