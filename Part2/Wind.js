const { WeatherData } = require("./WeatherData");

function Wind(directionVal,valueVal, unitVal ,timeVal, placeVal) {
    let typeVal = "Wind"
    WeatherData.call(directionVal,valueVal, unitVal ,timeVal, placeVal)
    this.directionVal = directionVal;
}    
    
Wind.prototype.direction = function direction() { return this.directionVal }
Wind.prototype.convertToMPH = function convertToMPH() { this.valueVal = this.valueVal * 2.237; this.unitVal = "MPH" }
Wind.prototype.convertToMS = function convertToMS() { this.valueVal = this.valueVal / 2.237; this.unitVal = "MS" }

Object.assign(Wind.prototype, WeatherData.prototype)

module.exports = { Wind }