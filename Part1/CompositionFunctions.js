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

const temperatureConverter = state => ({
    convertToF(){ 
        state.value = (state.value * 9/5) + 32;
        state.unit = "Fahrenheit";                 
    },
    convertToC(){ 
        state.value = (state.value - 32) * 5 / 9;
        state.unit = "Celsius"; 
    }
})

const precipitationTypeGetter = (state) => ({
    precipitationType(){ return state.pricipitationType }
})
const precipitationTypesGetter = (state) => ({
    types(){ return state.types }
}) 

const mmInchConverter = (state) => ({
    convertToInches() { 
        state. value = state.value / 25.4;
        state.unit = "Inches";      
    },
    convertToMM(){ 
        state.value = state.value * 25.4;
        state.unit = "MM";       
    }
})

const msMPHConverter = (state) => ({
    convertToMPH() { 
        state.value = state.value * 2.237;
        state.unit = "MPH"; 
     },
    convertToMS() {
         state.value = state.value / 2.237;
         state.unit = "MS"; 
         }
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
const unitsConverter = (state) => ({
    convertToUSUnits() {  },
    convertToInternationalUnits() {  },
})

const hasWeatherData = state => ({
    add(weatherData){ state.weatherData = weatherData },
    data() { return state.weatherData}
})

module.exports = { dateChecker,timeGetter,placeGetter,typeGetter,
    unitGetter,valueGetter,temperatureConverter,
    precipitationTypeGetter,precipitationTypesGetter,windDirectionsGetter,
    mmInchConverter,msMPHConverter,directionGetter,weatherDataComparator,
    hasPlace,hasType,hasCurrentPeriod,unitsConverter,hasWeatherData,
    timeGetter2,placeGetter2 }