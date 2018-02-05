import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, notEmpty, trackingNumberLength, validateTrackingNumber } from '../validators';
import Input from './Input';
import {submission} from '../actions';


export class IssueForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    return this.props.dispatch(submission(values));
  }
  render() {
    let successMessage;
    if (this.props.submitSucceeded){
      successMessage= (
        <div className = "message message-success">
          Issue submitted successfully.
        </div>
      );
    }

    let errorMessage;
    if(this.props.error){
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values))}
      >
        {successMessage}
        {errorMessage}
        <label htmlFor="trackingNumber">Tracking Number:</label>
        <Field name="trackingNumber" component={Input} validate={[required, notEmpty, trackingNumberLength, validateTrackingNumber]} />
        <label htmlFor="issue">Issue:</label>
        <Field element="select" name="issue" component={Input} validate={[required]}>
          <option value="" default disabled hidden>
            Choose here
          </option>
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
        <Field element="textarea" name="details" component={Input} id="details" />
        <button type="submit" disabled={
          this.props.pristine || this.props.submitting
        }>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'issue',
})(IssueForm);
