const { DataType } = require("./DataType");
const { Event } = require("./Event");

class WeatherPrediction extends Event(DataType) {
    constructor(weatherData,from,to,...args){
        super(args)
        this.weatherData = weatherData
        this.from = from
        this.to = to
    }

    matches(data) {return this.weatherData === data } 
    to(){ return this.to }
    from(){ return this.from }
}

module.exports = { WeatherPrediction }