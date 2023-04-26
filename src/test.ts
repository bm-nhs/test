import { TEST_VAR } from '../deps.ts'

var LAUNCHES_URL = 'https://api.spacexdata.com/v4/launches/past'

async function getLaunches ()  {
  var launchesResponse = await fetch(LAUNCHES_URL);
  var launches = await launchesResponse.json();
  return launches;
}

function getLaunchDisplayStrings(launches) {
  var results = [];
  for (var i = 0; i < launches.length; i ++){
    
    // make a string that looks like this:
    // <name>: <date> <core landing_type>
    // SES-9: 2016-03-04T23:35:00.000Z ASDS
    
    var displayString = launches[i].name;
    displayString += ': ' + launches[i].date_utc;
    displayString += ' ' + launches[i].cores[0].landing_type;
    
    results.push(displayString);
  }
  
  return results;
}

export async function main() {
  var launches = await getLaunches();
  var displayStrings = getLaunchDisplayStrings(launches);
  console.log(displayStrings);
}


