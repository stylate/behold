import React from 'react';
import styled from 'styled-components';
import ReportItem from './ReportItem';

const Container = styled.div``;

const List = styled.div``;

const Submit = styled.div``;

const Report = (props) => {
    const { diseases, toggle } = props;
    return (
        <Container>
            <List>
                {diseases &&
                    diseases.map((disease) => {
                        return <ReportItem item={disease} toggle={toggle}/>;
                    })}
            </List>
        </Container>
    )
}

export default Report;