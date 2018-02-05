import React from 'react';

export default function Input(props) {
  return(
    <div>
      <input className={props.className} type={props.type}  />
      <label htmlFor={props.className} >{props.labelText}
      </label>
    </div>
  
  )
}