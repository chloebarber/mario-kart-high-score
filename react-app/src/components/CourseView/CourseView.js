import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourseInfo, deleteCommentThunk, deleteRecordThunk } from '../../store/courseInfo'
import { useParams } from 'react-router-dom';
import AddRecordForm from '../addRecordForm/addRecordForm';
import AddCommentForm from '../addCommentForm/addCommentForm';
import EditCommentForm from '../editCommentForm/editCommentForm';
// import { deleteComment } from '../../store/comment';
// import { deleteRecord } from '../../store/record';
import './CourseView.css'


function CourseView() {
    const sessionUser = useSelector(state => state.session.user)

    const courseInfo = useSelector((state) => state.courseInfo)


    const dispatch = useDispatch()
    const { courseId } = useParams();

    useEffect(() => {
        dispatch(getCourseInfo(courseId))
    }, [dispatch, courseId]);

    let sessionRecord;
    let sessionComment;

    function handleDeleteComment(e, commentIdToDelete) {
        e.preventDefault();
        return dispatch(deleteCommentThunk(commentIdToDelete))
            .catch(async (res) => {
                await res.json();
            });
    }

    function handleDeleteRecord(e, recordIdToDelete) {
        e.preventDefault();
        return dispatch(deleteRecordThunk(recordIdToDelete))
            .catch(async (res) => {
                await res.json();
            });
    }

    function userCommentOptions(sessionUser, comment) {
        if (sessionUser && (sessionUser.id === comment.user_id)) {
            return (
                <>
                    <EditCommentForm comment={comment} />
                    <button className="deleteCommentButton" onClick={(e) => handleDeleteComment(e, comment.id)}>Delete</button>
                </>
            )
        }
    }
    function userRecordOptions(sessionUser, record) {
        if (sessionUser && (sessionUser.id === record.user_id)) {
            return (
                <td>
                    <button className='recordDeleteButton' onClick={(e) => handleDeleteRecord(e, record.id)}>❌</button>
                </td>
            )
        }
    }



    if (sessionUser) {
        sessionRecord = (
            <>
                <AddRecordForm />
            </>
        )
        sessionComment = (
            <AddCommentForm />
        )
    } else {
        sessionRecord = (
            <>
                <h2 className='loginToUse'>-Log in to post a new record-</h2>
            </>
        )
        sessionComment = (
            <>
                <h2 className='loginToUse'>-Log in to leave a comment-</h2>
            </>
        )
    }

    function courseDescription() {
        return (
            <>
                <div className="courseImages">
                    <img src={courseInfo.course.splash_img} className='splash_image' alt='coursePic' />
                    <img src={courseInfo.course.map_img} className='map_image' alt='mapPic' />
                </div>
                <div className="courseText">
                    <h1 className="courseTitle">{courseInfo.course.name}</h1>
                    <p />
                    <div className="courseDescription">{courseInfo.course.description}</div>
                </div>
            </>
        )
    }

    function timeConversion(time) {
        let minutes = 0;
        let seconds = 0;
        let ms = 0;

        minutes = Math.floor(time / 60000)
        time = time % 60000
        seconds = Math.floor(time / 1000)
        time = time % 1000
        ms = time

        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        if (ms < 10) {
            ms = `0${ms}`
        }
        else if (ms < 100) {
            ms = `${ms}0`
        }

        return `${minutes}:${seconds}:${ms}`
    }

    let rankCounter = 1;
    return (

        <div className="courseViewMain">
            {courseInfo.course && courseDescription()}
            <div className="commentsAndRecordsContainer">
                <div className="commentsMain">
                    <h2>🍄 COMMENTS 🍄</h2>
                    {sessionComment}
                    {courseInfo.comments && courseInfo.comments.map(comment => (
                        <div className="comment-div">
                            <div className="commentFormTitle">User: {comment.user_id}</div>
                            <div className='timeStamp'>🕑 {new Date(comment.created_at).toLocaleString()}</div>
                            <div className="commentFormContent">{comment.content}</div>
                            {userCommentOptions(sessionUser, comment)}
                        </div>
                    ))}
                </div>
                <div className="recordsMain">
                    <h2>🏁 RECORDS 🏁</h2>
                    {sessionRecord}
                    <table className="recordsTable">
                        <thead className="recordsTable">
                            <tr className="recordsTable">
                                <th>Rank🥇</th>
                                <th>User Id</th>
                                <th>Time⏱</th>
                                <th>Character</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseInfo.records && courseInfo.records.sort(function (a, b){return a.time - b.time}) && courseInfo.records.map(record => (
                                <tr>
                                    <td>{rankCounter++}</td>
                                    <td><a href={`/users/${record.user_id}`}>{record.user_id}</a></td>
                                    <td>{timeConversion(record.time)}</td>
                                    <td>{record.character}</td>
                                    {userRecordOptions(sessionUser, record)}
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
