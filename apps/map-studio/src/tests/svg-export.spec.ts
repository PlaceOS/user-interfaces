import { MapObject } from '../app/data/types';
import {
    bookableObjects,
    buildSvg,
    preflightChecks,
    sequentialIdRange,
} from '../app/editor/svg-export';

const object = (partial: Partial<MapObject>): MapObject => ({
    id: partial.id ?? 'id-1',
    floorplan_id: 'fp',
    object_type: partial.object_type ?? 'room',
    svg_id: partial.svg_id ?? 'room-001',
    label: partial.label ?? 'Room 1',
    geometry: partial.geometry ?? {
        type: 'rect',
        x: 0,
        y: 0,
        width: 100,
        height: 50,
    },
    entity_type: null,
    entity_id: null,
    layer: partial.layer ?? 'rooms',
    fill_color: partial.fill_color ?? null,
    stroke_color: partial.stroke_color ?? null,
    opacity: 1,
    capacity: null,
    amenities: null,
    tags: null,
    metadata: null,
    group_id: null,
    z_index: 0,
    locked: false,
    visible: partial.visible ?? true,
});

describe('preflightChecks', () => {
    const pass = (objects: MapObject[], label: string) =>
        preflightChecks(objects).find((c) => c.label.startsWith(label))?.pass;

    it('passes a clean set of bookable objects', () => {
        const objects = [
            object({ id: 'a', svg_id: 'room-001' }),
            object({ id: 'b', svg_id: 'desk-001', object_type: 'desk' }),
        ];
        expect(preflightChecks(objects).every((c) => c.pass)).toBe(true);
    });

    it('fails when an ID does not start with a letter', () => {
        expect(pass([object({ svg_id: '1-room' })], 'All IDs start')).toBe(
            false,
        );
    });

    it('fails and names duplicated IDs', () => {
        const objects = [
            object({ id: 'a', svg_id: 'dupe' }),
            object({ id: 'b', svg_id: 'dupe' }),
        ];
        const check = preflightChecks(objects).find((c) =>
            c.label.startsWith('No duplicate'),
        );
        expect(check?.pass).toBe(false);
        expect(check?.detail).toContain('dupe (×2)');
    });

    it('fails on a blank label', () => {
        expect(
            pass([object({ label: '   ' })], 'All bookable spaces have labels'),
        ).toBe(false);
    });

    it('fails on characters PlaceOS will not accept', () => {
        expect(pass([object({ svg_id: 'room 001!' })], 'Valid ID')).toBe(false);
    });

    it('fails when there is nothing bookable', () => {
        expect(
            preflightChecks([object({ object_type: 'decorative' })]).find((c) =>
                c.label.startsWith('Bookable spaces'),
            )?.pass,
        ).toBe(false);
    });

    it('only counts rooms and desks as bookable', () => {
        const objects = [
            object({ id: 'a', object_type: 'room' }),
            object({ id: 'b', object_type: 'desk' }),
            object({ id: 'c', object_type: 'zone' }),
            object({ id: 'd', object_type: 'decorative' }),
        ];
        expect(bookableObjects(objects).map((o) => o.id)).toEqual(['a', 'b']);
    });
});

