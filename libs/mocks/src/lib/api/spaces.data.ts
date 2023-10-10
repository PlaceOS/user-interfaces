import { predictableRandomInt } from '@placeos/common';
import { generateMockSpace } from '@placeos/spaces';

const randomSpaceFeatures = () => {
    const f = ['Whiteboard', 'VidConf', 'Projector', 'Views'];
    const numFeatures = predictableRandomInt(f.length + 1);
    const res = [];
    for (let i = 0; i < numFeatures; i++) {
        res.push(f[predictableRandomInt(f.length)]);
    }
    return res.filter((el, i, r) => r.indexOf(el) === i);
};

export const MOCK_SPACES = [
    {
        name: '1.01 Operations Room',
        map_id: 'area-1.01-status',
        zones: ['bld-01', 'bld-01_lvl-1'],
    },
    {
        name: '1.03 Sydney Boardroom',
        map_id: 'area-1.03-status',
        zones: ['bld-01', 'bld-01_lvl-1'],
    },
    {
        name: '1.04 The Studio',
        map_id: 'area-1.04-status',
        zones: ['bld-01', 'bld-01_lvl-1'],
    },
    {
        name: 'Jam Board',
        map_id: 'area-1.02-status',
        zones: ['bld-01', 'bld-01_lvl-1'],
    },
    {
        name: 'G.01 Cisco Room',
        map_id: 'area-G.01-status',
        zones: ['bld-01', 'bld-01_lvl-1'],
    },
    {
        name: 'G.02 The Lab',
        map_id: 'area-G.02-status',
        zones: ['bld-01', 'bld-01_lvl-1'],
    },
    {
        name: 'Conference Room 2.01',
        map_id: 'area-2.01-status',
        zones: ['bld-02', 'bld-02_lvl-2'],
    },
    {
        name: 'Conference Room 2.02',
        map_id: 'area-2.02-status',
        zones: ['bld-02', 'bld-02_lvl-2'],
    },
    {
        name: 'Conference Room 3.01',
        map_id: 'area-3.01-status',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
    {
        name: 'Conference Room 3.02',
        map_id: 'area-3.02-status',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
    {
        name: 'Conference Room 3.03',
        map_id: 'area-3.03-status',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
    //MapsIndoors mock spaces
    {
        name: 'Boardroom 1',
        map_id: '12beee0d06a1475293aadd9f',
        zones: ['bld-01', 'bld-01_lvl-1'],
        level: {
            id: 'bld-01_lvl-1',
            parent_id: 'bld-01',
            name: 'Level 1',
            display_name: 'Level 1',
            capacity: 5,
            number: '',
            map_id: '12beee0d06a1475293aadd9f',
            tags: [''],
            setting: {},
            images: [''],
            locations: { id: '', name: '' },
        },
    },
    {
        name: 'Boardroom 2',
        map_id: 'dd2dec8c291a4fb7995bff3c',
        zones: ['bld-01', 'bld-01_lvl-1'],
        level: {
            id: 'bld-01_lvl-1',
            parent_id: 'bld-01',
            name: 'Level 1',
            display_name: 'Level 1',
            capacity: 5,
            number: '',
            map_id: 'dd2dec8c291a4fb7995bff3c',
            tags: [''],
            setting: {},
            images: [''],
            locations: { id: '', name: '' },
        },
    },
    {
        name: 'Boardroom 3',
        map_id: '23bc6cf392c842d69abc71bf',
        zones: ['bld-01', 'bld-01_lvl-1'],
        level: {
            id: 'bld-01_lvl-1',
            parent_id: 'bld-01',
            name: 'Level 1',
            display_name: 'Level 1',
            capacity: 5,
            number: '',
            map_id: '23bc6cf392c842d69abc71bf',
            tags: [''],
            setting: {},
            images: [''],
            locations: { id: '', name: '' },
        },
    },
    {
        name: 'Boardroom 4',
        map_id: '696971dbc50a4c66a7f5356a',
        zones: ['bld-01', 'bld-01_lvl-1'],
        level: {
            id: 'bld-01_lvl-1',
            parent_id: 'bld-01',
            name: 'Level 1',
            display_name: 'Level 1',
            capacity: 5,
            number: '',
            map_id: '23bc6cf392c842d69abc71bf',
            tags: [''],
            setting: {},
            images: [''],
            locations: { id: '', name: '' },
        },
    },
    {
        name: 'Boardroom 5',
        map_id: '58cc74c5dd4249148674a191',
        zones: ['bld-01', 'bld-01_lvl-1'],
        level: {
            id: 'bld-01_lvl-1',
            parent_id: 'bld-01',
            name: 'Level 1',
            display_name: 'Level 1',
            capacity: 5,
            number: '',
            map_id: '23bc6cf392c842d69abc71bf',
            tags: [''],
            setting: {},
            images: [''],
            locations: { id: '', name: '' },
        },
    },
    {
        name: 'Boardroom 6',
        map_id: 'a4c02df953f34e5dad26c95f',
        zones: ['bld-01', 'bld-01_lvl-1'],
    },
    {
        name: 'Boardroom 7',
        map_id: '23bc6cf392c842d69abc71bf',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
    {
        name: 'Boardroom 8',
        map_id: '21a49f92c5924d2f9b39934b',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
    {
        name: 'Boardroom 9',
        map_id: '0d3f964712ec4d36b9776449',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
    {
        name: 'Boardroom 10',
        map_id: '7c01d7766a38488b8813347c',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
    {
        name: 'Boardroom 11',
        map_id: '9e9efbe702bb4d91a2615c06',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
    {
        name: 'Boardroom 12',
        map_id: '66161113fff74d8780daeb2e',
        zones: ['bld-02', 'bld-02_lvl-3'],
    },
].map((d) =>
    generateMockSpace({
        ...d,
        features: randomSpaceFeatures(),
        images: [
            'https://webcdn.executivecentre.com/wp-content/uploads/sites/39/2020/10/img-meetingroomrental_hire.jpg',
        ],
    })
);
