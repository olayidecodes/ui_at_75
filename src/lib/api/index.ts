import axios from "axios";
import config from "@/config/config";

export const publicApiInstance = axios.create({
    baseURL: config.BASE_URL,
    headers: {
      'ngrok-skip-browser-warning':true,
      "Content-Type": "application/json",
    },
})