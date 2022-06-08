import { combineReducers } from "redux";
import LoaderReducer from "./loader_reducer";
import AuthReducer from "./auth_reducer";

const RootReducer = combineReducers({
  Loader: LoaderReducer,
  Auth: AuthReducer,
});

export default RootReducer;
