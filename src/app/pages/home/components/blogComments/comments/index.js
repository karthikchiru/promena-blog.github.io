import React, { useState, useEffect } from 'react';
import CommentForm from '../commentForm';
import Comment from '../comment';
import './index.scss';
import ReactPaginate from 'react-paginate';
import {
  getUserComments as getCommentsApi,
  getReplyComments as getReplyCommentsApi
} from '../../../../../utils/apiCalls';

const Comments = ({ currentUserId, blogId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [backendReplyComments, setBackendReplyComments] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const rootCommentId = backendComments.filter(
    (backendComment) => backendComment.commentId
  );

  const rootComments = backendComments.filter(
    (backendComment) => backendComment.Blog_id == blogId
  );

  const getReplies = (commentId) =>
    backendReplyComments
      .filter((backendComment) => backendComment.CommentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
      );
      const usersPerPage = 5;
      const pagesVisited = pageNumber*usersPerPage;
const displayComments =  rootComments.slice(pagesVisited, pagesVisited + usersPerPage).map((user, index)=>{

  return(
      user.Blog_id == blogId ? <Comment
           key={index}
           comment={user}
           replies={getReplies(user.commentId)}
           currentUserId={currentUserId}
         />:null
  )
})
  useEffect(() => {
    getCommentsApi((data) => {
      setBackendComments(data);
    });
    getReplyCommentsApi((data) => {
      setBackendReplyComments(data);
    })
  }, []);

  const changePage = ({selected}) => {
    setPageNumber(selected);
  }
  let pageCount = Math.ceil(rootComments.length/usersPerPage);
  return (
    <div className='comments'>
      <h3 className='comments-title'>Comments</h3>
      <div className='comment-form-title'>Write comment</div>
       return rootComments
      <CommentForm submitLabel='Post' blogId={blogId} backendComments = {backendComments=>setBackendComments(backendComments)} rootCommentId={rootCommentId} />
      <div className='comments-container'>
        {displayComments}
      </div>
   {blogId && 
    <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
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
   }
    </div>
  );
};

export default React.memo(Comments);
