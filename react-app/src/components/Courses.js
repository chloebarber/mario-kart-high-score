import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourses } from '../store/game'


function Courses() {
    const courses = useSelector(state => Object.values(state.courses))
    // const gamesArray = Object.values(games)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch]);

    return (
        <>
            <div>
                {courses.map(course => (
                    <a href={`/games/courses/${course.id}`} id={course.id}>
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
