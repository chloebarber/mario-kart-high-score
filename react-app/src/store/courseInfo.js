const GET_COURSE_INFO = 'courses/GET_COURSE_INFO'

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

        default:
            return state
    }
}