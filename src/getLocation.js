import { weather } from "./domEvents";
import { components } from "./dataComponents";



const success = (pos) => {
    const crd = pos.coords;
    console.log(crd)
    const lat = crd.latitude
    const lon = crd.longitude
    console.log(lat,lon);
    components.inputValues[0] = crd
    console.log(`here are the coordinates: ${crd}`)
    console.log(`input values from locator: ${components.inputValues}`)
    weather()
    return crd
  }


export const location = () => navigator.geolocation.getCurrentPosition(success)
    
