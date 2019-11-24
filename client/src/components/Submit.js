import React from 'react';
import { Button } from 'semantic-ui-react';

export const Submit = (props) => {
    const { resetToggles, sendData, increment } = props;
    const executeSubmit = () => {
        resetToggles();
        increment();
    }
    return (
        <Button onClick={executeSubmit}>Submit Report</Button>
    )
};