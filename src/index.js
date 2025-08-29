import "./styles.css";
import {  weatherInfo, getDate2, getUnits, fetchUrl} from "./apiCall.js";
import {getData } from "./userInput";
import { location } from "./geoLocation.js";
console.log('Working')

// location()
// const location = (() => navigator.geolocation.getCurrentPosition(success))()
weatherInfo();
// location();
getData();



// window.getLocation = getLocation;
// window.getDate1 = getDate1;
// window.getDate2 = getDate2;
// window.getUnits = getUnits;
// window.fetchUrl = fetchUrl;


