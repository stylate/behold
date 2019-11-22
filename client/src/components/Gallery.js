import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import ImageView from './ImageView';

import { Grid } from 'semantic-ui-react';

const Thumbnails = styled.div``;
const Wrapper = styled.div``;
const MainImage = styled.div``;

export const Gallery = (props) => {
    const { imageState, selectImage, resetToggles } = props;
    const images = imageState.images;
    const selectedImage = images[imageState.selected];
    return (
        <Grid columns={2} relaxed="very">
            <Grid.Column width={3}>
                {images &&
                    Object.keys(images).map((key, index) => {
                        return (
                            <Grid.Row>
                                <Thumbnail index={key} item={images[key]} select={selectImage} reset={resetToggles}/>
                            </Grid.Row>
                        );
                })}
            </Grid.Column>
            <Grid.Column>
                {selectedImage &&
                    <ImageView item={selectedImage} />
                }
            </Grid.Column>
        </Grid>
    )
};