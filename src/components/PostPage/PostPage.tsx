import Post from "../Post/Post";
import Posts from "../Posts/Posts";
import "./postPage.css";
import { usePostsContext } from "../../hooks/PostsContext";
import Suspense from "../Supense/Suspense";

const PostPage = () => {
  // render first post initialy
  const { posts, isPending } = usePostsContext();
  return (
    <div className="posts-container">
      <Suspense isPending={isPending}>
        <Posts posts={posts} />
      </Suspense>
      <Post post={posts[0]} isSinglePost />
    </div>
  );
};

export default PostPage;
