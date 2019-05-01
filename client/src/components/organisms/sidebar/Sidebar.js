import React from 'react';
import { connect } from 'react-redux';
import { handleItemClickSidebar } from '../../../actions';
import { Menu } from 'semantic-ui-react';

class Sidebar extends React.Component {
  onNameChange = (e, { name }) => {
    this.props.handleItemClickSidebar(name);
  };

  render() {
    return (
      <React.Fragment>
        <Menu vertical size="small" fluid text>
          <Menu.Item
            as="a"
            name="overview"
            active={this.props.activeItem === 'overview'}
            onClick={this.onNameChange}
          >
            Inicio
          </Menu.Item>
          <Menu.Item
            as="a"
            name="reports"
            active={this.props.activeItem === 'reports'}
            onClick={this.onNameChange}
          >
            Nuevo Expediente
          </Menu.Item>
          <Menu.Item
            as="a"
            name="analytics"
            active={this.props.activeItem === 'analytics'}
            onClick={this.onNameChange}
          >
            Mostrar Todos
          </Menu.Item>
          <Menu.Item
            as="a"
            name="export"
            active={this.props.activeItem === 'export'}
            onClick={this.onNameChange}
          >
            Ver Estadisticas
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    activeItem: state.event.activeSidebarItem
  };
};

export default connect(
  mapStateToProps,
  { handleItemClickSidebar }
)(Sidebar);
