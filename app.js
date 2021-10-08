
var resortData = {
  alta: {
    name: 'Alta',
    latitude: '40.5782',
    longitude: '-111.6173',
    office: 'SLC',
    point1: '108',
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
  powdermountain: {
    name: 'Powder Mountain',
    latitude: '41.3805',
    longitude: '-111.7838',
    office: 'SLC',
    point1: '101',
    point2: '157',
    location: 'Eden, Utah',
    averageSnow: '500"',
    verticalDrop: '2,205 ft',
    skiAcres: '8,464',
    skiRuns: '154',
    baseElev: '6,900 ft',
    summitElev: '9,422 ft',
    image: 'https://i.imgur.com/DFDovVQ.jpg',
    buyTickets: 'https://www.powdermountain.com/resort/tickets-passes/day-night-tickets',
    liftStatus: 'https://www.powdermountain.com/resort/the-mountain/conditions/lift-and-terrain-status',
    snowReport: 'https://www.powdermountain.com/resort/the-mountain/conditions/snow-report',
  },
  snowbasin: {
    name: 'Snowbasin',
    latitude: '41.1994',
    longitude: '-111.8741',
    office: 'SLC',
    point1: '97',
    point2: '149',
    location: 'Huntsville, Utah',
    averageSnow: '300"',
    verticalDrop: '3,000 ft',
    skiAcres: '3,000',
    skiRuns: '104',
    baseElev: '6,450 ft',
    summitElev: '9,350 ft',
    image: 'https://i.imgur.com/uYlQaNP.jpg',
    buyTickets: 'https://www.snowbasin.com/tickets-passes/winter-lift-tickets/',
    liftStatus: 'https://www.snowbasin.com/the-mountain/conditions/',
    snowReport: 'https://www.snowbasin.com/the-mountain/conditions/',
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
  },
  sundance: {
    name: 'Sundance Resort',
    latitude: '40.3858',
    longitude: '-111.5816',
    office: 'SLC',
    point1: '108',
    point2: '156',
    location: 'Sundance, Utah',
    averageSnow: '300"',
    verticalDrop: '2,150 ft',
    skiAcres: '450',
    skiRuns: '42',
    baseElev: '6,100 ft',
    summitElev: '8,250 ft',
    image: 'https://i.imgur.com/Z1qOKMs.jpg',
    buyTickets: 'https://www.sundanceresort.com/winter-activities/winter-lift-tickets/',
    liftStatus: 'https://www.sundanceresort.com/mountain-report/',
    snowReport: 'https://www.sundanceresort.com/mountain-report/',
  },
  woodwardparkcity: {
    name: 'Woodward Park City',
    latitude: '40.7489',
    longitude: '-111.5897',
    office: 'SLC',
    point1: '110',
    point2: '173',
    location: 'Park City, Utah',
    averageSnow: '150"',
    verticalDrop: '349 ft',
    skiAcres: '61',
    skiRuns: '11',
    baseElev: '6,463 ft',
    summitElev: '6,812 ft',
    image: 'https://i.imgur.com/84QvHxT.jpg',
    buyTickets: 'https://www.woodwardparkcity.com/tickets-and-events/ski-and-ride',
    liftStatus: 'https://www.woodwardparkcity.com/facilities/trail-and-snow-report',
    snowReport: 'https://www.woodwardparkcity.com/facilities/trail-and-snow-report',
  }
}

const weatherButton = document.querySelector('#get-weather');

weatherButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  const resortInput = document.querySelector('#ski-resorts').value
  showResortImage(resortInput);
  showResortTitle(resortInput);
  fetchDataHourly(resortInput);
  showResortFacts(resortInput);
  showResortButtons(resortInput);
  fetchDataForecast(resortInput);
  showFooter();
})

const fetchDataHourly = (hourly) => {

  office = resortData[hourly].office
  point1 = resortData[hourly].point1
  point2 = resortData[hourly].point2

  const domain = 'https://api.weather.gov';
  const hourlyForecastAPIUrl = `${domain}/gridpoints/${office}/${point1},${point2}/forecast/hourly`
  
  fetch(hourlyForecastAPIUrl, {
    headers: {
      'User-Agent': '(www.skiweather.com, anelise.bergin@gmail.com)',
    }
  })
   .then((res) => { return res.json() })
   .then((resJSON) => {
     console.log(resJSON);
      showResortWeather(resJSON);
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  })
}

