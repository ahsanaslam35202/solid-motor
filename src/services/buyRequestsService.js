import http from "./httpService";
import { apiURL } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = apiURL + "/buyRequests";

export function getBuyRequests() {
  return http.get(apiEndPoint);
}

export function addBuyRequest(input) {
  return http.post(apiEndPoint, input);
}
