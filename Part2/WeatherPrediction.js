import { DataType } from "./DataType";
import { Event } from "./Event";

export default class WeatherPrediction extends Event(DataType) {
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