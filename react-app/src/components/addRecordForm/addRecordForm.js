import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createRecordThunk } from '../../store/courseInfo'
import './AddRecordForm.css';

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
                <div className='time-div'>
                    <label className="time">
                        <input type="integer" placeholder="Enter your time in milliseconds" onChange={createTime}/>
                    </label>
                </div>
                <label>Select a character: </label>
                <div className="select-list">
                    <select className="list-select" value={character} onChange={createCharacter}>
                        <option value='Mario'>Mario</option>
                        <option value='Luigi'>Luigi</option>
                        <option value='Peach'>Peach</option>
                        <option value='Daisy'>Daisy</option>
                        <option value='Rosalina'>Rosalina</option>
                        <option value='Tanuki-Mario'>Tanuki-Mario</option>
                        <option value='Cat-Peach'>Cat-Peach</option>
                        <option value='Yoshi'>Yoshi</option>
                        <option value='Toad'>Toad</option>
                        <option value='Koopa'>Koopa</option>
                        <option value='Shyguy'>Shyguy</option>
                        <option value='Lakitu'>Lakitu</option>
                        <option value='Toadette'>Toadette</option>
                        <option value='King-Boo'>King-Boo</option>
                        <option value='Baby-Mario'>Baby-Mario</option>
                        <option value='Baby-Luigi'>Baby-Luigi</option>
                        <option value='Baby-Peach'>Baby-Peach</option>
                        <option value='Baby-Daisy'>Baby-Daisy</option>
                        <option value='Baby-Rosalina'>Baby-Rosalina</option>
                        <option value='Metal-Mario'>Metal-Mario</option>
                        <option value='Gold-Peach'>Gold-Peach</option>
                        <option value='Wario'>Wario</option>
                        <option value='Waluigi'>Waluigi</option>
                        <option value='DK'>DK</option>
                        <option value='Bowser'>Bowser</option>
                        <option value='Dry-Bones'>Dry-Bones</option>
                        <option value='Bowser-Jr'>Bowser-Jr</option>
                        <option value='Dry-Bowser'>Dry-Bowser</option>
                        <option value='Lemmy'>Lemmy</option>
                        <option value='Larry'>Larry</option>
                        <option value='Wendy'>Wendy</option>
                        <option value='Ludwig'>Ludwig</option>
                        <option value='Iggy'>Iggy</option>
                        <option value='Roy'>Roy</option>
                        <option value='Morton'>Morton</option>
                        <option value='Splatoon-G'>Splatoon-G</option>
                        <option value='Splatoon-B'>Splatoon-B</option>
                        <option value='Link'>Link</option>
                        <option value='Animal-G'>Animal-G</option>
                        <option value='Isabelle'>Isabelle</option>
                        <option value='Mii'>Mii</option>
                    </select>
                </div>
                <button className='recordSubmit__button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddRecordForm;
