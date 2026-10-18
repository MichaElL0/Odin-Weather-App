import "./style.css";
import { getWeather } from "./api.js";
import { getWeatherObject } from "./weather.js";
import { getCityData, displayWeather, bindSearch, notFound } from "./DOM.js";

async function handleSearch() {
    const city = getCityData().trim();
    if (city === "") {
        notFound("Type in city");
        return;
    }
    try {
        const rawData = await getWeather(city);
        const weather = getWeatherObject(rawData);
        displayWeather(weather);
    } catch (error) {
        console.error(error);
        notFound("City not found");
    }
}

bindSearch(handleSearch);
