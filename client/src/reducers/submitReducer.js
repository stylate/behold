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
            console.log("initial state: ", initialState);
            return {
                ...initialState,
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
            let new_state = new Set([...state.classes])
            new_state.delete(...action.value)
            console.log("new state: ", new_state)
            return {
                ...state,
                classes: new_state
            }
        case 'DELETE':

        default:
            return state
    }
}

export default submitReducer;