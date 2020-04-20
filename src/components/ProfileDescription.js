import React from "react";

function ProfileDescription(props) {
  return(
    <React.Fragment>
      <p>{props.description}</p>
    </React.Fragment>
  );
}

export default ProfileDescription;