import {
    colourInputValue,
    describeSelection,
    idOp,
    normaliseTextInput,
    paintOps,
    resetOps,
    textLinesOf,
    textOp,
} from '../lib/canvas/properties';
import { AttributeGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { ProtectedIdSet } from '../lib/protected-ids';
import { MapEditorSession } from '../lib/session';
import { StyleResolver } from '../lib/style-resolution';
import { anchor, OFFICE } from './fixtures';

function session() {
    const doc = MapDocument.load(OFFICE, {
        geometry: new AttributeGeometryProvider(),
    });
    return new MapEditorSession(doc, {
        zone_id: 'zone-1',
        source_text: OFFICE,
        protected: new ProtectedIdSet([
            { id: 'table-01.001', kind: 'desk', label: 'Desk 1' },
        ]),
    });
}

function resolver(s: MapEditorSession) {
    return new StyleResolver(s.doc.root, s.doc.styleRules());
}

describe('describeSelection', () => {
    it('reports nothing for an empty or unknown selection', () => {
        const s = session();
        expect(describeSelection(s, [], resolver(s))).toEqual({ kind: 'none' });
        expect(describeSelection(s, ['e99999'], resolver(s))).toEqual({
            kind: 'none',
        });
    });

    it('describes one element with where its paint comes from', () => {
        const s = session();
        const desk = describeSelection(
            s,
            [anchor(s.doc, 'table-01.001')],
            resolver(s),
        );
        expect(desk.kind).toBe('single');
        if (desk.kind !== 'single') return;
        expect(desk.tag).toBe('rect');
        expect(desk.id).toBe('table-01.001');
        expect(desk.protected).toBe(true);
        expect(desk.changed).toBe(false);
        expect(desk.is_text).toBe(false);
        expect(desk.fill).toEqual({
            own: '',
            effective: '#dde',
            source: 'stylesheet',
        });
        expect(desk.stroke.source).toBe('stylesheet');

        const plant = describeSelection(
            s,
            [anchor(s.doc, 'plant-1')],
            resolver(s),
        );
        if (plant.kind !== 'single') throw new Error('expected one element');
        expect(plant.fill).toEqual({
            own: '#0a0',
            effective: '#0a0',
            source: 'attribute',
        });
        expect(plant.stroke).toEqual({
            own: '',
            effective: '',
            source: 'default',
        });

        const unpainted = describeSelection(
            s,
            [anchor(s.doc, 'plant-2')],
            resolver(s),
        );
        if (unpainted.kind !== 'single')
            throw new Error('expected one element');
        expect(unpainted.fill.source).toBe('default');
        expect(unpainted.fill.effective).toBe('black');
    });

    it('describes text elements with their content', () => {
        const s = session();
        const label = describeSelection(
            s,
            [anchor(s.doc, 'sub-1')],
            resolver(s),
        );
        if (label.kind !== 'single') throw new Error('expected one element');
        expect(label.is_text).toBe(true);
        expect(label.text).toBe('(8 seats)');
        expect(label.fill.source).toBe('default');
    });

    it('summarises several elements with their shared paint', () => {
        const s = session();
        const desks = describeSelection(
            s,
            [anchor(s.doc, 'table-01.001'), anchor(s.doc, 'table-01.002')],
            resolver(s),
        );
        expect(desks).toEqual({
            kind: 'multi',
            count: 2,
            anchors: [
                anchor(s.doc, 'table-01.001'),
                anchor(s.doc, 'table-01.002'),
            ],
            fill: '',
            stroke: '',
            changed: false,
        });
        s.apply(
            paintOps(
                [anchor(s.doc, 'table-01.001'), anchor(s.doc, 'table-01.002')],
                'fill',
                'red',
                'test',
            ),
            'Recolour',
        );
        const after = describeSelection(
            s,
            [anchor(s.doc, 'table-01.001'), anchor(s.doc, 'table-01.002')],
            resolver(s),
        );
        if (after.kind !== 'multi') throw new Error('expected a group');
        expect(after.fill).toBe('red');
        expect(after.changed).toBe(true);
    });
});

describe('properties ops', () => {
    it('builds paint, text and id ops', () => {
        expect(paintOps(['e1', 'e1'], 'fill', ' #fff ', 'why')).toEqual([
            {
                op: 'set_attr',
                target: { a: 'e1' },
                name: 'fill',
                value: '#fff',
                why: 'why',
            },
        ]);
        expect(paintOps(['e1'], 'stroke', '', 'why')[0].value).toBeNull();
        expect(textOp('e2', 'Hello', 'why')).toEqual({
            op: 'set_text',
            target: { a: 'e2' },
            text: 'Hello',
            why: 'why',
        });
        expect(idOp('e3', ' desk-9 ', 'why').new_id).toBe('desk-9');
        expect(idOp('e3', '', 'why').new_id).toBeNull();
    });

    it('resets an element back to how it loaded', () => {
        const s = session();
        const a = anchor(s.doc, 'plant-1');
        const before = s.doc.signatureOf(s.doc.byId('plant-1') as Element);
        s.apply(
            [
                ...paintOps([a], 'fill', 'red', 'why'),
                ...paintOps([a], 'stroke', '#000', 'why'),
                idOp(a, 'plant-9', 'why'),
            ],
            'Edit',
        );
        expect(s.isChanged(a)).toBe(true);
        const ops = resetOps(s, a, 'Reset');
        expect(ops.map((op) => op.op).sort()).toEqual([
            'set_attr',
            'set_attr',
            'set_id',
        ]);
        s.apply(ops, 'Reset');
        expect(s.isChanged(a)).toBe(false);
        expect(s.doc.signatureOf(s.doc.byId('plant-1') as Element)).toBe(
            before,
        );
        expect(resetOps(s, a, 'Reset')).toEqual([]);
        expect(resetOps(s, 'e99999', 'Reset')).toEqual([]);
    });

    it('resets edited text', () => {
        const s = session();
        const a = anchor(s.doc, 'sub-1');
        s.apply([textOp(a, '(10 seats)', 'why')], 'Text');
        expect(resetOps(s, a, 'Reset')).toEqual([
            { op: 'set_text', target: { a }, text: '(8 seats)', why: 'Reset' },
        ]);
    });

    it('normalises colours for a colour input', () => {
        expect(colourInputValue('#ABCDEF')).toBe('#abcdef');
        expect(colourInputValue('#abc')).toBe('#aabbcc');
        expect(colourInputValue('red')).toBe('#000000');
        expect(colourInputValue('#fff !important')).toBe('#ffffff');
    });
});

describe('text lines in the strip', () => {
    it('reads tspan lines as lines and normalises typed input', () => {
        const doc = MapDocument.load(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text id="t" x="10" y="20"><tspan x="10">Studio Space</tspan><tspan x="10" dy="1.2em">1.04</tspan></text><text id="u" x="10" y="60">One line</text></svg>`,
            { geometry: new AttributeGeometryProvider() },
        );
        expect(textLinesOf(doc.byId('t') as Element)).toBe(
            'Studio Space\n1.04',
        );
        expect(textLinesOf(doc.byId('u') as Element)).toBe('One line');
        expect(normaliseTextInput('Studio Space \\n 1.04 ')).toBe(
            'Studio Space\n 1.04',
        );
        expect(normaliseTextInput('a\nb  ')).toBe('a\nb');
    });
});
