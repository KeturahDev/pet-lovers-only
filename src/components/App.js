import React from 'react';
import ProfileCard from "./ProfileCard";
import MessageColumn from "./MessageColumn";
import PetList from "./PetList";
// import './../index.css';
// import "./../styles/ProfileCard.css";


function App() {
  return (
    <React.Fragment>
    <h1>hello world</h1>
    <ProfileCard className="ProfileCard"/>
    <PetList/>
    <MessageColumn />
    </React.Fragment>
  );
}

export default App;
