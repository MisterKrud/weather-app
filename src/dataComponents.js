import { location } from "./getLocation";


  const dataComponents = () => {
  
  const apiKey = "J5R7RYMK57B597QLPD9UF4W8Y";
   
    const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

let inputValues = ['Sydney','','','metric'];
return {baseURL, apiKey, inputValues}

  }


export const components = dataComponents();