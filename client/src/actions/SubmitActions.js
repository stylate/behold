import axios from 'axios';

const domain = `http://localhost:8000`;

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
    console.log("new state: ", new_state);
    const instancePath = domain + '/' + new_state.uid;
    console.log("instance path: ", instancePath);
    const request = await axios.post(instancePath, new_state);
    console.log("request: ", request);
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
    initData,
    sendData,
    appendClass
};