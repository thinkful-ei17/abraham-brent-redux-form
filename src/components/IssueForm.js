import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, notEmpty, trackingNumberLength, validateTrackingNumber } from '../validators';
import Input from './Input';


export class IssueForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
      >
        <label htmlFor="tracking-number">Tracking Number:</label>
        <Field name="tracking-number" component={Input} validate={[required, notEmpty, trackingNumberLength, validateTrackingNumber]} />
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'issue',
})(IssueForm);
