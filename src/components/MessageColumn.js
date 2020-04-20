import React from "react";
import MessageCard from "./MessageCard";

const MasterMessageColumn = [
  {  
    body: "Can I be your tiger King..?",
    photo: "https://i.ytimg.com/vi/Inf0oiHG6Ro/maxresdefault.jpg",
    name: "Many Hamilton"
  },
  {  
    body: "I like tigers. rawr hahah",
    photo: "https://memeguy.com/photos/images/mrw-i-am-trying-to-look-sexy-in-the-morning-for-my-girlfriend-66540.gif",
    name: "Josh Sparkman"
  },
  {  
    body: "Hey :)",
    photo: "https://a.wattpad.com/cover/78543707-288-k654287.jpg",
    name: "Damien"
  }
]

function MessageColumn(){
  const MessageColStyles = {
    border: '2px solid blue'
  }

  return (
    <React.Fragment >
    <div style={MessageColStyles}>
      <h1>Messages</h1>
      {MasterMessageColumn.map((message, index) =>
      <MessageCard body={message.body} photo={message.photo} name={message.name}/>
      )}
    </div>
    </React.Fragment>
  );
}

export default MessageColumn;