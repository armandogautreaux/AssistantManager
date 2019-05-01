import React from 'react';
import { fetchFile, getUser } from '../../actions';
import { connect } from 'react-redux';
import DashboardTemplate from '../templates/DashboardTemplate';
import Header from '../organisms/header/Header';
import Sidebar from '../organisms/sidebar/Sidebar';
import Footer from '../organisms/footer/Footer';
import FileDeleteModal from '../organisms/files/FileDeleteModal';

class FileDelete extends React.Component {
  componentDidMount() {
    this.props.getUser();
    this.props.fetchFile(this.props.match.params.id);
  }
  render() {
    const file = this.props.file;
    return (
      <DashboardTemplate
        header={<Header />}
        sidebar={<Sidebar />}
        footer={<Footer />}
      >
        <FileDeleteModal file={file} />
      </DashboardTemplate>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    file: state.files[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { fetchFile, getUser }
)(FileDelete);