describe('buildSvg', () => {
    const parse = (svg: string) =>
        new DOMParser().parseFromString(svg, 'image/svg+xml');

    const wall = (partial: Partial<MapObject> = {}) =>
        object({
            id: 'w',
            svg_id: 'wall-001',
            object_type: 'decorative',
            layer: 'walls',
            label: '',
            geometry: { type: 'path', d: 'M0 0 L20 0 L20 10 Z' },
            ...partial,
        });

    it('emits a well-formed document at the canvas size', () => {
        const svg = buildSvg([object({})], 1200, 800);

        expect(svg.startsWith('<?xml')).toBe(true);
        expect(svg).toContain('viewBox="0 0 1200 800"');
        expect(svg.trimEnd().endsWith('</svg>')).toBe(true);
        // It must parse as XML
        expect(parse(svg).querySelector('parsererror')).toBeNull();
    });

    it('groups objects by type and keeps their svg ids', () => {
        const svg = buildSvg(
            [
                object({ id: 'a', svg_id: 'room-001' }),
                object({
                    id: 'b',
                    svg_id: 'desk-001',
                    object_type: 'desk',
                    layer: 'desks',
                }),
            ],
            100,
            100,
        );
        const doc = parse(svg);

        expect(doc.querySelector('#rooms')).not.toBeNull();
        expect(doc.querySelector('#desks')).not.toBeNull();
        expect(doc.querySelector('#room-001')).not.toBeNull();
        expect(doc.querySelector('#desk-001')).not.toBeNull();
    });

    it('leaves hidden objects out', () => {
        const svg = buildSvg(
            [object({ id: 'a', svg_id: 'room-001', visible: false })],
            100,
            100,
        );
        expect(svg).not.toContain('room-001');
    });

    it('escapes labels so markup stays valid', () => {
        const svg = buildSvg([object({ label: 'R&D <Lab>' })], 100, 100);
        const doc = parse(svg);

        expect(doc.querySelector('parsererror')).toBeNull();
        expect(doc.querySelector('text')?.textContent).toBe('R&D <Lab>');
    });

    it('renders each geometry type as the element carrying its id', () => {
        const svg = buildSvg(
            [
                object({ id: 'a', svg_id: 'room-001' }),
                object({
                    id: 'b',
                    svg_id: 'zone-001',
                    object_type: 'zone',
                    geometry: {
                        type: 'polygon',
                        points: [
                            { x: 0, y: 0 },
                            { x: 10, y: 0 },
                            { x: 10, y: 10 },
                        ],
                    },
                }),
                object({
                    id: 'c',
                    svg_id: 'amenity-001',
                    object_type: 'amenity',
                    geometry: { type: 'circle', x: 5, y: 5, r: 3 },
                }),
                wall(),
            ],
            100,
            100,
        );
        const doc = parse(svg);

        expect(doc.querySelector('parsererror')).toBeNull();
        expect(doc.getElementById('room-001')?.localName).toBe('rect');
        expect(doc.getElementById('zone-001')?.localName).toBe('polygon');
        expect(doc.getElementById('amenity-001')?.localName).toBe('circle');
        expect(doc.getElementById('wall-001')?.localName).toBe('path');
    });

    it('gives ids to the type layer groups and to no other group', () => {
        const svg = buildSvg(
            [
                object({ id: 'a', svg_id: 'room-001' }),
                object({
                    id: 'b',
                    svg_id: 'desk-001',
                    object_type: 'desk',
                    layer: 'desks',
                }),
                wall(),
            ],
            100,
            100,
        );
        const doc = parse(svg);
        const groups = Array.from(doc.querySelectorAll('g[id]'));

        expect(groups.map((g) => g.id).sort()).toEqual([
            'decoratives',
            'desks',
            'rooms',
        ]);
        expect(
            groups.every((g) => g.parentElement === doc.documentElement),
        ).toBe(true);
        expect(
            doc.getElementById('room-001')?.parentElement?.hasAttribute('id'),
        ).toBe(false);
    });

    it('exports path objects with their path data', () => {
        const d = 'M0 0 L20 0 L20 10 Z';
        const svg = buildSvg(
            [wall({ geometry: { type: 'path', d } })],
            100,
            100,
        );
        const doc = parse(svg);
        const path = doc.getElementById('wall-001');

        expect(doc.querySelector('parsererror')).toBeNull();
        expect(path?.getAttribute('d')).toBe(d);
        expect(path?.getAttribute('data-type')).toBe('decorative');
        expect(doc.querySelector('text')).toBeNull();
    });

    it('labels a path at the centre of its bounding box', () => {
        const svg = buildSvg(
            [
                object({
                    svg_id: 'room-002',
                    label: 'Boardroom',
                    geometry: {
                        type: 'path',
                        d: 'M10 20 H110 V70 H10 Z',
                        x: 10,
                        y: 20,
                        width: 100,
                        height: 50,
                    },
                }),
            ],
            200,
            200,
        );
        const text = parse(svg).querySelector('text');

        expect(text?.textContent).toBe('Boardroom');
        expect(text?.getAttribute('x')).toBe('60');
        expect(text?.getAttribute('y')).toBe('45');
    });

    it('leaves a path without a bounding box unlabelled', () => {
        const svg = buildSvg(
            [
                object({
                    svg_id: 'room-002',
                    label: 'Boardroom',
                    geometry: { type: 'path', d: 'M0 0 H10 V10 Z' },
                }),
            ],
            100,
            100,
        );
        const doc = parse(svg);

        expect(doc.getElementById('room-002')).not.toBeNull();
        expect(doc.querySelector('text')).toBeNull();
    });

    it('skips a path object with no path data', () => {
        const svg = buildSvg([wall({ geometry: { type: 'path' } })], 100, 100);
        expect(svg).not.toContain('wall-001');
    });

    it('keeps the label text beside a labelled rect', () => {
        const svg = buildSvg([object({ label: 'Room 1' })], 100, 100);
        const rect = parse(svg).getElementById('room-001');
        const text = rect?.parentElement?.querySelector('text');

        expect(rect?.localName).toBe('rect');
        expect(text?.textContent).toBe('Room 1');
        expect(text?.getAttribute('x')).toBe('50');
        expect(text?.getAttribute('y')).toBe('25');
    });

    it('carries rotation through as a transform on the wrapper', () => {
        const svg = buildSvg(
            [
                object({
                    geometry: {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        width: 100,
                        height: 50,
                        rotation: 45,
                    },
                }),
            ],
            100,
            100,
        );
        const rect = parse(svg).getElementById('room-001');

        expect(svg).toContain('transform="rotate(45 50 25)"');
        expect(rect?.parentElement?.getAttribute('transform')).toBe(
            'rotate(45 50 25)',
        );
    });
});

describe('sequentialIdRange', () => {
    it('shows the first and last id with zero padding', () => {
        expect(sequentialIdRange('room-', 1, 42)).toBe('room-001 … room-042');
    });

    it('shows a single id when there is one object', () => {
        expect(sequentialIdRange('desk-', 7, 1)).toBe('desk-007');
    });

    it('stops padding past three digits', () => {
        expect(sequentialIdRange('d', 998, 3)).toBe('d998 … d1000');
    });

    it('is empty when there is nothing to number', () => {
        expect(sequentialIdRange('room-', 1, 0)).toBe('');
    });
});
