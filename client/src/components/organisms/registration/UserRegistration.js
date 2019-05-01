import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../../actions';
import UserForm from '../../organisms/forms/UserForm';

class UserRegistration extends React.Component {
  onSubmit = formValues => {
    this.props.register(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Username</h3>
        <UserForm onSubmit={this.onSubmit} />
        <Link to="/login"> Cancel</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const registering = state.registration;
  return {
    registering
  };
};
export default connect(
  mapStateToProps,
  { register }
)(UserRegistration);
