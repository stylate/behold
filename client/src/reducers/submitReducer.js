const initialState = {
    date: 0,
    uid: "",
    classes: []
}

const submitReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return {
                ...state,
                date: action.date,
                uid: action.uid,
                classes: action.classes
            }
        default:
            return state
    }
}

export default submitReducer;