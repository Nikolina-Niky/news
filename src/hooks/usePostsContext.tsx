import { createContext, useContext } from "react";
import { NewsDetail } from "../data";
import { useFetch } from "./useFetch";
import { fetchList } from "../apiService";

interface PostsContextValue {
  posts: [] | NewsDetail[];
  isPending: boolean;
  firstPostId: string;
}

const PostsContext = createContext<PostsContextValue>({
  posts: [],
  isPending: true,
  firstPostId: ""
});

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const { data: posts, isPending } = useFetch(fetchList, []);
  const firstPostId = posts.length ? posts[0].id : "";

  return (
    <PostsContext.Provider value={{ posts, isPending, firstPostId }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  const postsContext = useContext(PostsContext);
  if (!postsContext) {
    throw new Error("context PostsContext is not created");
  }
  return postsContext;
};
