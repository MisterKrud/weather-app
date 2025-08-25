import { createUrl, populateUrlComponent} from "./dataComponents";

 export const getLocation = (str) => populateUrlComponent(location, str); 
  export const getDate1 = (date) => populateUrlComponent(date1, date);
export   const getDate2 = (date) => populateUrlComponent(date2, date);
 export  const getUnits = (un) => populateUrlComponent(units, un);

  export const fetchUrl = ()=> createUrl(location, date1, date2, unit)

export async function getWeatherData() {

  

   
   const getWeather = async () => {
   
   
   
    const response = await fetch(fetchUrl, {mode: "cors"});
    const weatherData = await response.json();
    console.log('function activated')
    console.log(response)
    console.log(weatherData.address)
    
    return weatherData;
   }
   getWeather();
   
}


