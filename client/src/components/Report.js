import React from 'react';
import styled from 'styled-components';
import ReportItem from './ReportItem';
import { Button } from 'semantic-ui-react';

const Container = styled.div``;
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