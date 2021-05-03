import http from "./httpService";
import { apiURL } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = apiURL + "/cars";

export function getCars() {
  return http.get(apiEndPoint);
}

export function getCar(carId) {
  return http.get(apiEndPoint + "/" + carId);
}

export function addCar(carInput) {
  return http.post(apiEndPoint, carInput.car);
}

export function deleteCar(carId) {
  return http.delete(apiEndPoint + "/" + carId);
}
