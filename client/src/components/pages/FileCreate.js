import React from 'react';
import { connect } from 'react-redux';
import DashboardTemplate from '../templates/DashboardTemplate';
import Header from '../organisms/header/Header';
import Sidebar from '../organisms/sidebar/Sidebar';
import Footer from '../organisms/footer/Footer';
import FileCreateContainer from '../organisms/files/FileCreateContainer';
import { getUser } from '../../actions';

class FileCreate extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <DashboardTemplate
        header={<Header />}
        sidebar={<Sidebar />}
        footer={<Footer />}
      >
        <FileCreateContainer />
      </DashboardTemplate>
    );
  }
}

export default connect(
  null,
  { getUser }
)(FileCreate);
