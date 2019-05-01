import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut, signIn, getUser } from '../../../actions';
import { Menu, Button } from 'semantic-ui-react';

class LoginLogoutButtons extends React.Component {
  onSignOutClick = () => {
    this.props.signOut();
  };

  renderLoginOrLogoutButtons() {
    if (this.props.isSignedIn) {
      return (
        <React.Fragment>
          <Menu.Item className="ui button black" onClick={this.onSignOutClick}>
            Salir
          </Menu.Item>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Menu.Item
            as={Link}
            to="/register"
            name="register"
            active={this.props.activeItem === 'register'}
            onClick={this.props.handleActive}
          >
            <Button primary>Registrate</Button>
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            active={this.props.activeItem === 'login'}
            onClick={this.props.handleActive}
          >
            <Button>Iniciar Session</Button>
          </Menu.Item>
        </React.Fragment>
      );
    }
  }
  render() {
    return <React.Fragment>{this.renderLoginOrLogoutButtons()}</React.Fragment>;
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    activeItem: state.event.activeMenuItem
  };
};

export default connect(
  mapStateToProps,
  { getUser, signOut, signIn }
)(LoginLogoutButtons);
