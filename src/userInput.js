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
let inputValues = []

const submitButton = document.getElementById("submit-all");
export const getData = () => {
  submitButton.addEventListener("click", () => {
    allInputs.forEach((input) => {
      inputValues.push(input.value);
    });
        getWeatherData(inputValues[0],inputValues[1],inputValues[2], inputValues[3])
        console.log(inputValues)
        inputValues=[];
  });
  
};




