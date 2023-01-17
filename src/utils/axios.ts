import axios from "axios";

export const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1/all",
});

instance.interceptors.response.use((response) => response.data);
