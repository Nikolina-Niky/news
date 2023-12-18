import {FC} from "react";
import { useFetch } from "../../hooks/useFetch";
import Suspense from "../Supense/Suspense";
import Post from "../Post/Post";
import { NewsClient } from "../../client";
import { NewsDetail } from "../../data";

interface SinglePostProps {
    postId: string;
}
export const SinglePost:FC<SinglePostProps> = ({postId}) => {
    console.log(postId);
    const client = new NewsClient;
    const {data:details, isPending} = useFetch(client.fetchDetail, postId);

return <Suspense isPending={isPending}>
<Post post={details} isSinglePost />
</Suspense>
}
export default SinglePost;