import axios from 'axios';

const domain = `http://localhost:8000`;

/* Fetch the disease classes available from /diseases. */
const fetchInitial = async () => {
    const result = await axios(domain + `/diseases`);
    return setData(result.data.diseases);
};

/* Set a disease class to true or false. */
const toggleDisease = (disease) => {
    return {
        type: 'TOGGLE',
        id: disease
    }
}

/* Initialize the boolean values for each disease class. */
const setData = (data) => {
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

/* Return to the initial state for the reducer. */
const resetToggles = () => {
    return ({
        type: "RESET"
    })
}

export const ReportActions = {
    fetchInitial,
    toggleDisease,
    resetToggles
}; 