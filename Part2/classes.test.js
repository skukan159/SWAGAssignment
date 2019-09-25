const { Event } = require('./Event'); //import Event from './Event'
const { DataType } = require('./DataType')//import DataType from './DataType'
const { DateInterval } = require('./DateInterval')//import WeatherData from './WeatherData'
const { WeatherData } = require('./WeatherData')
const { Temperature } = require('./Temperature')
const { Precipitation } = require('./Precipitation')
const { Wind } = require('./Wind')
const { CloudCoverage } = require('./CloudCoverage')

test('Test of my test runner', () => {
    expect(1+1).toBe(2)
})

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
