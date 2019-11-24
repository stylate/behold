import React from 'react';
import { useSelector } from 'react-redux';
import { CurrentReport } from '../components';

export const CurrentContainer = () => {
    const galleryState = useSelector(state => state.galleryReducer);
    const selectedImage = galleryState.images[galleryState.selected];
    return (
        <div>
            {selectedImage && <CurrentReport fileName={selectedImage.Filename}/>}
        </div>
    )
}