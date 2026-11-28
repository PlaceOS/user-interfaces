import { panCentre, turnAbout, turnTarget } from '../lib/viewer';

describe('turnTarget', () => {
    it('turns a free view by the angle asked for', () => {
        expect(turnTarget(10, 45, false)).toBe(55);
        expect(turnTarget(10, -45, false)).toBe(-35);
    });

    it('turns an isometric view from one corner to the next', () => {
        expect(turnTarget(45, 45, true)).toBe(135);
        expect(turnTarget(45, -45, true)).toBe(-45);
        expect(turnTarget(-135, 90, true)).toBe(-45);
    });

    it('turns an isometric view between corners to the next one that way', () => {
        expect(turnTarget(60, 45, true)).toBe(135);
        expect(turnTarget(60, -45, true)).toBe(45);
        expect(turnTarget(-10, -45, true)).toBe(-45);
    });
});

describe('turnAbout', () => {
    it('keeps the centre where it is', () => {
        expect(turnAbout([5, 5], [5, 5], 90)).toEqual([5, 5]);
    });

    it('carries a point round the centre with the view', () => {
        const [x, z] = turnAbout([6, 5], [5, 5], 90);
        expect(x).toBeCloseTo(5);
        expect(z).toBeCloseTo(6);
        const [back_x, back_z] = turnAbout([x, z], [5, 5], -90);
        expect(back_x).toBeCloseTo(6);
        expect(back_z).toBeCloseTo(5);
    });
});

describe('panCentre', () => {
    const centre = { x: 0.5, y: 0.5 };

    it('pans along the screen of a view turned a quarter', () => {
        const right = panCentre(centre, 1, 90, 1, 1, 0);
        expect(right.x).toBeCloseTo(0.5);
        expect(right.y).toBeCloseTo(0.6);
        const up = panCentre(centre, 1, 90, 1, 0, -1);
        expect(up.x).toBeCloseTo(0.6);
        expect(up.y).toBeCloseTo(0.5);
    });

    it('pans straight across the screen of a wide map turned to an angle', () => {
        // A map twice as wide as it is deep, turned 45 degrees
        const { x, y } = panCentre(centre, 1, 45, 2, 1, 0);
        // In map units, the move is along the screen's right: 45 degrees
        expect((y - 0.5) / 2 / (x - 0.5)).toBeCloseTo(1);
    });
});
