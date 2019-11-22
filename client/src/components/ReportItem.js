import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

const Text = styled.p``;
const Wrapper = styled.div``;

const ReportItem = (props) => {
    const { item, toggle } = props;
    const toggleItem = () => {
        toggle(item.id)
    };
    return (
        <Wrapper>
            <Text>{item.id}</Text>
            <Button onClick={toggleItem}>{item.exists}</Button>
        </Wrapper>
    );
}

export default ReportItem;