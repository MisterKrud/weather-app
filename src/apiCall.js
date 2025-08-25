export async function getWeatherData() {
   
   const getWeather = async () => {
   
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dubbo%2C%20NSW%2C%20AU?unitGroup=metric&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json", {mode: "cors"});
    const weatherData = await response.json()
    console.log(response)
    console.log(weatherData.address)
    return { response, weatherData};
   }
}