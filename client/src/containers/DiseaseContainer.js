import React from 'react';
import styled from 'styled-components';
import { Diseases } from '../components';

export const DiseaseContainer = (props) => {
    const { diseases, toggle } = props;
    return (
        <Diseases
            diseases={diseases}
            toggle={toggle}
        />
    )
}