import React from 'react';
import PropTypes from "prop-types";

function MessagePhoto(props) {
  return (
    <React.Fragment>
      <img src={props.photo} alt="message"/>
    </React.Fragment>
  );
}

MessagePhoto.propTypes = {
  photo: PropTypes.string
}

export default MessagePhoto;