import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import Metadata from './Metadata';

const domain = `http://localhost:8000`;

const Wrapper = styled.div``;
const ImageBox = styled.div``;
const MetaBox = styled.div``;
const List = styled.ul``;
const ListElement = styled.li``;

const ImageView = (props) => {
    const { item } = props;
    const absolutePath = domain + '/images/' + item.Filename;
    const meta = item.Metadata;
    return (
        <Wrapper>
            <ImageBox>
                <Image src={absolutePath} />
            </ImageBox>
            <MetaBox>
                <List>
                    {meta &&
                        Object.keys(meta).map((key, i) => {
                            return <ListElement>{key} {meta[key]}</ListElement>
                        })
                    }
                </List>
            </MetaBox>
        </Wrapper>
    )
};

export default ImageView;