import axios from 'axios';

const domain = `http://localhost:8000`;

const sendData = async (data) => {
    const uid = data.uid;
    const request = await axios.post(domain + uid, data);
    return {

    }
}

const appendClass = (disease) => {
    return {
        type: 'APPEND',
        value: disease
    }
}

export const SubmitActions = {
    sendData,
    appendClass
};