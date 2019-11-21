import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import ImageView from './ImageView';

const Thumbnails = styled.div``;
const Wrapper = styled.div``;
const MainImage = styled.div``;

export const Gallery = (props) => {
    const { imageState, selectImage } = props;
    const images = imageState.images;
    const selectedImage = imageState.selected;
    console.log("images: ", images);
    return (
        <Wrapper>
            <Thumbnails>
                {images &&
                    images.map((image) => {
                        return <Thumbnail item={image} select={selectImage}/>;
                })}
            </Thumbnails>
            <MainImage>
                <ImageView item={selectedImage} />
            </MainImage>
        </Wrapper>
    )
};