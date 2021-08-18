import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createRecord } from '../../store/record'
// import './AddReviewForm.css';

const AddRecordForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const courseInfo = useSelector((state) => state.courseInfo)

    const dispatch = useDispatch();

    const [user_id, setUser_id] = useState(sessionUser.id);
    const [course_id, setCourse_id] = useState(courseInfo.id);
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
           user_id,
           course_id,
           time,
           character
        };

        await dispatch(createRecord(addRecord))

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
