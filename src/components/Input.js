import React from 'react';

export default class Input extends React.Component {
  render(){
    return(
      <div>
        <input className={props.className} type={props.type}  />
        <label htmlFor={props.className} >{props.labelText}
        </label>
      </div>
    );
  }
}
