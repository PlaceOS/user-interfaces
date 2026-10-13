import {
    boundsOf,
    clipRoomRectToOutline,
    closestPointOnSegment,
    computeSnap,
    getHandlePos,
    pointInPolygon,
} from '../app/editor/geometry';

const SQUARE = [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
];

describe('pointInPolygon', () => {
    it('separates inside from outside', () => {
        expect(pointInPolygon(50, 50, SQUARE)).toBe(true);
        expect(pointInPolygon(150, 50, SQUARE)).toBe(false);
        expect(pointInPolygon(-1, 50, SQUARE)).toBe(false);
    });

    it('handles a concave shape', () => {
        // An L: the notch in the top-right must read as outside
        const shape = [
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 100, y: 40 },
            { x: 40, y: 40 },
            { x: 40, y: 100 },
            { x: 0, y: 100 },
        ];
        expect(pointInPolygon(20, 80, shape)).toBe(true);
        expect(pointInPolygon(80, 80, shape)).toBe(false);
    });
});

describe('clipRoomRectToOutline', () => {
    it('leaves a rectangle already inside untouched', () => {
        const room = { x: 20, y: 20, width: 40, height: 40 };
        expect(clipRoomRectToOutline(room, SQUARE)).toEqual(room);
    });

    it('pulls an overhanging rectangle back inside', () => {
        const clipped = clipRoomRectToOutline(
            { x: 60, y: 60, width: 80, height: 80 },
            SQUARE,
        );
        if (!clipped) throw new Error('expected the rectangle to be clipped');
        expect(clipped.x + clipped.width).toBeLessThanOrEqual(100);
        expect(clipped.y + clipped.height).toBeLessThanOrEqual(100);
    });

    it('gives up when the overlap is below the minimum size', () => {
        const clipped = clipRoomRectToOutline(
            { x: 95, y: 95, width: 40, height: 40 },
            SQUARE,
            20,
        );
        expect(clipped).toBeNull();
    });
});

describe('closestPointOnSegment', () => {
    it('projects onto the segment', () => {
        const { dist, cx, cy } = closestPointOnSegment(50, 10, 0, 0, 100, 0);
        expect(cx).toBe(50);
        expect(cy).toBe(0);
        expect(dist).toBe(10);
    });

    it('clamps past the endpoints', () => {
        const { cx } = closestPointOnSegment(-50, 0, 0, 0, 100, 0);
        expect(cx).toBe(0);
    });

    it('survives a zero-length segment', () => {
        const { dist } = closestPointOnSegment(3, 4, 0, 0, 0, 0);
        expect(dist).toBe(5);
    });
});

describe('getHandlePos', () => {
    it('places all eight handles around the box', () => {
        expect(getHandlePos('nw', 10, 20, 100, 50)).toEqual([10, 20]);
        expect(getHandlePos('se', 10, 20, 100, 50)).toEqual([110, 70]);
        expect(getHandlePos('n', 10, 20, 100, 50)).toEqual([60, 20]);
        expect(getHandlePos('w', 10, 20, 100, 50)).toEqual([10, 45]);
    });
});

describe('boundsOf', () => {
    it('returns the bounding box in geometry field order', () => {
        expect(
            boundsOf([
                { x: 10, y: 5 },
                { x: 30, y: 25 },
                { x: 20, y: 15 },
            ]),
        ).toEqual({ x: 10, y: 5, width: 20, height: 20 });
    });
});

describe('computeSnap', () => {
    const other = { x: 100, y: 100, w: 50, h: 50 };

    it('aligns left edges and reports the guide', () => {
        const { snappedX, guides } = computeSnap(
            { x: 103, y: 400, w: 50, h: 50 },
            [other],
        );
        expect(snappedX).toBe(100);
        expect(guides).toContainEqual({ type: 'v', pos: 100 });
    });

    it('aligns centres', () => {
        const { snappedX } = computeSnap({ x: 102, y: 400, w: 50, h: 50 }, [
            { x: 100, y: 100, w: 50, h: 50 },
        ]);
        // Dragged centre 127 snaps onto the other centre 125
        expect(snappedX).toBe(100);
    });

    it('leaves distant rectangles alone', () => {
        const { snappedX, snappedY, guides } = computeSnap(
            { x: 400, y: 400, w: 50, h: 50 },
            [other],
        );
        expect(snappedX).toBe(400);
        expect(snappedY).toBe(400);
        expect(guides).toHaveLength(0);
    });

    it('emits at most one guide per axis', () => {
        // Several neighbours all within threshold on both axes
        const { guides } = computeSnap({ x: 102, y: 102, w: 50, h: 50 }, [
            { x: 100, y: 100, w: 50, h: 50 },
            { x: 101, y: 101, w: 50, h: 50 },
            { x: 103, y: 103, w: 50, h: 50 },
        ]);
        expect(guides.filter((g) => g.type === 'v')).toHaveLength(1);
        expect(guides.filter((g) => g.type === 'h')).toHaveLength(1);
    });
});
