const {dateChecker,timeGetter,placeGetter,typeGetter,unitGetter,
    valueGetter,precipitationTypeGetter,precipitationTypesGetter,
    windDirectionsGetter,directionGetter,weatherDataComparator,
    hasPlace,hasType,hasCurrentPeriod,hasWeatherData,
    timeGetter2,placeGetter2,unitConverter}  = require('./CompositionFunctions')

const DateInterval = (from,to) => {
    state = {from,to}
    return Object.assign({},dateChecker(state))
}

const Event = (time,place) => {
    state = {time,place}
    return Object.assign({},timeGetter(state),placeGetter(state))
}

const Event2 = (time,place) => {
    return Object.assign({},timeGetter2(time),placeGetter2(place))
}

const DataType = (type,unit) => {
    state = {type,unit}
    return Object.assign({},typeGetter(state),unitGetter(state))
}

const WeatherData = (value,type,unit,time,place) => {
    state = { value,time,place,type,unit }
    return Object.assign({},
        valueGetter(state),
        timeGetter(state),
        placeGetter(state),
        typeGetter(state),
        unitGetter(state))
}


const Temperature = (value,unit,time,place) => {
    let state = { value,unit,type:"Temperature",time,place }

    return Object.assign({},
        //temperatureConverter(state),
        unitConverter(state),
        valueGetter(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}

const Precipitation = (pricipitationType,value,unit,time,place) => {
    let state = { pricipitationType,value,unit,type:"Precipitation",time,place }

    return Object.assign({},
        precipitationTypeGetter(state),
        //mmInchConverter(state),
        unitConverter(state),
        valueGetter(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
       
}

const Wind =  (direction,value,unit,time,place) => {
    let state = {
        direction,value,unit,type:"Wind",time,place
    }

    return Object.assign({},
        //msMPHConverter(state),
        unitConverter(state),
        directionGetter(state),
        valueGetter(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}

const CloudCoverage =  (value,unit,time,place) => {
    let state = {
        value,unit,type:"Cloud Coverage",time,place
    }

    return Object.assign({},
        valueGetter(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state)
    )
}

const WeatherPrediction = (unit,type,time,place) => {
    state = {weatherData,unit,type,time,place}
    return Object.assign({},
        weatherDataComparator(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}

const TemperaturePrediction = (unit,time,place) => {
    state = {unit,type:"Temperature",time,place}
    return Object.assign({}, 
        unitConverter(state),
        timeGetter(state),
        placeGetter(state),
        typeGetter(state),
        unitGetter(state))
}


const PrecipitationPrediction = (types,unit,time,place) => {
    state = {types,unit,type:"Precipitation",time,place}
    return Object.assign({},
        //mmInchConverter(state),
        precipitationTypesGetter(state),
        unitConverter(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}

const WindPrediction = (directions,unit,time,place) => {
    state = { directions,weatherData,unit,type:"Wind",time,place}

    return Object.assign({},
        windDirectionsGetter(state),
        weatherDataComparator(state),
        unitConverter(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}
const CloudCoveragePrediction = (unit,time,place) => {
    state = {weatherData,unit,type:"Cloud Coverage",time,place}
    return Object.assign({},
        weatherDataComparator(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}

const WeatherHistory = (weatherData,place,type,currentPeriod) => {
    let state = { place,type,currentPeriod,weatherData }

    return Object,assign({},
        hasPlace(state),
        hasType(state),
        hasCurrentPeriod(state),
        hasWeatherData(state))
}
//Not Needed
/*
const WeatherForecast = (weatherData,place,type,currentPeriod) => {
    let state = { place,type,currentPeriod,weatherData }

    return Object,assign({},hasPlace(state),hasType(state),
        hasCurrentPeriod(state),unitsConverter(state),hasWeatherData(state))
}*/

module.exports = { Event,DataType,DateInterval,WeatherData,
    Temperature,Precipitation,Wind,CloudCoverage,
    WeatherPrediction,TemperaturePrediction,PrecipitationPrediction,
    WindPrediction,CloudCoveragePrediction,WeatherHistory,Event2 }