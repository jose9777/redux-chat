import { Action } from 'redux';
import { sendMessage } from "./store/chat/actions";
import { AppState } from "./store";
import { ThunkAction } from 'redux-thunk';

export const thunkSendMessage = (
    message: string
): ThunkAction<void, AppState, unknown, Action<string> > => async dispatch =>  {
    const asyncResp = await exampleApi();
    dispatch (
        sendMessage({
            message,
            user: asyncResp,
            timestamp: new Date().getTime()
        })
    )
}

function exampleApi() {
    return Promise.resolve('Async chat bot')
}