import { createUrl, populateUrlComponent} from "./dataComponents";

 export const getLocation = (str) => populateUrlComponent(location, str); 
  export const getdate1 = (date) => populateUrlComponent(date1, date);
export   const getDate2 = (date) => populateUrlComponent(date2, date);
 export  const getUnits = (un) => populateUrlComponent(unit, un);

  export const fetchUrl = ()=> createUrl(location, date1, date2, unit)

export async function getWeatherData() {

  

   
   const getWeather = async () => {
   
   
   
    const response = await fetch(fetchUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dubbo%2C%20NSW%2C%20AU?unitGroup=metric&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json", {mode: "cors"});
    const weatherData = await response.json();
    console.log('function activated')
    console.log(response)
    console.log(weatherData.address)
    
    return weatherData;
   }
   getWeather();
   
}


