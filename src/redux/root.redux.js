import { combineReducers } from "redux";
import userActivity from "./activity/reducer";

const rootReducer = combineReducers({
  event: userActivity,
});

export default rootReducer;
