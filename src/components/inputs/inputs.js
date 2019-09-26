import React from 'react';
import ButtonInput from './input/input';
import './inputs.css';

const inputs = (props) => (
    <div className="Button">
        <ul className="Teburu">
           <li><ButtonInput addValue={props.mul}>x</ButtonInput></li>
           <li><ButtonInput addValue={props.div}>/</ButtonInput></li>
           <li><ButtonInput addValue={props.reset}>C</ButtonInput></li>
           <li><ButtonInput addValue={props.minus}>-</ButtonInput></li>
        </ul>

        <ul className="Teburu">
           <li><ButtonInput addValue={() => props.value(7)}>7</ButtonInput></li>
           <li><ButtonInput addValue={() => props.value(8)}>8</ButtonInput></li>
           <li><ButtonInput addValue={() => props.value(9)}>9</ButtonInput></li>
           <li><ButtonInput addValue={props.plus}>+</ButtonInput></li>
        </ul>


        <ul className="Teburu">
           <li><ButtonInput addValue={() => props.value(4)}>4</ButtonInput></li>
           <li><ButtonInput addValue={() => props.value(5)}>5</ButtonInput></li>
           <li><ButtonInput addValue={() => props.value(6)}>6</ButtonInput></li>
           <li><ButtonInput addValue={props.ans}>=</ButtonInput></li>

        </ul>
        
        <ul className="Teburu">
           <li><ButtonInput addValue={() => props.value(1)}>1</ButtonInput></li>
           <li><ButtonInput addValue={() => props.value(2)}>2</ButtonInput></li>
           <li><ButtonInput addValue={() => props.value(3)}>3</ButtonInput></li>
           <li><ButtonInput addValue={() => props.value(0)}>0</ButtonInput></li>
        </ul> 
       

         
    </div>
);

export default inputs;