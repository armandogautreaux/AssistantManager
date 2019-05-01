import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="client"
          component={this.renderInput}
          label="Enter client Name"
        />
        <Field
          name="fileNumber"
          component={this.renderInput}
          label="Enter fileNumber"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.client) {
    errors.title = 'You must enter a name';
  }
  if (!formValues.fileNumber) {
    errors.fileNumber = 'You must enter a fileNumber';
  }
  return errors;
};

export default reduxForm({
  form: 'searchForm',
  validate: validate
})(SearchForm);
