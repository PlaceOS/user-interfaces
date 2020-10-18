import { HashMap } from '@user-interfaces/common';

let BLD_COUNT = 0;
let LVL_COUNT = 0;

/**
 * Generate raw mock data for creating a building
 * @param id Forced ID for the mock
 */
export function generateMockBuilding(id?: string): HashMap {
    if (!id) {
        id = `zone_bld-${BLD_COUNT++}`;
    }
    const levels = Array(10)
        .fill(0)
        .map(i => generateMockLevel());
    const features: any = {};
    for (const lvl of levels) {
        const count = Math.floor(Math.random() * 3 + 2);
        features[lvl.level_id] = {};
        for (let i = 0; i < count; i++) {
            features[lvl.level_id][`A Feature ${i + 1}`] = `feature-${i + 1}`;
        }
    }
    return {
        id,
        zone_id: id,
        extras: Array(10)
            .fill(0)
            .map((_, idx) => {
                const name = `Property ${idx + 1}`
                return {
                    extra_id: name
                        .split(' ')
                        .join('-')
                        .toLowerCase(),
                    extra_name: name
                };
            }),
        loan_items: Array(10)
            .fill(0)
            .map((_, idx) => {
                const name = `Property ${idx + 1}`;
                return {
                    extra_id: name
                        .split(' ')
                        .join('-')
                        .toLowerCase(),
                    extra_name: name
                };
            }),
        levels,
        roles: {
            'first-aiders': Array(10)
                .fill(0)
                .map(i => ({ name: 'Test' }))
        },
        neighbourhoods: features,
        settings: {
            test: {
                nested: {
                    level2: true,
                    org: false
                }
            }
        },
        room_configurations: [
            { id: 'boardroom', name: 'Boardroom', description: 'A boardroom setting'},
            { id: 'cocktail', name: 'Cocktail', description: 'A cocktail setting'},
        ]
    };
}

/**
 * Generate raw mock data for a building level
 * @param id Forced ID for the mock
 * @param map_url Map URL for the level
 */
export function generateMockLevel(id?: string, map_url?: string): HashMap {
    if (!id) {
        id = `zone_lvl-${LVL_COUNT++}`;
    }
    return {
        level_id: id,
        level_name: `Level ${LVL_COUNT}`,
        map_url
    };
}
