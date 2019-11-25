import React from 'react';
import styled from 'styled-components';
import { Checkbox, Grid } from 'semantic-ui-react'

const Text = styled.p``;

const ReportItem = (props) => {
    const { item, toggle, updateClasses } = props;
    const toggleItem = () => {
        toggle(item.id);
        updateClasses(item.id, item.exists);
    };
    return (
        <Grid>
            <Grid.Column key={1} width={9}><Text>{item.id}</Text></Grid.Column>
            <Grid.Column key={2}><Checkbox toggle checked={item.exists} onClick={toggleItem}/></Grid.Column>
        </Grid>
    );
}

export default ReportItem;