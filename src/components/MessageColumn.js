import React from "react";
import MessageCard from "./MessageCard";

function MessageColumn(){
  const MessageColStyles = {
    border: '2px solid blue'
  }

  return (
    <React.Fragment >
    <div style={MessageColStyles}>
      <h1>Messages</h1>
      <MessageCard />
    </div>
    </React.Fragment>
  );
}

export default MessageColumn;