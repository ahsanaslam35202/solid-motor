import http from "./httpService";
import { apiURL } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = apiURL + "/sellTrades";

export function postSellTrade(data) {
  return http.post(apiEndPoint, data);
}

export function getSellTrade(data) {
  return http.get(apiEndPoint, data);
}

export function getTradeIn(userId) {
  return http.get(apiEndPoint + "/getTradeIn/" + userId);
}

export function putSellTrade(_id, estimatedPrice) {
  return http.put(apiEndPoint + "/" + _id, { estimatedPrice });
}
