import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "X-Request-With": "XMLHttpRequest"
  },
  withCredentials: true
})