import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoursesForGame } from '../../store/courses'
import { useParams } from 'react-router-dom';
import './Courses.css'


function Courses() {
    const courses = useSelector((state) => state.courses)
    // const gamesArray = Object.values(games)
    const dispatch = useDispatch()
    const { gameId } = useParams();

    useEffect(() => {
        dispatch(getCoursesForGame(gameId))
    }, [dispatch, gameId]);


    function courseListing() {
        if (courses.courses) {
            return (
                <>
                    <div className="courses-page-div">

                        <div className="game-image-div">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="logo holder" />
                            {/* <img src={game.splash_image} alt="game splash image"/> */}
                        </div>

                        <div className="course-description-div">
                            <h1>Test Course Description</h1>
                        </div>

                        <div className="courses-div">

                            <div className="cup-div">
                                <img src="https://mario.wiki.gallery/images/c/cb/Mario_Kart_8_-_Mushroom_Cup_logo.svg" alt="mushroom cup" className="cup-img" />
                            </div>

                            <div className="cup-div">
                                <img src="https://mario.wiki.gallery/images/0/0b/Mario_Kart_8_-_Flower_Cup_logo.svg" alt="flower cup" className="cup-img" />
                            </div>

                            <div className="cup-div">
                                <img src="https://mario.wiki.gallery/images/7/7a/MK8_Star_Cup_Alternate_Emblem.svg" alt="star cup" className="cup-img" />
                            </div>

                            <div className="cup-div">
                                <img src="https://mario.wiki.gallery/images/4/4b/MK8_Special_Cup_Alternate_Emblem.svg" alt="special cup" className="cup-img" />
                            </div>

                            {courses.courses.map(course => (
                                <a href={`/course/${course.id}`} id={course.id} className="course-link">
                                    <div className="course-image-and-name-div">
                                        <img src={course.splash_img} className='splash-course-image' alt='coursePic' />
                                        <div>
                                            <div className="course-text">
                                                <h3>{course.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
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
