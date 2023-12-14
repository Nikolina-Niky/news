import { createContext, useContext, useState, useEffect } from "react";
import { NewsDetail } from "../data";
import { useFetch } from "./useFetch";
import { NewsClient } from "../client";

interface PostsContextValue {
  posts: [] | NewsDetail[];
  isPending: boolean;
}

const PostsContext = createContext<PostsContextValue>({
  posts: [],
  isPending: true,
});

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const client = new NewsClient();
  const { data: posts, isPending } = useFetch(client.fetchList);

  return (
    <PostsContext.Provider value={{ posts, isPending }}>
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
