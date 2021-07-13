import axios from "axios";
import * as URL from './constant';

export function GetText() {
  return (dispatch) => {
    return axios.get(URL.GET).then((response) => {
      dispatch(Get(response.data));
    });
  };
}

export function Get(data) {
    return {
      type: "GET_TEXT",
      text: data,
    };
}
