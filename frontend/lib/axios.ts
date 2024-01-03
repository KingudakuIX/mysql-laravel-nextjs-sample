import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "X-Request-With": "XMLHttpRequest"
  },
  withCredentials: true
})

axios.interceptors.request.use((config) => {
  const cookie = getCookie("XSRF-TOKEN");
  config.headers.set("X-XSRF-TOKEN", cookie)
  const token = window.localStorage.getItem("token");
  config.headers.set("authorization", `Bearer ${token}`)
  return config;
}, function (error) {
  return Promise.reject(error);
})

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}