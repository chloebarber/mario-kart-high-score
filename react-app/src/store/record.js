const ADD_RECORD = 'record/ADD_RECORD';


const addRecord = (record) => ({
    type: ADD_RECORD,
    record
})

export const createRecord = record => async (dispatch) => {
    const response = await fetch(`/api/record/`, {
        method: "POST",
        headers: {
            "Content-Type": "applicaton/json"
        },
        body: JSON.stringify(record)
    })

    if (response.ok) {
        const newRecord = await response.json()
        dispatch(addRecord(newRecord))

    }

}


const initialState = {}

export default function records(state = initialState, action) {
    // let updatedState = { ...state }
    // let newState;
    switch (action.type) {
        case ADD_RECORD: {
            const newAddRecord = {...state}
            newAddRecord[action.record.id] = action.record
            console.log(newAddRecord)
            return newAddRecord
        }

        // case ADD_RECORD: {
        //     newState = {}
        //     newState[action.record.id] = action.record
        //     return newState;
        //     // updatedState.current.record[action.record] = action.record
        //     // return updatedState
        // }
        default:
            return state
    }
}
