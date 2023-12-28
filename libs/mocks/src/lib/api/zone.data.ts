export const MOCK_ORGS = [
    {
        created_at: 1587057070,
        updated_at: 1587692680,
        name: 'PlaceOS',
        description: '',
        tags: ['org'],
        count: 0,
        capacity: 0,
        parent_id: '',
        triggers: [],
        id: 'zone-EmWFTjuYExK',
    },
];

export const MOCK_BUILDINGS = [
    {
        name: 'Sydney',
        description: '',
        tags: ['building'],
        count: 0,
        capacity: 0,
        parent_id: 'zone-EmWFTjuYExK',
        triggers: [],
        id: 'bld-01',
        levels: ['lvl-G', 'lvl-1'],
    },
    {
        name: 'Brisbane',
        description: '',
        tags: ['building'],
        count: 0,
        capacity: 0,
        parent_id: 'zone-EmWFTjuYExK',
        triggers: [],
        id: 'bld-02',
        levels: ['lvl-2', 'lvl-3'],
    },
];

export const MOCK_ZONES = [];

const mockLevel = (
    id: string,
    idx: number,
    building: any,
    num: string = '10'
): any => {
    let map_id = id.substr(4);
    map_id = `assets/maps/level_${num}.svg`;
    return {
        id: `${building.id}_${id}`,
        name: `Level ${id.endsWith('00') ? 'G' : id.split('-')[1]}`,
        parent_id: building.id,
        description: '',
        tags: ['level'],
        map_id,
        code: 'level code 12',
        type: 'staff floor',
        count: 5,
        capacity: 30,
        location: 'optional lat,long',
        display_name: '',
    };
};

export const MOCK_LEVELS = MOCK_BUILDINGS.map((bld) =>
    bld.levels.map((level, idx) =>
        mockLevel(level, idx, bld, level.split('-')[1])
    )
).reduce(
    (p, c) => p.concat(c),
    [
        // {
        //     id: 'test',
        //     parent_id: 'bld-01',
        //     name: 'Test',
        //     map_id: 'assets/maps/test.svg',
        // },
        {
            id: 'level-p1',
            parent_id: 'bld-01',
            name: 'Level P1',
            tags: ['level', 'parking'],
            map_id: 'assets/maps/level_P1.svg',
        },
    ]
);
