import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createRecord } from '../../store/record'
// import './AddReviewForm.css';

const AddRecordForm = ({ user, listing }) => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [user_id, setUser_id] = useState(sessionUser.id);
    const [course_id, setCourse_id] = useState();
    const [time, setTime] = useState();
    const [character, setCharacter] = useState()
    // console.log(+listing)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addRecord = {
            review,
            userId: user.id,
            spotId: +listing
        };
        await dispatch(createRecord(addRecord))
        setReview('');
    };

    return (
        <div className='form__container2'>
            <form className='review__form2' onSubmit={handleSubmit}>
                <textarea
                    className='review-text-area'
                    type='text'
                    placeholder='Tell us about your stay...'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <button className='reviewSubmit__button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddReviewForm;
