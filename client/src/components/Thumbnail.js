import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const domain = `http://localhost:8000`;

const ImageBox = styled.div`
    margin-top: 10%;
    padding-left: 30%;
`;

const CustomImage = styled(Image)`
    &:hover {
        background-color: teal !important;
    }
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
            <CustomImage bordered src={absolutePath} onClick={selectImage} size='huge' />
        </ImageBox>
    )
}

export default Thumbnail;