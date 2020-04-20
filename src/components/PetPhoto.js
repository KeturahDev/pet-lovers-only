import React from 'react';
// import logo from './../logo192.png';

function PetPhoto(props) {
  const PetPhotoStyles = {
    textAlign: 'center'
  }
  return (
    <React.Fragment>
      <div style={PetPhotoStyles}>
        <img style={{maxHeight: '200px'}} src={props.photo} alt="pet"/>
      </div>
    </React.Fragment>
  );
}

export default PetPhoto;