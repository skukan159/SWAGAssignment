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

        expect(temperaturePredictionData.from()).toBe(10);
        expect(temperaturePredictionData.to()).toBe(15);
        expect(temperaturePredictionData.time()).toBe(date);
        expect(temperaturePredictionData.place()).toBe("Horsens");
        expect(temperaturePredictionData.type()).toBe("Temperature");
        expect(temperaturePredictionData.unit()).toBe("Celsius");

        temperaturePredictionData.convertToUS();
        expect(temperaturePredictionData.from()).toBe((10 * 9/5) + 32);
        expect(temperaturePredictionData.to()).toBe((15 * 9/5) + 32);
        expect(temperaturePredictionData.unit()).toBe("Fahrenheit");

        temperaturePredictionData.convertToInternational();
        expect(temperaturePredictionData.from()).toBe(10);
        expect(temperaturePredictionData.to()).toBe(15);
        expect(temperaturePredictionData.unit()).toBe("Celsius");
    })

    test('PrecipitationPrediction test', () => {
        let date = new Date();
        let precipitationPrediction = PrecipitationPrediction(5,10,"samplePrecType","mm",date,"Horsens");

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


    