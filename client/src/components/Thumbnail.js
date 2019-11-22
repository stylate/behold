import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const domain = `http://localhost:8000`;

const ImageBox = styled.div``;

const Thumbnail = (props) => {
    const { index, item, select } = props;
    const absolutePath = domain + '/images/' + item.Filename;
    const selectImage = () => {
        select(index);
    };
    return (
        <ImageBox>
            <Image src={absolutePath} onClick={selectImage} size='small' />
        </ImageBox>
    )
}

export default Thumbnail;