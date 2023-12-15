import { FC } from "react";
import type { NewsDetail } from "../../data";
import Card from "../Card/Card";

interface PostProps {
  post: NewsDetail;
  isSinglePost: boolean;
}
const Post: FC<PostProps> = ({ post, isSinglePost }) => {
  const { image, date, title, content } = post as NewsDetail;
  return (
    <Card
      imageSrc={image}
      date={date}
      title={title}
      text={content}
      titleOnPicture={!isSinglePost}
    />
  );
};

export default Post;
