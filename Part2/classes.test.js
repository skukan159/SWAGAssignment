const { Event } = require('./Event'); //import Event from './Event'
const { DataType } = require('./DataType')//import DataType from './DataType'
//import WeatherData from './WeatherData'


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

