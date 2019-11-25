import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const domain = `http://localhost:8000`;

const Wrapper = styled.div` 
    margin-left: 10%;
`;

const MetaBox = styled.div`
    margin-top: 5%;
    width: 45vw;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    border-radius: 5px; 
`;

const Header = styled.h2`
    font-size: 18px;
`;

const List = styled.ul`
    padding-left: 0;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
`;

const ListElement = styled.li`
    list-style: none;
    padding: 1px;
`;

const Image = styled.img`
    height: 100%;
    width: 125%;
`;

export const ImageView = (props) => {
    const { item, init } = props;
    const absolutePath = domain + '/images/' + item.Filename;
    const meta = item.Metadata;
    init(meta['SOPInstanceUID']);
    return (
        <Wrapper>
            <Grid.Row>
                <Image src={absolutePath} />
            </Grid.Row>
            <MetaBox>
                <Grid.Row>
                    <Header>Metadata</Header>
                    <List>
                        {meta &&
                            Object.keys(meta).map((key, i) => {
                                return <ListElement key={key}>{key}: {meta[key]}</ListElement>
                            })
                        }
                    </List>
                </Grid.Row>
            </MetaBox>
        </Wrapper>
    )
};