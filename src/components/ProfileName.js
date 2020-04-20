import React from "react";
import PropTypes from "prop-types";

function ProfileName(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
    </React.Fragment>
  );
}

ProfileName.propTypes = {
  name: PropTypes.string
}

export default ProfileName;