import { FC } from "react";
import { useFetch } from "../../hooks/useFetch";
import Suspense from "../Supense/Suspense";
import Post from "../Post/Post";
import { fetchDetail } from "../../apiService";
import { useSelectedPostContext } from "../../hooks/useSelectedPostContext";
import { NewsDetail } from "../../data";

interface SinglePostProps {
    selectedInitial: string
}
export const SinglePost: FC<SinglePostProps> = ({ selectedInitial }) => {
    const { selectedPostId } = useSelectedPostContext();
    const postId = selectedPostId ? selectedPostId : selectedInitial;
    const { data: details, isPending } = useFetch(() => fetchDetail(postId), [postId]);

    return <Suspense isPending={isPending}>
        <Post post={details  as NewsDetail} isSinglePost />
    </Suspense>
}
export default SinglePost;