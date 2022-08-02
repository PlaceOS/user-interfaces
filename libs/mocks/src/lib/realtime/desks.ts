import { Md5 } from 'ts-md5';
import { HashMap, predictableRandomInt, randomInt } from '@placeos/common';
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

export class MockAreaManagementModule implements HashMap {
    /** Overview of the zones */
    overview: HashMap<ZoneOverview> = {};

    emergency_contacts = {
        'First Aid': MOCK_STAFF.filter(
            (_) => predictableRandomInt(9999) % 5 === 0
        ),
        'Fire Warden': MOCK_STAFF.filter(
            (_) => predictableRandomInt(9999) % 5 === 0
        ),
    };

    $locate_user(email: string, username: string) {}

    $update() {
        updateLocations(this, MOCK_LEVELS);
    }
}

const MAC_LOOKUP = {};

export class MockLocationServicesModule implements HashMap {
    $check_ownership_of(mac_address: string) {
        if (!MAC_LOOKUP[mac_address]) {
            const staff =
                randomInt(999_999) % 3 === 0
                    ? MOCK_STAFF[randomInt(MOCK_STAFF.length)]
                    : { name: '' };
            MAC_LOOKUP[mac_address] = { assigned_to: staff.name };
        }
        return MAC_LOOKUP[mac_address];
    }

    $locate_user(email: string, username: string) {
        return [{
            type: 'wireless',
            position: { x: 0.5, y: 0.5 },
            level: MOCK_LEVELS[randomInt(MOCK_LEVELS.length)].id,
            priority: 0
        }]
    }
}

function padZero(no: number, len: number = 3) {
    let str = `${no}`;
    while (str.length < len) {
        str = '0' + str;
    }
    return str;
}

export function createAreaManagementModule(
    space: HashMap,
    overrides: HashMap = {}
) {
    const mod = new MockAreaManagementModule();
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
        mod[`${lvl.id}:areas`] = {
            value: [
                {
                    area_id: 'zone-10.B',
                    count: randomInt(100),
                    name: '.L1 IFS IT',
                },
                {
                    area_id: 'zone-10.A',
                    count: randomInt(100),
                    name: '.L1 IFS IT',
                },
                {
                    area_id: 'zone-10.C',
                    count: randomInt(50),
                    name: '.L1 IFS IT',
                },
                {
                    area_id: 'zone-02.D',
                    count: randomInt(100),
                    name: 'Quite Work',
                },
                {
                    area_id: 'zone-02.B',
                    count: randomInt(100),
                    name: 'Meeting Area A',
                },
                {
                    area_id: 'zone-02.A',
                    count: randomInt(100),
                    name: 'Meeting Area B',
                },
                {
                    area_id: 'zone-02.C',
                    count: randomInt(50),
                    name: 'Casual Work',
                },
            ],
        };
    }
    return mod;
}

export function updateLocations(
    mod: MockAreaManagementModule,
    levels: HashMap[]
) {
    for (const lvl of levels) {
        mod[lvl.id] = {
            value: new Array(predictableRandomInt(20))
                .fill(0)
                .map(() => generateLocation(lvl, mod[`${lvl.id}:desk_ids`])),
        };
        for (const area of mod[`${lvl.id}:areas`].value) {
            area.count = randomInt(100);
        }
        mod[`${lvl.id}:areas`] = { ...mod[`${lvl.id}:areas`] };
    }
}

export function generateLocation(
    lvl: HashMap,
    desks: string[],
    users = MOCK_STAFF
) {
    const fixed = predictableRandomInt(9999) % 3 === 0;
    const usr = (users || [])[predictableRandomInt((users || [])?.length)]?.email;
    return fixed
        ? {
              location: 'desk',
              at_location: predictableRandomInt(9999) % 2 !== 0,
              map_id: desks[predictableRandomInt(desks.length)],
              mac: Md5?.hashStr(usr || ''),
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
              mac: Md5?.hashStr(usr || ''),
              variance: 9.62534032222287,
              last_seen: Math.floor(new Date().valueOf() / 1000),
              map_width: 100,
              map_height: 100,
          };
}
