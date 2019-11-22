import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import ImageView from './ImageView';

const Thumbnails = styled.div``;
const Wrapper = styled.div``;
const MainImage = styled.div``;

export const Gallery = (props) => {
    const { imageState, selectImage, resetToggles } = props;
    const images = imageState.images;
    const selectedImage = images[imageState.selected];
    return (
        <Wrapper>
            <Thumbnails>
                {images &&
                    Object.keys(images).map((key, index) => {
                        return <Thumbnail index={key} item={images[key]} select={selectImage} reset={resetToggles}/>;
                })}
            </Thumbnails>
            <MainImage>
                {selectedImage &&
                    <ImageView item={selectedImage} />
                }
            </MainImage>
        </Wrapper>
    )
};