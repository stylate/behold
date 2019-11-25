import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const domain = `http://localhost:8000`;

const ImageBox = styled.div`
    margin-top: 10%;
    padding-left: 30%;
`;

const CustomImage = styled(Image)`
    &:hover .overlay {
        opacity: 0.3;
    }
`;

const Overlay = styled.div`
    opacity: 1;
    transition: .5s ease;
    background-color: teal;
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
            <Overlay>
                <CustomImage bordered src={absolutePath} onClick={selectImage} size='huge' />
            </Overlay>
        </ImageBox>
    )
}

export default Thumbnail;