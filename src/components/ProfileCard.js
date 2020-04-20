import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import ProfileName from "./ProfileName";
import ProfileHeadline from "./ProfileHeadline";
import ProfileDescription from "./ProfileDescription";
import "./../styles/ProfileCard.css";


function ProfileCard() {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

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
        <ProfileName name="Jordan"/>
        <ProfileHeadline headline="Tiger queen"/>
        <ProfileDescription description={lorem}/>
      </div>
    </React.Fragment>
  );
}

export default ProfileCard;