import React from 'react';
import './display.css';

const display = (props) => {
    return(
        <div className="Display">
           {props.children}
        </div>
    );
}

export default display;