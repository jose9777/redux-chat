import React from 'react';
import { UpdateMessageParam } from "../App";


interface ChatInterfaceProps {
    message: string;
    userName: string;
    sendMessage: (message: string) => void;
    updateMessage: (evt: UpdateMessageParam) => void;
}

const ChatInterface : React.SFC<ChatInterfaceProps> =({
    userName,
    message,
    updateMessage,
    sendMessage
  }) => {
    function keyPress(evt: React.KeyboardEvent) {
        if (evt.key === "Enter") {
            send();
        }
    }
    function send() {
        sendMessage(message);
    }

    return (
        <div className="chat-interface">
            <h3>Uer: {userName}</h3>
            <input value={message}
                   onChange={updateMessage}
                   onKeyPress={keyPress}
                   className="chat-input"
                   placeholder="Type a message..."
            />
            <button onClick={send}>Send</button>
        </div>
    )
}

export default ChatInterface;