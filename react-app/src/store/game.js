const GET_GAMES = 'games/GET_GAMES';
const GET_COURSES = 'courses/GET_COURSES'

const loadGames = (games) => {
    return {
        type: GET_GAMES,
        games,
    }
}

const loadCourses = (courses) => {
    return {
        type: GET_COURSES,
        courses
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

export const getCourses = (gameId) => async (dispatch) => {
    const response = await fetch(`/api/game/${gameId}`)

    if (response.ok) {
        const courses = await response.json()
        console.log(courses)
        await dispatch(loadCourses(courses))
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

        default:
            return state
    }
}
