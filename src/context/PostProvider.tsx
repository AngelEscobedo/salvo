import { useReducer } from "react"
import { PostContext } from "./PostContext"
import { PostReducer } from "./PostReducer";
import { PostState } from "../types/PostState";
import { PostType } from '../types/PostType';
import { UserType } from '../types/UserType';
import { useApi } from '../custom-hooks/UseApi';

const postDataMap = new Map();
const userDataMap = new Map();
const arrayDataMap = new Map();

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const  PostProvider = ({children}: Props) => {
    const { data: postData }: {loading: boolean, data: PostType[]} = useApi('https://jsonplaceholder.typicode.com/posts');
    const { data: userData }: {loading: boolean, data: UserType[]} = useApi('https://jsonplaceholder.typicode.com/users');
    
    if (postData?.length && userData?.length) {
        arrayDataMap.set('postData', postData);
        arrayDataMap.set('userData', userData);
    }
    postData.map(item => {
        postDataMap.set(item.id,item);
    });
    userData.map(item => {
        userDataMap.set(item.id,item);
    });
    
    const INITIAL_STATE: PostState = {
        postDataMap,
        userDataMap,
        arrayDataMap,
        commentsData: [],
        author: null,
        post: null
    }

    const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {children}
        </PostContext.Provider>
    )
}