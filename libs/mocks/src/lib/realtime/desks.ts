import { Md5 } from 'ts-md5';
import { HashMap, predictableRandomInt } from '@user-interfaces/common';
import { MOCK_LEVELS } from '../api/zone.data';
import { MOCK_STAFF } from '../api/users.data';

export interface ZoneOverview {
    /** Desk count based on `desks` metadata in the zone
     falls back to the zone.count field otherwise */
    desk_count: number;

    desk_usage: number;
    /** Capacity of the space, set in zone.capacity field */
    device_capacity: number;
    /** Raw device count */
    device_count: number;
    /** This is the adjusted count based on the duplication factor */
    estimated_people: number;

    percentage_use: number;
    /** The higher the recommendation number the better for recommending */
    recommendation: number;
}

export class MockLocationServicesModule implements HashMap {
    /** Overview of the zones */
    overview: HashMap<ZoneOverview> = {};

    $locate_user(email: string, username: string) {}
}

function padZero(no: number, len: number = 3) {
    let str = `${no}`;
    while (str.length < len) {
        str = '0' + str;
    }
    return str;
}

export function createLocationServicesModule(
    space: HashMap,
    overrides: HashMap = {}
) {
    const mod = new MockLocationServicesModule();
    for (const lvl of MOCK_LEVELS) {
        mod.overview[lvl.id] = {
            desk_count: 100,
            desk_usage: 0,
            device_capacity: 100,
            device_count: 0,
            estimated_people: 0,
            percentage_use: 0,
            recommendation: 10000,
        };
        mod[`${lvl.id}:desk_ids`] = new Array(mod.overview[lvl.id].desk_count)
            .fill(0)
            .map((_, idx) => `table-${lvl.number}.${padZero(idx)}`);
        mod[`${lvl.id}`] = { value: [] };
    }
    updateLocations(mod, MOCK_LEVELS);
    setInterval(() => updateLocations(mod, MOCK_LEVELS), 60 * 1000);
    return mod;
}

export function updateLocations(
    mod: MockLocationServicesModule,
    levels: HashMap[]
) {
    for (const lvl of levels) {
        mod[lvl.id] = {
            value: new Array(predictableRandomInt(20))
                .fill(0)
                .map(() => generateLocation(lvl, mod[`${lvl.id}:desk_ids`])),
        };
    }
}

export function generateLocation(
    lvl: HashMap,
    desks: string[],
    users = MOCK_STAFF
) {
    const fixed = predictableRandomInt(9999) % 3 === 0;
    return fixed
        ? {
              location: 'desk',
              at_location: predictableRandomInt(9999) % 5 !== 0,
              map_id: desks[predictableRandomInt(desks.length)],
              mac: Md5.hashStr(
                  users[predictableRandomInt(users.length)].email
              ),
              level: lvl.id,
              building: lvl.parent_id,
          }
        : {
              location: 'wireless',
              coordinates_from: 'bottom-left',
              x: predictableRandomInt(1000) / 10,
              y: predictableRandomInt(1000) / 10,
              lon: 55.27476066828535,
              lat: 25.20106100633537,
              s2_cell_id: '3e5f4281459c',
              mac: Md5.hashStr(
                  users[predictableRandomInt(users.length)].email
              ),
              variance: 9.62534032222287,
              last_seen: Math.floor(new Date().valueOf() / 1000),
              map_width: 100,
              map_height: 100,
          };
}
