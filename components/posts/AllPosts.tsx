import classes from "./AllPosts.module.css";
import PostGrid from "./PostGrid";
import { Props } from "../homepage/FeaturedPosts";

const AllPosts = (props: Props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};
export default AllPosts;
