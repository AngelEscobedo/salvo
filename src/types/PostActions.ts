export type PostActions = 
    | { type: 'updatePostMapData', payload: Map<any, any>}
    | { type: 'updateUserMapData', payload: Map<any, any> }