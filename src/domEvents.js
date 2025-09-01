import { components } from "./dataComponents";
import { getWeatherData } from "./apiCall";
import { format, fromUnixTime, getDay } from "date-fns";


const inputValues = components.inputValues
const locationHeading = document.createElement("h3")
const locationHeader = document.getElementById('location-header');



export async function weather() {
    const weatherData = await getWeatherData(...inputValues)
    const data = weatherData.days

let deg 
let weekdays = []
if (inputValues[3] === "metric" ) {
      deg = "\u00B0C";
    } else {
      deg = "\u00B0F";
    }
 
const populateDom = () => {
   
 for (let i = 0; i < 7; i++) {
       const forecastDiv = document.getElementById("forecast");
     
      const dateFromUnix = fromUnixTime(data[i].datetimeEpoch);
      const weekDay = format(dateFromUnix, "eeee");
      weekdays.push(weekDay);
      if (i === 0) {
        console.log("");
        console.log(`${inputValues[0].toUpperCase()} 7 DAY FORECAST`);
        console.log(
          `${weekDay} (Today): ${data[i].conditions} -> ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`
        );
      } else if (i === 1) {
        console.log(
          `${weekDay} (Tomorrow): ${data[i].conditions} -> ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`
        );
      } else {
        console.log(
          `${weekDay}: ${data[i].conditions} -> ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`
        );
      }
      locationHeading.textContent =`${inputValues[0]} Weather`
locationHeader.appendChild(locationHeading)
      const forecastCard = document.createElement("div");
      forecastCard.className ="forecast-card";
      forecastCard.id = `day-${i}`
      forecastDiv.appendChild(forecastCard);
      const dayHeading = document.createElement("h4");
      dayHeading.textContent = `${weekDay}`
      const dayInfo = document.createElement("div");
      dayInfo.innerHTML = `<p>${data[i].conditions}</p> <p>${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}</p>`
      forecastCard.append(dayHeading, dayInfo);
    }


     //CONSOLE LOG TODAY'S WEATHER DETAILS
    const today = weatherData.days[0];
 
    const todaysWeather = document.getElementById("today");
    const todaysHeader =document.createElement("div");
      todaysHeader.id = "toays-header";
    const todaysTemps = document.createElement("div");
      todaysTemps.id  = "todays-temps";
    const todaysSun = document.createElement("div");
      todaysSun.id = "todays-sun";
    const todaysPrecip = document.createElement("div");
      todaysPrecip.id = ("todays-precip");
    const todaysOther = document.createElement("div");
      todaysOther.id = "todays-other";

      

    todaysWeather.append(todaysHeader, todaysTemps, todaysSun, todaysOther)


    const todaysForecastDivs = todaysWeather.querySelectorAll("div");
    console.log(todaysForecastDivs)
     let i = 1
    todaysForecastDivs.forEach((div) => {
     
      div.className = "todays-forecast"
  
    });

    todaysHeader.innerHTML = `<h4>Today's weather</h4><p>${today.description}</p></br>`
    todaysTemps.innerHTML = `<h5>Temperatures:</h5><p>Now: ${today.temp}${deg} (feels like ${today.feelslike}${deg})</p><p>Max: ${today.tempmax}${deg} (feels like ${today.feelslikemax}${deg})</p><p>Min: ${today.tempmin}${deg} (feels like ${today.feelslikemin}${deg})</p></br>`
    todaysSun.innerHTML = `<p>Sunrise: ${today.sunrise}</p><p>Sunset: ${today.sunset}</p></br>`
    todaysPrecip.innerHTML = `<p>Chance of rain: ${today.precipprob}%</p></br>`
    todaysOtherInnerHTML = `<p>Humidity: ${today.humidity}%</p><p>Wind speed: ${today.windspeed} km/h</p><p>UV Index: ${today.uvindex}</p>`
};
populateDom();
}
// console.log(data)
// const forecastDiv = document.getElementById("forecast");
// const today = document.getElementById("today");

// export const dataInfo = () => {
//     console.log(data)
// }