import * as faker from 'faker';
import * as dayjs from 'dayjs';

import { randomInt, unique } from '@user-interfaces/common';
import { DOMAIN } from './api/common.mock';

/** Start of new mocks */

export const MOCK_ORGS = [
    {
        created_at: 1587057070,
        updated_at: 1587692680,
        name: 'MER - PwC Middle East',
        description: '',
        tags: 'org',
        count: 0,
        capacity: 0,
        parent_id: '',
        triggers: [],
        id: 'zone-EmWFTjuYExK',
    },
];

export const MOCK_BUILDINGS = [
    {
        name: 'SA-RIYADH-KingdomTower',
        description: '',
        tags: 'building',
        count: 0,
        capacity: 0,
        parent_id: 'zone-EmWFTjuYExK',
        triggers: [],
        id: 'bld-01',
    },
    {
        name: 'AE-DUBAI-Building5',
        description: '',
        tags: 'building',
        count: 0,
        capacity: 0,
        parent_id: 'zone-EmWFTjuYExK',
        triggers: [],
        id: 'bld-02',
    },
    {
        name: 'SA-RIYADH-OlayaTowers',
        description: 'Olaya Towers',
        tags: 'building',
        count: 0,
        capacity: 0,
        parent_id: 'zone-EmWFTjuYExK',
        triggers: [],
        id: 'bld-03',
    },
];

const levels = ['lvl-00', 'lvl-01', 'lvl-02', 'lvl-03', 'lvl-04', 'lvl-05', 'lvl-06'];
const mockLevel = (id: string, idx: number, building: any): any => {
    let map_id = id.substr(4);
    map_id = `/assets/maps/dubai/level_${map_id.endsWith('0') ? 'G' : map_id}.svg`;
    return {
        id: `${building.id}_${id}`,
        name: `Level ${id.endsWith('0') ? 'G' : idx}`,
        parent_id: building.id,
        description: '',
        tags: 'level',
        map_id,
        code: 'level code 12',
        type: 'staff floor',
        count: 5,
        capacity: 30,
        location: 'optional lat,long',
        display_name: 'Overrides name for staff app',
    };
};

export const MOCK_LEVELS = MOCK_BUILDINGS.map((bld) =>
    levels.map((level, idx, arr) => mockLevel(level, idx, bld))
).reduce((p, c) => p.concat(c), []);

