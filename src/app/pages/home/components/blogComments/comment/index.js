import React from 'react';
import './index.scss';
import Img from '../../../../../../assets/images/user-icon.png'

const Comment = ({
  comment,
  replies
}) => {
  const createdAt = new Date(comment.datetime).toLocaleDateString();
  return (
    <div key={comment.commentId} className='comment'>
      <div className='comment-image-container'>
        <img src={Img} />
      </div>
      <div className='comment-right-part'>
        <div className='comment-content'>
          <div className='comment-author'>{comment.name}</div>
          <div>{createdAt}</div>
        </div>
        {<div className='comment-text'>{comment.Comment}</div>}
        <div className='comment-actions'>
</div>
        {replies.length > 0 && (
          <div className='replies'>
            {replies.length && replies.map((reply, index) => (
        comment.commentId === reply.CommentId ? <div className='comment' key={index}>
        <div className='comment-image-container'>
        <img src={Img} />
      </div>
      <div className='comment-right-part'>
        <div className='comment-content'>
          <div className='comment-author'>{reply.name}</div>
          <div>{createdAt}</div>
        </div>
        {<div className='comment-text'>{reply.Reply_message}</div>}
         </div>
        </div> :null   
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Comment);
