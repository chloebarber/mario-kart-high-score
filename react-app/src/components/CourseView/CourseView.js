import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseInfo } from '../../store/courseInfo'
import { useParams } from 'react-router-dom';
import './CourseView.css'

function CourseView() {
    const courseInfo = useSelector((state) => state.courseInfo)
    // const comments = useSelector(state => Object.values(state.games.courseInfo.comments))
    // const records = useSelector(state => Object.values(state.games.courseInfo.records))

    const dispatch = useDispatch()
    const {courseId} = useParams();

    useEffect(() => {
        dispatch(getCourseInfo(courseId))
    }, [dispatch]);

    function courseDescription(){
        return (
            <>
                <div className = "courseImages">
                    <img src={courseInfo.course.splash_img} className='splash_image' alt='coursePic' />
                    <img src={courseInfo.course.map_img} className='map_image' alt='mapPic' />
                </div>
                <div className = "courseText">
                    <h1 className = "courseTitle">{courseInfo.course.name}</h1>
                    <p/>
                    <div className = "courseDescription">{courseInfo.course.description}</div>
                </div>
            </>
        )
    }

    return (
        <div className = "CourseViewMain">
            <div>
                {courseInfo.course && courseDescription()}

                <div className = "CommentsAndRecordsContainer">
                    <div className = "commentsMain">
                        {courseInfo.comments && courseInfo.comments.map(comment => (
                            <div>
                                <div>User: {comment.user_id}</div>
                                <div>Course: {comment.course_id}</div>
                                <div>Content: {comment.content}</div>
                            </div>
                        ))}
                    </div>
                    <div className = "recordsMain"> 
                        {courseInfo.records && courseInfo.records.map(record => (
                            <div>
                                <div>User: {record.user_id}</div>
                                <div>Course: {record.course_id}</div>
                                <div>Character: {record.character}</div>
                                <div>Time: {record.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
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
        </div>

    )
}
export default CourseView;
