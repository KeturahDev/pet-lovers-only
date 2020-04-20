import React from "react";
import PropTypes from 'prop-types';

function ProfileHeadline(props) {
  return(
    <React.Fragment>
      <h4>{props.headline}</h4>
    </React.Fragment>
  );
}

ProfileHeadline.propTypes = {
  headline: PropTypes.string
};

export default ProfileHeadline;