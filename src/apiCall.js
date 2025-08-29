import { dataComponents } from "./dataComponents";
import { getData } from "./userInput";
// import { location } from "./geoLocation";



const components = dataComponents();

const weatherInfo = () => {
  function success(pos) {
    const crd = pos.coords;

    const coords = `${crd.latitude}, ${crd.longitude}`;
    // const lon = crd.longitude
    console.log(`Success:${coords}`);
    return coords;
  }

  const location = () => navigator.geolocation.getCurrentPosition(success);

  const coordinates = location();

}
export function getWeatherData(
    loc = "Sydney",
    dateA = "",
    dateB = "",
    unit = "metric"
  ) {
    console.log("^^getWeatherData");
    console.log(loc, dateA, dateB, unit);

    const getWeather = async () => {
      console.log(`date1 initial value: ${dateA}`);
      console.log(`date2 initial value: ${dateB}`);

      let date1;
      let date2;

      const getDate1 = (() => {
        if (dateA != "") {
          date1 = "/" + dateA;
        } else {
          date1 = "";
        }
        console.log(date1 + dateA);
        return date1;
      })();

      const getDate2 = (() => {
        if (dateB != "") {
          date2 = "/" + dateB;
        } else {
          date2 = "";
        }
        console.log(date2 + dateB);
        return date2;
      })();

      console.log(
        `${components.baseURL}${loc}${getDate1}${getDate2}?unitGroup=${unit}&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`
      );

      const response = await fetch(
        `${components.baseURL}${loc}${getDate1}${getDate2}?unitGroup=${unit}&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json`,
        { mode: "cors" }
      );
      const weatherData = await response.json();

      console.log("function activated");
      console.log(weatherData);
      console.log(`Date range: ${dateA} to ${dateB}`);
      console.log(`Location: ${weatherData.address}`);
      try {
        console.log(
          `Currently  ${weatherData.currentConditions.temp} degrees and ${weatherData.currentConditions.conditions}`
        );
      } catch (error) {
        console.log("No current temp information");
      }
      console.log(`Today's maximum ${weatherData.days[0].tempmax} degrees`);
      console.log(`Today's minimum ${weatherData.days[0].tempmin} degrees`);
      console.log(typeof(userInputValues))
      console.log(`${weatherData.days.length} day forecast available`)
      console.log(weatherData.days[0].datetime)

      return weatherData;
    };

    getWeather();
  }

