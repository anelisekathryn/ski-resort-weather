
var resortData = {
  alta: {
    name: 'Alta',
    latitude: '40.5834',
    longitude: '-111.6258',
    office: 'SLC',
    point1: '107',
    point2: '165',
    location: 'Little Cottonwood Canyon, Utah',
    averageSnow: '547"',
    verticalDrop: '2,538 ft',
    skiAcres: '1,624',
    skiRuns: '119',
    baseElev: '8,530 ft',
    summitElev: '11,068 ft',
    image: 'https://i.imgur.com/spncR0A.jpg',
    buyTickets: 'https://www.alta.com/tickets-and-passes#lift-tickets',
    liftStatus: 'https://www.alta.com/lift-terrain-status',
    snowReport: 'https://www.alta.com/weather',
  }, 
  brighton: {
    name: 'Brighton',
    latitude: '40.5974',
    longitude: '-111.5928',
    office: 'SLC',
    point1: '109',
    point2: '166',
    stationid: 'KPVU',
    location: 'Big Cottonwood Canyon, Utah',
    averageSnow: '500"',
    verticalDrop: '1,875 ft',
    skiAcres: '1,050',
    skiRuns: '66',
    baseElev: '8,755 ft',
    summitElev: '10,500 ft',
    image: 'https://i.imgur.com/wLMxKex.jpg',
    buyTickets: 'https://brightonresort.com/lift-tickets',
    liftStatus: 'https://brightonresort.com/conditions',
    snowReport: 'https://brightonresort.com/conditions',
  },
  deervalley: {
    name: 'Deer Valley',
    latitude: '40.6285',
    longitude: '-111.4815',
    office: 'SLC',
    point1: '113',
    point2: '167',
    location: 'Park City, Utah',
    averageSnow: '300"',
    verticalDrop: '3,000 ft',
    skiAcres: '2,026',
    skiRuns: '103',
    baseElev: '6,570 ft',
    summitElev: '9,570 ft',
    image: 'https://i.imgur.com/7JgUb1n.jpg',
    buyTickets: 'https://www.deervalley.com/plan-your-trip/tickets-and-passes/lift-tickets',
    liftStatus: 'https://www.deervalley.com/explore-the-mountain/mountain-report#/lifts',
    snowReport: 'https://www.deervalley.com/explore-the-mountain/mountain-report#/',
  },
  parkcity: {
    name: 'Park City Mountain',
    latitude: '40.6346',
    longitude: '-111.5241',
    office: 'SLC',
    point1: '111',
    point2: '167',
    location: 'Park City, Utah',
    averageSnow: '355"',
    verticalDrop: '3,226 ft',
    skiAcres: '7,300',
    skiRuns: '330',
    baseElev: '6,800 ft',
    summitElev: '10,026 ft',
    image: 'https://i.imgur.com/qMqBPij.jpg',
    buyTickets: 'https://www.parkcitymountain.com/plan-your-trip/lift-access/tickets.aspx',
    liftStatus: 'https://www.parkcitymountain.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
    snowReport: 'https://www.parkcitymountain.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
  },
  snowbird: {
    name: 'Snowbird',
    latitude: '40.5634',
    longitude: '-111.6516',
    office: 'SLC',
    point1: '106',
    point2: '164',
    location: 'Little Cottonwood Canyon, Utah',
    averageSnow: '500"',
    verticalDrop: '3,240 ft',
    skiAcres: '2,500',
    skiRuns: '140',
    baseElev: '7,760 ft',
    summitElev: '11,000 ft',
    image: 'https://i.imgur.com/rVIqzIO.jpg',
    buyTickets: 'https://shop.snowbird.com/s/winter-tickets/c/winter-lift-ticket',
    liftStatus: 'https://www.snowbird.com/summer-report/',
    snowReport: 'https://www.snowbird.com/summer-report/',
  },
  solitude: {
    name: 'Solitude',
    latitude: '40.6169',
    longitude: '-111.6034',
    office: 'SLC',
    point1: '108',
    point2: '167',
    location: 'Big Cottonwood Canyon, Utah',
    averageSnow: '500"',
    verticalDrop: '2,494 ft',
    skiAcres: '1,200',
    skiRuns: '82',
    baseElev: '7,994 ft',
    summitElev: '10,488 ft',
    image: 'https://i.imgur.com/FeEEjMC.jpg',
    buyTickets: 'https://www.solitudemountain.com/plan-your-trip/lift-tickets',
    liftStatus: 'https://www.solitudemountain.com/mountain-and-village/conditions-and-maps#/',
    snowReport: 'https://www.solitudemountain.com/mountain-and-village/conditions-and-maps#/',
  }
}

