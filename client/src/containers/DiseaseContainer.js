import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Diseases } from '../components';
import { ReportActions, SubmitActions } from '../actions';

export const DiseaseContainer = () => {
    const items = useSelector(state => state.reportReducer.options);
    const classes = useSelector(state => state.submitReducer.classes);

    const dispatch = useDispatch();
    const toggle = (disease) => dispatch(ReportActions.toggleDisease(disease));
    const updateClasses = (disease, exists) => dispatch(SubmitActions.updateClasses(disease, exists));

    const diseaseProps = { items, classes, toggle, updateClasses };
    console.log("render disease container")
    console.log("disease container classes: ", classes)
    return (
        <div>
            {items && <Diseases {...diseaseProps} />}
        </div>
    )
}