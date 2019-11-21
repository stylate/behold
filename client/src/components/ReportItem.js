import React from 'react';
import styled from 'styled-components';

const Text = styled.p``;
const Wrapper = styled.div``;
const Toggle = styled.button``;

const ReportItem = (props) => {
    const { item, toggle } = props;
    return (
        <Wrapper>
            <Text>{item.name}</Text>
            <Toggle onClick={toggle}/>
        </Wrapper>
    );
}

export default ReportItem;