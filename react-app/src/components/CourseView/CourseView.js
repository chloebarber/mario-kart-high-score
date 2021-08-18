import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseInfo } from '../../store/courseInfo'
import { useParams } from 'react-router-dom';
import AddRecordForm from '.././addRecordForm/index';


function CourseView() {
    const sessionUser = useSelector(state => state.session.user)

    // const courseInfo = useSelector((state) => state.courseInfo)
    // const comments = useSelector(state => Object.values(state.games.courseInfo.comments))
    // const records = useSelector(state => Object.values(state.games.courseInfo.records))

    const dispatch = useDispatch()
    const {courseId} = useParams();

    useEffect(() => {
        dispatch(getCourseInfo(courseId))
    }, [dispatch, courseId]);

    let sessionRecord;
    if(sessionUser) {
        sessionRecord = (
            <AddRecordForm />
        )
    } else {
        sessionRecord = (
            <>
                <h2>Must be login to leave a record</h2>
            </>
        )
    }

    return (
        <>
            <div>
                <h1>poop</h1>
                {sessionRecord}
                {/* {courses.map(course => (
                    <a href={`/games/courses/${course.id}`} id={course.id}>
                        <div>
                            <img src={course.splash_img} className='splash-course-image' alt='coursePic' />
                            <div>
                                <div><h3>{course.name}</h3></div>
                            </div>
                        </div>
                    </a>
                ))} */}
            </div>
        </>

    )
}
export default CourseView;
