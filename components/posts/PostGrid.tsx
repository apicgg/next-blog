import { Props } from "../homepage/FeaturedPosts";
import classes from "./PostGrid.module.css";
import PostItem from "./PostItem";

const PostGrid = (props: Props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
