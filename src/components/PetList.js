import React from 'react';
import PetCard from './PetCard';


function PetList() {
  const PetListStyle={
    border: '2px solid orange'
  }
  return (
    <React.Fragment>
      <div style={PetListStyle}>
        <h1>Pets</h1>
        <PetCard />
      </div>
    </React.Fragment>
  );
}

export default PetList;