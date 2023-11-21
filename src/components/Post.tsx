import React from 'react';
import { Post as PostType } from '../types/Post';

interface PostProps {
 post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {

 return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
 );
};

export default Post;