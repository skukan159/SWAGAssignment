const { DataType } = require("./DataType");
const { Event } = require("./Event");

function WeatherData(valueV,type, unit ,time, place) {
    Event.call(this, time, place)
    DataType.call(this, type, unit)
    this.valueV = valueV;
}

WeatherData.prototype.value = function value() { return this.valueV }
Object.assign(WeatherData.prototype, DataType.prototype, Event.prototype)


module.exports = { WeatherData }