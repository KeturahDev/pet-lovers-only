import React from "react";

function ProfileHeadline(props) {
  return(
    <React.Fragment>
      <h4>{props.headline}</h4>
    </React.Fragment>
  );
}

export default ProfileHeadline;