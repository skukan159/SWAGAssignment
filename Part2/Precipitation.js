const { WeatherData } = require("./WeatherData");

class Precipitation extends WeatherData {
    constructor(precipitationType,valueV, unit ,time, place){
        this.precipitationType = precipitationType;
        let type = "Precipitation";
        super(valueV, type, unit ,time, place);
    }
    
    precipitationType(){ return state.pricipitationType }
    convertToInches() { this.value / 25.4; this.unit = "Inches" }
    convertToMM(){ this.value * 25.4; this.unit = "MM" }
}

module.exports = { Precipitation }