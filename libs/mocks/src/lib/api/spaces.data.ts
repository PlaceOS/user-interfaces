import { predictableRandomInt } from '@user-interfaces/common';
import { generateMockSpace } from '@user-interfaces/spaces';

const randomSpaceFeatures = () => {
    const f = ['Whiteboard', 'VidConf', 'Projector', 'Views'];
    const numFeatures = predictableRandomInt(f.length + 1);
    const res = [];
    for (let i = 0; i < numFeatures; i++) {
        res.push(f[predictableRandomInt(f.length)]);
    }
    return res.filter((el, i, r) => r.indexOf(el) === i).join(' ');
};

export const MOCK_SPACES = [
    { name: 'Meeting Room 1.01', map_id: 'area-1.01-status', zones: ['lvl-01'] },
    { name: 'Meeting Room 1.02', map_id: 'area-1.02-status', zones: ['lvl-01'] },
    { name: 'Meeting Room 1.03', map_id: 'area-1.03-status', zones: ['lvl-01'] },
    { name: 'Meeting Room 1.04', map_id: 'area-1.04-status', zones: ['lvl-01'] },
    { name: 'Meeting Room 1.05', map_id: 'area-1.05-status', zones: ['lvl-01'], bookable: false },
    { name: 'Meeting Room 1.06', map_id: 'area-1.06-status', zones: ['lvl-01'] },
    { name: 'Meeting Room 1.07', map_id: 'area-1.07-status', zones: ['lvl-01'] },
    { name: 'Meeting Room 1.08', map_id: 'area-1.08-status', zones: ['lvl-01'] },
    { name: 'Meeting Room 1.09', map_id: 'area-1.01-status', zones: ['lvl-01'] },
    { name: 'Meeting Room 1.10', map_id: 'area-1.10-status', zones: ['lvl-01'] },
].map(d => generateMockSpace({ ...d, features: randomSpaceFeatures() }));
