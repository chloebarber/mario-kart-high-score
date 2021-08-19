const ADD_COMMENT = 'comment/ADD_COMMENT';


const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

export const createComment = comment => async (dispatch) => {
    const response = await fetch(`/api/comment/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const newComment = await response
        dispatch(addComment(newComment))
    }
    return response
}

export const deleteComment = id => async (dispatch) => {
    const response = await fetch(`/api/comment/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const newComment = await response
        // dispatch(addComment(newComment))
    }
    return response
}

const initialState = {}

export default function comments(state = initialState, action) {
    // let updatedState = { ...state }
    let newState;
    switch (action.type) {
        case ADD_COMMENT: {
            newState = {}
            console.log(action.comment);
            newState.comments[action.comment.id] = action.comment
            return newState;
        }
        default:
            return state
    }
}
