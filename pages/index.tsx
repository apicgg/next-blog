import FeaturedPosts from "../components/homepage/FeaturedPosts";
import Hero from "../components/homepage/Hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS",
    date: "2023-04-12",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS",
    date: "2023-04-12",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS",
    date: "2023-04-12",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS",
    date: "2023-04-12",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
