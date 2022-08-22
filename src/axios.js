import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-a9347.cloudfunctions.net/api",
  // "http://localhost:5001/clone-a9347/us-central1/api",
});

export default instance;
