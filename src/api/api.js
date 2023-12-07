import axios from "axios";
// const token = JSON.parse(localStorage.getItem("token"));
export const url = "http://localhost:5000/";

export const authAxios = axios.create({
  baseURL: url,
  //   Headers: {
  //     authorization: token,
  //   },
});
