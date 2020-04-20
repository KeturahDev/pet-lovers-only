import React from 'react';

function PetName(props) {
  const PetNameStyles = {
    textAlign: 'center',
    fontWeight: 'bolder'
  }
  return (
    <React.Fragment>
      <div style={PetNameStyles}>
        <h3>{props.name}</h3>
      </div>
    </React.Fragment>
  );
}

export default PetName;