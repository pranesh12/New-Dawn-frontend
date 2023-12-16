import axios from "axios";
// const token = JSON.parse(localStorage.getItem("token"));
export const url = "https://new-dawn-server.onrender.com/";

export const authAxios = axios.create({
  baseURL: url,
  //   Headers: {
  //     authorization: token,
  //   },
});
