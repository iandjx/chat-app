import React from "react";
import "./Message.scss";

const Message = (props) => {
  const temp = JSON.parse(props.message);
  return <div className="Message">{temp.body}</div>;
};

export default Message;
