import React from 'react';
import styled from 'styled-components';
import { Image, Grid } from 'semantic-ui-react';

const domain = `http://localhost:8000`;

const Wrapper = styled.div` 
    margin-left: 20%;

`;
const List = styled.ul`
    margin-left: -10%;
`;
const ListElement = styled.li`
    list-style: none;
    padding: 1px;
`;

const ImageView = (props) => {
    const { item } = props;
    const absolutePath = domain + '/images/' + item.Filename;
    const meta = item.Metadata;
    return (
        <Wrapper>
                <Grid.Row>
                    <Image src={absolutePath} size='massive' />
                </Grid.Row>
                <Grid.Row>
                    <List>
                        {meta &&
                            Object.keys(meta).map((key, i) => {
                                return <ListElement>{key}: {meta[key]}</ListElement>
                            })
                        }
                    </List>
                </Grid.Row>
        </Wrapper>
    )
};

export default ImageView;