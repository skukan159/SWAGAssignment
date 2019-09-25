const { Event } = require('./Event'); //import Event from './Event'
const { DataType } = require('./DataType')//import DataType from './DataType'
const { DateInterval } = require('./DateInterval')//import WeatherData from './WeatherData'
const { WeatherData } = require('./WeatherData')
const { Temperature } = require('./Temperature')
const { Precipitation } = require('./Precipitation')
const { Wind } = require('./Wind')
const { CloudCoverage } = require('./CloudCoverage')
const { WeatherPrediction } = require('./WeatherPrediction')
const { TemperaturePrediction } = require('./TemperaturePrediction')

test('Event class tests', () => {
    let date = new Date()
    let event = new Event(date,"Horsens");

    expect(event.time()).toBe(date);
    expect(event.place()).toBe("Horsens");
})

test('DataType class tests', () => {
    let dataType = new DataType("Distance","mm");

    expect(dataType.type()).toBe("Distance");
    expect(dataType.unit()).toBe("mm");
})

test('Date Interval tests', () => {
    let fromDate = new Date();
    fromDate.setFullYear(1996,11,18)
    let toDate = new Date();
    toDate.setFullYear(2000,22,12)

    let dateInterval = new DateInterval(fromDate,toDate);
    expect(dateInterval.from()).toBe(fromDate)
    expect(dateInterval.to()).toBe(toDate)

    let testContainsDate = new Date();
    testContainsDate.setFullYear(1998,18,5);

    expect(dateInterval.contains(testContainsDate)).toBe(true);
    testContainsDate.setFullYear(2002,18,5);
    expect(dateInterval.contains(testContainsDate)).not.toBe(true);
})

test('WeatherData tests', () => {
    let date = new Date();
    let weatherData = new WeatherData(10,"Temperature","Celsius",date,"Horsens");

    expect(weatherData.value()).toBe(10);
    expect(weatherData.time()).toBe(date);
    expect(weatherData.place()).toBe("Horsens");
    expect(weatherData.type()).toBe("Temperature");
    expect(weatherData.unit()).toBe("Celsius");
})

test('Temperature tests', () => {
    let date = new Date();
    let temperatureData = new Temperature(10,"Celsius",date,"Horsens");

    expect(temperatureData.value()).toBe(10);
    expect(temperatureData.time()).toBe(date);
    expect(temperatureData.place()).toBe("Horsens");
    expect(temperatureData.type()).toBe("Temperature");
    expect(temperatureData.unit()).toBe("Celsius");

    temperatureData.convertToF();
    expect(temperatureData.value()).toBe((10 * 9/5) + 32);
    expect(temperatureData.unit()).toBe("Fahrenheit");

    temperatureData.convertToC();
    expect(temperatureData.value()).toBe(10);
    expect(temperatureData.unit()).toBe("Celsius");
})

test('Precipitation tests', () => {
    let date = new Date();
    let precipitation = new Precipitation("samplePrecType",10,"mm",date,"Horsens");

    expect(precipitation.value()).toBe(10);
    expect(precipitation.time()).toBe(date);
    expect(precipitation.place()).toBe("Horsens");
    expect(precipitation.type()).toBe("Precipitation");
    expect(precipitation.unit()).toBe("mm");

    precipitation.convertToInches();
    expect(precipitation.value()).toBe(10/25.4);
    expect(precipitation.unit()).toBe("Inches");

    precipitation.convertToMM();
    expect(precipitation.value()).toBe(10);
    expect(precipitation.unit()).toBe("MM");
})


test('Wind tests', () => {
    let date = new Date();
    let wind = new Wind("NE",10,"MS",date,"Horsens");

    expect(wind.value()).toBe(10);
    expect(wind.time()).toBe(date);
    expect(wind.place()).toBe("Horsens");
    expect(wind.type()).toBe("Wind");
    expect(wind.unit()).toBe("MS");

    wind.convertToMPH();
    expect(wind.value()).toBe(10 * 2.237);
    expect(wind.unit()).toBe("MPH");

    wind.convertToMS();
    expect(wind.value()).toBe(10);
    expect(wind.unit()).toBe("MS");
})

test('CloudCoverage tests', () => {
    let date = new Date();
    let cloudCoverage = new CloudCoverage(10,"okta",date,"Horsens");

    expect(cloudCoverage.value()).toBe(10);
    expect(cloudCoverage.time()).toBe(date);
    expect(cloudCoverage.place()).toBe("Horsens");
    expect(cloudCoverage.type()).toBe("Cloud Coverage");
    expect(cloudCoverage.unit()).toBe("okta");
})


test('WeatherPrediction tests', () => {
    let date = new Date();

    let  weatherData1 = new WeatherData(10,"Temperature","Celsius",date,"Horsens");
    let  weatherData2 = new WeatherData(10,"Temperature","Celsius",date,"Vejle");
    let  weatherData3 = new WeatherData(4,"Temperature","Celsius",date,"Skanderborg");
    let  weatherData4 = new WeatherData(2,"Temperature","Celsius",date,"Horsens");

    let weatherPrediction = new WeatherPrediction(5,15,"Temperature","Celsius",date,"Horsens");
    let weatherPrediction2 = new WeatherPrediction(8,15,"Temperature","Celsius",date,"Vejle");

    expect(weatherPrediction.matches(weatherData4)).toBe(false);
    expect(weatherPrediction2.matches(weatherData1)).toBe(true);
    expect(weatherPrediction2.matches(weatherData2)).toBe(true);
    expect(weatherPrediction2.matches(weatherData3)).toBe(false);

    expect(weatherPrediction.to()).toBe(15);
    expect(weatherPrediction2.from()).toBe(8);
    
})


test('Temperature prediction test', () => {
    let date = new Date();
    let temperaturePredictionData = new TemperaturePrediction(10,15,"Fahrenheit",date,"Horsens");

        temperaturePredictionData.convertToC();
        expect(temperaturePredictionData.from()).toBe((10-32) * 5 /9);
        expect(temperaturePredictionData.to()).toBe((15-32) * 5 / 9);
        expect(temperaturePredictionData.unit()).toBe("Celsius");
    })