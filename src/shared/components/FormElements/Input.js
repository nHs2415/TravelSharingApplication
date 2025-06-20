import React, { useReducer } from 'react'

import { validate } from '../../../shared/Util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      const validators = action.validators || []; // ✅ fix: fallback to empty array
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, validators)
      };
    default:
      return state;
  }
};



const Input = props => {
    const [ inputState, dispatch ] = useReducer(inputReducer, {
        value: '',
        isValid: false});

const changeHandler = event => {
   dispatch({
    type: 'CHANGE', 
    val: event.target.value, 
    validators: props.validators
});  
};


const element = props.element === 'input' ? ( 
    < Input 
    id={props.id} 
    type={props.type} 
    placeholder={props.placeholder}
    onChange={changeHandler}
    value={inputState.value}
     /> 
) : (
    < textarea 
    id={props.id} 
    rows={props.rows || 3} 
    onChange={changeHandler} 
    value={inputState.value} 
     />
    );
  return (
    < div className={`form-control ${!inputState.isValid && 'form-control--invalid' }`} >
        < label htmlFor={props.id} className={props.centered ? 'centered' : ''}>{props.label}</label>
        {element}
        {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;