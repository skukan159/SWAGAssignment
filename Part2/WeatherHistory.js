const { WeatherData } = require("./WeatherData");

function WeatherHistory(weatherDataArr) {
    this.weatherData = weatherDataArr
}

WeatherHistory.prototype.data = function data() {
                                    return this.weatherData
                                }

WeatherHistory.prototype.add = function add(weatherDataValue) {
                                    this.weatherData.push(weatherDataValue)
                                }

