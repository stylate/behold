const initialState = {
    images: {},
    selected: 0
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED':
            return {...state, images: action.images};
        case 'SELECT':
            return {...state, selected: action.selected};
        case 'INCREMENT':
            return {...state, selected: Math.min(state.selected + 1, state.images.length)};
        default:
            return state;
    }
}

export default imageReducer;