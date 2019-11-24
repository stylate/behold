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
    const sendData = (data) => dispatch(SubmitActions.sendData(data));
    const increment = () => dispatch(GalleryActions.nextImage());
    console.log("currentState: ", currentState);
    const submitProps = { currentState, resetToggles, sendData, increment }
    return (
        <SubmitButton>
            <Submit {...submitProps} />
        </SubmitButton>
    )
}