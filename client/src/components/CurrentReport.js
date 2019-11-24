import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
    font-size: 17px;
    padding-bottom: 15px;
`;

export const CurrentReport = (fileName) => {
    return (
        <Header>Report for {fileName.fileName}</Header>
    )
}