/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CommentForm from '../commentForm';
import Comment from '../comment';
import './index.scss';
import {
  userComment as createCommentApi,
  getUserComments as getCommentsApi
} from '../../../../../utils/apiCalls';

import {
  // getComments as getCommentsApi,
  // createComment as createCommentApi,
} from '../commentApi';

const Comments = ({ commentsUrl, currentUserId, user }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.Blog_id 
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
      );
  const addComment = (text, user) => {

    // createCommentApi(text, parentId).then((comment) => {
    //   setBackendComments([comment, ...backendComments]);
    //   setActiveComment(null);
    // });
    console.log(text, user);
    createCommentApi((res)=>{
      setBackendComments([res, ...backendComments]);
      setActiveComment(null);
    },);
  };
console.log(rootComments)

  useEffect(() => {
    getCommentsApi((data)=>{
      setBackendComments(data);
    });
  }, []);
console.log(user)
  return (
    <div className='comments'>
      <h3 className='comments-title'>Comments</h3>
      <div className='comment-form-title'>Write comment</div>
      <CommentForm submitLabel='Write' />
      <div className='comments-container'>
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.Blog_id}
            comment={rootComment}
            addComment={addComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
