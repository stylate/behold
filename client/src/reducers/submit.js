const initialState = {
    diseases: [],
    timestamp: new Date(null),
    uid: ""
}

const submit = (state = initialState, action) => {
    switch (action.type) {
        case "SUBMIT":
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default submit;