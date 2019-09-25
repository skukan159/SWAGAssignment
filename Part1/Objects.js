const {dateChecker,hasEvent,hasDataType,
    hasValue,precipitationTypeGetter,precipitationTypesGetter,
    windDirectionsGetter,directionGetter,weatherDataComparator,
    hasCurrentPlace,hasCurrentType,hasCurrentPeriod,hasWeatherData,
    hasEvent2,unitConverter}  = require('./CompositionFunctions')

const DateInterval = (from,to) => {
    state = {from,to}
    return Object.assign({},dateChecker(state))
}

const Event = (time,place) => {
    state = {time,place}
    return Object.assign({},hasEvent(state))
}

//Alternative way to do composition
const Event2 = (time,place) => {
    return Object.assign({},hasEvent2(time,place))
}

const DataType = (type,unit) => {
    state = {type,unit}
    return Object.assign({},hasDataType(state))
}

const WeatherData = (value,type,unit,time,place) => {
    state = { value,time,place,type,unit }
    return Object.assign({},
        hasValue(state),
        hasEvent(state),
        hasDataType(state))
}


const Temperature = (value,unit,time,place) => {
    let state = { value,unit,type:"Temperature",time,place }

    return Object.assign({},
        //temperatureConverter(state),
        unitConverter(state),
        hasValue(state),
        hasEvent(state),
        hasDataType(state))
}

const Precipitation = (pricipitationType,value,unit,time,place) => {
    let state = { pricipitationType,value,unit,type:"Precipitation",time,place }

    return Object.assign({},
        precipitationTypeGetter(state),
        unitConverter(state),
        hasValue(state),
        hasEvent(state),
        hasDataType(state))
       
}

const Wind =  (direction,value,unit,time,place) => {
    let state = {
        direction,value,unit,type:"Wind",time,place
    }

    return Object.assign({},
        unitConverter(state),
        directionGetter(state),
        hasValue(state),
        hasEvent(state),
        hasDataType(state))
}

const CloudCoverage =  (value,unit,time,place) => {
    let state = {
        value,unit,type:"Cloud Coverage",time,place
    }

    return Object.assign({},
        hasValue(state),
        hasEvent(state),
        hasDataType(state))
}

const WeatherPrediction = (from,to,unit,type,time,place) => {
    state = {from,to,unit,type,time,place}
    return Object.assign({},weatherDataComparator(state))
}

const TemperaturePrediction = (from,to,unit,time,place) => {
    state = {unit,type:"Temperature",time,place}
    return Object.assign({},
        hasEvent(state),
        hasDataType(state), 
        unitConverter(state),
        weatherDataComparator(state))
}


const PrecipitationPrediction = (types,unit,time,place) => {
    state = {types,unit,type:"Precipitation",time,place}
    return Object.assign({},
        hasEvent(state),
        hasDataType(state),
        precipitationTypesGetter(state),
        unitConverter(state),
        weatherDataComparator(state))
}

const WindPrediction = (directions,unit,time,place) => {
    state = { directions,weatherData,unit,type:"Wind",time,place}

    return Object.assign({},
        windDirectionsGetter(state),
        weatherDataComparator(state),
        unitConverter(state),
        hasEvent(state),
        hasDataType(state))
}
const CloudCoveragePrediction = (unit,time,place) => {
    state = {weatherData,unit,type:"Cloud Coverage",time,place}
    return Object.assign({},
        weatherDataComparator(state),
        hasEvent(state),   
        hasDataType(state))
}

const WeatherHistory = (weatherData,place,type,currentPeriod) => {
    let state = { place,type,currentPeriod,weatherData }

    return Object,assign({},
        hasCurrentPlace(state),
        hasCurrentType(state),
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