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

/*Object.setPrototypeOf(Event.prototype, WeatherData.prototype)
Object.setPrototypeOf(DataType.prototype, WeatherData.prototype)*/


var weatherData = new WeatherData("Value", new Date(), "place", "Type", "Unit")
console.log(weatherData.time())
console.log(weatherData.place())
//console.log(weatherData.value())
//console.log(weatherData.time())


module.exports = { WeatherData }