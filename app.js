
var resortData = {
  alta: {
    name: 'Alta',
    latitude: '40.5884',
    longitude: '-111.6386',
    location: 'Little Cottonwood Canyon, Utah',
    averageSnow: '547"',
    verticalDrop: '2,538 ft',
    skiAcres: '1,624',
    skiRuns: '119',
    baseElev: '8,530 ft',
    summitElev: '11,068 ft',
    // image: 'INSERT LINK HERE',
    buyTickets: 'https://www.alta.com/tickets-and-passes#lift-tickets',
    liftStatus: 'https://www.alta.com/lift-terrain-status',
    snowReport: 'https://www.alta.com/weather',
  }, 
  brighton: {
    name: 'Brighton',
    latitude: '40.598',
    longitude: '-111.5832',
    location: 'Big Cottonwood Canyon, Utah',
    averageSnow: '500"',
    verticalDrop: '1,875 ft',
    skiAcres: '1,050',
    skiRuns: '66',
    baseElev: '8,755 ft',
    summitElev: '10,500 ft',
    // image: 'INSERT LINK HERE',
    buyTickets: 'https://brightonresort.com/lift-tickets',
    liftStatus: 'https://brightonresort.com/conditions',
    snowReport: 'https://brightonresort.com/conditions',
  },
  deervalley: {
    name: 'Deer Valley',
    latitude: '40.6374',
    longitude: '-111.4783',
    location: 'Park City, Utah',
    averageSnow: '300"',
    verticalDrop: '3,000 ft',
    skiAcres: '2,026',
    skiRuns: '103',
    baseElev: '6,570 ft',
    summitElev: '9,570 ft',
    // image: 'INSERT LINK HERE',
    buyTickets: 'https://www.deervalley.com/plan-your-trip/tickets-and-passes/lift-tickets',
    liftStatus: 'https://www.deervalley.com/explore-the-mountain/mountain-report#/lifts',
    snowReport: 'https://www.deervalley.com/explore-the-mountain/mountain-report#/',
  },
  parkcity: {
    name: 'Park City Mountain',
    latitude: '40.6514',
    longitude: '-111.508',
    location: 'Park City, Utah',
    averageSnow: '355"',
    verticalDrop: '3,226 ft',
    skiAcres: '7,300',
    skiRuns: '330',
    baseElev: '6,800 ft',
    summitElev: '10,026 ft',
    // image: 'INSERT LINK HERE',
    buyTickets: 'https://www.parkcitymountain.com/plan-your-trip/lift-access/tickets.aspx',
    liftStatus: 'https://www.parkcitymountain.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
    snowReport: 'https://www.parkcitymountain.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
  },
  snowbird: {
    name: 'Snowbird',
    latitude: '40.5829',
    longitude: '-111.6556',
    location: 'Little Cottonwood Canyon, Utah',
    averageSnow: '500"',
    verticalDrop: '3,240 ft',
    skiAcres: '2,500',
    skiRuns: '140',
    baseElev: '7,760 ft',
    summitElev: '11,000 ft',
    // image: 'INSERT LINK HERE',
    buyTickets: 'https://shop.snowbird.com/s/winter-tickets/c/winter-lift-ticket',
    liftStatus: 'https://www.snowbird.com/summer-report/',
    snowReport: 'https://www.snowbird.com/summer-report/',
  },
  solitude: {
    name: 'Solitude',
    latitude: '40.6199',
    longitude: '-111.5919',
    location: 'Big Cottonwood Canyon, Utah',
    averageSnow: '500"',
    verticalDrop: '2,494 ft',
    skiAcres: '1,200',
    skiRuns: '82',
    baseElev: '7,994 ft',
    summitElev: '10,488 ft',
    // image: 'INSERT LINK HERE',
    buyTickets: 'https://www.solitudemountain.com/plan-your-trip/lift-tickets',
    liftStatus: 'https://www.solitudemountain.com/mountain-and-village/conditions-and-maps#/',
    snowReport: 'https://www.solitudemountain.com/mountain-and-village/conditions-and-maps#/',
  }
}

const weatherButton = document.querySelector('#get-weather');

weatherButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  const resortInput = document.querySelector('#ski-resorts').value
  // test console log - SUCCESSFUL
  console.log(resortInput)

  // test console log for resort data for choosing value in dropdown
  // console.log(resortData[resortInput])

  latitude = resortData[resortInput].latitude
  longitude = resortData[resortInput].longitude

  const domain = 'https://api.weatherbit.io/v2.0/current';
  const key = 'a3789ed65dfe478abd8384a8626c7b05';
  const resortAPIUrl = `${domain}?key=${key}&&lat=${latitude}&lon=${longitude}`;

  showResortTitle(resortInput)

  fetch(resortAPIUrl)
   .then((res) => { return res.json() })
   .then((resJSON) => {
     console.log(resJSON);
      showResortWeather(resJSON);
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  })
  showResortFacts(resortInput)
})

const showResortTitle = (resortTitle) => {
  const resortTitleDiv = document.querySelector('#title');

  const divTitle = document.createElement('h3');
  const locationTag = document.createElement('h5');

  divTitle.innerText = resortData[resortTitle].name;
  locationTag.innerText = resortData[resortTitle].location;
    
  resortTitleDiv.append(divTitle, locationTag);

}

const showResortWeather = (resortWeather) => {
  // console.log(resortWeather)

  const currentWeatherDiv = document.querySelector('#current-weather');

  const divTitle = document.createElement('h4')
  const tempTag = document.createElement('p');
  const weatherTag = document.createElement('p');
  const snowTag = document.createElement('p');
  const windDirTag = document.createElement('p');
  const windSpeedTag = document.createElement('p');

  divTitle.innerText = 'Current Weather'
  tempTag.innerText = resortWeather.data[0].app_temp;
  weatherTag.innerText = resortWeather.data[0].weather.description;
  snowTag.innerText = resortWeather.data[0].snow;
  windDirTag.innerText = resortWeather.data[0].wind_cdir_full;
  windSpeedTag.innerText = resortWeather.data[0].wind_spd;

  currentWeatherDiv.append(divTitle, tempTag, weatherTag, snowTag, windDirTag, windSpeedTag);

}

const showResortFacts = (resortFacts) => {
  // console.log(resortFacts)

  const resortInput = document.querySelector('#ski-resorts').value
  const resortFactsDiv = document.querySelector('#resort-facts');

  const divTitle = document.createElement('h4')
  const averageSnowTag = document.createElement('p');
  const skiableAcresTag = document.createElement('p');
  const skiRunsTag = document.createElement('p');
  const vertDropTag = document.createElement('p');
  const summitElevTag = document.createElement('p');

  divTitle.innerText = 'Resort Facts'
  averageSnowTag.innerText = resortData[resortFacts].averageSnow;
  skiableAcresTag.innerText = resortData[resortFacts].skiAcres;
  skiRunsTag.innerText = resortData[resortFacts].skiRuns;
  vertDropTag.innerText = resortData[resortFacts].verticalDrop;
  summitElevTag.innerText = resortData[resortFacts].summitElev;

  resortFactsDiv.append(divTitle, averageSnowTag, skiableAcresTag, skiRunsTag, vertDropTag, summitElevTag);

}
