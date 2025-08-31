import { getWeatherData } from "./apiCall";


const allInputs = Array.from(document.querySelectorAll("input"));
const locationInput = document.getElementById("location");
const unitInput = document.getElementById("unit");

const submitButton = document.getElementById("submit-all");
const locationButton = document.getElementById("location-button");
const unitButton = document.getElementById("unit-button");

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
    getWeatherData(
      inputValues[0],
      inputValues[1],
      inputValues[2],
      inputValues[3]
    );
  });
};

export const getUnit = () => {
  units.addEventListener("select", () => {
    inputValues[3] = unitInput.value;
    getWeatherData(
      inputValues[0],
      inputValues[1],
      inputValues[2],
      inputValues[3]
    );
  });
};


