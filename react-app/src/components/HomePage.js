import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '../store/game'
import './HomePage.css';


function HomePage() {
    const games = useSelector(state => Object.values(state.games))
    // const gamesArray = Object.values(games)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch]);

    return (
        <>
            <div className = "gameListing">
                {games.map(game => (
                    <a href={`/games/${game.id}`} id={game.id}>
                        <div className = {`game${game.id}`}>
                            <img src={game.splash_image} className='splash-image' alt='gamePic' />
                            {/* <div>
                                <div><h3>{game.game_name}</h3></div>
                            </div> */}
                        </div>
                    </a>
                ))}
            </div>
        </>




    )
}
export default HomePage;
