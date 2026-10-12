import { candidatesFor, pickTarget } from '../lib/canvas/hit-test';
import { AttributeGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { buildIndex } from '../lib/map-index';
import { anchor, OFFICE } from './fixtures';

describe('pickTarget', () => {
    it('returns null with no candidates', () => {
        expect(pickTarget([])).toBeNull();
    });

    it('takes the smallest box, deeper on ties', () => {
        expect(
            pickTarget([
                { anchor: 'big', id: null, area: 1000, depth: 1 },
                { anchor: 'small', id: null, area: 10, depth: 2 },
                { anchor: 'small-deeper', id: null, area: 10, depth: 3 },
            ]),
        ).toBe('small-deeper');
    });

    it('prefers an id within a few times the smallest area', () => {
        expect(
            pickTarget([
                { anchor: 'desk', id: 'desk-1', area: 24, depth: 2 },
                { anchor: 'leg', id: null, area: 10, depth: 3 },
            ]),
        ).toBe('desk');
        expect(
            pickTarget([
                { anchor: 'layer', id: 'floor', area: 100000, depth: 1 },
                { anchor: 'wall', id: null, area: 10, depth: 2 },
            ]),
        ).toBe('wall');
    });

    it('falls back to unsized candidates only when nothing has a box', () => {
        expect(
            pickTarget([
                { anchor: 'unknown', id: 'x', area: null, depth: 1 },
                { anchor: 'sized', id: null, area: 50, depth: 2 },
            ]),
        ).toBe('sized');
        expect(
            pickTarget([
                { anchor: 'a', id: null, area: null, depth: 1 },
                { anchor: 'b', id: 'named', area: null, depth: 1 },
            ]),
        ).toBe('b');
    });
});

describe('candidatesFor', () => {
    const doc = MapDocument.load(OFFICE, {
        geometry: new AttributeGeometryProvider(),
    });
    const index = buildIndex(doc);
    const anchorOf = (element: Element) => doc.anchorOf(element);

    it('lists the hit and its ancestors below the root, once each', () => {
        const desk = doc.byId('table-01.001') as Element;
        const candidates = candidatesFor(
            [desk, desk.parentElement as Element],
            doc.root,
            index,
            anchorOf,
        );
        expect(candidates.map((c) => c.id)).toEqual(['table-01.001', 'desks']);
        expect(candidates[0].depth).toBe(2);
        expect(candidates[0].area).toBe(600);
        expect(pickTarget(candidates)).toBe(anchor(doc, 'table-01.001'));
    });

    it('ignores the root, foreign elements and anything inside defs', () => {
        const marker_path = doc.root.querySelector('marker path') as Element;
        const foreign = document.createElement('div');
        const candidates = candidatesFor(
            [doc.root, foreign, marker_path],
            doc.root,
            index,
            anchorOf,
        );
        expect(candidates).toEqual([]);
    });

    it('takes the smallest id`d element among the hits', () => {
        const room = doc.byId('area-1.01-status') as Element;
        const label = doc.byId('label-1') as Element;
        const candidates = candidatesFor(
            [label, room],
            doc.root,
            index,
            anchorOf,
        );
        expect(pickTarget(candidates)).toBe(anchor(doc, 'label-1'));
    });
});
