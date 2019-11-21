import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const Wrapper = styled.div``;

export const Gallery = (props) => {
    const { imageState, selectImage } = props;
    const images = imageState.images;
    console.log("images: ", images);
    return (
        <Wrapper>
            {images &&
                images.map((image) => {
                    return <Thumbnail item={image} select={selectImage}/>;
            })}
        </Wrapper>
    )
};