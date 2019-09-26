const { Event,DataType,DateInterval,WeatherData,Temperature,
    Precipitation,Wind,CloudCoverage,WeatherHistory,
    WeatherPrediction,TemperaturePrediction,PrecipitationPrediction,
    WindPrediction,CloudCoveragePrediction,
    Event2 }  = require('./Objects')

test('Test of my test runner', () => {
    expect(1+1).toBe(2)
})

test('Event Object tests', () => {
    let date = new Date()
    let event = Event(date,"Horsens");

    expect(event.time()).toBe(date);
    expect(event.place()).toBe("Horsens");
})

// This is just a test of an example of a 
// different way to implement composition
test('Event2 Object tests', () => {
    let date = new Date()
    let event = Event2(date,"Horsens");

    expect(event.time()).toBe(date);
    expect(event.place()).toBe("Horsens");
})

test('Data type Object', () => {
    let dataType = DataType("Distance","mm");

    expect(dataType.type()).toBe("Distance");
    expect(dataType.unit()).toBe("mm");

    let dataType2 = DataType("Johhny","Johnson");
    expect(dataType2.type()).not.toBe("Johnny");
    expect(dataType2.unit()).not.toBe("Johnson");
    expect(dataType2.type()).toBe("temperature");
    expect(dataType2.unit()).toBe("celsius");
})

test('Date Interval tests', () => {
    let fromDate = new Date();
    fromDate.setFullYear(1996,11,18)
    let toDate = new Date();
    toDate.setFullYear(2000,22,12)

    let dateInterval = DateInterval(fromDate,toDate);
    expect(dateInterval.from()).toBe(fromDate)
    expect(dateInterval.to()).toBe(toDate)

    let testContainsDate = new Date();
    testContainsDate.setFullYear(1998,18,5);

    expect(dateInterval.contains(testContainsDate)).toBe(true);
    testContainsDate.setFullYear(2002,18,5);
    expect(dateInterval.contains(testContainsDate)).not.toBe(true);
})

test('WeatherData tests', () => {
    let date = new Date();
    let weatherData = WeatherData(10,"Temperature","Celsius",date,"Horsens");

    expect(weatherData.value()).toBe(10);
    expect(weatherData.time()).toBe(date);
    expect(weatherData.place()).toBe("Horsens");
    expect(weatherData.type()).toBe("Temperature");
    expect(weatherData.unit()).toBe("Celsius");
})

test('Temperature tests', () => {
    let date = new Date();
    let temperatureData = Temperature(10,"Celsius",date,"Horsens");

    expect(temperatureData.value()).toBe(10);
    expect(temperatureData.time()).toBe(date);
    expect(temperatureData.place()).toBe("Horsens");
    expect(temperatureData.type()).toBe("Temperature");
    expect(temperatureData.unit()).toBe("Celsius");

    temperatureData.convertToUS();
    expect(temperatureData.value()).toBe((10 * 9/5) + 32);
    expect(temperatureData.unit()).toBe("Fahrenheit");

    temperatureData.convertToInternational();
    expect(temperatureData.value()).toBe(10);
    expect(temperatureData.unit()).toBe("Celsius");
})

test('Precipitation tests', () => {
    let date = new Date();
    let precipitation = Precipitation("samplePrecType",10,"mm",date,"Horsens");

    expect(precipitation.value()).toBe(10);
    expect(precipitation.time()).toBe(date);
    expect(precipitation.place()).toBe("Horsens");
    expect(precipitation.type()).toBe("Precipitation");
    expect(precipitation.unit()).toBe("mm");

    precipitation.convertToUS();
    expect(precipitation.value()).toBe(10/25.4);
    expect(precipitation.unit()).toBe("Inches");

    precipitation.convertToInternational();
    expect(precipitation.value()).toBe(10);
    expect(precipitation.unit()).toBe("MM");
})

test('Wind tests', () => {
    let date = new Date();
    let wind = Wind("NE",10,"MS",date,"Horsens");

    expect(wind.value()).toBe(10);
    expect(wind.time()).toBe(date);
    expect(wind.place()).toBe("Horsens");
    expect(wind.type()).toBe("Wind");
    expect(wind.unit()).toBe("MS");

    wind.convertToUS();
    expect(wind.value()).toBe(10 * 2.237);
    expect(wind.unit()).toBe("MPH");

    wind.convertToInternational();
    expect(wind.value()).toBe(10);
    expect(wind.unit()).toBe("MS");
})

test('CloudCoverage tests', () => {
    let date = new Date();
    let cloudCoverage = CloudCoverage(10,"okta",date,"Horsens");

    expect(cloudCoverage.value()).toBe(10);
    expect(cloudCoverage.time()).toBe(date);
    expect(cloudCoverage.place()).toBe("Horsens");
    expect(cloudCoverage.type()).toBe("Cloud Coverage");
    expect(cloudCoverage.unit()).toBe("okta");

    
})

