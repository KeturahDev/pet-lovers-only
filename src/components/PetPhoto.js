import React from 'react';
// import logo from './../logo192.png';

function PetPhoto(props) {
  return (
    <React.Fragment>
      <img src={props.photo} alt="pet"/>
    </React.Fragment>
  );
}

export default PetPhoto;