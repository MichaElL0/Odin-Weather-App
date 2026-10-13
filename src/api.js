export async function getWeather(city) {
    try {
        const weatherData = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=ATUX84843BBMU7YE6AYJKDZGS`,
        );

        if (!weatherData.ok) {
            throw new Error("Nie znaleziono miasta albo serwer zwrócił błąd");
        }
        const weatherJson = await weatherData.json();

        return weatherJson;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
