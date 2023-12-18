import Posts from "../Posts/Posts";
import "./PostPage.css";
import { usePostsContext } from "../../hooks/usePostsContext";
import Suspense from "../Supense/Suspense";
import SinglePost from "../SinglePost/SinglePost";

const PostPage = () => {
  // render first post initialy
  const { posts, isPending, isPendingFrstPostId, firstPostId } = usePostsContext();
  console.log(posts);
  return (
    <div className="page-container">
      <Suspense isPending={isPending}>
        <Posts posts={posts} />
      </Suspense>
      <Suspense isPending={isPendingFrstPostId}>
        <SinglePost postId={firstPostId} />
      </Suspense>
    </div>
  );
};

export default PostPage;
