import axios from 'axios';

const domain = `http://localhost:8000`;

const fetchInitial = async () => {
    const result = await axios(domain + `/diseases`);
    return setData(result.data.diseases);
};

const toggleDisease = (disease) => {
    return {
        type: 'TOGGLE',
        id: disease
    }
}

const setData = (data) => {
    const obj = Object.assign({}, 
        data.map(item => (
            {[item]: item === 'Normal' ? true : false}))
    );
    console.log("obj: ", obj)
    const objects = data.map((disease) => {
        return {
            id: disease,
            exists: disease === 'Normal' ? true : false
        };
    })
    return ({
        type: "INITIAL",
        payload: objects
    })
};

const resetToggles = () => {
    console.log("resetting...");
    return ({
        type: "RESET"
    })
}

// submit
const sendData = async (data) => {

};

export const ReportActions = {
    fetchInitial,
    sendData,
    toggleDisease,
    resetToggles
}; 