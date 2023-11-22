
import { PostActions } from "../types/PostActions";
import { PostState } from "../types/PostState";

export const PostReducer = ( state: PostState, action: PostActions): PostState => {
    switch(action.type) {
        case 'updatePostMapData':
            return { ...state, postDataMap: action.payload };
        case 'updateUserMapData':
            return { ...state, userDataMap: action.payload };
        default:
            return state;
    }
}