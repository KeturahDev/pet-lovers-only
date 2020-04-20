import React from 'react';
import PetPhoto from './PetPhoto';
import PetName from './PetName';

function PetCard() {
  const PetCardStyle={
    border: '1px dashed blue'
  }
  return (
    <React.Fragment>
      <div style={PetCardStyle}>
        <p>Pet Card</p>
        <PetPhoto/>
        <PetName/>
      </div>
    </React.Fragment>
  );
}

export default PetCard;