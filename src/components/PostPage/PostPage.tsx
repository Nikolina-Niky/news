import Posts from "../Posts/Posts";
import "./postPage.css";
import { usePostsContext } from "../../hooks/usePostsContext";
import Suspense from "../Supense/Suspense";
import SinglePost from "../SinglePost/SinglePost";
import { SelectedPostProvider } from "../../hooks/useSelectedPostContext";
import { NewsDetail } from "../../data";

const PostPage = () => {
  // render first post initialy
  const { posts, isPending, firstPostId } = usePostsContext();

  return (
    <SelectedPostProvider>
      <div className="page-container">
        <Suspense isPending={isPending}>
          <Posts posts={posts as NewsDetail[]} />
        </Suspense>
        <Suspense isPending={isPending}>
          <SinglePost selectedInitial={firstPostId} />
        </Suspense>
      </div>
    </SelectedPostProvider>
  );
};

export default PostPage;
