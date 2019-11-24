import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { SubmitActions, GalleryActions } from '../actions';
import { Submit } from '../components';

const SubmitButton = styled.div`
    margin-top: 20px;
`;

export const SubmitContainer = (props) => {
    const { resetToggles } = props;
    const dispatch = useDispatch();
    const currentState = useSelector(state => state.submitReducer);
    const sendData = async (data) => dispatch(await SubmitActions.sendData(data));
    const resetData = () => dispatch(SubmitActions.resetData());
    const increment = () => dispatch(GalleryActions.nextImage());
    console.log("currentState: ", currentState);
    const submitProps = { currentState, resetToggles, sendData, resetData, increment }
    return (
        <SubmitButton>
            <Submit {...submitProps} />
        </SubmitButton>
    )
}