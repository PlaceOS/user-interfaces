import { annotationCandidates } from '../lib/ai/annotations';
import { AttributeGeometryProvider } from '../lib/geometry';
import { buildIndex } from '../lib/map-index';
import { anchor, load } from './fixtures';

describe('annotationCandidates', () => {
    // Centres: table-01.001 (20,20), table-01.002 (110,20), room (30,30), anonymous dot (4,4).
    const doc = load(
        `<g id="desks"><rect id="table-01.001" x="10" y="10" width="20" height="20"/><rect id="table-01.002" x="100" y="10" width="20" height="20"/></g><rect id="area-1.01-status" x="0" y="0" width="60" height="60"/><rect x="2" y="2" width="4" height="4"/>`,
        { geometry: new AttributeGeometryProvider() },
        'viewBox="0 0 400 300"',
    );
    const index = buildIndex(doc);
    const desk = anchor(doc, 'table-01.001');
    const room = anchor(doc, 'area-1.01-status');
    const dot = doc.anchorOf(doc.root.querySelector('rect:not([id])')!);

    it('takes elements whose centre is in a box, named first then smallest, never plain groups', () => {
        expect(
            annotationCandidates(index, {
                n: 1,
                kind: 'box',
                x: 0,
                y: 0,
                width: 50,
                height: 50,
            }),
        ).toEqual([desk, room, dot]);
    });

    it('uses the ellipse, not its bounding box', () => {
        expect(
            annotationCandidates(index, {
                n: 1,
                kind: 'ellipse',
                x: 0,
                y: 0,
                width: 50,
                height: 50,
            }),
        ).toEqual([desk, room]);
    });

    it('takes elements whose centre is inside a freehand outline', () => {
        expect(
            annotationCandidates(index, {
                n: 1,
                kind: 'path',
                // The canvas stores a freehand mark with its bounding box.
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                points: [
                    [0, 0],
                    [50, 0],
                    [0, 50],
                ],
            }),
        ).toEqual([desk, dot]);
    });

    it('takes the elements under an arrow tip', () => {
        expect(
            annotationCandidates(index, {
                n: 1,
                kind: 'arrow',
                x: 300,
                y: 200,
                x2: 110,
                y2: 20,
            }),
        ).toEqual([anchor(doc, 'table-01.002')]);
    });
});
