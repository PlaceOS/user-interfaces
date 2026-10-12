import {
    SNAPSHOT_OUTLINE_COLOUR,
    snapshotMarkup,
    snapshotSize,
} from '../lib/ai/snapshot';
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
        const before = doc.serialise();
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
        expect(doc.serialise()).toBe(before);
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
