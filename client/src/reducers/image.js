const initialState = {
    images: [],
    selected: {}
}

const image = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED':
            return {...state, images: action.images};
        case 'SELECT':
            return {...state, selected: action.image};
        default:
            return state;
    }
}

export default image;