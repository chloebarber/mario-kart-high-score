const GET_COURSE_INFO = 'courses/GET_COURSE_INFO'

const ADD_COMMENT = 'comment/ADD_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';

const ADD_RECORD = 'record/ADD_RECORD';
const DELETE_RECORD = 'record/DELETE_RECORD';


const loadCourseInfo = (courseInfo) => {
    return {
        type: GET_COURSE_INFO,
        courseInfo,
    }
}
const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

const addRecord = (record) => ({
    type: ADD_RECORD,
    record
})

const deleteRecord = (record) => ({
    type: DELETE_RECORD,
    record
})

//-----------RECORD THUNKS---------------
export const createRecordThunk = record => async (dispatch) => {
    const response = await fetch(`/api/record/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(record)
    })
    if (response.ok) {
        const newRecord = await response.json();
        dispatch(addRecord(newRecord))
    }
    return response
}

export const deleteRecordThunk = id => async (dispatch) => {
    const response = await fetch(`/api/record/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const removedRecord = await response.json()
        dispatch(deleteRecord(removedRecord))
    }
    return response
}
//-----------COMMENT THUNKS---------------
export const createCommentThunk = comment => async (dispatch) => {
    const response = await fetch(`/api/comment/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const newComment = await response.json();
        dispatch(addComment(newComment))
    }
    return response
}

export const editCommentThunk = comment => async (dispatch) => {
    const response = await fetch(`/api/comment/${comment.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const editedComment = await response.json();
        dispatch(editComment(editedComment))
    }
    return response
}

export const deleteCommentThunk = id => async (dispatch) => {
    const response = await fetch(`/api/comment/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const removedComment = await response.json()
        dispatch(deleteComment(removedComment))
    }
    return response
}


//-----------COURSE THUNKS---------------
export const getCourseInfo = (courseId) => async (dispatch) => {
    const response = await fetch(`/api/course/${courseId}`)

    if (response.ok) {
        const courseInfo = await response.json()
        await dispatch(loadCourseInfo(courseInfo))
        return response
    }
}


//-----------REDUCER-----------------------
const initialState = {}

export default function courseInfo(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_COURSE_INFO: {
            newState = {...state};
            newState = action.courseInfo;
            return newState;
        }
        case ADD_COMMENT: {
            newState = {...state};
            newState.comments.push(action.comment);
            alert("Comment posted!")
            return newState;
        }

        case EDIT_COMMENT: {
            newState = {...state};
            for (let i=0; i<newState.comments.length; i++){
                if (newState.comments[i] && (newState.comments[i].id === action.comment.id))
                    newState.comments[i] = action.comment
            }
            alert("Comment edited successfully!")
            return newState;
        }

        case DELETE_COMMENT: {
            newState = {...state};
            for (let i=0; i<newState.comments.length; i++){
                if (newState.comments[i] && (newState.comments[i].id === action.comment.id))
                    delete newState.comments[i];
            }
            alert("Comment deleted!")
            return newState;
        }

        case ADD_RECORD: {
            newState = {...state};
            newState.records.push(action.record);
            alert("Record posted!")
            return newState;
        }

        case DELETE_RECORD: {
            newState = {...state};
            for (let i=0; i<newState.records.length; i++){
                if (newState.records[i] && (newState.records[i].id === action.record.id))
                    delete newState.records[i]
            }
            alert("Record deleted!")
            return newState;
        }

        default:
            return state
    }
}