import React from 'react';
import { Button } from 'semantic-ui-react';

export const Submit = (props) => {
    const { currentState, resetToggles, sendData, resetData, increment } = props;
    const executeSubmit = () => {
        const send = async () => {
            await sendData(currentState);
        }
        send();
        resetToggles();
        resetData();
        increment();
    }
    return (
        <Button onClick={executeSubmit}>Submit Report</Button>
    )
};