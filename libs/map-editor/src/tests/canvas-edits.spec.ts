import {
    boundIdLabels,
    deleteOps,
    dragDelta,
    exceedsThreshold,
    moveOps,
} from '../lib/canvas/edits';
import { MapDocument } from '../lib/map-document';
import { ProtectedIdSet } from '../lib/protected-ids';
import { anchor, OFFICE } from './fixtures';

describe('canvas edits', () => {
    it('builds one rounded translate per element and nothing for no travel', () => {
        expect(moveOps(['e1', 'e2', 'e1'], 10.126, -0.004, 'Move')).toEqual([
            {
                op: 'transform',
                target: { a: 'e1' },
                translate: [10.13, 0],
                why: 'Move',
            },
            {
                op: 'transform',
                target: { a: 'e2' },
                translate: [10.13, 0],
                why: 'Move',
            },
        ]);
        expect(moveOps(['e1'], 0.001, 0, 'Move')).toEqual([]);
        expect(moveOps([], 5, 5, 'Move')).toEqual([]);
    });

    it('builds one delete per element', () => {
        expect(deleteOps(['e3', 'e3', 'e4'], 'Delete')).toEqual([
            { op: 'delete', target: { a: 'e3' }, why: 'Delete' },
            { op: 'delete', target: { a: 'e4' }, why: 'Delete' },
        ]);
    });

    it('scales pointer travel into root units and applies the drag threshold', () => {
        expect(dragDelta([10, 10], [30, 5], 2)).toEqual([10, -2.5]);
        expect(exceedsThreshold([0, 0], [3, 2])).toBe(false);
        expect(exceedsThreshold([0, 0], [4, 3])).toBe(true);
    });

    it('names the protected ids inside the elements, once each', () => {
        const doc = MapDocument.load(OFFICE);
        const protected_ids = new ProtectedIdSet([
            { id: 'table-01.001', kind: 'desk', label: 'Desk 1' },
            { id: 'table-01.003', kind: 'desk', label: '' },
            { id: 'area-1.01-status', kind: 'room', label: 'Meeting 1.01' },
        ]);
        const source = { doc, protected: protected_ids };
        expect(
            boundIdLabels(source, [
                anchor(doc, 'desks'),
                anchor(doc, 'table-01.001'),
                anchor(doc, 'plants'),
            ]),
        ).toEqual(['Desk 1', 'table-01.003']);
        expect(boundIdLabels(source, ['e99999'])).toEqual([]);
    });
});
