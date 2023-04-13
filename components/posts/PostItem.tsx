import Image from "next/legacy/image";
import Link from "next/link";
import classes from "./PostItem.module.css";

export type Props = {
  post: {
    slug: string;
    title: string;
    image: string;
    excerpt?: string;
    date: number;
  };
};

const PostItem = (props: Props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
            priority
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p> {excerpt} </p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
