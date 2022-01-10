/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import CommentForm from '../commentForm';
import Comment from '../comment';
import './index.scss';
import ReactPaginate from 'react-paginate';
import {
  getUserComments as getCommentsApi,
  getReplyComments as getReplyCommentsApi
} from '../../../../../utils/apiCalls';

const Comments = ({currentUserId, blogId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [backendReplyComments, setBackendReplyComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber*usersPerPage;

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
const displayUsers = backendComments.length >0 && backendComments.slice(pagesVisited, pagesVisited + usersPerPage).map((user)=>{
  return(
      user.Blog_id == blogId ? <Comment
           key={user.Blog_id}
           comment={user}
           replies={getReplies(user.commentId)}
           activeComment={activeComment}
           setActiveComment={setActiveComment}
           currentUserId={currentUserId}
         />:null
  )
})
  useEffect(() => {
    getCommentsApi((data)=>{
      setBackendComments(data);
      console.log(data);
    });
    getReplyCommentsApi((data)=>{
      setBackendReplyComments(data);
    })
  }, []);

  const changePage = ({selected}) => {
    debugger
    setPageNumber(selected);
  }
  let pageCount = Math.ceil(backendComments.length/usersPerPage);
  return (
    <div className='comments'>
      <h3 className='comments-title'>Comments</h3>
      <div className='comment-form-title'>Write comment</div>
      <CommentForm submitLabel='Post' blogId = {blogId} rootCommentId ={rootCommentId} />
      <div className='comments-container'>
        {displayUsers}
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'previousBttns'}
        nextClassName={'page-item'}
        nextLinkClassName={'nextBttns'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'paginationActive'}
        disabledClassName='paginationDisabled'
      />
    </div>
  );
};

export default Comments;
