import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: "http://127.0.0.1:10000/",
  baseURL: "https://amazon-backend-yonas.cyclic.app",
});

export default instance;
