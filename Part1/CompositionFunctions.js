
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
const timeGetter = state => ({
    time() { return state.time}
})
const placeGetter = state => ({
    place() { return state.place}
})

//An example of alternative way composition
//functions could be written
const timeGetter2 = time => ({
    time() { return time}
})
const placeGetter2 = place => ({
    place() { return place}
})

const typeGetter = state => ({
    type() { return state.type }
}) 
const unitGetter = state => ({
    unit() { return state.unit }
})

const valueGetter = state => ({
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
        if(state.type === weatherData.type &&
             state.unit === weatherData.unit)
            {
                if(weatherData.value >= state.from &&
                     weatherData.value <= state.to){
                    return true
                } else return false;
            }  
    }
})

const hasPlace = (state) => ({
    getCurrentPlace() { return state.place },
    setCurrentPlace(place) { state.place = place },
    clearCurrentPlace() { state.place = "" }
})

const hasType = (state) => ({
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

module.exports = { dateChecker,timeGetter,placeGetter,typeGetter,
    unitGetter,valueGetter,precipitationTypeGetter,precipitationTypesGetter,
    windDirectionsGetter,directionGetter,weatherDataComparator,
    hasPlace,hasType,hasCurrentPeriod,hasWeatherData,
    timeGetter2,placeGetter2,unitConverter }



    