// GET /diseases to get initial state
const initialState = {
    options: []
}

const toggle = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL':
            return { ...state, options: action.payload };
        case 'TOGGLE':
            return {
                ...state,
                exists: disease.id === action.id ? !disease.exists : disease.exists
            }
        case 'RESET':
            return {
                ...state,
                exists: disease.id === 'Normal' ? true : false
            }
        default:
            return state;
    }
}

export default toggle;