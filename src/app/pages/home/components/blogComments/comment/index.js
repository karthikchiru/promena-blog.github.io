
import React from 'react';

import './index.scss';

const Comment = ({
  comment,
  replies
}) => {
  const createdAt = new Date(comment.datetime).toLocaleDateString();

  return (
    <div key={comment.Blog_id} className='comment'>
      <div className='comment-image-container'>
        <img src='/user-icon.png' />
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
            {replies.length && replies.map((reply) => (
        comment.commentId === reply.CommentId ? <div className='comment'>
        <div className='comment-image-container'>
        <img src='/user-icon.png' />
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

export default Comment;
