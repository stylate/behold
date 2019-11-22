import React from 'react';
import styled from 'styled-components';
import { Checkbox, Grid } from 'semantic-ui-react'

const Text = styled.p``;

const ReportItem = (props) => {
    const { item, toggle } = props;
    console.log("item: ", item);
    const toggleItem = () => {
        toggle(item.id)
    };
    return (
        <Grid>
            <Grid.Column key={1} width={3}><Text>{item.id}</Text></Grid.Column>
            <Grid.Column key={2}><Checkbox toggle defaultChecked={item.exists} onChange={toggleItem}/></Grid.Column>
        </Grid>
    );
}

export default ReportItem;