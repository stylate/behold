import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Diseases } from '../components';
import { ReportActions, SubmitActions } from '../actions';

export const DiseaseContainer = () => {
    const items = useSelector(state => state.reportReducer.options);
    const dispatch = useDispatch();
    const toggle = (disease) => dispatch(ReportActions.toggleDisease(disease));
    const updateClasses = (disease, exists) => dispatch(SubmitActions.updateClasses(disease, exists));
    const diseaseProps = { items, toggle, updateClasses };
    console.log("render disease container")
    return (
        <Diseases {...diseaseProps} />
    )
}