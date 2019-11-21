import axios from 'axios';

const fetchInitial = async () => {
    const result = await axios(`http://localhost:8000/diseases`);
    return setData(result.data);
};

const toggleDisease = (disease) => ({
    type: 'TOGGLE',
    id: disease.id
});

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
    const images_json = await axios(`http://localhost:8000/images`); // get image json data
    return ({
        type: "LOADED",
        images_json
    })
};

const selectImage = async (image) => {
    return ({
        type: 'SELECT',
        image
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