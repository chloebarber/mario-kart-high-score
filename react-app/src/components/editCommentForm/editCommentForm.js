import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editCommentThunk } from '../../store/courseInfo'
// import { useParams } from 'react-router-dom';
import './editCommentForm.css';

const EditCommentForm = (comment) => {
    const sessionUser = useSelector(state => state.session.user)
    const courseInfo = useSelector((state) => state.courseInfo)
    // console.log(courseInfo)
    const dispatch = useDispatch();

    // const [course_id, setCourse_id] = useState(courseInfo.course.id);
    const [editedContent, setEditedContent] = useState();
    // console.log(+listing)

    // const createUserId = (e) => setUser_id(e.target.value);
    // const createCourse_Id = (e) => setCourse_id(e.target.value);
    const createEditedContent = (e) => setEditedContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        comment = comment.comment //this is a terrible destructuring
        const editedComment = {
           id: comment.id,
           user_id: sessionUser.id,
           course_id:courseInfo.course.id,
           content: editedContent + " (edited)",
        };
        await dispatch(editCommentThunk(editedComment))

    };

    return (
        <div className='comment-form-div'>
            <form className='comment-form' onSubmit={handleSubmit}>
                <label className="editContent">Edit Comment
                    <input type="text" onChange={createEditedContent}/>
                </label>

                <button className='commentEdit__button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditCommentForm;
