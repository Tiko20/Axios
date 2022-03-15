import { GETIMAGESERROR,  GETIMAGESSUCCES} from "./actionTypes";

const state = { data: {}, error: "" };
export const getPhotoData = (state, actions) => {
  switch (actions.type) {
    case GETIMAGESSUCCES:
      return { ...state, data: [...actions.payload] };
    case GETIMAGESERROR:
      return {
        ...state,
        error: actions.payload,
      };
    default:
      return { ...state };
  }
};
