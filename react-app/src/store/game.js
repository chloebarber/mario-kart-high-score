// type constants
const GET_GAMES = 'games/GET_GAMES'


// action creators
const setGetGames = (games) => {
    return {
        type: GET_GAMES,
        payload: games,
    }
}

// thunk creators
export const getAllGames = () => {
    return async (dispatch) => {
        const response = await fetch('/api/home', {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const games = await response.json();
            dispatch(getAllGames(games));
        }
    }
}


// reducer // ! fix
const initialstate = {};
// ! fix
export default function reducer(state = initialstate, action) {
    switch (action.type) {
        case GET_GAMES: // ! fix
            const allGames = Object.fromEntries(action.games.map((game) => [game.game_name])) // ! fix
            return { ...state, ...allGames }; // ! fix
        default:
            return state
    }
}
