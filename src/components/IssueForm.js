import React from 'react';
// import Input from './Input';

export default function IssueForm() {
  return (
    <form >
      <div className="form-input">
       <label htmlFor="trackingNumber">Tracking Number
       </label>
       <input name="trackingNumber" id="trackingNumber"/>
     </div> 
       
    </form>
  )
}