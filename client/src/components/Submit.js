import React from 'react';
import { Button } from 'semantic-ui-react';

export const Submit = (props) => {
    const { currentState, resetToggles, sendData, increment } = props;
    const executeSubmit = () => {
        sendData(currentState);
        resetToggles();
        increment();
    }
    return (
        <Button onClick={executeSubmit}>Submit Report</Button>
    )
};