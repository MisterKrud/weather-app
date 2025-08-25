import { createUrl, populateUrlComponent} from "./dataComponents";


 export const getLocation = (str) => populateUrlComponent(location, str); 
  export const getDate1 = (date1) => populateUrlComponent(date1, date);
export   const getDate2 = (date) => populateUrlComponent(date2, date);
 export  const getUnits = (un) => populateUrlComponent(units, un);

  export const fetchUrl = (location, unit)=> createUrl(location, unit)

export async function getWeatherData(loc, unit="us") {
 
  

   
   const getWeather = async () => {
   
   
   
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=${unit}&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`, {mode: "cors"});
    const weatherData = await response.json();

    console.log(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=${unit}&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`)
    console.log('function activated')
    console.log(weatherData)
    console.log(weatherData.address)
    console.log(weatherData.currentConditions.conditions)
    console.log(weatherData.days[0].tempmax)
    console.log(weatherData.days[0].tempmin)
    console.log(weatherData.currentConditions.temp)

    
    return weatherData;
   }
   getWeather();
   
}


