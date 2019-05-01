import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SingleForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <div className="ui left icon input">
          <i className={input.name === 'email' ? 'user icon' : 'lock icon'} />
          <input
            {...input}
            placeholder={
              input.name === 'email' ? 'Enter Email' : 'Enter Password'
            }
            autoComplete="off"
          />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui large form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="ui stacked segment">
          <Field name="email" component={this.renderInput} />
          <Field name="password" component={this.renderInput} />
          <button className="ui fluid large teal submit button">Submit</button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.email) {
    errors.email = 'You must enter a valid email';
  }
  if (!formValues.password) {
    errors.password = 'You must enter a password';
  }
  return errors;
};

export default reduxForm({
  form: 'SingleForm',
  validate: validate
})(SingleForm);
