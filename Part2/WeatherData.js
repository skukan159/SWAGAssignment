const { DataType } = require("./DataType");
const { Event } = require("./Event");

function WeatherData(valueV, time, place, type, unit) {
    Event.call(this, time, place)
    DataType.call(this, type, unit)
    this.valueV = valueV;
}

WeatherData.prototype.value = function value() { return this.valueV }
WeatherData.prototype = Object.create(Event.prototype)
Object.assign(WeatherData.prototype, DataType.prototype)

module.exports = { WeatherData }