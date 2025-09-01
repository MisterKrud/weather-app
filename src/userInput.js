import { getWeatherData } from "./apiCall";
import { components } from "./dataComponents";
import { weather } from "./domEvents";


const allInputs = Array.from(document.querySelectorAll("input"));
const locationInput = document.getElementById("location");
const unitInput = document.getElementById("units");

const submitButton = document.getElementById("submit-all");
const locationButton = document.getElementById("location-button");
const unitButton = document.getElementById("unit-button");

const forecastDiv = document.getElementById("forecast")

let  inputValues = components.inputValues

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
export const userInputs = () =>{



  locationButton.addEventListener("click", () => {
    inputValues[0] = locationInput.value;
    forecastDiv.innerHTML =''
    console.log(`userINputs ${inputValues[0]}`);
    console.log(locationInput.value);
 
   weather();
    
  });


const unitOptions = unitInput.querySelectorAll('option');




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
  
    weather();
    console.log(inputValues)
  });
})
};


