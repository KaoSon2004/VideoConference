import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import store from "../store/reducers/rootReducer";

const persistor = persistStore(store);
export default persistor;
