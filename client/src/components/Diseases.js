import React from 'react';
import ReportItem from './ReportItem';

// image + select state used for submit button

export const Diseases = (props) => {
    const { items, classes, toggle, updateClasses } = props;
    return (
        <div>
            {items &&
                items.map((item) => {
                    return <ReportItem 
                                item={item}
                                classes={classes} 
                                toggle={toggle} 
                                updateClasses={updateClasses} />
            })}
        </div>
    )
}