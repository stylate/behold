import React from 'react';
import styled from 'styled-components';
import ReportItem from './ReportItem';
import { Button } from 'semantic-ui-react';

const Container = styled.div`
    margin-top: 5%;
    margin-left: -16%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    border-radius: 5px; 
`;
const Header = styled.h2`
    font-size: 17px;
`;

const List = styled.div``;

const Submit = styled.div``;

// image + select state used for submit button

export const Report = (props) => {
    const { diseases, imageState, toggle, resetToggles } = props;
    const imageName = imageState.images[imageState.selected];
    console.log("fileName: ", imageName)
    return (
        <Container>
            {imageName &&
                <Header>Report for {imageName.Filename}</Header>}
            <List>
                {diseases &&
                    diseases.map((disease) => {
                        return <ReportItem item={disease} toggle={toggle}/>;
                    })}
            </List>
            <Submit>

            </Submit>
        </Container>
    )
}