import React from 'react';
import './input.css';

const input = (props) => (
    
        <div className="input" onClick={props.addValue}>{props.children}</div>
       
    
);

export default input;