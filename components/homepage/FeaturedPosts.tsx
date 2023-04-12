import PostGrid from "../posts/PostGrid";
import classes from "./FeaturedPosts.module.css";

export type Props = {
  posts: {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
  }[];
};

const FeaturedPosts = (props: Props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
