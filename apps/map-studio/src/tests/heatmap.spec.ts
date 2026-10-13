import { AvailabilityState, MapObject } from '../app/data/types';
import {
    computeHeatmap,
    scoreToColor,
    stateToScore,
} from '../app/kiosk/heatmap';

const object = (
    id: string,
    x: number,
    y: number,
    object_type: MapObject['object_type'] = 'room',
): MapObject => ({
    id,
    floorplan_id: 'fp',
    object_type,
    svg_id: id,
    label: id,
    geometry: { type: 'rect', x, y, width: 40, height: 40 },
    entity_type: null,
    entity_id: null,
    layer: 'rooms',
    fill_color: null,
    stroke_color: null,
    opacity: 1,
    capacity: null,
    amenities: null,
    tags: null,
    metadata: null,
    group_id: null,
    z_index: 0,
    locked: false,
    visible: true,
});

const rgb = (color: string): [number, number, number] => {
    const parts = (color.match(/\d+/g) ?? []).map(Number);
    if (parts.length !== 3) throw new Error(`not an rgb() colour: ${color}`);
    return [parts[0], parts[1], parts[2]];
};

describe('stateToScore', () => {
    it('puts free at the bottom and occupied at the top', () => {
        expect(stateToScore('free')).toBe(0);
        expect(stateToScore('available')).toBe(0);
        expect(stateToScore('occupied')).toBe(1);
    });

    it('orders the intermediate states', () => {
        expect(stateToScore('pending')).toBeLessThan(stateToScore('booked'));
        expect(stateToScore('booked')).toBeLessThan(stateToScore('checked-in'));
    });

    it('treats an unknown state as free', () => {
        expect(stateToScore(undefined)).toBe(0);
    });
});

describe('scoreToColor', () => {
    it('runs green through amber to red', () => {
        expect(rgb(scoreToColor(0))).toEqual([76, 175, 80]);
        expect(rgb(scoreToColor(0.5))).toEqual([255, 152, 0]);
        expect(rgb(scoreToColor(1))).toEqual([244, 67, 54]);
    });

    it('gets redder as the score climbs', () => {
        const low = rgb(scoreToColor(0.1));
        const high = rgb(scoreToColor(0.9));
        expect(high[0]).toBeGreaterThan(low[0]);
        expect(high[1]).toBeLessThan(low[1]);
    });
});

describe('computeHeatmap', () => {
    it('produces nothing when there is nothing bookable', () => {
        expect(computeHeatmap([], {}, 1000, 800)).toEqual([]);
        expect(
            computeHeatmap([object('a', 10, 10, 'decorative')], {}, 1000, 800),
        ).toEqual([]);
    });

    it('covers cells around each object, not the whole canvas', () => {
        const cells = computeHeatmap([object('a', 500, 400)], {}, 1000, 800);
        expect(cells.length).toBeGreaterThan(0);
        // 20 cells across at most, so a lone object cannot fill the grid
        expect(cells.length).toBeLessThan(20 * 16);
    });

    it('runs hotter where objects are occupied', () => {
        const objects = [object('a', 500, 400)];
        const free = computeHeatmap(
            objects,
            { a: 'free' as AvailabilityState },
            1000,
            800,
        );
        const busy = computeHeatmap(
            objects,
            { a: 'occupied' as AvailabilityState },
            1000,
            800,
        );
        const hottest = (cells: { color: string }[]) =>
            Math.max(...cells.map((c) => rgb(c.color)[0]));

        expect(hottest(busy)).toBeGreaterThan(hottest(free));
    });

    it('skips hidden objects', () => {
        const hidden = { ...object('a', 500, 400), visible: false };
        expect(computeHeatmap([hidden], {}, 1000, 800)).toEqual([]);
    });

    it('keeps every cell inside the canvas', () => {
        const cells = computeHeatmap(
            [object('a', 0, 0), object('b', 960, 760)],
            {},
            1000,
            800,
        );
        for (const cell of cells) {
            expect(cell.x).toBeGreaterThanOrEqual(0);
            expect(cell.y).toBeGreaterThanOrEqual(0);
            expect(cell.x).toBeLessThan(1000);
            expect(cell.y).toBeLessThan(800);
            expect(cell.opacity).toBeLessThanOrEqual(0.5);
        }
    });
});
