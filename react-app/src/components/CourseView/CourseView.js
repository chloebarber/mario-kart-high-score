import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseInfo } from '../../store/game'
import { useParams } from 'react-router-dom';


function CourseView() {
    // const courseInfo = useSelector(state => Object.values(state.games.courseInfo.course))
    // const comments = useSelector(state => Object.values(state.games.courseInfo.comments))
    // const records = useSelector(state => Object.values(state.games.courseInfo.records))

    const dispatch = useDispatch()
    const {courseId} = useParams();

    useEffect(() => {
        dispatch(getCourseInfo(courseId))
    }, [dispatch]);

    return(<h1>YAY</h1>)
    // return (
    //     <>
    //         <div>
    //             {courses.map(course => (
    //                 <a href={`/games/courses/${course.id}`} id={course.id}>
    //                     <div>
    //                         <img src={course.splash_img} className='splash-course-image' alt='coursePic' />
    //                         <div>
    //                             <div><h3>{course.name}</h3></div>
    //                         </div>
    //                     </div>
    //                 </a>
    //             ))}
    //         </div>
    //     </>

    // )
}
export default CourseView;
