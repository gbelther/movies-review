import axios from "axios";

export const apimovies = axios.create({
  baseURL: "http://localhost:3333",
});
