import { WeatherData } from "./WeatherData";
export default class Precipitation extends WeatherData {
    constructor(...args){
        super(args)
    }
    
    precipitationType(){ return state.pricipitationType }
    convertToInches() { this.value / 25.4; this.unit = "Inches" }
    convertToMM(){ this.value * 25.4; this.unit = "MM" }
}