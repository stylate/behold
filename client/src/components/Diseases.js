import React from 'react';
import ReportItem from './ReportItem';

// image + select state used for submit button

export const Diseases = (props) => {
    const { items, toggle, appendDisease } = props;
    return (
        <div>
            {items &&
                items.map((item) => {
                    return <ReportItem item={item} toggle={toggle} appendDisease={appendDisease} />
            })}
        </div>
    )
}