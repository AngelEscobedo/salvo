import { CommentsType } from './CommentsType';
import { PostType } from './PostType';
import { UserType } from './UserType';

export interface PostState {
  postDataMap: Map<any, any>;
  userDataMap: Map<any, any>;
  arrayDataMap: Map<any, any>;
  commentsData: CommentsType[],
  author: UserType | null,
  post: PostType | null
}
