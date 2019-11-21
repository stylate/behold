const initialState = {
    images: [],
    selected: {}
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED':
            return {...state, images: action.images};
        case 'SELECT':
            return {...state, selected: action.selected};
        default:
            return state;
    }
}

export default imageReducer;