const success = (pos) => {
    const crd = pos.coords;
    console.log(crd)
    const lat = crd.latitude
    const lon = crd.longitude
    console.log(lat,lon);
    return crd
  }

export const currentLocation = () => {
 return   navigator.geolocation.getCurrentPosition(success)
    
};

export const thisLocation = currentLocation()

// async function locationName(){

//     const response = await fetch("https://nominatim.openstreetmap.org/reverse?lat=-32.2569&lon=&<params>") 
// }

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/?unitGroup=&include=current&key=J5R7RYMK57B597QLPD9UF4W8Y&contentType=json