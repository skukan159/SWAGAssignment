const { WeatherData } = require("./WeatherData");

class Precipitation extends WeatherData {
    constructor(precipitationTypeVal,valueVal, unitVal ,timeVal, placeVal){
        let typeVal = "Precipitation";
        super(valueVal, typeVal, unitVal ,timeVal, placeVal);
        this.precipitationTypeVal = precipitationTypeVal;
    }
    
    precipitationType(){ return state.precipitationTypeVal }
    convertToInches() { this.valueVal = this.valueVal / 25.4; this.unitVal = "Inches" }
    convertToMM(){ this.valueVal = this.valueVal * 25.4; this.unitVal = "MM" }
}

module.exports = { Precipitation }