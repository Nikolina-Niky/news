import { FC } from "react";
import Post from "../Post/Post";
import type { NewsDetail } from "../../data";

interface PostsProps {
  posts: NewsDetail[];
}
export const Posts: FC<PostsProps> = ({ posts }) => {
  return posts.map((post: NewsDetail) => {
    return <Post key={post.id} post={post} isSinglePost={false} />;
  });
};

export default Posts;
