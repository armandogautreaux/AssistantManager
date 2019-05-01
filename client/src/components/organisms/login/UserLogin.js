import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';
import { Link } from 'react-router-dom';
import SingleForm from '../forms/SingleForm';

class UserLogin extends React.Component {
  onSubmit = formValues => {
    this.props.signIn(formValues);
  };
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">Log-in to your account</div>
          </h2>
          <SingleForm onSubmit={this.onSubmit} />
          <div className="ui message">
            New to us? <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signIn }
)(UserLogin);