test('WeatherPrediction tests', () => {
    let date = new Date();

    let  weatherData1 = WeatherData(10,"Temperature","Celsius",date,"Horsens");
    let  weatherData2 = WeatherData(10,"Temperature","Celsius",date,"Vejle");
    let  weatherData3 = WeatherData(4,"Temperature","Celsius",date,"Skanderborg");
    let  weatherData4 = WeatherData(2,"Temperature","Celsius",date,"Horsens");

    let weatherPrediction = WeatherPrediction(5,15,"Temperature","Celsius",date,"Horsens");
    let weatherPrediction2 = WeatherPrediction(8,15,"Temperature","Celsius",date,"Vejle");

    expect(weatherPrediction.matches(weatherData4)).toBe(false);
    expect(weatherPrediction2.matches(weatherData1)).toBe(true);
    expect(weatherPrediction2.matches(weatherData2)).toBe(true);
    expect(weatherPrediction2.matches(weatherData3)).toBe(false);

    expect(weatherPrediction.to()).toBe(15);
    expect(weatherPrediction2.from()).toBe(8);
    
})


test('Temperature prediction test', () => {
    let date = new Date();
    let temperaturePredictionData = TemperaturePrediction(10,15,"Celsius",date,"Horsens");

        temperaturePredictionData.convertToInternational();
        expect(temperaturePredictionData.from()).toBe(10);
        expect(temperaturePredictionData.to()).toBe(15);
        expect(temperaturePredictionData.unit()).toBe("Celsius");
    })

    test('PrecipitationPrediction test', () => {
        let date = new Date();
        let precipitation1 = Precipitation("samplePrecType",7,"mm",date,"Horsens");

        let precipitationPrediction = PrecipitationPrediction(5,10,"samplePrecType","mm",date,"Horsens");

        expect(precipitationPrediction.matches(precipitation1)).toBe(true)

        expect(precipitationPrediction.from()).toBe(5);
        expect(precipitationPrediction.time()).toBe(date);
        expect(precipitationPrediction.place()).toBe("Horsens");
        expect(precipitationPrediction.type()).toBe("Precipitation");
        expect(precipitationPrediction.unit()).toBe("mm");

    precipitationPrediction.convertToUS();
    expect(precipitationPrediction.from()).toBe(5/25.4);
    expect(precipitationPrediction.to()).toBe(10/25.4);
    expect(precipitationPrediction.unit()).toBe("Inches");

        precipitationPrediction.convertToInternational();
        expect(precipitationPrediction.from()).toBe(5);
        expect(precipitationPrediction.to()).toBe(10);
        expect(precipitationPrediction.unit()).toBe("MM");
    })

test('WindPrediction test', () => {
    let date = new Date();

        let wind1 = Wind("NE",7,"MS",date,"Horsens");

        let wind = WindPrediction(5,10,"NE","MS",date,"Horsens");

        expect(wind.matches(wind1)).toBe(true);
        expect(wind.from()).toBe(5);
        expect(wind.to()).toBe(10);
        expect(wind.time()).toBe(date);
        expect(wind.place()).toBe("Horsens");
        expect(wind.unit()).toBe("MS");

})

test('CloudCoveragePrediction test', () => {
    let date = new Date();
    let cloudCoverage = CloudCoveragePrediction(5,10,"okta",date,"Horsens");

    expect(cloudCoverage.from()).toBe(5);
    expect(cloudCoverage.to()).toBe(10);
    expect(cloudCoverage.time()).toBe(date);
    expect(cloudCoverage.place()).toBe("Horsens");
    expect(cloudCoverage.type()).toBe("Cloud Coverage");
    expect(cloudCoverage.unit()).toBe("okta");
})

