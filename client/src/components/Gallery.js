import React from 'react';
import Thumbnail from './Thumbnail';

import { Grid } from 'semantic-ui-react';

export const Gallery = (props) => {
    const { images, selectImage, resetToggles } = props;
    return (
        <div>
            {images &&
                Object.keys(images).map((key) => {
                    return (
                        <Grid.Row key={parseInt(key)}>
                            <Thumbnail key={parseInt(key)} index={parseInt(key)} item={images[key]} select={selectImage} reset={resetToggles}/>
                        </Grid.Row>
                    );
            })}
        </div>
    )
};