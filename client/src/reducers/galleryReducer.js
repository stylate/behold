const initialState = {
    images: {},
    selected: 0
}

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED':
            return {...state, images: action.images};
        case 'SELECT':
            return {...state, selected: action.selected};
        case 'INCREMENT':
            return {...state, selected: Math.min(state.selected + 1, Object.keys(state.images).length - 1)};
        default:
            return state;
    }
}

export default galleryReducer;