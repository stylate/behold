import axios from 'axios';

const domain = `http://localhost:8000`;

const fetchGallery = async () => {
    const images_json = await axios(domain + `/images`); // get image json data
    return ({
        type: "LOADED",
        images: Object.assign({}, images_json.data),
        selected: 0
    })
};

const selectImage = (imageIndex) => {
    return ({
        type: 'SELECT',
        selected: imageIndex
    })
};

const nextImage = () => {
    return ({
        type: "INCREMENT"
    })
};

export const GalleryActions = {
    fetchGallery,
    selectImage,
    nextImage
};