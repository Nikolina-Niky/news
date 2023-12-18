import { createContext, useContext, useEffect, useState } from "react";
import { NewsDetail } from "../data";
import { useFetch } from "./useFetch";
import { NewsClient } from "../client";

interface PostsContextValue {
  posts: [] | NewsDetail[];
  isPending: boolean;
  isPendingFrstPostId: boolean;
  firstPostId: string;
}

const PostsContext = createContext<PostsContextValue>({
  posts: [],
  isPending: true,
  isPendingFrstPostId: true,
  firstPostId: ""
});

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const client = new NewsClient();
  const { data: posts, isPending } = useFetch(client.fetchList);
  const [isPendingFrstPostId, setIsPendingFrstPostId] = useState(true);
  const [firstPostId, setFirstPostId] = useState("");

  useEffect(() => {
    if (posts && posts[0]) {
      try {
        setFirstPostId(posts[0].id);
      } catch {
        // error
      } finally {
        setIsPendingFrstPostId(false);
      }
    }
    if (!posts && !isPending) {
      setIsPendingFrstPostId(false);
    }
  }, [posts])

  return (
    <PostsContext.Provider value={{ posts, isPending, isPendingFrstPostId, firstPostId }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  const postsContext = useContext(PostsContext);
  if (!postsContext) {
    throw new Error("context  PostsContext is not created");
  }
  return postsContext;
};
