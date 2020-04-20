import React from "react";

function ProfileName(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
    </React.Fragment>
  );
}

export default ProfileName;