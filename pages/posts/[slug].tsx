import PostContent, {
  PostContentProps,
} from "../../components/posts/PostDetail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/post-util";

type ContextType = {
  params: {
    slug: string;
  };
};

function PostDetailPage(props: PostContentProps) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context: ContextType) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default PostDetailPage;
