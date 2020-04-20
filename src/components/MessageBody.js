import React from 'react';
import PropTypes from "prop-types";

function MessageBody(props) {
  return (
    <React.Fragment>
      <p>{props.body}</p>
    </React.Fragment>
  );
}

MessageBody.propTypes = {
  body: PropTypes.string,
}

export default MessageBody;