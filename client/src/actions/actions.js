import axios from 'axios';

const fetchInitial = async () => {
    const result = await axios(`http://localhost:8000/diseases`);
    return setData(result.data);
}

const setData = (data) => {
    const objects = data.map((disease) => {
        return {
            id: disease,
            exists: false
        };
    })
    return ({
        type: "INITIAL",
        payload: objects
    })
}

const sendData = async (data) => {

}

const actions = {
    fetchInitial,
    sendData
};

export default actions; 