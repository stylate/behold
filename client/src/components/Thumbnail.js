import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const domain = `http://localhost:8000`;

const ImageBox = styled.div`
    margin-top: 30%;
    padding-left: 30%;
`;

const Thumbnail = (props) => {
    const { index, item, select, reset } = props;
    const absolutePath = domain + '/images/' + item.Filename;
    const selectImage = () => {
        select(index);
        reset();
    };
    return (
        <ImageBox>
            <Image src={absolutePath} onClick={selectImage} size='medium' />
        </ImageBox>
    )
}

export default Thumbnail;