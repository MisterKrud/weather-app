import { components } from "./dataComponents";
import { success } from "./getLocation";
import { location } from "./getLocation";


// const coords =  success()
const dataComponents = components;
const inputValues = () => components.inputValues
// // const locationHeading = document.createElement("h3")
// // const locationHeader = document.getElementById('location-header');

// // const currentLocation = location()

// const locationGetter = async () => {
//   const response = await fetch(`${dataComponents.locationIqUrlA}${dataComponents.locationIqKey}&lat=${coords.lat}$lon=${coords.lon}$format=json&`) 
//   const locationData = await response.json();
//   console.log(`LOCATION DATA: ${locationData}`)
// }



export async function getWeatherData() {


  console.log(inputValues());
  // console.log(loc, dateA, dateB, unit);

  const getWeather = async () => {
    // console.log(`date1 initial value: ${dateA}`);
    // console.log(`date2 initial value: ${dateB}`);

    // let date1;
    // let date2;

    // const getDate1 = (() => {
    //   if (dateA != "") {
    //     date1 = "/" + dateA;
    //   } else {
    //     date1 = "";
    //   }
    //   console.log(date1 + dateA);
    //   return date1;
    // })();

    // const getDate2 = (() => {
    //   if (dateB != "") {
    //     date2 = "/" + dateB;
    //   } else {
    //     date2 = "";
    //   }
    //   console.log(date2 + dateB);
    //   return date2;
    // })();

    console.log(
      `${dataComponents.baseURL}${components.inputValues[0]}${components.inputValues[1]}${components.inputValues[2]}?unitGroup=${components.inputValues[3]}&include=days%2Chours%2Ccurrent&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`
    );

    const response = await fetch(
      `${dataComponents.baseURL}${components.inputValues[0]}${components.inputValues[1]}${components.inputValues[2]}?unitGroup=${components.inputValues[3]}&include=days%2Chours%2Ccurrent&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    console.log("function activated");
    console.log(`weatherData ${weatherData}`);
    // console.log(`Date range: ${dateA} to ${dateB}`);
    console.log(`Location: ${weatherData.address}`);

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


