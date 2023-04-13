import FeaturedPosts from "../components/homepage/FeaturedPosts";
import Hero from "../components/homepage/Hero";
import { getFeaturedPosts } from "../lib/post-util";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: "2023-04-12",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: "2023-04-12",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: "2023-04-12",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: "2023-04-12",
  },
];

export default function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
