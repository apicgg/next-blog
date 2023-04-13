import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPostData(fileName: string) {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as {
    slug: string;
    content: string;
    date: number;
    title: string;
    image: string;
    isFeatured: boolean;
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date - postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
