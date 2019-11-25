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
    const new_state = {...state, 
        date: new Date(),
        classes: Array.from(state.classes)
    }; // POST request with this new state
    console.log("sending state: ", new_state)
    const instancePath = domain + '/images/' + new_state.uid;
    const request = await axios.post(instancePath, new_state);
    return {
        type: 'RESET'
    }
}

const updateClasses = (disease, exists) => {
    if (exists) { // if class exists, then remove from class
        return removeClass(disease);
    } else {
        return appendClass(disease);
    }
}

const appendClass = (disease) => {
    return {
        type: 'APPEND',
        value: [disease]
    }
}

const removeClass = (disease) => {
    return {
        type: 'REMOVE',
        value: [disease]
    }
}

export const SubmitActions = {
    initData,
    sendData,
    updateClasses
};