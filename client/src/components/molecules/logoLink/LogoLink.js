import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const LogoLink = props => {
  const LogoLink = `${props.isSignedIn ? '/dashboard' : '/'}`;

  return (
    <Menu.Item header as={Link} to={LogoLink} name="home">
      <Icon name="balance scale" />
      Asistente Legal
    </Menu.Item>
  );
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(LogoLink);
