import React from "react";
import HomeButton from "./HomeButton"
import PeopleButton from "./PeopleButton"
import AccountButton from "./AccountButton"

function NavBar(){
  return(
    <React.Fragment>
      <HomeButton/>
      <PeopleButton/>
      <AccountButton/>
    </React.Fragment>
  );
}

export default NavBar;