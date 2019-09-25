const { WeatherData } = require("./WeatherData");

class CloudCoverage extends WeatherData {
    constructor(...args){
        super(args)
    }
}

module.exports = { CloudCoverage }