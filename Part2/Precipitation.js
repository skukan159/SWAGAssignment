const { WeatherData } = require("./WeatherData");

function Precipitation(precipitationTypeVal, valueVal, typeVal, unitVal ,timeVal, placeVal) {
    let typeVal = "Precipitation";
    WeatherData.call(valueVal, typeVal, unitVal ,timeVal, placeVal);
    this.precipitationType = precipitationTypeVal;
}

Precipitation.prototype.precipitationType = function precipitationType() { return this.precipitationType }

Precipitation.prototype.convertToInches = function convertToInches() { 
        if (this.unitVal.toLowerCase() != "Inches"){
            this.valueVal = this.valueVal / 25.4; 
            this.unitVal = "Inches"
        }
}
Precipitation.prototype.convertToMM = function convertToMM() { 
        if (this.unitVal.toLowerCase() != "mm"){
            this.valueVal = this.valueVal * 25.4; 
            this.unitVal = "MM" 
        }
}


module.exports = { Precipitation }