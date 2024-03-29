import { FC } from "react";
import type { NewsDetail } from "../../data";
import Card from "../Card/Card";
import { useSelectedPostContext } from "../../hooks/useSelectedPostContext";
import { getFormatedDate } from "../../utils/dateFunctions";

interface PostProps {
  post: NewsDetail;
  isSinglePost: boolean;
}
const Post: FC<PostProps> = ({ post, isSinglePost }) => {
  const { id, image, date, title, content } = post;
  const { setSelectedPostId } = useSelectedPostContext();

  return (
    <Card
      id={id}
      imageSrc={image}
      date={getFormatedDate(date)}
      title={title}
      text={content}
      titleOnPicture={!isSinglePost}
      onClick={() => setSelectedPostId(id)}
    />
  );
};

export default Post;
