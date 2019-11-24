const initialState = {
    date: 0,
    uid: "",
    classes: []
}

const submitReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                uid: action.uid
            }
        case 'SUBMIT':
            return {
                ...state,
                uid: action.value.uid,
                date: action.value.date,
                classes: action.value.classes
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