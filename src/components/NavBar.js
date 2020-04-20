import React from "react";
import WebsiteTitle from "./WebsiteTitle"
import HomeButton from "./HomeButton"
import PeopleButton from "./PeopleButton"
import AccountButton from "./AccountButton"

function NavBar(){
  return(
    <React.Fragment>
      <WebsiteTitle />
      <HomeButton/>
      <PeopleButton/>
      <AccountButton/>
    </React.Fragment>
  );
}

export default NavBar;