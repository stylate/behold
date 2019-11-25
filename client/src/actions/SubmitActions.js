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
    const instancePath = domain + '/images/' + new_state.uid;
    await axios.post(instancePath, new_state);
    return {
        type: 'SUBMIT',
        value: new_state
    }
}

const updateClasses = (disease, exists) => {
    if (exists) {
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
    resetData,
    initData,
    sendData,
    updateClasses
};