const initialComments = {

    commentsList: [],
}





function commentReducer (state, action) {
    switch (action.type) {
        case 'fetchComments':
            console.log(action.payload)
        return  {
                ...state,
                commentsList: action.payload
            };
        case 'submitComment':

        console.log('submitter', action.payload)

           return {
                ...state,
                commentsList: [...state.commentsList, action.payload]
            };
        case 'editComment':
        return {
                ...state,
                commentsList: [...state.commentsList, action.payload]
            };
        case 'deleteComment':
            return {
                 ...state,
                 commentsList: [...state.commentsList, action.payload]
            };    
        case 'default':
        return {
                ...state,
         };

    }
}


export {commentReducer, initialComments}