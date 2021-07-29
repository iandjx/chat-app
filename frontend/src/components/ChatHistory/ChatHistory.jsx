import React from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";
const ChatHistory = (props) => {
  const { chatHistory } = props;

  const messages = chatHistory.map((msg) => <Message message={msg.data} />);

  return (
    <div className="ChatHistory">
      {console.log(chatHistory)}
      <h2>Chat History</h2>
      {messages}
    </div>
  );
};

export default ChatHistory;