const weatherButton = document.querySelector('#get-weather');
weatherButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  const resortInput = document.querySelector('#ski-resorts').value
  console.log(resortInput)

  office = resortData[resortInput].office
  point1 = resortData[resortInput].point1
  point2 = resortData[resortInput].point2
  stationid = resortData[resortInput].stationid

  const domain = 'https://api.weather.gov';
  // const currentAPIUrl = `${domain}/stations/${stationid}/observations/latest`;
  const hourlyForecastAPIUrl = `${domain}/gridpoints/${office}/${point1},${point2}/forecast/hourly`
  const forecastAPIUrl = `${domain}/gridpoints/${office}/${point1},${point2}/forecast`;

  showResortTitle(resortInput)

  fetch(hourlyForecastAPIUrl)
   .then((res) => { return res.json() })
   .then((resJSON) => {
     console.log(resJSON);
      showResortWeather(resJSON);
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  })

  showResortFacts(resortInput)
  
  fetch(forecastAPIUrl)
   .then((res) => { return res.json() })
   .then((resJSON) => {
     console.log(resJSON);
      showResortForecast(resJSON);
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  })

})

const showResortTitle = (resortTitle) => {

  const resortTitleDiv = document.querySelector('#title');
  resortTitleDiv.innerHTML = ''

  const divTitle = document.createElement('h3');
  const locationTag = document.createElement('h5');

  divTitle.innerText = resortData[resortTitle].name;
  locationTag.innerText = resortData[resortTitle].location;
    
  resortTitleDiv.append(divTitle, locationTag);

}

const showResortWeather = (resortWeather) => {

  const currentWeatherDiv = document.querySelector('#current-weather');
  currentWeatherDiv.innerHTML = ''


  const divTitle = document.createElement('h4')
  const tempTag = document.createElement('p');
  const windTag = document.createElement('p');
  const conditionsTag = document.createElement('p')

  divTitle.innerText = 'Current Hour Forecast'
  // timeTag.innerText = resortWeather.properties.periods[0].name;
  tempTag.innerText = ("Temp: " + resortWeather.properties.periods[0].temperature + " F");
  windTag.innerText = ("Wind: " + resortWeather.properties.periods[0].windDirection + " " + resortWeather.properties.periods[0].windSpeed)
  conditionsTag.innerText = resortWeather.properties.periods[0].shortForecast


  currentWeatherDiv.append(divTitle, tempTag, windTag, conditionsTag);

}

const showResortFacts = (resortFacts) => {

  // const resortInput = document.querySelector('#ski-resorts').value
  const resortFactsDiv = document.querySelector('#resort-facts');
  resortFactsDiv.innerHTML = ''


  const divTitle = document.createElement('h4')
  const averageSnowTag = document.createElement('p');
  const skiableAcresTag = document.createElement('p');
  const skiRunsTag = document.createElement('p');
  const vertDropTag = document.createElement('p');
  const summitElevTag = document.createElement('p');

  divTitle.innerText = 'Resort Facts'
  averageSnowTag.innerText = ('Average Annual Snowfall: ' + resortData[resortFacts].averageSnow);
  skiableAcresTag.innerText = ('Skiable Acres: ' + resortData[resortFacts].skiAcres);
  skiRunsTag.innerText = ('Ski Runs: ' + resortData[resortFacts].skiRuns);
  vertDropTag.innerText = ('Vertical Drop: ' + resortData[resortFacts].verticalDrop);
  summitElevTag.innerText = ('Summit Elevation: ' + resortData[resortFacts].summitElev);

  resortFactsDiv.append(divTitle, averageSnowTag, skiableAcresTag, skiRunsTag, vertDropTag, summitElevTag);

}

