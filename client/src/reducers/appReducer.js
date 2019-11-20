// GET /diseases to get initial state
const initialState = {
    options: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL':
            return {
                options: action.payload
            };
        case 'TOGGLE':
            return state.map(disease =>
                disease.id === action.id ? { ...disease, exists: !disease.exists } : disease);
        case 'RESET':
            return state.map(disease =>
                    disease.id === 'Normal' ? { ...disease, exists: true } : { ...disease, exists: false });
        default:
            return state;
    }
}

export default appReducer;