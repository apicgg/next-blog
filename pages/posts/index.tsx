import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/post-util";

type Props = {
  posts: {
    slug: string;
    content: string;
    date: number;
    title: string;
    image: string;
    isFeatured: boolean;
  }[];
};

const AllPostsPage = (props: Props) => {
  return <AllPosts posts={props.posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
