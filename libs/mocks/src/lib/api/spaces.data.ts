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
        name: 'Conference Room 10.01',
        map_id: 'area-10.01-status',
        zones: ['bld-01', 'bld-01_lvl-10'],
    },
    {
        name: 'Conference Room 10.02',
        map_id: 'area-10.02-status',
        zones: ['bld-01', 'bld-01_lvl-10'],
    },
    {
        name: 'Conference Room 10.03',
        map_id: 'area-10.03-status',
        zones: ['bld-01', 'bld-01_lvl-10'],
    },
    {
        name: 'Conference Room 11.01',
        map_id: 'area-11.01-status',
        zones: ['bld-01', 'bld-01_lvl-11'],
    },
    {
        name: 'Conference Room 11.02',
        map_id: 'area-11.02-status',
        zones: ['bld-01', 'bld-01_lvl-11'],
    },
    {
        name: 'Conference Room 11.03',
        map_id: 'area-11.03-status',
        zones: ['bld-01', 'bld-01_lvl-11'],
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
