import { WeatherData } from "./WeatherData";
export default class Wind extends WeatherData {
    constructor(direction,...args){
        super(args)
        this.direction = direction
    }
    
    direction(){ return this.direction }
    convertToMPH() { this.value = this.value * 2,237; this.unit = "MPH" }
    convertToMS() { this.value = this.value / 2,237; this.unit = "MS" }
}