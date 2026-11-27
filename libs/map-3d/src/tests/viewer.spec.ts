import { turnAbout, turnTarget } from '../lib/viewer';

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
