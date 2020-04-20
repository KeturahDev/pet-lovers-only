import React from 'react';
import PropTypes from "prop-types";

function MessagePhoto(props) {
  // const messagePhotos = {
  //   maxHeight: '50px'
  // }
  return (
    <React.Fragment>
      {/* <div styles={messagePhotos}> */}
        <img style={{maxHeight: '100px'}} src={props.photo} alt="message"/>
      {/* </div> */}
    </React.Fragment>
  );
}

MessagePhoto.propTypes = {
  photo: PropTypes.string
}

export default MessagePhoto;