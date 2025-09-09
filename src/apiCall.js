import { components } from "./dataComponents";

const dataComponents = components;
const inputValues = () => components.inputValues

export async function getWeatherData() {
  console.log(inputValues());
  const getWeather = async () => {
    console.log(
      `${dataComponents.baseURL}${components.inputValues[0]}${components.inputValues[1]}${components.inputValues[2]}?unitGroup=${components.inputValues[3]}&include=days%2Chours%2Ccurrent&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`
    );
    const response = await fetch(
      `${dataComponents.baseURL}${components.inputValues[0]}${components.inputValues[1]}${components.inputValues[2]}?unitGroup=${components.inputValues[3]}&include=days%2Chours%2Ccurrent&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log("function activated");
    console.log(weatherData)
    try {
      console.log(
        `Currently  ${weatherData.currentConditions.temp} degrees and ${weatherData.currentConditions.conditions}`
      );
    } catch (error) {
      console.log("No current temp information");
    }
    return weatherData;
  };
  return getWeather();
}
