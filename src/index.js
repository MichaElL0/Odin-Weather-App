import "./style.css";
import { getWeather } from "./api.js";
import { getWeatherObject } from "./weather.js";
import { getCityData, displayWeather, bindSearch, notFound } from "./DOM.js";

async function test() {
    const weatherPromise = await getWeather("sda1231sda");
    const weatherData = getWeatherObject(weatherPromise);
    console.log(weatherData);
}

async function handleSearch() {
    if (getCityData() === "") {
        notFound();
        return;
    }
    try {
        const city = getCityData();
        const rawData = await getWeather(city);
        const weather = getWeatherObject(rawData);
        displayWeather(weather);
    } catch (error) {
        console.error(error);
        notFound();
    }
}

bindSearch(handleSearch);
