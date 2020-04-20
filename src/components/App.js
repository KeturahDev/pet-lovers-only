import React from 'react';
import ProfileCard from "./ProfileCard";
import MessageColumn from "./MessageColumn";
import PetList from "./PetList";
import NavBar from "./NavBar";
// import './../index.css';
// import "./../styles/ProfileCard.css";


function App() {
  return (
    <React.Fragment>
    <NavBar />
    <ProfileCard className="ProfileCard"/>
    <PetList/>
    <MessageColumn />
    </React.Fragment>
  );
}

export default App;
