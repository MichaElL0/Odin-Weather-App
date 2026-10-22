import "./style.css";
import { getWeather } from "./api.js";
import { getWeatherObject, changeTempUnit } from "./weather.js";
import {
    getCityData,
    displayWeather,
    bindSearch,
    showMessage,
    bindUnitToggle,
    showLoading,
    hideLoading,
} from "./DOM.js";

let lastWeather;
let lastUnit = "C";

async function handleSearch() {
    const city = getCityData().trim();
    if (city === "") {
        showMessage("Type in city");
        return;
    }
    showLoading();
    try {
        const rawData = await getWeather(city);
        const weather = getWeatherObject(rawData);
        lastWeather = weather;
        showWeather();
    } catch (error) {
        console.error(error);
        showMessage("City not found");
    } finally {
        hideLoading();
    }
}

function handleUnitToggle() {
    if (!lastWeather) return;

    if (lastUnit === "C") lastUnit = "F";
    else if (lastUnit === "F") lastUnit = "C";

    showWeather();
}

function showWeather() {
    const weatherCopy = {
        ...lastWeather,
        temperature: changeTempUnit(lastWeather.temperature, lastUnit),
        feels: changeTempUnit(lastWeather.feels, lastUnit),
    };
    displayWeather(weatherCopy, lastUnit);
}

bindSearch(handleSearch);
bindUnitToggle(handleUnitToggle);
