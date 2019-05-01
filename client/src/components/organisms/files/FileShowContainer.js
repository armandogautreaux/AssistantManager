import React from 'react';

const FileShowContainer = props => {
  if (!props.file) {
    return <div>Loading</div>;
  }
  const { client } = props.file;
  return (
    <div>
      <h1>{client}</h1>
    </div>
  );
};

export default FileShowContainer;
