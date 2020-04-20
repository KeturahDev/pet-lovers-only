import React from "react"
import MessagePhoto from './MessagePhoto'
import MessageName from './MessageName'
import MessageBody from './MessageBody'

function MessageCard(){
  return(
    <React.Fragment>
      <h1>this is a MessageCard</h1>
      <MessagePhoto/>
      <MessageName/>
      <MessageBody/>
    </React.Fragment>
  );
}

export default MessageCard;