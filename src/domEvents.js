import { components } from "./dataComponents";
import { getWeatherData } from "./apiCall";
import { format, fromUnixTime, getDay, getTime } from "date-fns";
import { clearWeatherInformation } from "./userInput";





const informationContainer = document.getElementById("information");
const hourlyContainer = document.getElementById("hourly")
const locationHeading = document.createElement("h3")
const locationHeader = document.getElementById('location-header');
const todaysWeather = document.getElementById("todays-weather");
const forecastDiv = document.getElementById("forecast");
const weatherNowDiv = document.getElementById("now");
const today = document.getElementById("today")
// const todayContainer = document.getElementById("today-container");

const renderIcon = (iconData) =>{
  if (iconData){
const img =  document.createElement("img");
img.src = iconData
console.log('iconData...')
console.log(iconData)
img.className ='icon'
return img
}
}

const getIcons = async(iconName) =>{
    const icons = await import(`./assets/icons/${iconName}.svg`);
    console.log('getIcons...')
    console.log(icons.default)
    return icons.default
    
}

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

    



    
// const weatherIcon = weatherData.icon

// const iconData = await getIcons(weatherIcon) 






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
        const iconName = data[i].icon;
        console.log('icon-name...')
        console.log(iconName)
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
      dayInfo.innerHTML = `<p style = "font-weight: bold; font-size: 1rem;">${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}</p><p>${data[i].conditions}</p> `
      forecastCard.append(dayHeading, dayInfo);
      forecastCard.classList.add(`${data[i].icon}`)

      const iconToGet = await getIcons(iconName)
      console.log('iconName')
      console.log(iconName)
    
   forecastCard.appendChild(renderIcon(iconToGet))
    console.log('iconToGet')
      console.log(iconToGet)
    }
}

const currentWeather = async(today, deg)  => {
   
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
    
      const sunsetTime = fromUnixTime(today.sunsetEpoch);
      const sunriseTime = fromUnixTime(today.sunriseEpoch);
      const dayOfWeek = fromUnixTime(today.datetimeEpoch);
     

      const formattedSunrise = format(sunsetTime, "p");
      const formattedSunset = format(sunriseTime,"p");
      const todaysName = format(dayOfWeek, "eeee")

    todaysHeader.innerHTML = `<h4>Today: ${todaysName}</h4><p style = "margin-right: 5rem;">${today.description}</p></br>`
    todaysTemps.innerHTML = `<p style = "font-size: 1.4rem; font-weight: bold;">${today.tempmax}${deg} - ${today.tempmin}${deg}</p></br>`
    todaysSun.innerHTML = `<p>Sunrise: ${formattedSunrise}</p><p>Sunset: ${formattedSunset}</p></br>`
    todaysPrecip.innerHTML = `<p>Chance of rain: ${today.precipprob}%</p></br>`
    todaysOther.innerHTML = `<p>Humidity: ${today.humidity}%</p><p>Wind speed: ${today.windspeed} km/h</p><p>UV Index: ${today.uvindex}</p>`
const iconName = today.icon;
    const iconToGet = await getIcons(iconName) 
    
   todaysWeather.appendChild(renderIcon(iconToGet))
    todaysWeather.querySelector("img").className = ("big-icon");
  }

const hourlyForecast = async(today, deg) => {
  
 for (let i = 6; i < today.hours.length; i+=3) {
    const hourDiv = document.createElement("div");
     hourlyContainer.appendChild(hourDiv)
    hourDiv.className = "hour";
    const thisHour = today.hours[i]
     const timeFromUnix = fromUnixTime(thisHour.datetimeEpoch);
      const currentTime = format(timeFromUnix, "p");
    const iconName = thisHour.icon
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
    `<div style = "font-weight: bold;" class = "hour-header">${currentTime}</div>
    <p style = "font-weight: bold; font-size: 1.2rem;">${thisHour.temp}${deg}</p>
    <p>${thisHour.conditions}</p>
   

    <p>Rain: ${thisHour.precipprob}%</p>`
  

    const iconToGet = await getIcons(iconName)
    
   hourDiv.appendChild(renderIcon(iconToGet))
   
 }
  };

  const weatherRightNow = async(rightNow, deg) =>{
    weatherNowDiv.innerHTML = "";
    const nowHeader = document.createElement("div");
    const nowTemp = document.createElement("div");
    const nowHumidity = document.createElement("div");
    const nowConditions = document.createElement("div")
    weatherNowDiv.append(nowHeader, nowTemp, nowConditions, nowHumidity)
    const iconName = rightNow.icon

    nowHeader.innerHTML = `<h4 style="font-weight: bold;">Right now</h4>
    <p style = "font-weight: normal;">${rightNow.conditions}</p>`
    nowTemp.innerHTML =`<p style = "font-weight: bold; font-size: 1.6rem;">${rightNow.temp}${deg}</p>
    <p style = "font-weight: normal; font-size: 0.9rem;">Feels like ${rightNow.feelslike}${deg}</p> `

   
    // nowHumidity.innerHTML = `<p>Humidity: <span style="font-weight: bold;">${rightNow.humidity}</span></p></br>`

   
    const iconToGet = await getIcons(iconName) 
    
   weatherNowDiv.appendChild(renderIcon(iconToGet))
    weatherNowDiv.querySelector("img").className = ("big-icon");
 

  }
  


 