import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Diseases } from '../components';
import { ReportActions } from '../actions';

export const DiseaseContainer = () => {
    const items = useSelector(state => state.reportReducer.options);
    const dispatch = useDispatch();
    const toggle = (disease) => dispatch(ReportActions.toggleDisease(disease));
    return (
        <Diseases
            diseases={items}
            toggle={toggle}
        />
    )
}