const { DataType } = require("./DataType");
const { Event } = require("./Event");

class WeatherPrediction extends Event(DataType) {
    constructor(fromVal, toVal, type, unit, time, place){
        Event.call(this, time, place)
        DataType.call(this, type, unit)
        this.fromVal = fromVal;
        this.toVal = toVal
    }

    matches(data) {return this.weatherData === data } 
    to(){ return this.to }
    from(){ return this.from }
}


WeatherPrediction.prototype.matches = function matches(weatherDataObj) 
{
    if(this.type.toLowerCase() === weatherDataObj.type().toLowerCase() &&
        this.unit.toLowerCase() === weatherDataObj.unit().toLowerCase() &&
        this.time.getDate() === weatherDataObj.time().getDate())
    {
        if(weatherDataObj.value() >= this.from && weatherDataObj.value() <= this.to)
        {
            return true;
        } 
    }   
}
WeatherPrediction.prototype.to = function to() { return this.fromVal }
WeatherPrediction.prototype.from = function from() { return this.toVal }


Object.assign(WeatherPrediction.prototype, DataType.prototype, Event.prototype)

module.exports = { WeatherPrediction }


