import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GalleryActions, SubmitActions } from '../actions';
import { Grid } from 'semantic-ui-react';
import { Gallery, ImageView } from '../components';

export const GalleryContainer = (props) => {
    const { resetToggles } = props;
    const dispatch = useDispatch();
    const galleryState = useSelector(state => state.galleryReducer);

    const selectImage = (image) => dispatch(GalleryActions.selectImage(image));
    const initData = (id) => dispatch(SubmitActions.initData(id));

    const images = galleryState.images;
    const selectedImage = images[galleryState.selected];

    const galleryProps = { images, selectImage, resetToggles };

    return (
        <Grid columns={2} relaxed="very">
            <Grid.Column width={3}>
                <Gallery {...galleryProps}/>
            </Grid.Column>
            <Grid.Column>
                {selectedImage &&
                    <ImageView item={selectedImage} init={initData} />
                }
            </Grid.Column>
        </Grid>
    )
}