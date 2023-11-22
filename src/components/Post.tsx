import { useNavigate } from 'react-router-dom';
import { useTruncate } from '../custom-hooks/UseTruncate';
import { PostType } from '../types/PostType';
import { UserType } from '../types/UserType';

export interface PostProps {
  postData: PostType;
  userData: UserType;
}


export const Post = ({postData, userData}: PostProps) => {
  const navigate = useNavigate();

 return (
    <div className="post-container justify-content-center">
      <h4 onClick={() => navigate(`/postItem/${postData.id}`)} className='post-title'> {useTruncate(postData?.title, 40)} </h4>
      <h6 onClick={() => navigate(`/author/${userData.id}`)} className='post-author'>By: {userData?.name} </h6>
    </div>
 );
};
