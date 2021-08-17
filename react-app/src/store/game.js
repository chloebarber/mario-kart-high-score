const GET_GAMES = 'games/GET_GAMES';

const loadGames = (games) => {
    return {
        type: GET_GAMES,
        games,
    }
}


export const getGames = () => async(dispatch) => {
    const response = await fetch('/api/game')

    if (response.ok) {
        const games = await response.json()
        console.log(games)
        await dispatch(loadGames(games))
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
            newState = {...allGames}
            return newState;
        }

        default:
            return state
    }
}
