import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createCommentThunk } from '../../store/courseInfo'
// import { useParams } from 'react-router-dom';
// import './AddReviewForm.css';

const AddCommentForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const courseInfo = useSelector((state) => state.courseInfo)
    // console.log(courseInfo)
    const dispatch = useDispatch();

    // const [course_id, setCourse_id] = useState(courseInfo.course.id);
    const [content, setContent] = useState();
    // console.log(+listing)

    // const createUserId = (e) => setUser_id(e.target.value);
    // const createCourse_Id = (e) => setCourse_id(e.target.value);
    const createContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addComment = {
           user_id: sessionUser.id,
           course_id:courseInfo.course.id,
           content
        };
        await dispatch(createCommentThunk(addComment))

    };

    return (
        <div className='comment-form-div'>
            <form className='comment-form' onSubmit={handleSubmit}>
                <label className="content">How does this course make you feel?
                    <input type="text" onChange={createContent}/>
                </label>

                <button className='commentSubmit__button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddCommentForm;
