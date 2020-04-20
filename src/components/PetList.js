import React from 'react';
import PetCard from './PetCard';


const masterPetList = [
  {
    name: "Margret",
    imgSrc: "https://cdn.britannica.com/s:700x500/89/149189-050-68D7613E/Bengal-tiger.jpg"
  },
  {
    name: "Tigger",
    imgSrc: "https://i.pinimg.com/originals/47/a9/bb/47a9bbebcb72f513b7a3a2bcabae43ce.jpg"
  },
  {
    name: "Raj",
    imgSrc: "http://cdn4.i-scmp.com/sites/default/files/images/methode/2017/02/10/012d6b1c-ef5e-11e6-8960-2c6b8565de23_972x.jpg"
  },
  {
    name: "Shere Khan",
    imgSrc: "https://i.pinimg.com/564x/11/57/a3/1157a3905a2932b5a1cc365b088e7d07.jpg"
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
          <PetCard name={pet.name} photo={pet.imgSrc} key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default PetList;