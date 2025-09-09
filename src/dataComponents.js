  const dataComponents = () => {
  const apiKey = "J5R7RYMK57B597QLPD9UF4W8Y";
    const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
     const locationIqKey = "pk.996e1635718e99986c378f72779a4b06"
    const locationIqUrlA = "https://api.locationiq.com/v1/reverse?key="
    const locationIqUrlB = "&lat=51.50344025&lon=-0.12770820958562096&format=json&"
let inputValues = ['Sydney','','','metric'];
return {baseURL, apiKey, inputValues, locationIqKey, locationIqUrlA, locationIqUrlB}
  }
export const components = dataComponents();