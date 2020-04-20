import React from "react";
// import logo from './../logo192.png';


function ProfilePhoto(props){
  return (
    <React.Fragment>
      <img src={props.photo} alt="alt"/>
    </React.Fragment>
  );
}

export default ProfilePhoto;