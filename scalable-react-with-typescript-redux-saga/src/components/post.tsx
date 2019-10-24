import React from "react";
import { IPostRaw } from "../state/ducks/post/types";


type props = {
	post: IPostRaw;
	key: number,
};

const Post: React.FC<props> = ({ post }: props) => {
	return <div className="post-container">
    <div className='user-info'>
        <img className='user-thumbnail' src={post.thumbnailUrl} alt='user thumbnail' />
        <div className='username'>{post.username}</div>
    </div>
    <img src={post.imageUrl} alt='image posted by user' />
    <div className='image-reaction'>

        {/* <img className='reaction-icon' src={require('../../icons/insta_comment.png')} alt='comment button' /> */}
    </div>
    <div className='likes'>{post.likes} likes</div>
    {/* <CommentSection comments={post.comments} index={index} /> */}
</div>;
};

export default Post;
