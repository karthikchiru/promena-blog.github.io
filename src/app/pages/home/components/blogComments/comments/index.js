
import { useState, useEffect } from 'react';
import CommentForm from '../commentForm';
import Comment from '../comment';
import './index.scss';
import {
  getUserComments as getCommentsApi,
  getReplyComments as getReplyCommentsApi
} from '../../../../../utils/apiCalls';

const Comments = ({currentUserId, blogId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [backendReplyComments, setBackendReplyComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.Blog_id 
  );
  const rootCommentId = backendComments.filter(
    (backendComment) => backendComment.commentId 
  );
  const getReplies = (commentId) =>
  backendReplyComments
      .filter((backendComment) => backendComment.CommentId === commentId )
      .sort(
        (a, b) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
      );

  useEffect(() => {
    getCommentsApi((data)=>{
      setBackendComments(data);
      console.log(data);
    });
    getReplyCommentsApi((data)=>{
      setBackendReplyComments(data);
    })
  }, []);

  return (
    <div className='comments'>
      <h3 className='comments-title'>Comments</h3>
      <div className='comment-form-title'>Write comment</div>
      <CommentForm submitLabel='Post' blogId = {blogId} rootCommentId ={rootCommentId} />
      <div className='comments-container'>
        {rootComments.length >0 && rootComments.map((rootComment) => (
       rootComment.Blog_id == blogId ? <Comment
            key={rootComment.Blog_id}
            comment={rootComment}
            replies={getReplies(rootComment.commentId)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            currentUserId={currentUserId}
          />:null
        ))}
      </div>
    </div>
  );
};

export default Comments;
