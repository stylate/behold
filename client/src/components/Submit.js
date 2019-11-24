import React from 'react';
import { Button } from 'semantic-ui-react';

export const Submit = (props) => {
    const { resetToggles, sendData } = props;
    return (
        <Button onClick={resetToggles}>Submit Report</Button>
    )
};