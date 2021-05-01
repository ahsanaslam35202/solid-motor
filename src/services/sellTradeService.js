import http from "./httpService";
import { apiURL } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = apiURL + "/sellTrades";

export function postSellTrade(data) {
  return http.post(apiEndPoint, data);
}
