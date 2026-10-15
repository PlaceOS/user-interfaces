import {
    SNAPSHOT_OUTLINE_COLOUR,
    snapshotMarkup,
    snapshotSize,
} from '../lib/ai/snapshot';
import { AttributeGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { anchor, OFFICE } from './fixtures';

describe('snapshot', () => {
    it('sizes the image at the viewBox aspect ratio with the long side at 2048', () => {
        expect(
            snapshotSize({ x: 0, y: 0, width: 1725.26, height: 619 }),
        ).toEqual({ image_px: [2048, 735], units_per_px: 0.8424 });
        expect(snapshotSize({ x: 0, y: 0, width: 500, height: 1000 })).toEqual({
            image_px: [1024, 2048],
            units_per_px: 0.4883,
        });
        expect(
            snapshotSize({ x: 0, y: 0, width: 1000, height: 500 }, 1000),
        ).toEqual({ image_px: [1000, 500], units_per_px: 1 });
        expect(
            snapshotSize({ x: 0, y: 0, width: 1, height: 10000 }, 100),
        ).toEqual({ image_px: [1, 100], units_per_px: 1 });
    });

    it('outlines the selection on a pixel-sized clone and leaves the document alone', () => {
        const doc = MapDocument.load(OFFICE);
        const desk = anchor(doc, 'table-01.001');
        const before = doc.root.outerHTML;
        const count = doc.elementCount();
        const snapshot = snapshotMarkup(doc, { selection: [desk, 'e9999'] });
        expect(snapshot.image_px).toEqual([2048, 1024]);
        expect(snapshot.units_per_px).toBe(0.4883);
        expect(snapshot.outlined).toEqual([desk]);
        expect(snapshot.markup).toContain('width="2048"');
        expect(snapshot.markup).toContain('height="1024"');
        expect(snapshot.markup).toContain(
            `stroke="${SNAPSHOT_OUTLINE_COLOUR}"`,
        );
        expect(snapshot.markup).toMatch(
            /<rect x="100" y="200" width="30" height="20" fill="none"/,
        );
        expect(snapshot.markup).toMatch(/<text [^>]*>table-01\.001<\/text>/);
        expect(snapshot.markup).not.toContain('data-map-editor');
        expect(doc.root.outerHTML).toBe(before);
        expect(doc.elementCount()).toBe(count);
    });

    it('draws nothing extra when nothing is selected', () => {
        const doc = MapDocument.load(OFFICE);
        const snapshot = snapshotMarkup(doc);
        expect(snapshot.outlined).toEqual([]);
        expect(snapshot.markup).not.toContain(SNAPSHOT_OUTLINE_COLOUR);
        expect(snapshot.markup).toContain('width="2048"');
    });
});

describe('snapshot tags', () => {
    it('prints the id of each tagged element at its top left corner', () => {
        const doc = MapDocument.load(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect id="area-1.01-status" x="20" y="30" width="100" height="80"/><rect x="200" y="30" width="100" height="80"/></svg>`,
            { geometry: new AttributeGeometryProvider() },
        );
        const room = doc.byId('area-1.01-status') as Element;
        const anon = doc.root.querySelector('rect:not([id])') as Element;
        const result = snapshotMarkup(doc, {
            tags: [doc.anchorOf(room), doc.anchorOf(anon)],
        });
        expect(result.markup).toContain('>area-1.01-status</text>');
        expect((result.markup.match(/<text/g) || []).length).toBe(1);
        expect(result.outlined).toEqual([]);
    });
});

describe('annotation snapshots', () => {
    it('includes coloured circles, freehand marks and arrowheads only in the snapshot', () => {
        const doc = MapDocument.load(OFFICE);
        const original = doc.serialise();
        const result = snapshotMarkup(doc, {
            annotations: [
                {
                    n: 1,
                    kind: 'ellipse',
                    colour: 'red',
                    x: 90,
                    y: 180,
                    width: 70,
                    height: 60,
                },
                {
                    n: 2,
                    kind: 'arrow',
                    colour: 'blue',
                    x: 50,
                    y: 50,
                    x2: 100,
                    y2: 200,
                },
                {
                    n: 3,
                    kind: 'path',
                    colour: 'green',
                    points: [
                        [100, 180],
                        [160, 180],
                        [160, 240],
                        [100, 180],
                    ],
                },
            ],
        });
        const root = new DOMParser().parseFromString(
            result.markup,
            'image/svg+xml',
        );
        expect(root.querySelectorAll('[data-annotation]')).toHaveLength(3);
        expect(
            root
                .querySelector('[data-annotation="1"] ellipse')
                ?.getAttribute('cx'),
        ).toBe('125');
        expect(
            root
                .querySelector('[data-annotation="1"] ellipse')
                ?.getAttribute('style'),
        ).toContain('stroke:#dc2626');
        expect(
            root.querySelector('[data-annotation="2"] path')?.getAttribute('d'),
        ).toContain('L100 200M');
        expect(
            root.querySelector('[data-annotation="3"] path')?.getAttribute('d'),
        ).toBe('M100 180L160 180L160 240L100 180');
        expect(doc.serialise()).toBe(original);
    });
});

it('includes marks outside the map in the image without changing the document', () => {
    const doc = MapDocument.load(OFFICE);
    const before = doc.root.outerHTML;
    const snapshot = snapshotMarkup(doc, {
        annotations: [
            { n: 1, kind: 'box', x: 200, y: -200, width: 100, height: 200 },
        ],
    });
    expect(snapshot.view_box!.y).toBeLessThan(-200);
    expect(snapshot.view_box!.height).toBeGreaterThan(700);
    expect(doc.view_box.y).toBe(0);
    expect(doc.root.outerHTML).toBe(before);
});
