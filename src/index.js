import "./styles.css";
import { getWeatherData, getLocation, getDate1, getDate2, getUnits, fetchUrl} from "./apiCall.js";
import {getData } from "./userInput";
console.log('Working')

getWeatherData();
// location();
getData();

window.getWeatherData = getWeatherData;

// window.getLocation = getLocation;
// window.getDate1 = getDate1;
// window.getDate2 = getDate2;
// window.getUnits = getUnits;
// window.fetchUrl = fetchUrl;


