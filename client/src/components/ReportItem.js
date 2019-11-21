import React from 'react';
import styled from 'styled-components';

const Text = styled.p``;
const Wrapper = styled.div``;
const Toggle = styled.button``;

const ReportItem = (props) => {
    const { item, toggle } = props;
    console.log("access reportitem")
    console.log("item: ", item)
    return (
        <Wrapper>
            <Text>{item.id}</Text>
            <Toggle onClick={toggle}>{item.exists}</Toggle>
        </Wrapper>
    );
}

export default ReportItem;