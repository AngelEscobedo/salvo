import { createContext } from "react";
import { PostActions } from "../types/PostActions";
import { PostState } from "../types/PostState";

interface ContextProps {
    state: PostState,
    dispatch: React.Dispatch<PostActions>
}

export const PostContext = createContext<ContextProps>({} as ContextProps);