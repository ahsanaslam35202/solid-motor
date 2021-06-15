import http from "./httpService";
import { apiURL } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = apiURL + "/cars";

export function getCars() {
  return http.get(apiEndPoint);
}

export function sendCSV() {
  return http.get(apiEndPoint + "/csv/");
}

export function getCar(carId) {
  return http.get(apiEndPoint + "/" + carId);
}

export function getRelatedCars(carMake) {
  return http.get(apiEndPoint + "/related/" + carMake);
}

export function addCar(carInput) {
  return http.post(apiEndPoint, carInput.car);
}

export function deleteCar(carId) {
  return http.delete(apiEndPoint + "/" + carId);
}

export function updateViews(carId, views) {
  return http.put(apiEndPoint + "/views/" + carId, { views });
}

export function updateLikes(carId, likes) {
  return http.put(apiEndPoint + "/likes/" + carId, { likes });
}
