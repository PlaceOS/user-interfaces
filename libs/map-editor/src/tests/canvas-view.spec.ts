import {
    clampScale,
    fitView,
    MAX_SCALE,
    MIN_SCALE,
    panBy,
    rootToViewport,
    viewportToRoot,
    viewTransform,
    zoomAt,
} from '../lib/canvas/view';

const VIEW_BOX = { x: 0, y: 0, width: 1000, height: 500 };

describe('canvas view maths', () => {
    it('fits the map centred inside the padding', () => {
        const view = fitView(VIEW_BOX, { width: 1048, height: 800 }, 24);
        expect(view.scale).toBeCloseTo(1, 6);
        expect(view.tx).toBeCloseTo(24, 6);
        expect(view.ty).toBeCloseTo(150, 6);
        const tall = fitView(VIEW_BOX, { width: 400, height: 1000 }, 0);
        expect(tall.scale).toBeCloseTo(0.4, 6);
        expect(tall.ty).toBeCloseTo(400, 6);
    });

    it('clamps the scale', () => {
        expect(clampScale(0)).toBe(1);
        expect(clampScale(NaN)).toBe(1);
        expect(clampScale(1e-9)).toBe(MIN_SCALE);
        expect(clampScale(1e9)).toBe(MAX_SCALE);
    });

    it('zooms about the pointer so the point under it stays put', () => {
        const view = { scale: 1, tx: 20, ty: 30 };
        const pointer: [number, number] = [220, 130];
        const before = viewportToRoot(view, VIEW_BOX, pointer);
        const zoomed = zoomAt(view, 2, pointer);
        expect(zoomed.scale).toBe(2);
        const after = viewportToRoot(zoomed, VIEW_BOX, pointer);
        expect(after[0]).toBeCloseTo(before[0], 6);
        expect(after[1]).toBeCloseTo(before[1], 6);
        expect(zoomAt(zoomed, 1, pointer)).toBe(zoomed);
    });

    it('converts between viewport pixels and root units both ways', () => {
        const view = { scale: 0.5, tx: 10, ty: -5 };
        const box = { x: 100, y: 50, width: 1000, height: 500 };
        const point: [number, number] = [310, 95];
        const root = viewportToRoot(view, box, point);
        expect(root).toEqual([700, 250]);
        const back = rootToViewport(view, box, root);
        expect(back[0]).toBeCloseTo(point[0], 6);
        expect(back[1]).toBeCloseTo(point[1], 6);
    });

    it('pans and formats the CSS transform', () => {
        const view = panBy({ scale: 1.5, tx: 1, ty: 2 }, 10, -4);
        expect(view).toEqual({ scale: 1.5, tx: 11, ty: -2 });
        expect(viewTransform(view)).toBe('translate(11px, -2px) scale(1.5)');
    });
});
