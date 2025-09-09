import { components } from "./dataComponents";
import { weather } from "./domEvents";


const locationInput = document.getElementById("location");
const unitInput = document.getElementById("units");
const locationButton = document.getElementById("location-button");
const forecastDiv = document.getElementById("forecast")
const hourlyDiv = document.getElementById("hourly")

let placeName =[]

//Get user inputs
export const userInputs = () =>{
  locationInput.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
      if (!locationInput.value){
      components.inputValues[0]= "Melbourne"
    } else {
      const userLocation = getLocationWords(locationInput.value)
   components.inputValues[0] = userLocation;
   console.log(`User Location: ${userLocation}`)
    }
    clearWeatherInformation();
    console.log(`userInputs ${components.inputValues[0]}`);
    console.log(locationInput.value);
    console.log(components.inputValues);
    locationInput.value = "";
 
   weather();
    }
  })

  //get unit (Metric or Imperial)
// const unitOptions = unitInput.querySelectorAll('option');
  unitInput.addEventListener("change", (e) => {
  clearWeatherInformation()
   let unitValue 
   if(e.target.value === "celsius"){
    unitValue = "metric"
   } else if (e.target.value === "fahrenheit"){
    unitValue = "us"
   } else {
    unitValue = "metric"
   }
   console.log(e.target.value)
    components.inputValues[3] = unitValue;
    weather();
    console.log(components.inputValues)
  });
};



//Clear page
export const clearWeatherInformation = () =>{
   forecastDiv.innerHTML =''
    hourlyDiv.innerHTML=''
}


const getLocationWords = (locationName) =>{
  const locationWords = locationName.split(" ");
  console.log(locationWords)
  locationWords.forEach(word => {
  
  placeName.push(addCapitalLetterToString(word))
 })
 console.log('typeof')
 console.log(typeof(placeName))
 console.log(placeName)
 return placeName.join(" ")
}

const addCapitalLetterToString = (inputString) =>{
 const capitalisedString = inputString.split("");
 const firstLetter = capitalisedString.slice(0,1);
 console.log(firstLetter)
 const capitalLetter = firstLetter[0].toUpperCase();
 capitalisedString[0] = capitalLetter
 return capitalisedString.join("")
}