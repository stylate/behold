import React from 'react';
import ReportItem from './ReportItem';

// image + select state used for submit button

export const Diseases = (props) => {
    const { diseases, toggle } = props;
    return (
        <div>
            {diseases &&
                diseases.map((disease) => {
                    return <ReportItem item={disease} toggle={toggle}/>;
            })}
        </div>
    )
}