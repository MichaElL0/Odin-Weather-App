import "./style.css";

async function getWeather(city) {
    let weatherData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=ATUX84843BBMU7YE6AYJKDZGS`,
    );

    let weatherJson = await weatherData.json();

    console.log(weatherJson.currentConditions);
}

getWeather("Warsaw");
