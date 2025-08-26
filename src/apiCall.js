import { dataComponents } from "./dataComponents";

const components = dataComponents()
//  export const getLocation = (str) => populateUrlComponent(location, str); 
//   export const getDate1 = (date1) => populateUrlComponent(date1, date);
// export   const getDate2 = (date) => populateUrlComponent(date2, date);
//  export  const getUnits = (un) => populateUrlComponent(units, un);

  // export const fetchUrl = (location, unit)=> createUrl(location, unit)

  

export async function getWeatherData(loc="Dubbo",  dateA="", dateB="", unit="metric") {
 
  console.log(loc,  dateA, dateB, unit)

   
   const getWeather = async () => {
    console.log(`date1 initial value: ${dateA}`)
    console.log(`date2 initial value: ${dateB}`)
   
  
     let date1
     let date2
    
   
const getDate1 = (() => {
  if (dateA != ""){
    date1 = "/"+dateA
    
  } else {
    date1=""
  }
  console.log(date1+dateA)
  return date1
})()

const getDate2 = (()=>{
if (dateB != ""){
    date2 = "/"+dateB
  } else {
    date2=""
  }
  console.log(date2+dateB)
  return date2
})()


   
console.log(`${components.baseURL}${loc}${getDate1}${getDate2}?unitGroup=${unit}&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`)
   
    const response = await fetch(`${components.baseURL}${loc}${getDate1}${getDate2}?unitGroup=${unit}&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`, {mode: "cors"});
    const weatherData = await response.json();

   
    console.log('function activated')
    console.log(weatherData)
    console.log(`Date range: ${dateA} to ${dateB}`)
    console.log(`Location: ${weatherData.address}`)
    try{
    console.log(`Currently  ${weatherData.currentConditions.temp} degrees and ${weatherData.currentConditions.conditions}`)}
    catch(error) {console.log('No current temp information')}
    console.log(`Today's maximum ${weatherData.days[0].tempmax} degrees`)
    console.log(`Today's minimum ${weatherData.days[0].tempmin} degrees`)

    

    
    return weatherData;
   }
   getWeather();
   
}


