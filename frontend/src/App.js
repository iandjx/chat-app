import { connect, sendMsg } from "./api";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
function App() {
  const [chatState, setChatState] = useState([]);

  useEffect(() => {
    connect((msg) => {
      setChatState((prevState) => [...prevState, msg]);
    });
  }, [setChatState]);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatState} />
      <ChatInput send={send} />

      <button onClick={() => sendMsg("ello")}>Send Message</button>
    </div>
  );
}

export default App;
