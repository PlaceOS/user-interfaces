import { MapHistory } from '../lib/history';
import { MapDocument } from '../lib/map-document';
import { anchor, OFFICE } from './fixtures';

describe('MapHistory', () => {
    it('undoes and redoes whole-root snapshots with anchors intact', () => {
        const doc = MapDocument.load(OFFICE);
        const history = new MapHistory(doc);
        const before = doc.signatures();
        const table_anchor = anchor(doc, 'table-01.001');
        history.push('recolour');
        (doc.byId('table-01.001') as Element).setAttribute('fill', 'red');
        history.push('delete');
        (doc.byId('zone-01.A') as Element).remove();
        expect(history.length).toBe(2);
        expect(history.labels()).toEqual(['recolour', 'delete']);
        expect(history.undo()).toBe(true);
        expect(doc.byId('zone-01.A')).not.toBeNull();
        expect(doc.byId('table-01.001')?.getAttribute('fill')).toBe('red');
        expect(history.undo()).toBe(true);
        expect(doc.byId('table-01.001')?.getAttribute('fill')).toBeNull();
        expect(doc.signatures()).toEqual(before);
        expect(anchor(doc, 'table-01.001')).toBe(table_anchor);
        expect(doc.byAnchor(table_anchor)).toBe(doc.byId('table-01.001'));
        expect(history.undo()).toBe(false);
        expect(history.redo()).toBe(true);
        expect(doc.byId('table-01.001')?.getAttribute('fill')).toBe('red');
        expect(history.redo()).toBe(true);
        expect(doc.byId('zone-01.A')).toBeNull();
        expect(history.redo()).toBe(false);
    });

    it('clears redo on push and caps the depth', () => {
        const doc = MapDocument.load(OFFICE);
        const history = new MapHistory(doc, { depth: 3 });
        for (let i = 0; i < 5; i++) history.push(`step ${i}`);
        expect(history.length).toBe(3);
        expect(history.labels()).toEqual(['step 2', 'step 3', 'step 4']);
        history.undo();
        expect(history.can_redo).toBe(true);
        history.push('new');
        expect(history.can_redo).toBe(false);
        expect(history.redo_length).toBe(0);
    });

    it('drops the oldest entries to stay inside the byte budget but keeps one', () => {
        const doc = MapDocument.load(OFFICE);
        const one_snapshot = new XMLSerializer().serializeToString(
            doc.root,
        ).length;
        const history = new MapHistory(doc, {
            byte_budget: one_snapshot * 2.5,
        });
        history.push('a');
        history.push('b');
        history.push('c');
        expect(history.length).toBe(2);
        expect(history.labels()).toEqual(['b', 'c']);
        expect(history.position()).toBe(3);
        history.undo();
        expect(history.position()).toBe(2);
        expect(history.bytes).toBeLessThanOrEqual(one_snapshot * 2.5);
        const tiny = new MapHistory(doc, { byte_budget: 10 });
        tiny.push('only');
        expect(tiny.length).toBe(1);
    });
});
