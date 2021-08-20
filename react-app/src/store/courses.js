const GET_COURSES = 'courses/GET_COURSES'

const loadCourses = (courses) => {
    return {
        type: GET_COURSES,
        courses,
    }
}

export const getCoursesForGame = (gameId) => async (dispatch) => {
    const response = await fetch(`/api/game/${gameId}/`)

    if (response.ok) {
        const courses = await response.json()
        await dispatch(loadCourses(courses))
        return response
    }
}


const initialState = {}

export default function courses(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_COURSES: {
            newState = Object.assign({}, state);
            newState = action.courses;
            return newState;
        }


        default:
            return state
    }
}