import axios from 'axios';

const domain = `http://localhost:8000`;

const resetData = () => {
    return {
        type: 'RESET'
    }
}

const initData = (id) => {
    return {
        type: 'INIT',
        uid: id
    }
}

const sendData = async (state) => {
    const new_state = {...state, 
        date: new Date(),
        classes: state.classes.length > 0 ? state.classes : ['Normal']
    }; // POST request with this new state
    const instancePath = domain + '/images/' + new_state.uid;
    const request = await axios.post(instancePath, new_state);
    return {
        type: 'SUBMIT',
        value: new_state
    }
}

const appendClass = (disease) => {
    return {
        type: 'APPEND',
        value: [disease]
    }
}

export const SubmitActions = {
    resetData,
    initData,
    sendData,
    appendClass
};