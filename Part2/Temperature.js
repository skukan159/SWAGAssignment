const { WeatherData } = require("./WeatherData");

class Temperature extends WeatherData {
    constructor(valueVal, unitVal ,timeVal, placeVal){
        let typeVal = "Temperature"
        super(valueVal, typeVal, unitVal ,timeVal, placeVal);
    }
    convertToF(){ this.valueVal = (this.valueVal * 9/5) + 32; this.unitVal = "Fahrenheit" }
    convertToC(){ this.valueVal = (this.valueVal - 32) * 5 / 9; this.unitVal = "Celsius" }
}

module.exports = { Temperature }