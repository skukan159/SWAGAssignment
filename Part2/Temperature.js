const { WeatherData } = require("./WeatherData");

function Temperature(valueVal, unitVal, timeVal, placeVal) {
    let typeVal = "Temperature"
    WeatherData.call(valueVal, typeVal, unitVal ,timeVal, placeVal)
}

Temperature.prototype.convertToF = function convertToF() { 
                                        if (this.unitVal.toLowerCase() != "fahrenheit") {
                                            this.valueVal = (this.valueVal * 9/5) + 32; 
                                            this.unitVal = "Fahrenheit" 
                                        }
                                    }
Temperature.prototype.convertToC = function convertToC() { 
                                        if (this.unitVal.toLowerCase() != "celsius") {
                                            this.valueVal = (this.valueVal - 32) * 5 / 9; 
                                            this.unitVal = "Celsius"
                                        }
                                    }

Object.assign(Temperature.prototype, WeatherData.prototype)

let t = new Temperature("", "", "", "")
console.log(t.unitVal)

module.exports = { Temperature }