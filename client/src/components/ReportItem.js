import React from 'react';
import styled from 'styled-components';
import { Checkbox, Grid } from 'semantic-ui-react'

const Text = styled.p`
    font-family: "Source Sans Pro", sans-serif;
`;
const Wrapper = styled.div`
    margin-top: 0;
`;

const ReportItem = (props) => {
    const { item, toggle, updateClasses } = props;
    const toggleItem = () => {
        toggle(item.id);
        updateClasses(item.id, item.exists);
    };
    return (
        <Wrapper>
            <Grid>
                <Grid.Column key={1} width={9}><Text>{item.id}</Text></Grid.Column>
                <Grid.Column key={2}><Checkbox toggle checked={item.exists} onClick={toggleItem}/></Grid.Column>
            </Grid>
        </Wrapper>
    );
}

export default ReportItem;