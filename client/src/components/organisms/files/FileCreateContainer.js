import React from 'react';
import { connect } from 'react-redux';
import { createFile } from '../../../actions';
import FileForm from '../forms/FileForm';

class FileCreateContainer extends React.Component {
  onSubmit = formValues => {
    this.props.createFile(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a File</h3>
        <FileForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createFile }
)(FileCreateContainer);
