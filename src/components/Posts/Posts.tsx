import { FC } from "react";
import Post from "../Post/Post";
import type { NewsDetail } from "../../data";
import "./Posts.css";

interface PostsProps {
  posts: NewsDetail[];
}
export const Posts: FC<PostsProps> = ({ posts }) => {
  return (<div className="container">
    <h1>News</h1>
    <div className="posts">{posts.map((post: NewsDetail) => {
      return <Post key={post.id} post={post} isSinglePost={false} />;
    })}</div>
  </div>)
};

export default Posts;
