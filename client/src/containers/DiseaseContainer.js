import React from 'react';
import { useDispatch } from 'react-redux';
import { Diseases } from '../components';
import { ReportActions } from '../actions';

export const DiseaseContainer = (props) => {
    const { diseases } = props;
    const dispatch = useDispatch();
    const toggle = (disease) => dispatch(ReportActions.toggleDisease(disease));
    return (
        <Diseases
            diseases={diseases}
            toggle={toggle}
        />
    )
}