import { getWeatherData } from "./apiCall";

// const city = document.getElementById("location");
// const citySubmit = document.getElementById("city-button");

// export const location = () => {
//   citySubmit.addEventListener("click", () => getWeatherData(city.value));
// };

// const unit = document.getElementById("unit");
// const unitSubmit = document.getElementById("unit-submit");

// export const units = () => {
//   unitSubmit.addEventListener("click", () => getWeatherData(unit.value));
// };

const allInputs = Array.from(document.querySelectorAll("input"));
const locationInput = document.getElementById("location");
const unitInput = document.getElementById("unit")

const submitButton = document.getElementById("submit-all");
const locationButton = document.getElementById("location-button");
const unitButton = document.getElementById("unit-button");

let inputValues = []


export const getData = () => {
  submitButton.addEventListener("click", () => {
    inputValues=[];
    allInputs.forEach((input) => {
      inputValues.push(input.value);
    });
        getWeatherData(inputValues[0],inputValues[1],inputValues[2], inputValues[3])
        console.log(inputValues)
        
  });
  
};

export const getLocation = () =>{
  locationButton.addEventListener("click", () =>{
    inputValues[0] = locationInput.value
    getWeatherData(inputValues[0],inputValues[1],inputValues[2],inputValues[3] )
  })

}

export const getUnit = () =>{
  unitButton.addEventListener("click", ()=> {
    inputValues[3] = unitInput.value;
    getWeatherData(inputValues[0],inputValues[1],inputValues[2], inputValues[3])
  })

}

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/null/null/null?unitGroup=uk&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json


