// import { components } from "./dataComponents";
// const inputValues = components.inputValues








  function success(pos) {
    const crd = pos.coords;

    const coords = `${crd.latitude}, ${crd.longitude}`;
    // const lon = crd.longitude
    console.log(`Success:${coords}`);
    return coords;
  }

  function error() {
    return "Melbourne"
  }

export  const location = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error);
       
        return success
    } else {
        return "Sydney"
    }
   
}

