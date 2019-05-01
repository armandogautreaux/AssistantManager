import './Header.css';
import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import LogoLink from '../../molecules/logoLink/LogoLink';
import PrimaryNavigation from '../../molecules/primaryNavigation/PrimaryNavigation';

const Header = props => {
  return (
    <Fragment {...props}>
      <Menu size="small" borderless fluid>
        <LogoLink />
        <PrimaryNavigation />
      </Menu>
    </Fragment>
  );
};

export default Header;
