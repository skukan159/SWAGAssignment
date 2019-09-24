import { WeatherPrediction } from "./WeatherPrediction";
export default class PrecipitationPrediction extends WeatherPrediction {
    constructor(...args){
        super(args)
    }
    convertToF(){ this.value = (this.value * 9/5) + 32; this.unit = "Fahrenheit" }
    convertToC(){ this.value = (this.value * - 32) * 5 / 9; this.unit = "Celsius" }
}