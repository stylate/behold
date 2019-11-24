import React from 'react';
import { useSelector } from 'react-redux';
import { CurrentReport } from '../components';

export const CurrentContainer = () => {
    const imageState = useSelector(state => state.imageReducer);
    const selectedImage = imageState.images[imageState.selected];
    return (
        <div>
            {selectedImage && <CurrentReport fileName={selectedImage.Filename}/>}
        </div>
    )
}