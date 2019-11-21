import React from 'react';
import styled from 'styled-components';

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
                        return <ReportItem item={disease.id} toggle={toggle}/>;
                    })}
            </List>

            <Submit>
                <button onClick={submit}>Submit Report</button>
            </Submit>
        </Container>
    )
}

export default Report;