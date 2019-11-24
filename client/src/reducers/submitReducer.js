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
        case 'APPEND':
            return {
                ...state,
                classes: state.classes.concat(action.value)
            }
        default:
            return state
    }
}

export default submitReducer;