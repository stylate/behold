import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GalleryActions } from '../actions';
import { Grid } from 'semantic-ui-react';
import { Gallery, ImageView } from '../components';

export const GalleryContainer = (props) => {
    const { resetToggles } = props;
    const dispatch = useDispatch();
    const imageState = useSelector(state => state.imageReducer);
    const selectImage = (image) => dispatch(GalleryActions.selectImage(image));

    const images = imageState.images;
    const selectedImage = images[imageState.selected];

    const galleryProps = { images, selectImage, resetToggles };

    return (
        <Grid columns={2} relaxed="very">
            <Grid.Column width={3}>
                <Gallery {...galleryProps}/>
            </Grid.Column>
            <Grid.Column>
                {selectedImage &&
                    <ImageView item={selectedImage} />
                }
            </Grid.Column>
        </Grid>
    )
}