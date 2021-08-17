import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoursesForGame } from '../../store/game'
import { useParams } from 'react-router-dom';


function Courses() {
    const courses = useSelector(state => Object.values(state.games))
    // const gamesArray = Object.values(games)
    const dispatch = useDispatch()
    const {gameId} = useParams();

    useEffect(() => {
        dispatch(getCoursesForGame(gameId))
    }, [dispatch]);

    // return (<h1>YAY</h1> )
    return (
        <>
            <div>
                {courses.map(course => (
                    <a href={`/course/${course.id}`} id={course.id}>
                        <div>
                            <img src={course.splash_img} className='splash-course-image' alt='coursePic' />
                            <div>
                                <div><h3>{course.name}</h3></div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>

    )
}
export default Courses;
