import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFile } from '../../../actions';
import Modal from '../../Modal';
import history from '../../../history';

class FileDeleteModal extends React.Component {
  renderActions() {
    const { id } = this.props.file;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteFile(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/dashboard" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.file) {
      return 'Are you sure you want to delete this file?';
    }
    return `Are you sure you want to delete this file with tittle: ${
      this.props.file.client
    }`;
  }
  render() {
    return (
      <Modal
        tittle="Delete File"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/dashboard')}
      />
    );
  }
}

export default connect(
  null,
  { deleteFile }
)(FileDeleteModal);
