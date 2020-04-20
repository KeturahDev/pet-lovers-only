import React from 'react';
import PetCard from './PetCard';


const masterPetList = [
  {
    name: "George"
  },
  {
    name: "tiger"
  },
  {
    name: "raj"
  },
  {
    name: "Shere Khan"
  }
]


function PetList() {
  const PetListStyle={
    border: '2px solid orange'
  }
  return (
    <React.Fragment>
      <div style={PetListStyle}>
        <h1>Pets</h1>
        {masterPetList.map((pet,index)=>
          <PetCard name={pet.name} key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default PetList;