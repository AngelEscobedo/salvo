import React, { useContext } from 'react';
import Post from './Post';
import { PostContext } from '../context/PostContext';
import { PostType } from '../types/PostType';

const PostList: React.FC = () => {
  const { state } = useContext(PostContext);
  const postData: PostType[] = state?.arrayDataMap.get('postData');

  return (
      <div className="container">
        <div className="row">
          <div className="postList-container">
            {postData && postData.map((post) => (
              <Post
                key={post.id}
                postData={post}
                userData={state?.userDataMap.get(post.userId)}
              />
            ))}
          </div>
        </div>
      </div>
  );
  };

export default PostList;
