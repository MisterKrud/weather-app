import { components } from "./dataComponents";
import { weather } from "./domEvents";


const locationInput = document.getElementById("location");
const unitInput = document.getElementById("units");
const locationButton = document.getElementById("location-button");
const forecastDiv = document.getElementById("forecast")
const hourlyDiv = document.getElementById("hourly")

//Get user inputs
export const userInputs = () =>{
  locationInput.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
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
    }
  })

  //get unit (Metirc or Imperial)
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



//Clear page
export const clearWeatherInformation = () =>{
   forecastDiv.innerHTML =''
    hourlyDiv.innerHTML=''
}