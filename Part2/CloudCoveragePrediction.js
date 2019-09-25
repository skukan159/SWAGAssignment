const { WeatherPrediction } = require("./WeatherPrediction");
class CloudCoveragePrediction extends WeatherPrediction {
    constructor(...args){
        super(args)
    }
}

module.exports = { CloudCoveragePrediction }