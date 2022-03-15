import { combineReducers } from "redux";
import { getPhotoData } from "./redux/reducer";

export const rootReducer = combineReducers({
  nkar: getPhotoData,
});
