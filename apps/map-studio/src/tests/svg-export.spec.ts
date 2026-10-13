import { MapObject } from '../app/data/types';
import {
    bookableObjects,
    buildSvg,
    preflightChecks,
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
    it('emits a well-formed document at the canvas size', () => {
        const svg = buildSvg([object({})], 1200, 800);

        expect(svg.startsWith('<?xml')).toBe(true);
        expect(svg).toContain('viewBox="0 0 1200 800"');
        expect(svg.trimEnd().endsWith('</svg>')).toBe(true);
        // It must parse as XML
        const doc = new DOMParser().parseFromString(svg, 'image/svg+xml');
        expect(doc.querySelector('parsererror')).toBeNull();
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
        const doc = new DOMParser().parseFromString(svg, 'image/svg+xml');

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
        const doc = new DOMParser().parseFromString(svg, 'image/svg+xml');

        expect(doc.querySelector('parsererror')).toBeNull();
        expect(doc.querySelector('text')?.textContent).toBe('R&D <Lab>');
    });

    it('renders each geometry type', () => {
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
            ],
            100,
            100,
        );
        const doc = new DOMParser().parseFromString(svg, 'image/svg+xml');

        expect(doc.querySelector('#room-001 rect')).not.toBeNull();
        expect(doc.querySelector('#zone-001 polygon')).not.toBeNull();
        expect(doc.querySelector('#amenity-001 circle')).not.toBeNull();
    });

    it('carries rotation through as a transform', () => {
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
        expect(svg).toContain('transform="rotate(45 50 25)"');
    });
});
