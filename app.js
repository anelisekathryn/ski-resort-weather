

const alta = {
  name: 'Alta',
  atitude: '40.5884',
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
}
const brighton = {
  name: 'Brighton',
  latitude: '40.598',
  longitude: '-111.5832',
  location: '500"',
  averageSnow: 'Big Cottonwood Canyon, Utah',
  verticalDrop: '1,875 ft',
  skiAcres: '1,050',
  skiRuns: '66',
  baseElev: '8,755 ft',
  summitElev: '10,500 ft',
  // image: 'INSERT LINK HERE',
  buyTickets: 'https://brightonresort.com/lift-tickets',
  liftStatus: 'https://brightonresort.com/conditions',
  snowReport: 'https://brightonresort.com/conditions',
}
const deerValley = {
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
}
const parkCity = {
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
}
const snowbird = {
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
}
const solitude = {
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

const weatherButton = document.querySelector('#get-weather');
weatherButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  const resortInput = document.querySelector('#ski-resorts')

  latitude = '40.678'
  longitude = '-111.521'

  const domain = 'https://api.weatherbit.io/v2.0/current';
  const key = 'a3789ed65dfe478abd8384a8626c7b05';
  const resortAPIUrl = `${domain}?key=${key}&&lat=${latitude}&lon=${longitude}`;

  fetch(resortAPIUrl)
   .then((res) => { return res.json() })
   .then((resJson) => {
     console.log(resJson);
      // store the json in a variable:
     //  showResortWeather(resJson.Search);
     console.log('request submitted')
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  })

})
