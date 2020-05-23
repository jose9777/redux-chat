import React from "react";
import {Message} from "../store/chat/types";

interface ChatHistoryProps {
    messages: Message[]
}

export class ChatHistory extends React.Component<ChatHistoryProps> {
    render() {
        return (
            <div className="chat-history">
                {this.props.messages.map(message => (
                    <div className="message-item" key={message.timestamp}>
                        <h3>from: {message.user}</h3>
                        <p>{message.message}</p>
                    </div>
                ))}
            </div>
        )
    }
}