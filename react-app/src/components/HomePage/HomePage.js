import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '../../store/game'
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
            {/* <h1>Mario Kart High Score</h1> */}
            <div className = "gameListing">
                {games.map(game => (
                    <div className ={`game${game.id}`}>
                        <a href={`/games/${game.id}`} id={game.id}>
                        <img src={game.splash_image} className='splash-image' alt='gamePic' />
                            {/* <div>
                                <div><h3>{game.game_name}</h3></div>
                            </div> */}
                        </a>
                    </div>
                ))}
            </div>
        </>




    )
}
export default HomePage;
