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
        classes: Array.from(state.classes)
    }; // POST request with this new state
    console.log("new state: ", new_state)
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