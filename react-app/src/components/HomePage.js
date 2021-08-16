import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllGames } from '../store/game'



function HomePage() {
    const [games, setGames] = useState();
    const dispatch = useDispatch()

    const gameList = useSelector((state) => Object.values(state.game))
    console.log(gameList)
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch('/api/home');
    //         const gameList = await response.json();
    //         setGames(gameList);
    //     })();
    // }, []);

    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch]);


    if (games) {
        return (
            <ul>
                <li>
                    {/* <strong>Game 1</strong> {games[0]} */}
                    <Link to={`/games/${games.id}`}>{games.description}</Link> // ! fix
                </li>
            </ul>
        );
    }
    else {
        return (
            <h1>Loading...</h1>
        )
    }

}
export default HomePage;
