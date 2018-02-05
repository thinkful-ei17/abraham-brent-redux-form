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
     <div className="form-input">
      <label htmlFor="issue">What is your issue?
      </label>
      <select name="issue" id="issue">
        <option value="not-delivered">
        My delivery hasnt arrived
        </option>
        <option value="wrong-item">
        The wrong item was delivered
        </option>
        <option value="missing-part">
        Part of my order was missing
        </option>
        <option value="damaged">
        Some of my order arrived damaged
        </option>
        <option value="other">
        Other (give details below)
        </option>
        </select>
     </div>
     <div className="form-input">
      <label htmlFor="details">
      Give more details(optional)
      </label>
      <textarea className="details" id="details">
      </textarea>
     </div> 
     <button type="submit">
     Submit
     </button>          
    </form>
  )
}