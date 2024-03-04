import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dogReducer from "./reducer/dogReducer";
import { composeWithDevTools } from "@redux-devtools/extension";


const store = createStore(dogReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

