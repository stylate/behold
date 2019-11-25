import React from 'react';
import { Button } from 'semantic-ui-react';

export const Submit = (props) => {
    const { executeSubmit } = props;
    return (
        <Button color="teal" onClick={executeSubmit}>Submit Report</Button>
    )
};