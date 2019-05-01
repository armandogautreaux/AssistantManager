import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleItemClickMenu } from '../../../actions';
import { Menu } from 'semantic-ui-react';
import LoginLogoutButtons from '../loginLogoutButtons/LoginLogoutButtons';

const PrimaryNavigation = ({
  handleItemClickMenu,
  isSignedIn,
  activeItem,
  ...props
}) => {
  const onNameChange = (e, { name }) => {
    handleItemClickMenu(name);
  };
  const homeLink = `${isSignedIn ? '/dashboard' : '/'}`;

  return (
    <Menu.Menu position="right" {...props}>
      <Menu.Item
        as={Link}
        to={homeLink}
        name="home"
        active={activeItem === 'home'}
        onClick={onNameChange}
      />
      <LoginLogoutButtons handleActive={onNameChange} />
    </Menu.Menu>
  );
};
const mapStateToProps = state => {
  return {
    activeItem: state.event.activeMenuItem,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { handleItemClickMenu }
)(PrimaryNavigation);
