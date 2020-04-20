import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import ProfileName from "./ProfileName";
import ProfileHeadline from "./ProfileHeadline";
import ProfileDescription from "./ProfileDescription";
import "./../styles/ProfileCard.css";


function ProfileCard() {
  const profileStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    border: '2px solid red'
  }
      return (
    <React.Fragment>
      <div style={profileStyles}>
        <ProfilePhoto />
        <ProfileName />
        <ProfileHeadline />
        <ProfileDescription />
      </div>
    </React.Fragment>
  );
}

export default ProfileCard;