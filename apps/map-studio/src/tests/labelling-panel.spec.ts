import { toCsvField } from '../app/data/store.service';
import { parseIdList } from '../app/editor/labelling-panel.component';

describe('parseIdList', () => {
    it('reads back the quoted and guarded cells that the id export writes', () => {
        const row = ['room-1', '=Say "hi", now', 'room'].map(toCsvField);
        const [entry] = parseIdList(
            `svg_id,label,object_type\n${row.join(',')}`,
        );

        expect(entry).toEqual({
            id: 'room-1',
            label: '=Say "hi", now',
            type: 'room',
            assigned: false,
        });
    });

    it('skips a header row', () => {
        const ids = parseIdList('svg_id,label\nroom-01,Board Room');
        expect(ids.map((entry) => entry.id)).toEqual(['room-01']);
    });

    it('keeps a first row whose id contains "id" or "name"', () => {
        const ids = parseIdList('grid-01,Middle Room\nnamecheap-2');
        expect(ids.map((entry) => entry.id)).toEqual([
            'grid-01',
            'namecheap-2',
        ]);
    });
});
