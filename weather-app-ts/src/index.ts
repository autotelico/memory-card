import { getWeather, toggleMeasure } from "./api";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const citySearch: HTMLInputElement = document.querySelector("#city")!;
  const searchBtn: HTMLInputElement = document.querySelector("#search-button")!;

  citySearch.addEventListener("keydown", (e) => {
    e.key === "Enter" && getWeather(citySearch.value);
  });

  searchBtn.addEventListener("click", () => getWeather(citySearch.value));

  const toggleMeasureBtn: HTMLButtonElement =
    document.querySelector("#toggle-measure")!;
  const toggleMeasureBtnFeelsLike: HTMLButtonElement = document.querySelector(
    "#toggle-measure-feelslike"
  )!;
  toggleMeasureBtn.addEventListener("click", (e: Event) => toggleMeasure(e))
  toggleMeasureBtnFeelsLike.addEventListener("click", (e: Event) => toggleMeasure(e))
});