const fetchDataForecast = (forecast) => {
  office = resortData[forecast].office
  point1 = resortData[forecast].point1
  point2 = resortData[forecast].point2

  const domain = 'https://api.weather.gov';
  const forecastAPIUrl = `${domain}/gridpoints/${office}/${point1},${point2}/forecast`;
  
  fetch(forecastAPIUrl, {
    headers: {
      'User-Agent': '(www.skiweather.com, anelise.bergin@gmail.com)',
    }
  })
   .then((res) => { return res.json() })
   .then((resJSON) => {
     console.log(resJSON);
      showResortForecast(resJSON);
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  })
}

const showResortImage = (resortImage) => {

  const headerImageDiv = document.querySelector('#header-image');
  headerImageDiv.innerHTML = ''

  const headerImage = document.createElement('img');

  headerImage.src = resortData[resortImage].image
    
  headerImageDiv.append(headerImage);

}

const showResortTitle = (resortTitle) => {

  const resortTitleDiv = document.querySelector('#title');
  resortTitleDiv.innerHTML = ''

  const divTitle = document.createElement('h2');
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

  const resortFactsDiv = document.querySelector('#resort-facts');
  resortFactsDiv.innerHTML = ''

  const divTitle = document.createElement('h4');
  const averageSnowTag = document.createElement('p');
  const terrainTag = document.createElement('p');
  const vertDropTag = document.createElement('p');

  divTitle.innerText = 'Resort Info'
  averageSnowTag.innerText = ('Average Annual Snowfall: ' + resortData[resortFacts].averageSnow);
  terrainTag.innerText = ('Terrain: ' + (resortData[resortFacts].skiAcres) + ' acres, ' +(resortData[resortFacts].skiRuns) + ' runs');
  vertDropTag.innerText = ('Vertical Drop: ' + resortData[resortFacts].verticalDrop);

  resortFactsDiv.append(divTitle, averageSnowTag, terrainTag, vertDropTag);
}

const showResortButtons = (resortButtons) => {

  const resortButtonsDiv = document.querySelector('#links');
  resortButtonsDiv.innerHTML = ''

  const buyTicketsButton = document.createElement('a');
  const liftStatusButton = document.createElement('a');
  const snowReportButton = document.createElement('a');

  buyTicketsButton.href = resortData[resortButtons].buyTickets;
  buyTicketsButton.target = '_blank'
  buyTicketsButton.innerText = 'Buy Lift Tickets'

  liftStatusButton.href = resortData[resortButtons].liftStatus;
  liftStatusButton.target = '_blank'
  liftStatusButton.innerText = 'Current Lift Status'

  snowReportButton.href = resortData[resortButtons].snowReport;
  snowReportButton.target = '_blank'
  snowReportButton.innerText = 'Resort Snow Report'
    
  resortButtonsDiv.append(buyTicketsButton, liftStatusButton, snowReportButton);

}

const showResortForecast = (resortForecast) => {
  const forecastWeatherDiv = document.querySelector('#forecast');
  forecastWeatherDiv.innerHTML = ''

  for (let i = 0; i < 11; i++) {
    const forecastName = document.createElement('h5')
    const forecastWeather = document.createElement('p')
    forecastName.innerText = resortForecast.properties.periods[i].name
    forecastWeatherDiv.appendChild(forecastName)
    forecastWeather.innerText = resortForecast.properties.periods[i].detailedForecast
    forecastWeatherDiv.appendChild(forecastWeather)
  }
}

const showFooter = () => {

  const footerDiv = document.querySelector('#footer').children[0]
  footerDiv.id = 'footer-text'
  footerDiv.innerHTML = ''

  const footerLine1 = document.createElement('h6');
  const footerLine2 = document.createElement('p');
  const footerLine3 = document.createElement('p');

  var line1Link = document.createElement('a');
  line1Link.href = 'https://www.weather.gov/';
  line1Link.target = '_blank'
  line1Link.innerText = 'NOAA';

  var line3Link = document.createElement('a');
  line3Link.href = 'https://github.com/anelisekathryn';
  line3Link.target = '_blank'
  line3Link.innerText = 'Github';

  footerLine1.innerText = 'Weather data provided by ';
  footerLine1.appendChild(line1Link);
  footerLine2.innerText = 'Site created by Anelise Kathryn';
  footerLine3.innerText = 'See what else I\'m working on: ';
  footerLine3.appendChild(line3Link);
  

  footerDiv.append(footerLine1, footerLine2, footerLine3);
}