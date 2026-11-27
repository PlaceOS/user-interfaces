import { setAnnotation, setMapUnit } from '../lib/annotations';
import { buildMesh, footprintAtIndex, footprintsOf } from '../lib/mesh';
import { parseMap } from '../lib/shapes';

const MAP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 20 100 50">
    <rect id="block" x="20" y="30" width="20" height="10" fill="#fff"/>
    <path id="ring" fill-rule="evenodd" fill="#ccc" d="M50 30 h30 v30 h-30 z M60 40 h10 v10 h-10 z"/>
    <line id="wall" x1="10" y1="20" x2="110" y2="20" stroke="#000" stroke-width="2"/>
    <rect id="outline" x="90" y="50" width="10" height="10" fill="none" stroke="#000"/>
    <rect id="pane" x="20" y="60" width="20" height="2" fill="#9cf"/>
</svg>`;

function setup() {
    const map = parseMap(MAP);
    setMapUnit(map.svg, 10);
    const set = (id: string, kind: Parameters<typeof setAnnotation>[1]) =>
        setAnnotation(map.svg.querySelector(`#${id}`)!, kind);
    return { map, set };
}

describe('footprintsOf', () => {
    it('scales raised elements to metres from the top left of the map', () => {
        const { map, set } = setup();
        set('block', { kind: 'desk', height: 0.7, base: 0.1 });
        const [footprint] = footprintsOf(map, 10);
        expect(footprint.kind).toBe('desk');
        expect(footprint.base).toBeCloseTo(0.1);
        expect(footprint.top).toBeCloseTo(0.8);
        const xs = footprint.polygons[0].outer.map((p) => p[0]);
        const zs = footprint.polygons[0].outer.map((p) => p[1]);
        expect(Math.min(...xs)).toBeCloseTo(1);
        expect(Math.max(...xs)).toBeCloseTo(3);
        expect(Math.min(...zs)).toBeCloseTo(1);
        expect(Math.max(...zs)).toBeCloseTo(2);
    });

    it('skips flat elements and maps with no scale', () => {
        const { map, set } = setup();
        set('block', { kind: 'flat' });
        set('ring', { kind: 'label' });
        expect(footprintsOf(map, 10)).toEqual([]);
        set('block', { kind: 'desk' });
        expect(footprintsOf(map, 0)).toEqual([]);
    });

    it('keeps the hole of a ring', () => {
        const { map, set } = setup();
        set('ring', { kind: 'furniture' });
        const [footprint] = footprintsOf(map, 10);
        expect(footprint.polygons).toHaveLength(1);
        expect(footprint.polygons[0].holes).toHaveLength(1);
    });

    it('raises a wall drawn as a line along the line', () => {
        const { map, set } = setup();
        set('wall', { kind: 'wall' });
        const [footprint] = footprintsOf(map, 10);
        expect(footprint.polygons).toHaveLength(0);
        expect(footprint.lines[0].width).toBeCloseTo(0.2);
        expect(footprint.lines[0].points).toHaveLength(2);
    });

    it('fills an outline that is furniture and follows one that is a wall', () => {
        const { map, set } = setup();
        set('outline', { kind: 'furniture' });
        expect(footprintsOf(map, 10)[0].polygons).toHaveLength(1);
        set('outline', { kind: 'wall' });
        const [wall] = footprintsOf(map, 10);
        expect(wall.polygons).toHaveLength(0);
        expect(wall.lines[0].closed).toBe(true);
    });
});

describe('buildMesh', () => {
    const options = { width: 10, depth: 5, texel: 0.01 };

    it('builds a top and four sides for a block', () => {
        const { map, set } = setup();
        set('block', { kind: 'desk', height: 0.7 });
        const { solid, glass } = buildMesh(footprintsOf(map, 10), options);
        // Top: 2 triangles. Sides: 4 quads of 2 triangles
        expect(solid.indices.length).toBe((2 + 8) * 3);
        expect(glass.indices.length).toBe(0);
        const heights = new Set<number>();
        for (let i = 1; i < solid.positions.length; i += 3) {
            heights.add(Math.round(solid.positions[i] * 100) / 100);
        }
        expect([...heights].sort()).toEqual([0, 0.7]);
        expect(Math.max(...solid.uvs)).toBeLessThanOrEqual(1);
        expect(Math.min(...solid.uvs)).toBeGreaterThanOrEqual(0);
    });

    it('shades sides darker than tops', () => {
        const { map, set } = setup();
        set('block', { kind: 'desk', height: 0.7 });
        const { solid } = buildMesh(footprintsOf(map, 10), options);
        const shades = new Set<number>();
        for (let i = 0; i < solid.colors.length; i += 3) {
            shades.add(solid.colors[i]);
        }
        expect(Math.max(...shades)).toBe(1);
        expect(Math.min(...shades)).toBeLessThan(0.75);
    });

    it('puts glass in its own mesh', () => {
        const { map, set } = setup();
        set('pane', { kind: 'glass' });
        set('block', { kind: 'desk' });
        const { solid, glass } = buildMesh(footprintsOf(map, 10), options);
        expect(solid.ranges).toHaveLength(1);
        expect(glass.ranges).toHaveLength(1);
        expect(glass.indices.length).toBeGreaterThan(0);
    });

    it('leaves the area of a bookable space on the floor', () => {
        const { map, set } = setup();
        set('block', { kind: 'space' });
        expect(footprintsOf(map, 10)).toEqual([]);
    });

    it('finds the footprint a triangle belongs to', () => {
        const { map, set } = setup();
        set('block', { kind: 'desk' });
        set('ring', { kind: 'furniture' });
        const footprints = footprintsOf(map, 10);
        const { solid } = buildMesh(footprints, options);
        expect(footprintAtIndex(solid, 0)).toBe(0);
        expect(footprintAtIndex(solid, solid.indices.length - 3)).toBe(1);
        expect(footprintAtIndex(solid, solid.indices.length)).toBe(-1);
    });
});
