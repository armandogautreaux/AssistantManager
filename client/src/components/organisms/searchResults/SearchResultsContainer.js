import React from 'react';
import { connect } from 'react-redux';

class SearchResultsContainer extends React.Component {
  renderFile() {
    if (this.props.files === null) return <div>Loading</div>;
    else if (!this.props.files) return <div>Not file found</div>;

    return <div>{this.props.files.client}</div>;
  }

  render() {
    return <React.Fragment>{this.renderFile()}</React.Fragment>;
  }
}
const mapStateToProps = state => {
  return { files: state.search.response };
};

export default connect(mapStateToProps)(SearchResultsContainer);
