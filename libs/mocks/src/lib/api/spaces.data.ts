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
].map((d) => generateMockSpace({ ...d, features: randomSpaceFeatures() }));
