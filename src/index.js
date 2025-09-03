import "./styles.css";
import { location } from "./getLocation.js";
import {userInputs } from "./userInput";
import { weather } from "./domEvents.js";
import { getWeatherData } from "./apiCall.js";
import { components } from "./dataComponents.js";

// import { location } from "./geoLocation.js";

console.log('Working')

// location()
// const location = (() => navigator.geolocation.getCurrentPosition(success))()


// location();
// getData();
// getLocation();
// getUnit();
weather();
userInputs();



// window.getLocation = getLocation;
// window.getDate1 = getDate1;
// window.getDate2 = getDate2;
// window.getUnits = getUnits;
// window.fetchUrl = fetchUrl;


