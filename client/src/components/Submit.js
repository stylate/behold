import React from 'react';
import { Button } from 'semantic-ui-react';

export const Submit = (props) => {
    const { currentState, resetToggles, sendData, increment } = props;
    console.log("current state: ", currentState);
    const executeSubmit = () => {
        const send = async () => {
            await sendData(currentState);
        }
        send();
        resetToggles();
        increment();
    }
    return (
        <Button onClick={executeSubmit}>Submit Report</Button>
    )
};