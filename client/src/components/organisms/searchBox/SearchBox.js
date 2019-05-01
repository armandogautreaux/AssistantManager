import React from 'react';
import SearchForm from '../forms/SearchForm';
import history from '../../../history';
import qs from 'query-string';

const SearchBox = () => {
  const onSubmit = formValues => {
    const searchString = qs.stringify(formValues);
    history.push(`/search?${searchString}`);
  };
  return (
    <div className="ui container">
      <h3>Search for a file</h3>
      <SearchForm onSubmit={onSubmit} />
    </div>
  );
};

export default SearchBox;
