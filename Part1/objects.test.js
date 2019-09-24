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

        temperatureData.convertToF();
        expect(temperatureData.value()).toBe((10 * 9/5) + 32);
        expect(temperatureData.unit()).toBe("Fahrenheit");

        temperatureData.convertToC();
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

        precipitation.convertToInches();
        expect(precipitation.value()).toBe(10/25.4);
        expect(precipitation.unit()).toBe("Inches");

        precipitation.convertToMM();
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

        wind.convertToMPH();
        expect(wind.value()).toBe(10 * 2.237);
        expect(wind.unit()).toBe("MPH");

        wind.convertToMS();
        expect(wind.value()).toBe(10);
        expect(wind.unit()).toBe("MS");
    })

    test('CloudCoverage tests', () => {
        let date = new Date();
        let cloudCoverage = CloudCoverage(10,"Unknown",date,"Horsens");

        expect(cloudCoverage.value()).toBe(10);
        expect(cloudCoverage.time()).toBe(date);
        expect(cloudCoverage.place()).toBe("Horsens");
        expect(cloudCoverage.type()).toBe("Cloud Coverage");
        expect(cloudCoverage.unit()).toBe("Unknown");

        
    })

  /*  test('WeatherPrediction tests', () => {
        let date = new Date();

        let toNumber = new Number(5);
        let fromNumber = new Number(10);

        let testMatchesPrediction = new WeatherData();
        weatherData = (10,"Temperature","Celsius",date,"Horsens");

        let weatherPrediction = WeatherPrediction(weatherData,"Unknown", date, "Horsens");
 
        
        expect(weatherPrediction.matches(testMatchesPrediction)).toBe(true);
    })*/

    test('WeatherHistory tests', () => {
        let date = new Date();
        let testWeatherData2 = new WeatherData(10,"Temperature2","Cels234ius",date,"Horsens2");
        let testWeatherData = new WeatherData(10,"Temperature4","Cels234ius",date,"Horsens3");
        let testWeatherData3 = new WeatherData(10,"Temperature4","Cels234ius",date,"Horsens4");
        let testWeatherHistory = new WeatherHistory(testWeatherData,'Horsens3');
        
    })

    