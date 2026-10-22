import { weatherIcon } from "./icons.js";

export function getCityData() {
    const inputCity = document.querySelector("#search").value;
    return inputCity;
}

export function displayWeather(weatherData, unit) {
    const parentDiv = document.querySelector(".result");
    parentDiv.textContent = "";

    const headerName = document.createElement("h1");
    headerName.textContent = weatherData.name[0].toUpperCase() + weatherData.name.slice(1);

    const headerTemp = document.createElement("h2");
    headerTemp.textContent = weatherData.temperature + unit;

    const conditions = document.createElement("p");
    conditions.textContent = weatherData.conditions;

    const weatherIconImg = document.createElement("img");
    weatherIconImg.src = weatherIcon(weatherData.icon);
    weatherIconImg.alt = "Weather conditions";

    const headerFeelsTemp = document.createElement("h3");
    headerFeelsTemp.textContent = "Feels like " + weatherData.feels + unit;

    const pressure = document.createElement("p");
    pressure.textContent = "Pressure " + weatherData.pressure;

    const sunRise = document.createElement("p");
    sunRise.textContent = "Sunrise at : " + weatherData.sunrise;

    const sunSet = document.createElement("p");
    sunSet.textContent = "Sunset at " + weatherData.sunset;

    const wind = document.createElement("p");
    wind.textContent = "Wind speed " + weatherData.wind;

    parentDiv.append(
        headerName,
        headerTemp,
        conditions,
        weatherIconImg,
        headerFeelsTemp,
        pressure,
        sunRise,
        sunSet,
        wind,
    );
}

export function bindSearch(onSearch) {
    const button = document.querySelector("#searchButton");

    button.addEventListener("click", () => {
        onSearch();
    });
}

export function bindUnitToggle(onToggle) {
    const button = document.querySelector("#unitBtn");

    button.addEventListener("click", () => {
        onToggle();
    });
}

export function showMessage(text) {
    const parentDiv = document.querySelector(".result");
    parentDiv.textContent = text;
}

export function showLoading() {
    const loadingDiv = document.querySelector(".loading");
    loadingDiv.classList.remove("loading-hide");
    const button = document.querySelector("#searchButton");
    button.disabled = true;
}

export function hideLoading() {
    const loadingDiv = document.querySelector(".loading");
    loadingDiv.classList.add("loading-hide");
    const button = document.querySelector("#searchButton");
    button.disabled = false;
}
