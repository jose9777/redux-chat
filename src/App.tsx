import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {sendMessage} from "./store/chat/actions";
import {updateSession} from "./store/system/actions";
import {thunkSendMessage} from "./thunks";
import {ChatState} from "./store/chat/types";
import {SystemState} from "./store/system/types";
import {AppState} from "./store";

import {ChatHistory} from "./components/ChatHistory";
import ChatInterface from "./components/ChatInterface";

interface AppProps {
  sendMessage: typeof sendMessage;
  updateSession: typeof updateSession;
  chat: ChatState;
  system: SystemState;
  thunkSendMessage: any;
}

export type UpdateMessageParam = React.SyntheticEvent<{value: string}>

class App extends React.Component<AppProps>{
  state = {
    message:""
  }

  componentDidMount() {
    this.props.updateSession({
      loggedIn: true,
      session:"my_session",
      userName:"myName"
    });

    this.props.sendMessage({
      user:"Chat bot",
      message:"basic chat message",
      timestamp: new Date().getTime()
    });
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({message: event.currentTarget.value})
  }

  sendMessage = (message: string) => {
    this.props.sendMessage({
      user: this.props.system.userName,
      message: message,
      timestamp: new Date().getTime()
    });

    this.setState({message:""});
  }

  render() {

    return (
        <div className="parent">
          <ChatHistory messages={this.props.chat.messages}></ChatHistory>
          <ChatInterface
              userName={this.props.system.userName}
              message={ this.state.message}
              updateMessage={this.updateMessage}
              sendMessage={this.sendMessage}
          />
        </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat
})

export default connect(
    mapStateToProps,
    {sendMessage, updateSession, thunkSendMessage}
)(App)
