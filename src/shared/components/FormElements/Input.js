import React from 'react'

import './Input.css';

const Input = props => {
    const element = props.element === 'input' ? ( 
    <Input id={props.id} type={props.type} placeholder={props.placeholder} /> 
) : (
    < textarea id={props.id} rows={props.rows || 3} />
    );
  return (
    <div className={`form-control`}>
        < label htmlFor={props.id} className={props.centered ? 'centered' : ''}>{props.label}</label>
        {element}
    </div>
  );
};

export default Input;