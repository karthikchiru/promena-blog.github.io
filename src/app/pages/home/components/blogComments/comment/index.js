/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import CommentForm from '../../blogComments/commentForm';
import './index.scss';

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  // const isEditing =
  //   activeComment &&
  //   activeComment.id === comment.id &&
  //   activeComment.type === 'editing';
  const isReplying =
    activeComment &&
    activeComment.Blog_id === comment.Blog_id &&
    activeComment.type === 'replying';
  // const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(comment.datetime) > fiveMinutes;
  // const canDelete =
    // currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  // const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.Blog_id;
  const createdAt = new Date(comment.datetime).toLocaleDateString();
console.log(replies);
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
        {/* {isEditing && (
          <CommentForm
            submitLabel='Update'
            hasCancelButton
            initialText={comment.Comment}
            // handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )} */}
        <div className='comment-actions'>
          {canReply && (
            <div
              className='comment-action'
              onClick={() =>
                setActiveComment({ id: comment.CommentId, type: 'replying' })
              }
            >
              Reply
            </div>
          )}
          {/* {canEdit && (
            <div
              className='comment-action'
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'editing' })
              }
            >
              Edit
            </div>
          )} */}
          {/* {canDelete && (
            <div
              className='comment-action'
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )} */}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel='Reply'
            commentId = {comment.Blog_id}
            handleSubmit={(text, user) => addComment(text, replyId, user)}
          />
        )}
        {replies.length > 0 && (
          <div className='replies'>
            {replies.length && replies.map((reply) => (
        comment.commentId === reply.CommentId ?  <div>
        <div className='comment-content'>
          <div className='comment-author'>{comment.name}</div>
          {/* <div>{new Date(reply.datetime).toLocaleDateString()}</div> */}
        </div>
        {<div className='comment-text'>{reply.Reply_message}</div>}
        {/* <Comment
                comment={reply}
                key={reply.Blog_id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                addComment={addComment}
                parentId={comment.Blog_id}
                replies={[]}
                currentUserId={reply.CommentId}
              /> */}
        </div> :null   
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
