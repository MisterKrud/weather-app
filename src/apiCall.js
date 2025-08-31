import { dataComponents } from "./dataComponents";
import { format, fromUnixTime, getDay} from "date-fns";
import { getData } from "./userInput";
// import { location } from "./geoLocation";



const components = dataComponents();

const weatherInfo = () => {
  function success(pos) {
    const crd = pos.coords;

    const coords = `${crd.latitude}, ${crd.longitude}`;
    // const lon = crd.longitude
    console.log(`Success:${coords}`);
    return coords;
  }

  const location = () => navigator.geolocation.getCurrentPosition(success);

  const coordinates = location();

}
export function getWeatherData(
    loc = "Sydney",
    dateA = "",
    dateB = "",
    unit = "metric"
  ) {

    let deg 

    
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
        `${components.baseURL}${loc}${getDate1}${getDate2}?unitGroup=${unit}&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`
      );

      const response = await fetch(
        `${components.baseURL}${loc}${getDate1}${getDate2}?unitGroup=${unit}&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`,
        { mode: "cors" }
      );
     
      const weatherData = await response.json();
   

      console.log("function activated");
      console.log(weatherData);
      console.log(`Date range: ${dateA} to ${dateB}`);
      console.log(`Location: ${weatherData.address}`);
    
      try {
        console.log(
          `Currently  ${weatherData.currentConditions.temp} degrees and ${weatherData.currentConditions.conditions}`
        );
      } catch (error) {
        console.log("No current temp information");
      }
         if (unit === "uk" || unit === "us" ) {
       deg = '\u00B0F'
       
    } else {
       deg = '\u00B0C'
      
    }

      let weekDays = []
      //   if (unit = "US" || "UK"){
      //   const deg = '\u00B0F'
      // } else {
        // const deg = '\u00B0C'
      // }
      //CONSOLE LOG 7 DAY FORECAST
     for (let i=0; i< 7; i++){
      const data = weatherData.days
      const dateFromUnix = fromUnixTime(weatherData.days[i].datetimeEpoch)
      const weekDay = format(dateFromUnix, 'eeee');
        weekDays.push(weekDay)
      if (i === 0){
        console.log('')
        console.log(`${loc.toUpperCase()} 7 DAY FORECAST`);
        console.log(`${weekDay} (Today): ${data[i].conditions} -> ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`);
      } else if (i ===1){
        console.log(`${weekDay} (Tomorrow): ${data[i].conditions} ->  ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`);
      } else {
        console.log(`${weekDay}: ${data[i].conditions} ->  ${data[i].tempmin}${deg} - ${data[i].tempmax}${deg}`);
      }
    }

   //CONSOLE LOG TODAY'S WEATHER DETAILS
   const today = weatherData.days[0]
   console.log('');
   console.log("TODAY'S DETAILS");
   console.log(today.description);
   console.log('');
   console.log(`TEMP`);
   console.log(`Now: ${today.temp}${deg} (feels like ${today.feelslike}${deg})`);
   console.log(`Max: ${today.tempmax}${deg} (feels like ${today.feelslikemax}${deg})`);
   console.log(`Min: ${today.tempmin}${deg} (feels like ${today.feelslikemin}${deg})`);
   console.log('');
   console.log(`Sunrise: ${today.sunrise}`);
   console.log(`Sunset: ${today.sunset}`);
   console.log('');
    console.log(`Chance of rain: ${today.precipprob}`)
  console.log('');
   console.log(`Humidity: ${today.humidity}`)
   console.log(`Wind speed: ${today.windspeed}`)
   console.log(`UV Index: ${today.uvindex}`)

    





     
   
      

      return weatherData;
    };

    getWeather();
  }

