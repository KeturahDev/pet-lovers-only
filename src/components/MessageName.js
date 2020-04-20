import React from "react";
import PropTypes from "prop-types";

function MessageName(props){
  return(
    <React.Fragment>
      <p>{props.name}</p>
    </React.Fragment>
  );
}

MessageName.propTypes = {
  name: PropTypes.string
}
export default MessageName;