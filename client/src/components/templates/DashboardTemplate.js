import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const DashboardTemplate = ({ header, sidebar, children, footer, props }) => {
  return (
    <div {...props}>
      <Grid padded>{header}</Grid>
      <Grid padded divided>
        <Grid.Column
          tablet={3}
          computer={2}
          only="tablet computer"
          id="sidebar"
        >
          {sidebar}
        </Grid.Column>

        <Grid.Column mobile={16} tablet={13} computer={14} floated="right">
          {children}
        </Grid.Column>
      </Grid>

      <Grid padded>{footer}</Grid>
    </div>
  );
};

DashboardTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
};

export default DashboardTemplate;
