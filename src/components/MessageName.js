import React from "react";
import PropTypes from "prop-types";

function MessageName(props){
  const MessageNameStyles = {
    alignItems: 'center'
  }
  return(
    <React.Fragment>
      <div style={MessageNameStyles}>
        <p>{props.name}</p>
      </div>
    </React.Fragment>
  );
}

MessageName.propTypes = {
  name: PropTypes.string
}
export default MessageName;