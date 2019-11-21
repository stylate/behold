const initialState = {
    image: {}
}

const image = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT':
            return {...state, image: action.payload}
        default:
            return state;
    }
}

export default image;