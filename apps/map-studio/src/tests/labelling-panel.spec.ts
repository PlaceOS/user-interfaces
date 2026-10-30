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
});
