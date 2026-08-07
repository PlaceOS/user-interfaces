import { analyzeSvg, UNGROUPED_LAYER } from '../app/data/svg-import';

const svg = (body: string, attrs = 'viewBox="0 0 800 600"') =>
    `<svg xmlns="http://www.w3.org/2000/svg" ${attrs}>${body}</svg>`;

describe('analyzeSvg', () => {
    it('takes dimensions from viewBox when width/height are absent', () => {
        const result = analyzeSvg(
            svg('<rect id="room-1" width="10" height="10"/>'),
        );

        expect(result.width).toBe(800);
        expect(result.height).toBe(600);
        expect(result.viewBox).toBe('0 0 800 600');
    });

    it('suggests object types from the svg id', () => {
        const result = analyzeSvg(
            svg(`
                <rect id="room-101" width="10" height="10"/>
                <rect id="desk-04" width="10" height="10"/>
                <rect id="locker-a" width="10" height="10"/>
                <rect id="zone-north" width="10" height="10"/>
                <rect id="kitchen-main" width="10" height="10"/>
                <rect id="squiggle" width="10" height="10"/>
            `),
        );
        const types = Object.fromEntries(
            result.objects.map((o) => [o.svgId, o.suggestedType]),
        );

        expect(types['room-101']).toBe('room');
        expect(types['desk-04']).toBe('desk');
        expect(types['locker-a']).toBe('locker');
        expect(types['zone-north']).toBe('zone');
        expect(types['kitchen-main']).toBe('amenity');
        expect(types['squiggle']).toBe('decorative');
    });

    it('reads the name after an area- prefix to classify it', () => {
        const result = analyzeSvg(
            svg(`
                <rect id="area-04.training-room" width="10" height="10"/>
                <rect id="area-05.bathroom" width="10" height="10"/>
                <rect id="area-06.breakout-pod" width="10" height="10"/>
            `),
        );
        const types = Object.fromEntries(
            result.objects.map((o) => [o.svgId, o.suggestedType]),
        );

        expect(types['area-04.training-room']).toBe('room');
        expect(types['area-05.bathroom']).toBe('amenity');
        expect(types['area-06.breakout-pod']).toBe('room');
    });

    it('maps objects onto the layer of their nearest identified group', () => {
        const result = analyzeSvg(
            svg(`
                <g id="bookings"><rect id="room-1" width="10" height="10"/></g>
                <g id="desks"><rect id="desk-1" width="10" height="10"/></g>
                <rect id="loose-1" width="10" height="10"/>
            `),
        );
        const layers = Object.fromEntries(
            result.objects.map((o) => [o.svgId, o.layer]),
        );

        expect(layers['room-1']).toBe('rooms');
        expect(layers['desk-1']).toBe('desks');
        expect(layers['loose-1']).toBe(UNGROUPED_LAYER);
    });

    it('derives layers from where objects landed, so none can be orphaned', () => {
        const result = analyzeSvg(
            svg(`
                <g id="bookings"><rect id="room-1" width="10" height="10"/></g>
                <rect id="loose-1" width="10" height="10"/>
            `),
        );

        // Every object's layer must exist in the layer list, otherwise the
        // review step would silently drop it.
        const ids = new Set(result.layers.map((l) => l.id));
        for (const object of result.objects) {
            expect(ids.has(object.layer)).toBe(true);
        }
        expect(result.layers.find((l) => l.id === 'rooms')?.objectCount).toBe(
            1,
        );
        expect(
            result.layers.find((l) => l.id === UNGROUPED_LAYER)?.objectCount,
        ).toBe(1);
    });

    it('extracts geometry per shape type', () => {
        const result = analyzeSvg(
            svg(`
                <rect id="r" x="5" y="6" width="20" height="30"/>
                <circle id="c" cx="10" cy="12" r="4"/>
                <polygon id="p" points="0,0 10,0 10,10"/>
                <path id="d" d="M0 0 L10 10"/>
            `),
        );
        const geometry = Object.fromEntries(
            result.objects.map((o) => [o.svgId, o.geometry]),
        );

        expect(geometry['r']).toEqual({
            type: 'rect',
            x: 5,
            y: 6,
            width: 20,
            height: 30,
        });
        expect(geometry['c']).toEqual({ type: 'circle', x: 10, y: 12, r: 4 });
        expect(geometry['p'].points).toHaveLength(3);
        expect(geometry['d'].d).toBe('M0 0 L10 10');
    });

    it('prefers an explicit label over the svg id', () => {
        const result = analyzeSvg(
            svg(`
                <rect id="room-1" data-name="Boardroom" width="10" height="10"/>
                <rect id="room-2" width="10" height="10"><title>Huddle</title></rect>
                <rect id="room-3" width="10" height="10"/>
            `),
        );
        const labels = Object.fromEntries(
            result.objects.map((o) => [o.svgId, o.label]),
        );

        expect(labels['room-1']).toBe('Boardroom');
        expect(labels['room-2']).toBe('Huddle');
        expect(labels['room-3']).toBeNull();
    });

    it('skips shapes with no id and reports how many', () => {
        const result = analyzeSvg(
            svg(
                '<rect id="room-1" width="10" height="10"/><rect width="10" height="10"/>',
            ),
        );

        expect(result.objects).toHaveLength(1);
        expect(
            result.issues.some((i) => i.message.includes('no id attribute')),
        ).toBe(true);
    });

    it('flags shapes with unusable geometry', () => {
        const result = analyzeSvg(svg('<rect id="room-1"/>'));

        expect(
            result.issues.some(
                (i) =>
                    i.severity === 'warning' &&
                    i.message.includes('incomplete geometry'),
            ),
        ).toBe(true);
    });

    it('returns an error analysis when there is no svg root', () => {
        const result = analyzeSvg('<html><body>nope</body></html>');

        expect(result.objects).toHaveLength(0);
        expect(result.issues[0].severity).toBe('warning');
    });
});
