import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import friendReducer from "./friendReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import chatReducer from "./chatReducer";
import roomReducer from "./roomReducer";

const persisConfig = {
  storage,
  autoMergeLevel2,
};
const authConfig = {
  ...persisConfig,
  key: "auth",
  whitelist: ["userId", "token", "isLoggedIn", "email", "username"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  friend: friendReducer,
  chat: chatReducer,
  room: roomReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
