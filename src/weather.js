export function getWeatherObject(weatherData) {
    return {
        name: weatherData.resolvedAddress,
        conditions: weatherData.currentConditions.conditions,
        feels: weatherData.currentConditions.feelslike,
        icon: weatherData.currentConditions.icon,
        pressure: weatherData.currentConditions.pressure,
        sunrise: weatherData.currentConditions.sunrise,
        sunset: weatherData.currentConditions.sunset,
        temperature: weatherData.currentConditions.temp,
        wind: weatherData.currentConditions.windspeed,
    };
}
