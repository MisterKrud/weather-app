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
const informationDiv = document.getElementById("information");
const hourlyDiv = document.getElementById("hourly")
const today = document.getElementById("today")



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
    if (!locationInput.value){
      components.inputValues[0]= "Melbourne"
    } else {
   components.inputValues[0] = locationInput.value;
    }
    clearWeatherInformation();
    console.log(`userInputs ${components.inputValues[0]}`);
    console.log(locationInput.value);
    console.log(components.inputValues)
    
 
   weather();
    
  });


const unitOptions = unitInput.querySelectorAll('option');




  unitOptions.forEach((opt) => {

  
  opt.addEventListener("click", () => {
  clearWeatherInformation()
   let unitValue 
   if(opt.value === "celsius"){
    unitValue = "metric"
   } else if (opt.value === "fahrenheit"){
    unitValue = "us"
   } else {
    unitValue = "metric"
   }
   console.log(opt.value)
    
    components.inputValues[3] = unitValue;
  
    weather();
    console.log(components.inputValues)
  });
})
};


const clearWeatherInformation = () =>{
   forecastDiv.innerHTML =''
    today.innerHTML =''
    hourlyDiv.innerHTML=''
}