export const ROOMS_PER_LEVEL = {
    'lvl-00': [
        {
            id: '00.09',
            name: 'Classroom',
            bookable: false,
        },
        {
            id: '00.10',
            name: 'Classroom',
            bookable: false,
        },
        {
            id: '00.11',
            name: 'Classroom',
            bookable: false,
        },
        {
            id: '00.21',
            name: 'Classroom',
            bookable: false,
        },
        {
            id: '00.22',
            name: 'Classroom',
            bookable: false,
        },
        {
            id: '00.23',
            name: 'Classroom',
            bookable: false,
        },
        {
            id: '00.25',
            name: 'Classroom',
            bookable: false,
        },
    ],
    'lvl-01': [
        {
            id: '01.07',
            name: 'Meeting Room',
            bookable: true,
        },
        {
            id: '01.14',
            name: 'Collaboration Room',
            bookable: true,
        },
        {
            id: '01.15',
            name: 'Collaboration Room',
            bookable: true,
        },
        {
            id: '01.33',
            name: 'Induction Room',
            bookable: true,
        },
        {
            id: '01.34',
            name: 'Induction Room',
            bookable: true,
        },
    ],
    'lvl-02': [
        {
            id: '02.03',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.06',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.07',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.08',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.09',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.14',
            name: 'Forensic Lab',
            bookable: true,
        },
        {
            id: '02.16',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.17',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.18',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.20',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.21',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.22',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.24',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.25',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '02.26',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '02.27',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '02.31',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '02.32',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.33',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.34',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.37',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '02.38',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
    ],
    'lvl-03': [
        {
            id: '03.03',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.06',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.07',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.08',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.09',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.14',
            name: 'Forensic Lab',
            bookable: true,
        },
        {
            id: '03.16',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.17',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.18',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.20',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.21',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.22',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.24',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.25',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '03.26',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '03.27',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '03.31',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '03.32',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.33',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.34',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.37',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '03.38',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
    ],
    'lvl-04': [
        {
            id: '04.03',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.06',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.07',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.08',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.09',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.14',
            name: 'Forensic Lab',
            bookable: true,
        },
        {
            id: '04.16',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.17',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.18',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.20',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.21',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.22',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.24',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.25',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '04.26',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '04.27',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '04.31',
            name: 'Multi-Purpose Area',
            bookable: true,
        },
        {
            id: '04.32',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.33',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.34',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.37',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
        {
            id: '04.38',
            name: 'Multi-Purpose Room',
            bookable: true,
        },
    ],
    'lvl-05': [
        {
            id: '05.06',
            name: 'Leadership',
            bookable: false,
        },
        {
            id: '05.07',
            name: 'Leadership',
            bookable: false,
        },
        {
            id: '05.08',
            name: 'Leadership',
            bookable: false,
        },
        {
            id: '05.09',
            name: 'Leadership',
            bookable: false,
        },
    ],
};

const spaces = [];

const randomSpaceFeatures = () => {
    const f = ['Whiteboard', 'VidConf', 'Projector', 'Views'];
    const numFeatures = randomInt(f.length + 1);
    const res = [];
    for (let i = 0; i < numFeatures; i++) {
        res.push(f[randomInt(f.length)]);
    }
    return res.filter((el, i, r) => r.indexOf(el) === i).join(' ');
};

MOCK_BUILDINGS.forEach((bld) => {
    const lvls = MOCK_LEVELS.filter((f) => f.parent_id === bld.id);
    lvls.forEach((lvl) => {
        const roomsForLevel = ROOMS_PER_LEVEL[lvl.id.split('_').pop()] || [];
        roomsForLevel.forEach((space_data, idx) => {
            const space = {
                ...space_data,
                map_id: `area-${space_data.id}-status`,
                id: `space-${spaces.length}`,
                name: `${space_data.name} ${space_data.id}`,
                email: `space-${spaces.length}@acaprojects.com`,
                capacity: Math.floor(Math.random() * 20 + 1) * 2,
                zones: [bld.id, lvl.id],
                features: randomSpaceFeatures(),
            };
            spaces.push(space);
        });
    });
});

export const MOCK_SPACES = spaces;
/** End of new mocks */

export const MOCK_CATERING_OPTIONS = {
    options: [
        {
            name: 'sugar',
            radio_select: [
                {
                    option: 'none',
                    default: true,
                },
                {
                    option: 'one sugar',
                },
                {
                    option: 'two sugars',
                },
                {
                    option: 'three sugars',
                },
            ],
        },
        {
            name: 'milk',
            radio_select: [
                {
                    option: 'full cream',
                    default: true,
                },
                {
                    option: 'skim',
                },
                {
                    option: 'almond',
                },
            ],
        },
        {
            name: 'bread',
            radio_select: [
                {
                    option: 'white',
                    default: true,
                },
                {
                    option: 'brown',
                },
                {
                    option: 'mixed',
                },
            ],
        },
        {
            name: 'gluten',
            multi_select: [
                {
                    option: 'Gluten Free',
                },
            ],
        },
    ],
    menu: [
        {
            category: 'Drinks',
            subcategory: 'Coffee',
            name: 'Cafe Latte',
            options: ['milk', 'sugar'],
        },
        {
            category: 'Drinks',
            subcategory: 'Coffee',
            name: 'Americano',
            options: ['sugar'],
        },
        {
            category: 'Food',
            subcategory: 'Sandwiches',
            name: 'Assorted Sandwich Platter x4 Sandwiches',
            options: ['bread', 'gluten'],
        },
    ],
};

// export function mockCatering(system_id) {
//     const catering = {
//         orders: []
//     };

//     const numOrders = Math.floor(Math.random() * 3);
//     if (numOrders > 0) {
//         for (let i = 0; i < numOrders; i++) {
//             const order = newCateringOrder(system_id);
//             order.charge_code = Math.random().toString(36).substring(7);
//             const numItems = Math.floor(Math.random() * 3);
//             for (let j = 0; j < numItems; j++) {
//                 const item = newCateringOrderItem(MOCK_CATERING_OPTIONS.menu[j], Math.floor(Math.random() * 3) + 1);
//                 order.items.push(item);
//             }
//             catering.orders.push(order);
//         }

//     }
//     return catering;
// }

const PREDEFINED_USER: string[] = [
    'Alex Sorafumo',
    'Alex C',
    'Stephen von Takach',
    'Jeremy West',
    'Viv Briffa',
];

export const MOCK_STAFF = new Array(10).fill(0).map((_, index) => {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    return {
        id: `user-${index}`,
        name,
        email: `${name.toLowerCase().split(' ').join('.')}@${DOMAIN}`,
    };
});

PREDEFINED_USER.forEach((name) => {
    MOCK_STAFF.push({
        id: `pre-user-${Math.floor(Math.random() * 9999)}`,
        name,
        email: `${name.toLowerCase().split(' ').join('.')}@${DOMAIN}`,
    });
});

export const ACTIVE_USER = MOCK_STAFF[randomInt(MOCK_STAFF.length - 1)];

export const MOCK_GUESTS = new Array(10).fill(0).map((_, index) => {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    return {
        id: `guest-${index}`,
        name,
        email: `${name.toLowerCase().split(' ').join('.')}@not-${DOMAIN}`,
        visit_expected: true,
        checked_in: Math.floor(Math.random() * 9999) % 4 === 0,
    };
});

let EVENT_TIME = dayjs().startOf('d').hour(7);

const nextEventTime = (save = false): number => {
    const next = EVENT_TIME.add(Math.floor(Math.random() * 8 + 1) * 15, 'm');
    if (save) {
        EVENT_TIME = next;
    }
    return next.unix();
};

const event_status = ['tentative', 'confirmed', 'cancelled'];
const randomStatus = (): string => {
    const rnd = randomInt(10);
    return rnd < 2 ? event_status[2] : rnd < 5 ? event_status[0] : event_status[1];
};
export const MOCK_EVENTS = new Array(200).fill(0).map((_, index) => {
    let attendees: any[] = MOCK_STAFF.filter((_) => Math.floor(Math.random() * 9999) % 3 === 0);
    if (attendees.length <= 0) {
        attendees.push(MOCK_STAFF[Math.floor(Math.random() * MOCK_STAFF.length)]);
    }
    const space = MOCK_SPACES[randomInt(MOCK_SPACES.length)];
    attendees = attendees.concat({
        ...space,
        resource: true,
    });
    const has_active_user = Math.floor(Math.random() * 9999) % 2 === 0;
    if (has_active_user) {
        attendees.push(ACTIVE_USER);
    }
    return {
        id: `cal-event-${index}`,
        status: randomStatus(),
        host: has_active_user ? ACTIVE_USER.email : attendees[0].email,
        calendar: 'calendar_id',
        creator: 'optional@fake.com',
        attendees: unique(attendees, 'email'),
        title: `${faker.commerce.productName()} Meeting`,
        body: faker.lorem.paragraph(),
        private: false,
        event_start: nextEventTime(true),
        event_end: nextEventTime(),
        timezone: 'Sydney',
        all_day: false,
        location: 'clear text location',
        recurring: false,
        recurrence: {},
        attachments: {},
        system: space,
        extension_data: {},
    };
});

const event_spaces = {};
MOCK_EVENTS.forEach((event) => {
    if (!event_spaces[event.system.id]) {
        event_spaces[event.system.id] = [];
    }
    event_spaces[event.system.id].push(event);
});
