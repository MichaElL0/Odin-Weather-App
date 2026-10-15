export function getCityData() {
    const inputCity = document.querySelector("#search").value;
    return inputCity;
}

export function displayWeather(weatherData) {
    const parentDiv = document.querySelector(".result");
    parentDiv.textContent = "";

    const headerName = document.createElement("h1");
    headerName.textContent = weatherData.name;

    const headerTemp = document.createElement("h2");
    headerTemp.textContent = weatherData.temperature + "°C";

    const conditions = document.createElement("p");
    conditions.textContent = weatherData.conditions;

    // const weatherIconImg = document.createElement("img");
    // weatherIconImg.src = weatherData.icon;

    const headerFeelsTemp = document.createElement("h3");
    headerFeelsTemp.textContent = "Feels like " + weatherData.feels;

    const pressure = document.createElement("p");
    pressure.textContent = "Pressure " + weatherData.pressure;

    const sunRise = document.createElement("p");
    sunRise.textContent = "Sunrise at : " + weatherData.sunrise;

    const sunSet = document.createElement("p");
    sunSet.textContent = "Sunset at " + weatherData.sunset;

    const wind = document.createElement("p");
    wind.textContent = "Wind speed " + weatherData.wind;

    parentDiv.append(headerName, headerTemp, conditions, headerFeelsTemp, pressure, sunRise, sunSet, wind);
}

export function bindSearch(onSearch) {
    const button = document.querySelector("#searchButton");

    button.addEventListener("click", () => {
        onSearch();
    });
}

export function notFound() {
    const parentDiv = document.querySelector(".result");
    parentDiv.textContent = "City not found";
}
