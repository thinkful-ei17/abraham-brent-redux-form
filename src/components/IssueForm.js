import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './Input';
import {required, notEmpty, trackingNumberLength, validateTrackingNumber} from '../validators';

export class IssueForm extends React.Component{
  console.log(this.props.meta);
  return (
    <div className="form-input">
      <form>
        <label htmlFor="tracking-number">Tracking Number:</label>
        <Field name="tracking-number" component={Input} validate={[required, notEmpty, trackingNumberLength, validateTrackingNumber]}/>
        <label htmlFor="issue">Issue:</label>
        <Field name="issue" component="select" validate={[required]}>
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
        </Field>
        <label htmlFor="details">Give more details (optional)</label>
        <Field name="details" component="textarea" id="details"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default reduxForm()(IssueForm);