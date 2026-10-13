import "./style.css";
import { getWeather } from "./api.js";
import { getWeatherObject } from "./weather.js";

async function test() {
    const weatherPromise = await getWeather("sda1231sda");
    const weatherData = getWeatherObject(weatherPromise);
    console.log(weatherData);
}

test();
//getWeather("Warsaw");
