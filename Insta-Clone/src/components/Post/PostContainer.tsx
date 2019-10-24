import React, { ReactFragment } from 'react';
import CommentSection from '../CommentSection/CommentSection';
// import HeartButton from './HeartButton.js';
import './PostContainer.css';
import { Post } from '../../store/reducers';
import PropTypes from 'prop-types';


interface PostContainerProps {
    post: Post,
    index: number,
}

const PostContainer: React.SFC<PostContainerProps> = ({post, index}) => { 
    console.log();
    return (<div className="post-container">
    <div className='user-info'>
        <img className='user-thumbnail' src={post.thumbnailUrl} alt='user thumbnail' />
        <div className='username'>{post.username}</div>
    </div>
    <img src={post.imageUrl} alt='image posted by user' />
    <div className='image-reaction'>

        {/* <img className='reaction-icon' src={require('../../icons/insta_comment.png')} alt='comment button' /> */}
    </div>
    <div className='likes'>{post.likes} likes</div>
    <CommentSection comments={post.comments} index={index} />
</div>)
};

// eslint-disable-next-line react/no-typos
// PostContainer.propTypes = {
//     post: PropTypes.any,
//     index: PropTypes.number,

// }

export default PostContainer;