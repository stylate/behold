import React from 'react';
import styled from 'styled-components';
import { Checkbox, Grid } from 'semantic-ui-react'

const Text = styled.p``;
const Wrapper = styled.div``;

const ReportItem = (props) => {
    const { item, toggle } = props;
    const toggleItem = () => {
        toggle(item.id)
    };
    return (
        <Grid>
            <Grid.Column key={1} width={5}><Text>{item.id}</Text></Grid.Column>
            <Grid.Column key={2}><Checkbox toggle onChange={toggleItem}>{item.exists}</Checkbox></Grid.Column>
        </Grid>
    );
}

export default ReportItem;