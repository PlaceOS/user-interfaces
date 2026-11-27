import { effectiveAnnotation, KIND_ATTR, mapUnit } from '../lib/annotations';
import { detectMap3D, kindFromName } from '../lib/detect';
import { parseMap } from '../lib/shapes';
import { SMALL_MAP, UNNAMED_MAP } from './fixtures';

describe('kindFromName', () => {
    it.each([
        ['Walls', 'wall'],
        ['skeleton', 'wall'],
        ['extra_room_stroke', 'wall'],
        ['closed_area_furniature', 'furniture'],
        ['Furn', 'furniture'],
        ['furnaiture_2', 'furniture'],
        ['fuirnature', 'furniture'],
        ['future_state', null],
        ['Signages', 'label'],
        ['storage_plants_3_', 'furniture'],
        ['collaboration_spare_table', 'desk'],
        ['table-01.001', 'desk'],
        ['chairs', 'seat'],
        ['room_ids_name', 'label'],
        ['signage-2-3', 'label'],
        ['area-G.01-status', 'flat'],
        ['higlights', 'flat'],
        ['GlassPartitions', 'glass'],
        ['Layer_12', null],
        ['', null],
    ])('reads %s as %s', (name, kind) => {
        expect(kindFromName(name)).toBe(kind);
    });
});

describe('detectMap3D', () => {
    const kindOf = (svg: Element, selector: string) =>
        effectiveAnnotation(svg.querySelector(selector)!)?.kind || 'flat';

    it('classifies the layers of a named map', () => {
        const map = parseMap(SMALL_MAP);
        const result = detectMap3D(map);
        expect(kindOf(map.svg, '#walls line')).toBe('wall');
        expect(kindOf(map.svg, '#walls polyline')).toBe('wall');
        expect(kindOf(map.svg, '#table-1')).toBe('desk');
        expect(kindOf(map.svg, '#chairs circle')).toBe('seat');
        expect(kindOf(map.svg, '#floor')).toBe('flat');
        expect(kindOf(map.svg, '#area-1-status')).toBe('space');
        expect(kindOf(map.svg, 'text')).toBe('label');
        expect(result.counts.wall).toBe(2);
        expect(result.counts.desk).toBe(3);
        expect(result.counts.seat).toBe(4);
    });

    it('leaves shadows and open detail lines of furniture flat', () => {
        const map = parseMap(SMALL_MAP);
        detectMap3D(map);
        expect(kindOf(map.svg, '.shadow')).toBe('flat');
        expect(kindOf(map.svg, '#detail')).toBe('flat');
    });

    it('moves a solid mark drawn over a raised element to the label layer', () => {
        const map = parseMap(SMALL_MAP);
        detectMap3D(map);
        expect(kindOf(map.svg, '#glyph')).toBe('label');
    });

    it('tells areas painted over furniture from the marks on it', () => {
        const map =
            parseMap(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
            <rect id="table-1" x="100" y="50" width="20" height="10" fill="#fff"/>
            <rect id="table-2" x="300" y="50" width="20" height="10" fill="#fff"/>
            <rect id="tint" x="90" y="40" width="50" height="40" fill="#fc0" fill-opacity="0.2"/>
            <rect id="patch" x="290" y="40" width="50" height="40" fill="#eda"/>
            <rect id="dot" x="105" y="52" width="6" height="6" fill="#111"/>
        </svg>`);
        const result = detectMap3D(map);
        expect(kindOf(map.svg, '#table-1')).toBe('desk');
        expect(kindOf(map.svg, '#tint')).toBe('space');
        expect(kindOf(map.svg, '#patch')).toBe('flat');
        expect(kindOf(map.svg, '#dot')).toBe('label');
        expect(result.counts.space).toBe(1);
    });

    it('annotates a group once when everything in it is one kind', () => {
        const map = parseMap(SMALL_MAP);
        detectMap3D(map);
        expect(map.svg.querySelector('#chairs')!.getAttribute(KIND_ATTR)).toBe(
            'seat',
        );
        for (const chair of Array.from(
            map.svg.querySelectorAll('#chairs circle'),
        )) {
            expect(chair.hasAttribute(KIND_ATTR)).toBe(false);
        }
    });

    it('uses the IDs PlaceOS knows over the names on the map', () => {
        const map = parseMap(SMALL_MAP);
        detectMap3D(map, {
            desk_ids: ['area-1-status'],
            area_ids: ['table-1'],
        });
        expect(kindOf(map.svg, '#table-1')).toBe('flat');
        expect(kindOf(map.svg, '#table-2')).toBe('desk');
    });

    it('marks the area of a bookable room as a space', () => {
        const map = parseMap(SMALL_MAP);
        const result = detectMap3D(map, {
            space_ids: ['table-3'],
            area_ids: ['table-2'],
        });
        expect(kindOf(map.svg, '#area-1-status')).toBe('space');
        expect(kindOf(map.svg, '#table-3')).toBe('space');
        expect(kindOf(map.svg, '#table-2')).toBe('flat');
        expect(kindOf(map.svg, '#glyph')).toBe('label');
        expect(result.counts.space).toBe(2);
    });

    it('sets a scale that gives a believable building', () => {
        const map = parseMap(SMALL_MAP);
        const result = detectMap3D(map);
        expect(result.unit_source).toBe('seats');
        expect(mapUnit(map.svg)).toBeCloseTo(result.unit, 3);
        const width = map.view_box.width / result.unit;
        expect(width).toBeGreaterThan(8);
        expect(width).toBeLessThan(120);
    });

    it('measures the building from its walls, not the whole drawing', () => {
        const map =
            parseMap(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
            <g id="walls" fill="none" stroke="#333" stroke-width="2">
                <path d="M20 20H120V120H20Z"/>
                <path d="M70 20V120"/>
            </g>
            <text x="300" y="390">Title block</text>
        </svg>`);
        const result = detectMap3D(map);
        expect(result.unit_source).toBe('size');
        expect(100 / result.unit).toBeCloseTo(45, 0);
    });

    it('finds walls by line weight when nothing is named', () => {
        const map = parseMap(UNNAMED_MAP);
        const result = detectMap3D(map);
        expect(result.counts.wall).toBe(4);
        expect(result.unit_source).toBe('size');
    });

    it('replaces the annotations of an earlier run', () => {
        const map = parseMap(SMALL_MAP);
        detectMap3D(map);
        map.svg.querySelector('#floor')!.setAttribute(KIND_ATTR, 'wall');
        detectMap3D(map);
        expect(kindOf(map.svg, '#floor')).toBe('flat');
    });
});
