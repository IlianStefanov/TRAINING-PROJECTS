import React from 'react';
// import CommentSection from '../CommentSection/CommentSection';
// import HeartButton from './HeartButton.js';
import './CommentSection.css';
import { Comment } from '../../store/reducers';
import PropTypes from 'prop-types';

interface CommentSectionProps {
    comments: Comment[],
    index: number,
}


const CommentSection: React.SFC<CommentSectionProps> = ({comments, index}) => (
    <div className='comments-container'>
        {comments.map(comment => {
            return <div className='comment'>
                        <span className='user'>{comment.username}&nbsp;</span>
                        {comment.text}
                    </div>
        })}
        <div className='timestamp'>dneska</div>
        <div className='add-comment'>
            <form id={index.toString()} onSubmit={(event) => {}}>
                <input 
                    className='comment-input' 
                    type='text' 
                    placeholder='Add a comment...'
                    value={"smut"}
                    onChange={(event) => {}}
                />
            </form>
            <img className='elipses' src={require('../../assets/Icons/insta_dots.png')} alt='more options button'/>
        </div>
    </div>
)

export default CommentSection;