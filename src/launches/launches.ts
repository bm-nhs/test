import { LaunchesEndpoints } from './common.launches.ts'
import { Launch } from './launches.interfaces.ts'

async function getLaunches(): Promise<Launch[]> {
  const response = await fetch(LaunchesEndpoints.GetLaunchesPast)
  const launches: Launch[] = await response.json()
  return launches
}

function getLaunchDisplayString(launches: Launch[]): string {
  const results: string[] = []
  for(const launch of launches){
    results.push(`${launch.id} - ${launch.name ?? 'Launch Name Unavailable'}: ${launch.date_utc ?? 'Launch Date Unavailable'} ${launch.cores?.map(c => `${!c.landing_type ? 'Unknown Core' : c.landing_type }`).join(' - ') ?? 'Launch Cores Unavailable'}`)
  }
  return results.join('\r\n')
}

/**
 *  Make a string that looks like this:
    <name>: <date> <core landing_type>
    SES-9: 2016-03-04T23:35:00.000Z ASDS
 */
export async function main() {
  const launches = await getLaunches()
  const displayStrings = getLaunchDisplayString(launches)
  console.log(displayStrings)
}
