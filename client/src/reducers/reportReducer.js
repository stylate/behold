// GET /diseases to get initial state
const initialState = {
    options: []
}

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL':
            return { ...state, options: action.payload };
        case 'TOGGLE':
            return {
                ...state,
                options: state.options.map( (item) => {
                    return {
                        ...item,
                        exists: item.id === action.id ? !item.exists : item.exists
                    }
                })
            }
        case 'RESET':
                return {
                    ...state,
                    options: state.options.map( (item) => {
                        return {
                            ...item,
                            exists: item.id === 'Normal' ? true : false
                        }
                    })
                }
        default:
            return state;
    }
}

export default reportReducer;