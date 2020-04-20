import React from "react";
import PropTypes from 'prop-types';

function ProfileDescription(props) {
  return(
    <React.Fragment>
      <p>{props.description}</p>
    </React.Fragment>
  );
}

ProfileDescription.propTypes = {
  description: PropTypes.string
};

export default ProfileDescription;