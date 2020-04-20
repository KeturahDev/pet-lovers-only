import React from 'react';
// import logo from './../logo192.png';

function PetPhoto(props) {
  const PetPhotoStyles = {
    // height: '50px',
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