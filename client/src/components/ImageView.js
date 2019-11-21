import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import Metadata from './Metadata';

const domain = `http://localhost:8000`;

const Wrapper = styled.div``;
const ImageBox = styled.div``;
const MetaBox = styled.div``;

const ImageView = (props) => {
    const { item } = props;
    const absolutePath = domain + '/images/' + item.Filename;
    const meta = item.metadata;
    return (
        <Wrapper>
            <ImageBox></ImageBox>
            <MetaBox></MetaBox>
        </Wrapper>
    )
};

export default ImageView;