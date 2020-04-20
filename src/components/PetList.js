import React from 'react';
import PetCard from './PetCard';


const masterPetList = [
  {
    name: "George",
    imgSrc: "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg"
  },
  {
    name: "tiger",
    imgSrc: "https://www.aspca.org/sites/default/files/blog_apcc-foster-kitten-safety_060619_main.jpg"
  },
  {
    name: "raj",
    imgSrc: "https://i.ytimg.com/vi/Ep3jK1bZrB8/maxresdefault.jpg"
  },
  {
    name: "Shere Khan",
    imgSrc: "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg"
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