import React from 'react';
import { connect } from 'react-redux';
import DashboardTemplate from '../templates/DashboardTemplate';
import Header from '../organisms/header/Header';
import Sidebar from '../organisms/sidebar/Sidebar';
import Footer from '../organisms/footer/Footer';
import MainDashboard from '../organisms/mainDashboard/MainDashboard';
import { fetchFiles, getUser } from '../../actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getUser();
    this.props.fetchFiles();
  }
  render() {
    return (
      <DashboardTemplate
        header={<Header />}
        sidebar={<Sidebar />}
        footer={<Footer />}
      >
        <MainDashboard />
      </DashboardTemplate>
    );
  }
}

export default connect(
  null,
  { getUser, fetchFiles }
)(Dashboard);
