import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseInfo } from '../../store/courseInfo'
import { useParams } from 'react-router-dom';
import AddRecordForm from '.././addRecordForm/index';
import './CourseView.css'


function CourseView() {
    const sessionUser = useSelector(state => state.session.user)

    const courseInfo = useSelector((state) => state.courseInfo)
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

    function timeConversion(time){
        let minutes = 0;
        let seconds = 0;
        let ms = 0;

        minutes = Math.floor(time/60000)
        time = time % 60000
        seconds = Math.floor(time/1000)
        time = time % 1000
        ms = time

        if (minutes < 10){
            minutes = `0${minutes}`
        }
        if (seconds < 10){
            seconds = `0${seconds}`
        }
        if (ms < 10){
            ms = `0${ms}`
        }
        else if (ms < 100){
            ms = `${ms}0`
        }

        return `${minutes}:${seconds}:${ms}`
    }

    let rankCounter = 1;
    return (

        <div className = "courseViewMain">
                {courseInfo.course && courseDescription()}
                <div className = "commentsAndRecordsContainer">
                    <div className = "commentsMain">
                    <h2>Comments</h2>
                        {courseInfo.comments && courseInfo.comments.map(comment => (
                            <div className = "comment">
                                <div>User: {comment.user_id}</div>
                                <div>Content: {comment.content}</div>
                            </div>
                        ))}
                    </div>
                    <div className = "recordsMain">
                        <h2>Records</h2>
                        {sessionRecord}
                        <table className = "recordsTable">
                            <thead className = "recordsTable">
                                <tr className = "recordsTable">
                                    <th>Rank</th>
                                    <th>User Id</th>
                                    <th>Time</th>
                                    <th>Character</th>
                                </tr>
                            </thead>
                            <tbody>
                            {courseInfo.records && courseInfo.records.map(record => (
                                <tr>
                                    <td>{rankCounter++}</td>
                                    <td>{record.user_id}</td>
                                    <td>{timeConversion(record.time)}</td>
                                    <td>{record.character}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>

    )
}
export default CourseView;
