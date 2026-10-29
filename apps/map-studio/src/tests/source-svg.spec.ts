import { analyzeSvg } from '../app/data/svg-import';
import { MapObject } from '../app/data/types';
import { buildSvg } from '../app/editor/svg-export';

const source = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 100"><defs><linearGradient id="shade"><stop offset="0" stop-color="red"/></linearGradient><clipPath id="clip"><rect width="50" height="50"/></clipPath><symbol id="symbol"><path d="M0 0 L4 4"/></symbol></defs><style>#room-1 {fill:url(#shade)} .chair {stroke:blue}</style><g id="rooms" transform="translate(20 10)" opacity=".8"><rect id="room-1" x="5" y="6" width="30" height="20" clip-path="url(#clip)"/><ellipse class="chair" cx="70" cy="50" rx="8" ry="3"/><text x="40" y="20">Office <tspan dy="12">101</tspan></text><polyline points="0,0 5,10" fill="none"/><use xlink:href="#symbol" x="80" y="30"/><path d="M1 2 L3 4" fill="green"/></g></svg>`;
function imported() {
    const analysis = analyzeSvg(source);
    const objects = analysis.objects.map(
        (parsed, index) =>
            ({
                id: `object-${index}`,
                floorplan_id: 'floor',
                object_type: parsed.suggestedType,
                svg_id: parsed.svgId,
                label: parsed.label || parsed.svgId,
                geometry: parsed.geometry,
                entity_type: null,
                entity_id: null,
                layer: parsed.layer,
                fill_color: parsed.attributes['fill'] || null,
                stroke_color: parsed.attributes['stroke'] || null,
                opacity: Number(parsed.attributes['opacity'] ?? 1),
                capacity: null,
                amenities: null,
                tags: null,
                metadata: {
                    source: 'svg-import',
                    originalAttributes: parsed.attributes,
                    originalGeometry: parsed.geometry,
                    originalLabel: parsed.label || parsed.svgId,
                    originalFill: parsed.attributes['fill'] || null,
                    originalStroke: parsed.attributes['stroke'] || null,
                    originalOpacity: Number(parsed.attributes['opacity'] ?? 1),
                    parentMatrix: parsed.parentMatrix,
                },
                group_id: null,
                z_index: index,
                locked: false,
                visible: true,
            }) as MapObject,
    );
    return {
        analysis,
        objects,
        export: (items = objects) =>
            buildSvg(
                items,
                200,
                100,
                '#fff',
                analysis.sourceSvg,
                analysis.objects.map((p) => p.svgId),
            ),
    };
}
const parse = (value: string) =>
    new DOMParser().parseFromString(value, 'image/svg+xml');

describe('imported SVG preservation', () => {
    it('strips external references from edited colours', () => {
        const fixture = imported();
        const [room, ...rest] = fixture.objects;
        const output = fixture.export([
            { ...room, fill_color: 'url(https://example.com/track)' },
            ...rest,
        ]);
        expect(output).not.toContain('example.com');
    });

    it('round-trips detailed artwork without reconstructing it', () => {
        const fixture = imported();
        expect(fixture.objects).toHaveLength(6);
        const output = fixture.export();
        expect(output).toBe(fixture.analysis.sourceSvg);
        const doc = parse(output);
        expect(doc.querySelector('ellipse')?.getAttribute('ry')).toBe('3');
        expect(doc.querySelector('polyline')).not.toBeNull();
        expect(doc.querySelector('text tspan')?.textContent).toBe('101');
        expect(
            doc
                .querySelector('use')
                ?.getAttributeNS('http://www.w3.org/1999/xlink', 'href'),
        ).toBe('#symbol');
        expect(doc.querySelector('g')?.getAttribute('transform')).toBe(
            'translate(20 10)',
        );
    });

    it('changes only the selected paint and preserves inherited CSS and other artwork', () => {
        const fixture = imported();
        fixture.objects[0].fill_color = '#123456';
        const doc = parse(fixture.export());
        expect(
            (doc.getElementById('room-1') as unknown as SVGElement).style.fill,
        ).toBe('#123456');
        expect(doc.querySelector('defs')).not.toBeNull();
        expect(doc.querySelector('text')?.textContent).toBe('Office 101');
        expect(doc.querySelector('ellipse')?.outerHTML).toBe(
            parse(fixture.analysis.sourceSvg!).querySelector('ellipse')
                ?.outerHTML,
        );
    });

    it('deletes an imported shape without deleting its siblings or definitions', () => {
        const fixture = imported();
        const doc = parse(fixture.export(fixture.objects.slice(1)));
        expect(doc.getElementById('room-1')).toBeNull();
        expect(doc.querySelector('linearGradient')).not.toBeNull();
        expect(doc.querySelector('ellipse')).not.toBeNull();
    });

    it('moves an object in canvas coordinates under a scaled parent', () => {
        const fixture = imported();
        const object = fixture.objects[0];
        object.metadata!['parentMatrix'] = {
            a: 2,
            b: 0,
            c: 0,
            d: 2,
            e: 20,
            f: 10,
        };
        object.geometry = {
            ...object.geometry,
            x: (object.geometry.x || 0) + 10,
        };
        expect(
            parse(fixture.export())
                .getElementById('room-1')
                ?.getAttribute('transform'),
        ).toBe('matrix(1 0 0 1 5 0)');
    });

    it('keeps duplicate artwork and new furniture in the exported map', () => {
        const fixture = imported();
        const copy = structuredClone(fixture.objects[0]);
        copy.id = 'copy';
        copy.svg_id = 'room-copy';
        copy.geometry.x = 60;
        const addition = {
            ...copy,
            id: 'new',
            svg_id: 'desk-new',
            metadata: null,
            object_type: 'desk' as const,
        };
        const doc = parse(fixture.export([...fixture.objects, copy, addition]));
        expect(doc.getElementById('room-copy')).not.toBeNull();
        expect(doc.querySelector('style')?.textContent).toContain(
            ':is(#room-1,#room-copy)',
        );
        expect(doc.getElementById('desk-new')?.localName).toBe('rect');
        const ids = Array.from(doc.querySelectorAll('[id]')).map((el) => el.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('removes scripted content before rendering or exporting', () => {
        const analysis = analyzeSvg(
            '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script><rect width="10" height="10" onclick="alert(1)"/></svg>',
        );
        expect(analysis.sourceSvg).not.toContain('script');
        expect(analysis.sourceSvg).not.toContain('onclick');
    });

    it('keeps selector styling and use references when an imported ID changes', () => {
        const fixture = imported();
        fixture.objects[0].svg_id = 'room-renamed';
        const doc = parse(fixture.export());
        expect(doc.getElementById('room-1')).toBeNull();
        expect(doc.querySelector('style')?.textContent).toContain(
            '#room-renamed',
        );
        expect(doc.querySelector('style')?.textContent).toContain(
            'url(#shade)',
        );
    });
});
