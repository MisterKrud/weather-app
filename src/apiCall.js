import { components } from "./dataComponents";


// import { location } from "./geoLocation";

const dataComponents = components;

// const locationHeading = document.createElement("h3")
// const locationHeader = document.getElementById('location-header');

const weatherInfo = () => {
  function success(pos) {
    const crd = pos.coords;

    const coords = `${crd.latitude}, ${crd.longitude}`;
    // const lon = crd.longitude
    console.log(`Success:${coords}`);
    return coords;
  }

  const location = async () => navigator.geolocation.getCurrentPosition(success);

  const coordinates = location();
};


export async function getWeatherData(
  loc = "Sydney",
  dateA = "",
  dateB = "",
  unit = "metric"
) {


  console.log("^^getWeatherData");
  console.log(loc, dateA, dateB, unit);

  const getWeather = async () => {
    console.log(`date1 initial value: ${dateA}`);
    console.log(`date2 initial value: ${dateB}`);

    let date1;
    let date2;

    const getDate1 = (() => {
      if (dateA != "") {
        date1 = "/" + dateA;
      } else {
        date1 = "";
      }
      console.log(date1 + dateA);
      return date1;
    })();

    const getDate2 = (() => {
      if (dateB != "") {
        date2 = "/" + dateB;
      } else {
        date2 = "";
      }
      console.log(date2 + dateB);
      return date2;
    })();

    console.log(
      `${dataComponents.baseURL}${loc}${getDate1}${getDate2}?unitGroup=${unit}&include=days%2Chours%2Ccurrent&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`
    );
console.log(unit)
    const response = await fetch(
      `${dataComponents.baseURL}${loc}${getDate1}${getDate2}?unitGroup=${unit}&include=days%2Chours%2Ccurrent&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`,
      { mode: "cors" }
    );

    const weatherData = await response.json();

    console.log("function activated");
    console.log(`weatherData ${weatherData}`);
    console.log(`Date range: ${dateA} to ${dateB}`);
    console.log(`Location: ${weatherData.address}`);

    try {
      console.log(
        `Currently  ${weatherData.currentConditions.temp} degrees and ${weatherData.currentConditions.conditions}`
      );
    } catch (error) {
      console.log("No current temp information");
    }
  

   
;
 


// locationHeading.textContent =`${loc} Weather`
// locationHeader.appendChild(locationHeading)

   
    // for (let i = 0; i < 7; i++) {
    //    const forecastDiv = document.getElementById("forecast");
    //   const data = weatherData.days;
    //   const dateFromUnix = fromUnixTime(weatherData.days[i].datetimeEpoch);
    //   const weekDay = format(dateFromUnix, "eeee");
    //   weekDays.push(weekDay);
    //   if (i === 0) {
    //     console.log("");
    //     console.log(`${loc.toUpperCase()} 7 DAY FORECAST`);
    //     console.log(
    //       `${weekDay} (Today): ${data[i].conditions} -> ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`
    //     );
    //   } else if (i === 1) {
    //     console.log(
    //       `${weekDay} (Tomorrow): ${data[i].conditions} -> ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`
    //     );
    //   } else {
    //     console.log(
    //       `${weekDay}: ${data[i].conditions} -> ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`
    //     );
    //   }
    //   const forecastCard = document.createElement("div");
    //   forecastCard.className ="forecast-card";
    //   forecastCard.id = `day-${i}`
    //   forecastDiv.appendChild(forecastCard);
    //   const dayHeading = document.createElement("h4");
    //   dayHeading.textContent = `${weekDay}`
    //   const dayInfo = document.createElement("div");
    //   dayInfo.innerHTML = `<p>${data[i].conditions}</p> <p>${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}</p>`
    //   forecastCard.append(dayHeading, dayInfo);
    // }

    // //CONSOLE LOG TODAY'S WEATHER DETAILS
    // const today = weatherData.days[0];
    // const todaysWeather = document.getElementById("today");
    // todaysWeather.innerHTML = `<h4>Today's weather</h4><p>${today.description}</p></br><h5>Temperatures:</h5><p>Now: ${today.temp}${deg} (feels like ${today.feelslike}${deg})</p><p>Max: ${today.tempmax}${deg} (feels like ${today.feelslikemax}${deg})</p><p>Min: ${today.tempmin}${deg} (feels like ${today.feelslikemin}${deg})</p></br><p>Sunrise: ${today.sunrise}</p><p>Sunset: ${today.sunset}</p></br><p>Chance of rain: ${today.precipprob}%</p></br><p>Humidity: ${today.humidity}%</p><p>Wind speed: ${today.windspeed} km/h</p><p>UV Index: ${today.uvindex}</p>`
    // console.log("");
    // console.log("TODAY'S DETAILS");
    // console.log(today.description);
    // console.log("");
    // console.log(`TEMP`);
    // console.log(
    //   `Now: ${today.temp}${deg} (feels like ${today.feelslike}${deg})`
    // );
    // console.log(
    //   `Max: ${today.tempmax}${deg} (feels like ${today.feelslikemax}${deg})`
    // );
    // console.log(
    //   `Min: ${today.tempmin}${deg} (feels like ${today.feelslikemin}${deg})`
    // );
    // console.log("");
    // console.log(`Sunrise: ${today.sunrise}`);
    // console.log(`Sunset: ${today.sunset}`);
    // console.log("");
    // console.log(`Chance of rain: ${today.precipprob}%`);
    // console.log("");
    // console.log(`Humidity: ${today.humidity}%`);
    // console.log(`Wind speed: ${today.windspeed} km/h`);
    // console.log(`UV Index: ${today.uvindex}`);






    return weatherData;
  };

  return getWeather();
}
