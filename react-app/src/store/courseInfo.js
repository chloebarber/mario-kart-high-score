const GET_COURSE_INFO = 'courses/GET_COURSE_INFO'
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

const loadCourseInfo = (courseInfo) => {
    return {
        type: GET_COURSE_INFO,
        courseInfo,
    }
}

export const getCourseInfo = (courseId) => async (dispatch) => {
    const response = await fetch(`/api/course/${courseId}`)

    if (response.ok) {
        const courseInfo = await response.json()
        await dispatch(loadCourseInfo(courseInfo))
        return response
    }
}
const initialState = {}

export default function courseInfo(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_COURSE_INFO: {
            newState = Object.assign({}, state);
            newState = action.courseInfo;
            return newState;
        }
        case ADD_COMMENT: {
            newState = {...state};
            console.log(action.comment);
            newState.comments[action.comment.id] = action.comment
            return newState;
        }

        default:
            return state
    }
}