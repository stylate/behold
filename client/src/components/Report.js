import React from 'react';
import styled from 'styled-components';
import ReportItem from './ReportItem';
import { Button } from 'semantic-ui-react';

const Container = styled.div``;

const List = styled.div``;

const Submit = styled.div``;

// image + select state used for submit button

export const Report = (props) => {
    const { diseases, toggle, resetToggles } = props;
    return (
        <Container>
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