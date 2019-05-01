import React from 'react';
import { Field, reduxForm } from 'redux-form';

class FileForm extends React.Component {
  renderInput = ({ input, label }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="fileNumber"
          label="Enter File Number"
          component={this.renderInput}
        />
        <Field
          name="client"
          label="Enter Client Name"
          component={this.renderInput}
        />
        <Field
          name="defendant"
          label="Enter Defendant Name"
          component={this.renderInput}
        />
        <Field
          name="nextHearing"
          label="Enter next hearing day"
          component={this.renderInput}
        />
        <Field
          name="caseStatus"
          label="Enter case status"
          component={this.renderInput}
        />
        <Field
          name="summary"
          label="enter summary"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'fileForm' })(FileForm);
