import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createRecordThunk } from '../../store/courseInfo'
// import './AddReviewForm.css';

const AddRecordForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const courseInfo = useSelector((state) => state.courseInfo)
    // console.log(courseInfo)
    const dispatch = useDispatch();

    // const [course_id, setCourse_id] = useState(courseInfo.course.id);
    const [time, setTime] = useState();
    const [character, setCharacter] = useState()
    // console.log(+listing)

    // const createUserId = (e) => setUser_id(e.target.value);
    // const createCourse_Id = (e) => setCourse_id(e.target.value);
    const createTime = (e) => setTime(e.target.value);
    const createCharacter = (e) => setCharacter(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addRecord = {
           user_id: sessionUser.id,
           course_id:courseInfo.course.id,
           time: +time,
           character
        };
        await dispatch(createRecordThunk(addRecord))

    };

    return (
        <div className='record-div'>
            <form className='record-form' onSubmit={handleSubmit}>
                <label className="time">Enter your time:
                    <input type="integer" onChange={createTime}/>
                </label>

                <label className="character">Enter your character:
                    <input type="text" onChange={createCharacter}/>
                </label>

                <button className='recordSubmit__button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddRecordForm;
