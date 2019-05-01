import React from 'react';
import { fetchSearch, resetSearch } from '../../actions';
import { connect } from 'react-redux';
import DefaultTemplate from '../templates/DefaultTemplate';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';
import SearchResultsContainer from '../organisms/searchResults/SearchResultsContainer';

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.fetchSearch(this.props.location.search);
  }
  componentDidUpdate(prevProps) {
    let oldlocation = prevProps.location.search;
    let newlocation = this.props.location.search;
    if (oldlocation !== newlocation) {
      this.props.fetchSearch(newlocation);
    }
  }
  componentWillUnmount() {
    this.props.resetSearch();
  }
  render() {
    return (
      <DefaultTemplate header={<Header />} footer={<Footer />}>
        <SearchResultsContainer />
      </DefaultTemplate>
    );
  }
}

export default connect(
  null,
  { fetchSearch, resetSearch }
)(SearchResults);
