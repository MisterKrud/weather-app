
    const apiKey = "J5R7RYMK57B597QLPD9UF4W8Y";
    let location = "";
    let date1 = "";
    let date2 = "";
    let unit = "metric"
    let baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";





export const createUrl = (apiKey, location, date1, date2, unit ) =>{
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline${location}${date1}${date2}?unitGroup=${unit}&key=${apiKey}$contentType=json`
}

export const populateUrlComponent = (component, str) => {
    if (str === "") {
        return ""
    } else if(str && (component === unit)){
        return str
    } else if(str){
        return "/"+str
    }
}

