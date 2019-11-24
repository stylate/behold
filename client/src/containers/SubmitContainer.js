import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ReportActions, GalleryActions } from '../actions';
import { Submit } from '../components';

const SubmitButton = styled.div`
    margin-top: 20px;
`;

export const SubmitContainer = (props) => {
    const { resetToggles } = props;
    const dispatch = useDispatch();
    const sendData = (data) => dispatch(ReportActions.sendData(data));
    const submitProps = { resetToggles, sendData }
    return (
        <SubmitButton>
            <Submit {...submitProps} />
        </SubmitButton>
    )
}