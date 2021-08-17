const GET_GAMES = 'games/GET_GAMES';
const GET_COURSES = 'courses/GET_COURSES'
const GET_COURSE_INFO = 'courses/GET_COURSE_INFO'

const loadGames = (games) => {
    return {
        type: GET_GAMES,
        games,
    }
}

const loadCourses = (courses) => {
    return {
        type: GET_COURSES,
        courses,
    }
}

const loadCourseInfo = (courseInfo) => {
    return {
        type: GET_COURSES,
        courseInfo,
    }
}


export const getGames = () => async (dispatch) => {
    const response = await fetch('/api/game')

    if (response.ok) {
        const games = await response.json()
        console.log(games)
        await dispatch(loadGames(games))
        return response
    }
}

export const getCoursesForGame = (gameId) => async (dispatch) => {
    const response = await fetch(`/api/game/${gameId}`)

    if (response.ok) {
        const courses = await response.json()
        await dispatch(loadCourses(courses))
        return response
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

export default function games(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_GAMES: {
            const allGames = {};
            action.games.games.forEach(game => {
                allGames[game.id] = game;
            });
            newState = { ...allGames }
            return newState;
        }

        case GET_COURSES: {
            const allCourses = {};
            action.courses.courses.forEach(course => {
                allCourses[course.id] = course;
            });
            newState = {...allCourses}
            return newState;
        }

        case GET_COURSE_INFO: {
            const courseInfo = {};
            action.courseInfo.courseInfo.forEach(course => {
                courseInfo[course.id] = course;
            });
            newState = {...courseInfo}
            return newState;
        }

        default:
            return state
    }
}
