import React from 'react';
import Thumbnail from './Thumbnail';
import ImageView from './ImageView';

import { Grid } from 'semantic-ui-react';

export const Gallery = (props) => {
    const { imageState, selectImage, resetToggles } = props;
    const images = imageState.images;
    const selectedImage = images[imageState.selected];
    return (
        <Grid columns={2} relaxed="very">
            <Grid.Column width={3}>
                {images &&
                    Object.keys(images).map((key) => {
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