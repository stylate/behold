const initialState = {
    date: 0,
    uid: "",
    classes: new Set(['Normal'])
}

const submitReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET':
            return initialState;
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
                classes: new Set([...state.classes, ...action.value])
            }
        case 'REMOVE':
            let new_state = new Set([...state. classes]);
            new_state.delete(...action.value)
            return {
                ...state,
                classes: new_state
            }
        default:
            return state
    }
}

export default submitReducer;