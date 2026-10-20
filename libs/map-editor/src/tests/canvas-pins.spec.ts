import { spreadPins } from '../lib/canvas/pins';

describe('spreadPins', () => {
    it('leaves pins that are far enough apart on their corners', () => {
        expect(
            spreadPins(
                [
                    [0, 0],
                    [30, 0],
                    [0, 30],
                ],
                26,
            ),
        ).toEqual([
            [0, 0],
            [30, 0],
            [0, 30],
        ]);
    });

    it('lines pins on the same corner up in a row, first pin on the corner', () => {
        expect(
            spreadPins(
                [
                    [10, 10],
                    [10, 10],
                    [10, 10],
                ],
                26,
            ),
        ).toEqual([
            [10, 10],
            [36, 10],
            [62, 10],
        ]);
    });

    it('keeps pins near each other in one row in their original order', () => {
        expect(
            spreadPins(
                [
                    [200, 200],
                    [500, 500],
                    [202, 206],
                    [202, 211],
                ],
                26,
            ),
        ).toEqual([
            [200, 200],
            [500, 500],
            [226, 200],
            [252, 200],
        ]);
    });

    it('moves a row down until it clears an earlier row', () => {
        const pins = spreadPins(
            [
                [0, 0],
                [0, 0],
                [0, 0],
                [60, 20],
            ],
            26,
        );
        expect(pins[3]).toEqual([60, 46]);
        for (const other of pins.slice(0, 3)) {
            expect(
                Math.hypot(pins[3][0] - other[0], pins[3][1] - other[1]),
            ).toBeGreaterThanOrEqual(26);
        }
    });
});
