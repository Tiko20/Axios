import axios from "axios";

export const getImgesService = () => {
 return axios.get("https://picsum.photos/v2/list");
  // console.log("data", data);
};
