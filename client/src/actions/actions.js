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
};

// submit
const sendData = async (data) => {

};

// load gallery

const fetchGallery = async () => {
    const images_json = await axios(domain + `/images`); // get image json data
    return ({
        type: "LOADED",
        images: images_json.data
    })
};

const selectImage = async (image) => {
    return ({
        type: 'SELECT',
        selected: image
    })
};

const actions = {
    fetchInitial,
    sendData,
    toggleDisease,
    fetchGallery,
    selectImage
};

export default actions; 