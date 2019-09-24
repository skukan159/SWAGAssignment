import { DataType } from "./DataType";
import { Event } from "./Event";

export default class WeatherData extends Event(DataType) {
    constructor(value,...args){
        super(args);
        this.value = value;
    }

    value() { this.value }
}