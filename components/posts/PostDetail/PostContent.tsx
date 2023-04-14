import ReactMarkdown from "react-markdown";
import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "Getting started with Nextjs",
//   image: "getting-started-nextjs.png",
//   date: "2023-04-12",
//   content: "# Something",
// };

export type PostContentProps = {
  post: {
    slug: string;
    title: string;
    image: string;
    date: number;
    content: string;
  };
};

const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
export default PostContent;
