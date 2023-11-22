import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostContext } from '../context/PostContext';
import { CommentsType } from '../types/CommentsType';
import { useApi } from '../custom-hooks/UseApi';

export const PostItem: React.FC = () => {
    const { state } = useContext(PostContext);
    const { postId } = useParams();
    const post = state.postDataMap.get(postId ? Number(postId) : null);
    const user = state.userDataMap.get(post?.userId);
    const { data: comments }: {loading: boolean, data: CommentsType[]} = useApi(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`); 
    const navigate = useNavigate();
   
    return (
        <div className="container">
            <button onClick={() => navigate("/")} type="button" className="btn btn-secondary">Home</button>
            <div className="row">
                <div className="postItem-container">
                    <h1 className='postItem-title'>{post?.title}</h1>
                    <p className='postItem-body'>{post?.body}</p> 
                    <h4 onClick={() => navigate(`/author/${post?.userId}`)} className='postItem-author'>{user?.name}</h4>
                    <p className='postItem-email'>{user?.email}</p>
                </div>
                <div className="postItem-comments-container">
                    <h1>Comment Section</h1>
                    {comments && comments.map((comment) => (
                        <div className="postItem-comments-card">
                            <h1 className='postItem-comments-name'>{comment?.name}</h1>
                            <p className='postItem-comments-body'>{comment?.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
   };
