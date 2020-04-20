import React from "react"
import MessagePhoto from './MessagePhoto'
import MessageName from './MessageName'
import MessageBody from './MessageBody'

function MessageCard(props){
  return(
    <React.Fragment>
      <MessagePhoto photo={props.photo}/>
      <MessageName name={props.name}/>
      <MessageBody body={props.body}/>
      <hr/>
    </React.Fragment>
  );
}

export default MessageCard;