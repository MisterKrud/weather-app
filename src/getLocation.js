import { weather } from "./domEvents";
import { components } from "./dataComponents";



export const success = (pos) => {
    const crd = pos.coords;
    console.log(crd)
    const lat = crd.latitude
    const lon = crd.longitude
    console.log(lat,lon);
    const coordinates = toString(lat, lon)
    console.log(coordinates)
    components.inputValues[0] = (coordinates)
    console.log(`here are the coordinates: ${crd}`)
    console.log(`input values from locator: ${components.inputValues}`)
    weather()
    return {lat, lon}
  }


export const location = () => navigator.geolocation.getCurrentPosition(success)
    
