import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoursesForGame } from '../../store/courses'
import { useParams } from 'react-router-dom';


function Courses() {
    const courses = useSelector((state) => state.courses)
    // const gamesArray = Object.values(games)
    const dispatch = useDispatch()
    const {gameId} = useParams();

    useEffect(() => {
        dispatch(getCoursesForGame(gameId))
    }, [dispatch]);


    function courseListing(){
        if (courses.courses){
            return (
                <>
                {courses.courses.map(course => (
                    <a href={`/course/${course.id}`} id={course.id}>
                        <div>
                            <img src={course.splash_img} className='splash-course-image' alt='coursePic' />
                            <div>
                                <div><h3>{course.name}</h3></div>
                            </div>
                        </div>
                    </a>
                ))}
                </>
            )
        }
    }

    return (
        <>
            <div>
                {courseListing()}
            </div>
        </>

    )
}
export default Courses;
