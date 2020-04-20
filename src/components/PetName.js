import React from 'react';

function PetName(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
    </React.Fragment>
  );
}

export default PetName;