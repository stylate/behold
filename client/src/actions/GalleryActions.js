import axios from 'axios';

const domain = `http://localhost:8000`;

/* Fetch image data for each file in /images. */
const fetchGallery = async () => {
    const images_json = await axios(domain + `/images`); // get image json data
    return ({
        type: "LOADED",
        images: Object.assign({}, images_json.data),
        selected: 0
    })
};

/* Select an image based on user input. */
const selectImage = (imageIndex) => {
    return ({
        type: 'SELECT',
        selected: imageIndex
    })
};

/* Increment the image index after submitting a report. */
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