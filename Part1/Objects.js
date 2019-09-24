const {dateChecker,timeGetter,placeGetter,typeGetter,unitGetter,
    valueGetter,temperatureConverter,precipitationTypeGetter,
    precipitationTypesGetter,windDirectionsGetter,
    mmInchConverter,msMPHConverter,directionGetter,weatherDataComparator,
    hasPlace,hasType,hasCurrentPeriod,unitsConverter,hasWeatherData,
    timeGetter2,placeGetter2}  = require('./CompositionFunctions')

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
        temperatureConverter(state),
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
        mmInchConverter(state),
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
        msMPHConverter(state),
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

const WeatherPrediction = (weatherData,unit,type,time,place) => {
    state = {weatherData,unit,type,time,place}
    return Object.assign({},
        weatherDataComparator(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}

const TemperaturePrediction = (weatherData,unit,type,time,place) => {
    state = {weatherData,unit,type,time,place}
    return Object.assign({}, temperatureConverter(state.weatherData),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}


const PrecipitationPrediction = (types,weatherData,unit,type,time,place) => {
    state = {types,weatherData,unit,type,time,place}
    return Object.assign({},
        mmInchConverter(state.weatherData),
        precipitationTypesGetter(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}

const WindPrediction = (directions,weatherData,unit,type,time,place) => {
    state = { directions,weatherData,unit,type,time,place}

    return Object.assign({},
        windDirectionsGetter(state),
        weatherDataComparator(state),
        timeGetter(state),
        placeGetter(state),    
        typeGetter(state),
        unitGetter(state))
}
const CloudCoveragePrediction = (weatherData,unit,type,time,place) => {
    state = {weatherData,unit,type,time,place}
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
        unitsConverter(state),
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