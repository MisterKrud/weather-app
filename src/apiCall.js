import { dataComponents } from "./dataComponents";
// import { currentLocation, thisLocation } from "./geoLocation";

const components = dataComponents()

const success = (pos) => {
    const crd = pos.coords;
    console.log(crd)
    const lat = crd.latitude
    const lon = crd.longitude
    console.log(`latitude: ${lat}, longitude: ${lon}`);
    return crd
  }

  const location = navigator.geolocation.getCurrentPosition(success)
  console.log('location:' +location)

// export const currentLocation = () => ;



  

export async function getWeatherData(loc=location,  dateA="", dateB="", unit="metric") {
 
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


