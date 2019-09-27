const { WeatherData } = require("./WeatherData");

function CloudCoverage(valueVal, typeVal, unitVal ,timeVal, placeVal) {
    let typeVal = "Cloud Coverage"
    WeatherData.call(valueVal, typeVal, unitVal ,timeVal, placeVal)
}

Object.assign(CloudCoverage.prototype, WeatherData.prototype)

module.exports = { CloudCoverage }