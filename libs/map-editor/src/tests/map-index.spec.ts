import { AttributeGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { buildIndex, promptLines } from '../lib/map-index';
import { ProtectedIdSet } from '../lib/protected-ids';
import { anchor, loadMap, OFFICE, SAMPLE_MAPS } from './fixtures';

const geometry = new AttributeGeometryProvider();

describe('buildIndex', () => {
    it('describes every element with anchors, parents, boxes, styles and kinds', () => {
        const protected_ids = new ProtectedIdSet([
            { id: 'table-01.001', kind: 'desk', label: 'Desk 1' },
        ]);
        const doc = MapDocument.load(OFFICE, {
            geometry,
            protected: protected_ids,
        });
        const index = buildIndex(doc);
        expect(index.entries.length).toBe(doc.elementCount());
        expect(index.entries[0].kind).toBe('root');
        const desk = index.by_anchor.get(anchor(doc, 'table-01.001'))!;
        expect(desk).toMatchObject({
            id: 'table-01.001',
            tag: 'rect',
            classes: ['desk'],
            protected: true,
            kind: 'bookable',
            depth: 2,
            visible: true,
        });
        expect(desk.bbox).toEqual([100, 200, 30, 20]);
        expect(desk.parent).toBe(anchor(doc, 'desks'));
        expect(desk.fill).toBe('#dde');
        expect(desk.stroke).toBe('#446');
        expect(desk.hash).toMatch(/^[0-9a-f]{8}$/);
        expect(index.by_anchor.get(anchor(doc, 'table-01.002'))?.kind).toBe(
            'bookable',
        );
        expect(index.by_anchor.get(anchor(doc, 'base'))?.kind).toBe(
            'layer-group',
        );
        expect(index.by_anchor.get(anchor(doc, 'zone-01.A'))?.kind).toBe(
            'zone',
        );
        expect(index.by_anchor.get(anchor(doc, 'label-1'))?.kind).toBe('text');
        expect(index.by_anchor.get(anchor(doc, 'label-1'))?.text).toBe(
            'Meeting 1.01(8 seats)',
        );
        expect(index.by_anchor.get(anchor(doc, 'grad'))?.kind).toBe(
            'non-rendered',
        );
        expect(index.by_anchor.get(anchor(doc, 'grad'))?.z).toBeNull();
        expect(index.by_anchor.get(anchor(doc, 'base'))?.children).toEqual({
            path: 1,
        });
        expect(index.style_rules.length).toBe(3);
        expect(index.stats.ids).toBe(21);
    });

    it('writes the prompt lines in the spike shape', () => {
        const doc = MapDocument.load(OFFICE, { geometry });
        const text = promptLines(buildIndex(doc));
        const lines = text.split('\n');
        expect(lines[0]).toBe(
            'viewBox: 0 0 1000 500 (all coordinates in these user units, origin top-left)',
        );
        expect(lines[1]).toContain('.desk{fill:#dde, stroke:#446}');
        expect(text).toContain(
            '| table-01.001 | rect | desk | #dde | 100 200 30 20 |',
        );
        expect(text).toContain('anon pathx1');
        expect(text).not.toContain('| grad |');
        expect(text).toContain('text="Meeting 1.01(8 seats)"');
    });

    describe.each(SAMPLE_MAPS)('sample map %s', (name) => {
        it('indexes every element with valid parents and boxes for id shapes', () => {
            const doc = loadMap(name, { geometry });
            const started = Date.now();
            const index = buildIndex(doc);
            const elapsed = Date.now() - started;
            expect(index.entries.length).toBe(doc.elementCount());
            for (const entry of index.entries) {
                if (entry.parent)
                    expect(index.by_anchor.has(entry.parent)).toBe(true);
                if (
                    entry.id &&
                    entry.kind !== 'non-rendered' &&
                    entry.tag !== 'g'
                )
                    expect(entry.bbox).not.toBeNull();
            }
            expect(index.stats.elements).toBe(doc.elementCount());
            expect(elapsed).toBeLessThan(10_000);
            const prompt = promptLines(index);
            expect(prompt.split('\n').length).toBeGreaterThan(3);
            expect(prompt.length).toBeLessThan(40_000);
        });
    });

    it('does not take plural layer groups for bookable elements', () => {
        const doc = loadMap('level_1', { geometry });
        const index = buildIndex(doc, { bbox: false });
        const groups = index.entries.filter((entry) =>
            entry.id?.startsWith('tables-'),
        );
        expect(groups.length).toBeGreaterThan(0);
        for (const entry of groups) {
            expect(entry.tag).toBe('g');
            expect(['layer-group', 'group']).toContain(entry.kind);
        }
        expect(
            index.entries.find((entry) => entry.id === 'table-01.004')?.kind,
        ).toBe('bookable');
    });

    it('reports the duplicate id level_2 ships', () => {
        const doc = loadMap('level_2', { geometry });
        const index = buildIndex(doc, { bbox: false });
        expect(index.duplicate_ids).toEqual(['table-02.013']);
        expect(promptLines(index)).toContain(
            'duplicate ids already in the file (not your doing): table-02.013',
        );
    });
});
