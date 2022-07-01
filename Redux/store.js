import { createStore } from "redux";
import rootReducers from "./Reducer/reducescombin";
const store = createStore(rootReducers);
export default store;