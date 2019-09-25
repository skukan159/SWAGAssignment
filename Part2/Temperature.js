const { WeatherData } = require("./WeatherData");

class Temperature extends WeatherData {
    constructor(valueV, unit ,time, place){
        let type = "Temperature"
        super(valueV, type, unit ,time, place);
    }
    convertToF(){ this.valueV = (this.valueV * 9/5) + 32; this.unit = "Fahrenheit" }
    convertToC(){ this.valueV = (this.valueV - 32) * 5 / 9; this.unit = "Celsius" }
}

module.exports = { Temperature }