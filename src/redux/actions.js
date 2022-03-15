import {
  GETIMAGESERROR,
  GETIMAGESSUCCES,
  GETPHOTOSREQUEST,
} from "./actionTypes";
import { getImgesService } from "./services";

export const refrehImgaesAction = () => {
  return (dispatch) => {
    dispatch(getphotosrequest())
    getImgesService()
      .then(response => {
        dispatch(getimagessucces(response.data));
      })
      .catch(error => {
        dispatch(getimageserror(error));
      });
  };

  function getphotosrequest() {
    return {
      type: GETPHOTOSREQUEST,
    };
  }

  function getimageserror(error) {
    return {
      type: GETIMAGESERROR,
      payload: error,
    };
  }

  function getimagessucces(data) {
    return {
      type: GETIMAGESSUCCES,
      payload: data,
    };
  }
};
