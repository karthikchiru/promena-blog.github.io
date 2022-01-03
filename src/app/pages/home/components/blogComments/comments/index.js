/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CommentForm from '../commentForm';
import Comment from '../comment';
import './index.scss';
import {
  userComment as createCommentApi,
  getUserComments as getCommentsApi,
  getReplyComments as getReplyCommentsApi
} from '../../../../../utils/apiCalls';

import {
  // getComments as getCommentsApi,
  // createComment as createCommentApi,
} from '../commentApi';

const Comments = ({ commentsUrl, currentUserId, user, blogId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [backendReplyComments, setBackendReplyComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.Blog_id 
  );
  const getReplies = (commentId) =>
  backendReplyComments
      .filter((backendComment) => backendComment.CommentId === commentId )
      .sort(
        (a, b) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
      );

  // const addComment = (text, parentId) => {

  //   createCommentApi(text, parentId, user).then((comment) => {
  //     setBackendComments([comment, ...backendComments]);
  //     setActiveComment(null);
  //     console.log(user);
  //   });
    // console.log(text, user);
    // createCommentApi((res)=>{
    //   setBackendComments([res, ...backendComments]);
    //   setActiveComment(null);
    // },);
  // };

  useEffect(() => {
    getCommentsApi((data)=>{
      setBackendComments(data);
    });
    getReplyCommentsApi((data)=>{
      setBackendReplyComments(data);
    })
  }, []);

  return (
    <div className='comments'>
      <h3 className='comments-title'>Comments</h3>
      <div className='comment-form-title'>Write comment</div>
      <CommentForm submitLabel='Post' blogId = {blogId} />
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
