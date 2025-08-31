import { getWeatherData } from "./apiCall";


const allInputs = Array.from(document.querySelectorAll("input"));
const locationInput = document.getElementById("location");
const unitInput = document.getElementById("units");

const submitButton = document.getElementById("submit-all");
const locationButton = document.getElementById("location-button");
const unitButton = document.getElementById("unit-button");

const forecastDiv = document.getElementById("forecast")

let inputValues = [];

// export const getData = () => {
//   submitButton.addEventListener("click", () => {
//     inputValues = [];
//     allInputs.forEach((input) => {
//       inputValues.push(input.value);
//     });
//     getWeatherData(
//       inputValues[0],
//       inputValues[1],
//       inputValues[2],
//       inputValues[3]
//     );
//     console.log(inputValues);
//   });
// };

export const getLocation = () => {
  locationButton.addEventListener("click", () => {
    inputValues[0] = locationInput.value;
    forecastDiv.innerHTML =''
    getWeatherData(
      inputValues[0],
      inputValues[1],
      inputValues[2],
      inputValues[3]
    );
  });
};

const unitOptions = unitInput.querySelectorAll('option');



export const getUnit = () => {
  unitOptions.forEach((opt) => {

  
  opt.addEventListener("click", () => {
    forecastDiv.innerHTML =''
   let unitValue 
   if(opt.value === "celsius"){
    unitValue = "metric"
   } else if (opt.value === "fahrenheit"){
    unitValue = "us"
   } else {
    unitValue = "metric"
   }
   console.log(opt.value)
    
    inputValues[3] = unitValue;
    getWeatherData(
      inputValues[0],
      inputValues[1],
      inputValues[2],
      inputValues[3]
    );
  });
})
};