const showResortForecast = (resortForecast) => {

  const forecastWeatherDiv = document.querySelector('#forecast');
  forecastWeatherDiv.innerHTML = ''


  const divTitle = document.createElement('h4')
  const f0NameTag = document.createElement('h5');
  const f0WeatherTag = document.createElement('p');
  const f1NameTag = document.createElement('h5');
  const f1WeatherTag = document.createElement('p');
  const f2NameTag = document.createElement('h5');
  const f2WeatherTag = document.createElement('p');
  const f3NameTag = document.createElement('h5');
  const f3WeatherTag = document.createElement('p');
  const f4NameTag = document.createElement('h5');
  const f4WeatherTag = document.createElement('p');
  const f5NameTag = document.createElement('h5');
  const f5WeatherTag = document.createElement('p');
  const f6NameTag = document.createElement('h5');
  const f6WeatherTag = document.createElement('p');
  const f7NameTag = document.createElement('h5');
  const f7WeatherTag = document.createElement('p');
  const f8NameTag = document.createElement('h5');
  const f8WeatherTag = document.createElement('p');
  const f9NameTag = document.createElement('h5');
  const f9WeatherTag = document.createElement('p');
  const f10NameTag = document.createElement('h5');
  const f10WeatherTag = document.createElement('p');

  divTitle.innerText = '5 Day Forecast'
  f0NameTag.innerText = (resortForecast.properties.periods[0].name + ": ")
  f0WeatherTag.innerText = resortForecast.properties.periods[0].detailedForecast
  f1NameTag.innerText = (resortForecast.properties.periods[1].name + ": ")
  f1WeatherTag.innerText = resortForecast.properties.periods[1].detailedForecast
  f2NameTag.innerText = (resortForecast.properties.periods[2].name + ": ")
  f2WeatherTag.innerText = resortForecast.properties.periods[2].detailedForecast
  f3NameTag.innerText = (resortForecast.properties.periods[3].name + ": ")
  f3WeatherTag.innerText = resortForecast.properties.periods[3].detailedForecast
  f4NameTag.innerText = (resortForecast.properties.periods[4].name + ": ")
  f4WeatherTag.innerText = resortForecast.properties.periods[4].detailedForecast
  f5NameTag.innerText = (resortForecast.properties.periods[5].name + ": ")
  f5WeatherTag.innerText = resortForecast.properties.periods[5].detailedForecast
  f6NameTag.innerText = (resortForecast.properties.periods[6].name + ": ")
  f6WeatherTag.innerText = resortForecast.properties.periods[6].detailedForecast
  f7NameTag.innerText = (resortForecast.properties.periods[7].name + ": ")
  f7WeatherTag.innerText = resortForecast.properties.periods[7].detailedForecast
  f8NameTag.innerText = (resortForecast.properties.periods[8].name + ": ")
  f8WeatherTag.innerText = resortForecast.properties.periods[8].detailedForecast
  f9NameTag.innerText = (resortForecast.properties.periods[9].name + ": ")
  f9WeatherTag.innerText = resortForecast.properties.periods[9].detailedForecast
  f10NameTag.innerText = (resortForecast.properties.periods[10].name + ": ")
  f10WeatherTag.innerText = resortForecast.properties.periods[10].detailedForecast

  forecastWeatherDiv.append(divTitle, f0NameTag, f0WeatherTag, f1NameTag, f1WeatherTag, f2NameTag, f2WeatherTag, f3NameTag, f3WeatherTag, f4NameTag, f4WeatherTag, f5NameTag, f5WeatherTag, f6NameTag, f6WeatherTag, f7NameTag, f7WeatherTag, f8NameTag, f8WeatherTag, f9NameTag, f9WeatherTag, f10NameTag, f10WeatherTag)

}
