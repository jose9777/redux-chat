import {systemReducer} from "./system/reducers";
import {chatReducer} from "./chat/reducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer
});



export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer)
    );

    return store;
}