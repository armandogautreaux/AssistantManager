import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const PageTemplate = ({ header, children, footer, props }) => {
  return (
    <div {...props}>
      <Grid padded>{header}</Grid>
      <Grid.Column>{children}</Grid.Column>
      <Grid padded>{footer}</Grid>
    </div>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
};

export default PageTemplate;
