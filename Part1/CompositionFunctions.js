
const acceptedTypes = ["temperature","precipitation","wind","distance","speed"]
const acceptedTemperatureUnits = ["celsius","fahrenheit","c","f"]
const acceptedSpeedUnits = ["mph","ms"]
const acceptedDistanceUnits = ["inches","mm"]

const typeChecker = () => ({
    checkIfCorrectTypeEntered(givenType)
    { 
        let correctTypeEntered = acceptedTypes.includes(givenType.toLowerCase());
        if(correctTypeEntered === false){
            console.log("Incorrect data type entered. Setting to default value which is: " + acceptedTypes[0])
            givenType = acceptedTypes[0];
        }
        return givenType;
    },
    checkIfCorrectUnitEntered(givenType,givenUnit)
    { 
        let correctUnitEntered = false;
        switch(givenType.toLowerCase()){
            case "temperature":
                    correctUnitEntered = acceptedTemperatureUnits.includes(givenUnit.toLowerCase());
                    if(correctUnitEntered === false){
                        console.log("Incorrect unit value entered for temperature. Setting to default: " + acceptedTemperatureUnits[0])
                        return acceptedTemperatureUnits[0];
                    } 
                break;
            case "precipitation" || "distance":
                    correctUnitEntered = acceptedDistanceUnits.includes(givenUnit.toLowerCase());
                    if(correctUnitEntered === false){
                        console.log("Incorrect unit value entered for precipitation/distance. Setting to default: " + acceptedDistanceUnits[0])
                        return acceptedDistanceUnits[0];
                    } 
                break;
            case "wind" || "speed":
                    correctUnitEntered = acceptedSpeedUnits.includes(givenUnit.toLowerCase());
                    if(correctUnitEntered === false){
                        console.log("Incorrect unit value entered for wind/speed. Setting to default: " + acceptedSpeedUnits[0])
                        return acceptedSpeedUnits[0];
                    } 
                break;
            default: 
                console.log("ERROR: Given unit not recognized");
                break;
        }
            return givenUnit;
        
    }
})


const temperatureConverter = state => ({
    convertToC() {  
        if(state.unit.toLowerCase() != "celsius"){
            state.value = (state.value - 32) * 5 / 9;
            state.unit = "Celsius"; 
        }
    },
    convertToF() {  
        if(state.unit.toLowerCase() != "fahrenheit"){
        state.value = (state.value * 9/5) + 32;
        state.unit = "Fahrenheit";           
        }
    }  
})

const distanceConverter = state => ({
    convertToInches() {
        if(state.unit.toLowerCase() != "inches"){
            state. value = state.value / 25.4;
            state.unit = "Inches";  
        }   
    },
    convertToMM() { 
        if(state.unit.toLowerCase() != "mm"){
            state.value = state.value * 25.4;
            state.unit = "MM";   
        }
    }
})

const speedConverter = state => ({
    convertToMPH() { 
        if(state.unit.toLowerCase() != "mph"){
            state.value = state.value * 2.237;
            state.unit = "MPH";
        }
    },
    convertToMS() {
        if(state.unit.toLowerCase() != "ms"){
            state.value = state.value / 2.237;
            state.unit = "MS";
        }
    }
})



const dateChecker = state => ({
    from() { return state.from },
    to() { return state.to},
    contains(date) { return state.from <= date && state.to >= date }
})
const hasEvent = state => ({
    time() { return state.time},
    place() { return state.place}
})

//An example of alternative way composition
//functions could be written
const hasEvent2 = (time,place) => ({
    time() { return time},
    place() { return place}
})
const hasDataType = (state) => ({
    
    type() { return state.type },
    unit() { return state.unit }
})
const hasValue = state => ({
    value() { return state.value }
})

const unitConverter = state => ({
    convertToUS() {
        if(state.type.toLowerCase() === "temperature"){ temperatureConverter(state).convertToF() }
        if(state.type.toLowerCase() === "precipitation"){ distanceConverter(state).convertToInches() }
        if(state.type.toLowerCase() === "wind"){ speedConverter(state).convertToMPH() }
    }, 
    convertToInternational() { 
        if(state.type.toLowerCase() === "temperature"){ temperatureConverter(state).convertToC() }
        if(state.type.toLowerCase() === "precipitation"){ distanceConverter(state).convertToMM() }
        if(state.type.toLowerCase() === "wind"){ speedConverter(state).convertToMS() }
     } 
})



const precipitationTypeGetter = (state) => ({
    precipitationType(){ return state.pricipitationType }
})
const precipitationTypesGetter = (state) => ({
    types(){ return state.types }
}) 




const directionGetter = (state) => ({
    direction(){ return state.direction }
})
const windDirectionsGetter = (state) => ({
    directions(){ return state.directions }
})

const weatherDataComparator = (state) => ({
    from(){ return state.from},
    to(){ return state.to},
    matches(weatherData)
    { 
        if(state.type.toLowerCase() === weatherData.type.toLowerCase() &&
             state.unit.toLowerCase() === weatherData.unit.toLowerCase() &&
             state.time.getDate() === weatherData.time.getDate())
            {
                if(weatherData.value >= state.from &&
                     weatherData.value <= state.to){
                    return true;
                } 
            }
            return false;  
    }
})

const hasCurrentPlace = (state) => ({
    getCurrentPlace() { return state.place },
    setCurrentPlace(place) { state.place = place },
    clearCurrentPlace() { state.place = "" }
})

const hasCurrentType = (state) => ({
    getCurrentType() { return state.type},
    setCurrentType(type) { state.type = type },
    clearCurrentType() { state.type = "" }  
})

const hasCurrentPeriod = (state) => ({
    getCurrentPeriod() { return state.currentPeriod },
    setCurrentPeriod(period) { state.currentPeriod = period },
    clearCurrentPeriod() { state.currentPeriod = "" }  
})
//TODO


const hasWeatherData = state => ({
    add(weatherData){ state.weatherData = weatherData },
    convertToUSUnits() { 
        state.weatherData.forEach(weatherDataObj => {
            weatherDataObj.convertToUS()
        });
    },
    
    convertToInternationalUnits() {
        state.weatherData.forEach(weatherDataObj => {
            weatherDataObj.convertToInternational()
        });
    },

    data() 
    { 
        return state.weatherData.filter((weatherDataObj) => 
        {
            if((weatherDataComparator.type === state.type || state.type === "")
                && (weatherDataComparator.place === state.place || state.place === "")
                && (state.currentPeriod.contains(weatherDataComparator.time) === state.type || state.currentPeriod === ""))
                {
                    return weatherDataObj;
                }
        })      
    }
})

module.exports = { dateChecker,hasEvent,hasDataType,
    hasValue,precipitationTypeGetter,precipitationTypesGetter,
    windDirectionsGetter,directionGetter,weatherDataComparator,
    hasCurrentPlace,hasCurrentType,hasCurrentPeriod,hasWeatherData,
    hasEvent2,unitConverter,typeChecker }



    