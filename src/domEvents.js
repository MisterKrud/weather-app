import { components } from "./dataComponents";
import { getWeatherData } from "./apiCall";
import { format, fromUnixTime, getDay } from "date-fns";
import { clearWeatherInformation } from "./userInput";



const informationContainer = document.getElementById("information");
const hourlyContainer = document.getElementById("hourly")
const locationHeading = document.createElement("h3")
const locationHeader = document.getElementById('location-header');
const todaysWeather = document.getElementById("todays-weather");
const forecastDiv = document.getElementById("forecast");
const weatherNowDiv = document.getElementById("now");
const today = document.getElementById("today")



// const weatherData = await getWeatherData(...components.inputValues)
//     const data = weatherData.days
//     const today = data[0];
//     console.log(`inputVales from DOM ${components.inputValues}`)
//     const theHour = today.hours[0]
//     console.log(theHour.datetime)


 
let deg 
let weekdays

export async function weather() {
   
  
   const weatherData = await getWeatherData(...components.inputValues)
    const data = weatherData.days
    const today = data[0];
    const theHour = today.hours[0]
    const rightNow = weatherData.currentConditions;
    



weekdays = []
if (components.inputValues[3] === "metric" ) {
      deg = "\u00B0C";
    } else {
      deg = "\u00B0F";
    }
 
const populateDom = async () => {

clearWeatherInformation();   
sevenDayForecast(data, deg);
currentWeather(today, deg);
hourlyForecast(today, deg);
weatherRightNow(rightNow, deg);
};

populateDom();
return weatherData
}


const sevenDayForecast = async (data, deg) => {
 for (let i = 0; i < 7; i++) {
   
      const dateFromUnix = fromUnixTime(data[i].datetimeEpoch);
      const weekDay = format(dateFromUnix, "eeee");
      weekdays.push(weekDay);
      if (i === 0) {
        console.log("");
        // console.log(`${inputValues[0].toUpperCase()} 7 DAY FORECAST`);
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
      locationHeading.textContent =`${components.inputValues[0]} Weather`
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
      forecastCard.classList.add(`${data[i].icon}`)
    }
}

const currentWeather = (today, deg)  => {
   
todaysWeather.innerHTML = "";
    
    const todaysHeader =document.createElement("div");
      todaysHeader.id = "todays-header";
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
    todaysOther.innerHTML = `<p>Humidity: ${today.humidity}%</p><p>Wind speed: ${today.windspeed} km/h</p><p>UV Index: ${today.uvindex}</p>`
}

const hourlyForecast = async(today, deg) => {
 for (let i = 6; i < today.hours.length; i+=3) {
    const hourDiv = document.createElement("div");
     hourlyContainer.appendChild(hourDiv)
    hourDiv.className = "hour";
    const thisHour = today.hours[i]
    console.log('this hour')
    console.log(thisHour.datetime)
     if( i <=9){
        hourDiv.classList.add("morning");
    } else if (i <= 15){
        hourDiv.classList.add("afternoon")
    } else {
        hourDiv.classList.add("night")
    }
    hourDiv.innerHTML =
    `<div>${thisHour.datetime}</div>
    <div>${thisHour.temp}${deg}</div>
    <div>${thisHour.conditions}</div>
   

    <div>Rain: ${thisHour.precipprob}%</div>
    <div>${thisHour.icon}`
    
   
 }
  };

  const weatherRightNow = (rightNow, deg) =>{
    weatherNowDiv.innerHTML = "";
    const nowHeader = document.createElement("div");
    const nowTemp = document.createElement("div");
    const nowHumidity = document.createElement("div");
    const nowConditions = document.createElement("div")
    weatherNowDiv.append(nowHeader, nowTemp, nowConditions, nowHumidity)

    nowHeader.innerHTML = `<h4 style="font-weight: bold;">Now: <span style = "font-weight: normal;">${rightNow.conditions}</span></h4>`
    nowTemp.innerHTML =`<p style = "font-weight: bold">${rightNow.temp}${deg} <span style = "font-weight: normal; font-size: 0.9rem;"> - feels like ${rightNow.feelslike}${deg}</span></p> `

   
    nowHumidity.innerHTML = `<p>Humidity: <span style="font-weight: bold;">${rightNow.humidity}</span></p></br>`

  }
  


 