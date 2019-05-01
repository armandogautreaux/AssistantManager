import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { editFile } from '../../../actions';
import FileForm from '../forms/FileForm';

class FileEdit extends React.Component {
  onSubmit = formValues => {
    const { id } = this.props.file;
    this.props.editFile(id, formValues);
  };
  render() {
    if (!this.props.file) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a File</h3>
        <FileForm
          initialValues={_.pick(
            this.props.file,
            'fileNumber',
            'client',
            'defendant',
            'nextHearing',
            'caseStatus',
            'summary'
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { editFile }
)(FileEdit);
