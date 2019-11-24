import axios from 'axios';

const domain = `http://localhost:8000`;

const initData = (id) => {
    console.log("init data");
    return {
        type: 'INIT',
        uid: id
    }
}

const sendData = async (state) => {
    console.log("sending state: ", state)
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
    initData,
    sendData,
    appendClass
};