import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true // withCredentials özelliği burada ayarlanmalıdır
});

export const Login = async (formData) =>
  await http.post("/user/signin", formData);

export const register = async (formData) =>
  await http.post("/user/signup", formData);

export const sendChat = async (data) =>
  await http.post("/chat", data, { withCredentials: true }); // withCredentials özelliği burada da ayarlanmalıdır



