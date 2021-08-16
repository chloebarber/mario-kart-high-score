import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';



function HomePage() {
    const [games, setGames] = useState();
    // const dispatch = useDispatch()

    useEffect(() => {

        (async () => {
            const response = await fetch(`/api/home`);
            const gameList = await response.json();
            setGames(gameList);
        })();
    }, []);

    return (
        <ul>
            <li>
                <strong>Game 1</strong> {games[0]}
            </li>
        </ul>
    );
}
export default HomePage;
