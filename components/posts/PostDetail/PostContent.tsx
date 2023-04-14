import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";

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

  const customRenderers = {
    image(image: { src: string; alt: string }) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};
export default PostContent;
