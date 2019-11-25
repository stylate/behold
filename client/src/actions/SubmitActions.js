import axios from 'axios';

const domain = `http://localhost:8000`;

/* Return to the initial state for the submit reducer. */
const resetData = () => {
    return {
        type: 'RESET'
    }
}

/* Initialize the state with the current image's ID. */
const initData = (id) => {
    return {
        type: 'INIT',
        uid: id
    }
}

/* Perform a POST request to /images/:id while setting the state. */
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

/* Remove or append a class to the state depending on the toggle. */
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