test('WeatherHistory test', () => {
    let fromDate = new Date();
    fromDate.setFullYear(1996,11,18)
    let toDate = new Date();
    toDate.setFullYear(2000,22,12)
    let dateInterval1 = DateInterval(fromDate,toDate);

    let fromDate2 = new Date();
    fromDate.setFullYear(1998,11,18)
    let toDate2 = new Date();
    toDate.setFullYear(2001,22,12)
    let dateInterval2 = DateInterval(fromDate2,toDate2);


    let date = new Date();
    let data1 = WeatherData(10,"Temperature","Celsius",date,"Horsens");
    let data2 = WeatherData(12,"Temperature","Celsius",date,"Vejle");
    let dataArray = [data1,data2];
    let weatherHistory1 = WeatherHistory(dataArray, "Horsens", "Temperature", dateInterval1);


    //place test
    expect(weatherHistory1.getCurrentPlace()).toBe("Horsens");
    weatherHistory1.setCurrentPlace("vejle");
    expect(weatherHistory1.getCurrentPlace()).toBe("vejle");
    weatherHistory1.clearCurrentPlace();
    expect(weatherHistory1.getCurrentPlace()).toBe("");

    //type test
    expect(weatherHistory1.getCurrentType()).toBe("Temperature");
    weatherHistory1.setCurrentType("vejle");
    expect(weatherHistory1.getCurrentType()).toBe("vejle");
    weatherHistory1.clearCurrentType();
    expect(weatherHistory1.getCurrentType()).toBe("");

    //period test
    expect(weatherHistory1.getCurrentPeriod()).toBe(dateInterval1);
    weatherHistory1.setCurrentPeriod(dateInterval2);
    expect(weatherHistory1.getCurrentPeriod()).toBe(dateInterval2);
    weatherHistory1.clearCurrentPeriod();
    expect(weatherHistory1.getCurrentPeriod()).toBe("");

    //Unit Conversion
    weatherHistory1.convertToUSUnits();
    expect(data1.value()).toBe((10 * 9/5) + 32);
    expect(data1.unit()).toBe("Fahrenheit");

    weatherHistory1.convertToInternationalUnits();
    expect(data1.value()).toBe(10);
    expect(data1.unit()).toBe("Celsius");

    let weatherData3 = WeatherData(15,"Temperature", "Celsius",fromDate, "friv");
    weatherHistory1.add(weatherData3);

    weatherHistory1.setCurrentPlace("friv");
    weatherHistory1.setCurrentType("Temperature");
    weatherHistory1.setCurrentPeriod(dateInterval1);

    expect(weatherHistory1.getCurrentPlace()).toBe("friv");
    expect(weatherHistory1.getCurrentType()).toBe("Temperature");
    expect(weatherHistory1.getCurrentPeriod()).toBe(dateInterval1);

    expect(weatherHistory1.data().toString()).toBe([weatherData3].toString());
})

//Weather forecast has the same methods as weather history so we can use the same object
test('WeatherForecast test', () => {
    let fromDate = new Date();
    fromDate.setFullYear(1996,11,18)
    let toDate = new Date();
    toDate.setFullYear(2000,22,12)
    let dateInterval1 = DateInterval(fromDate,toDate);

    let fromDate2 = new Date();
    fromDate.setFullYear(1998,11,18)
    let toDate2 = new Date();
    toDate.setFullYear(2001,22,12)
    let dateInterval2 = DateInterval(fromDate2,toDate2);


    let date = new Date();
    let data1 = WeatherData(10,"Temperature","Celsius",date,"Horsens");
    let data2 = WeatherData(12,"Temperature","Celsius",date,"Vejle");
    let dataArray = [data1,data2];
    let weatherForecast1 = WeatherHistory(dataArray, "Horsens", "Temperature", dateInterval1);


    //place test
    expect(weatherForecast1.getCurrentPlace()).toBe("Horsens");
    weatherForecast1.setCurrentPlace("vejle");
    expect(weatherForecast1.getCurrentPlace()).toBe("vejle");
    weatherForecast1.clearCurrentPlace();
    expect(weatherForecast1.getCurrentPlace()).toBe("");

    //type test
    expect(weatherForecast1.getCurrentType()).toBe("Temperature");
    weatherForecast1.setCurrentType("vejle");
    expect(weatherForecast1.getCurrentType()).toBe("vejle");
    weatherForecast1.clearCurrentType();
    expect(weatherForecast1.getCurrentType()).toBe("");

    //period test
    expect(weatherForecast1.getCurrentPeriod()).toBe(dateInterval1);
    weatherForecast1.setCurrentPeriod(dateInterval2);
    expect(weatherForecast1.getCurrentPeriod()).toBe(dateInterval2);
    weatherForecast1.clearCurrentPeriod();
    expect(weatherForecast1.getCurrentPeriod()).toBe("");

    //Unit Conversion
    weatherForecast1.convertToUSUnits();
    expect(data1.value()).toBe((10 * 9/5) + 32);
    expect(data1.unit()).toBe("Fahrenheit");

    weatherForecast1.convertToInternationalUnits();
    expect(data1.value()).toBe(10);
    expect(data1.unit()).toBe("Celsius");

    let weatherData3 = WeatherData(15,"Temperature", "Celsius",fromDate, "friv");
    weatherForecast1.add(weatherData3);

    weatherForecast1.setCurrentPlace("friv");
    weatherForecast1.setCurrentType("Temperature");
    weatherForecast1.setCurrentPeriod(dateInterval1);

    expect(weatherForecast1.getCurrentPlace()).toBe("friv");
    expect(weatherForecast1.getCurrentType()).toBe("Temperature");
    expect(weatherForecast1.getCurrentPeriod()).toBe(dateInterval1);

    expect(weatherForecast1.data().toString()).toBe([weatherData3].toString());
})