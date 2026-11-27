import {
    assignAnnotation,
    DEFAULT_HEIGHTS,
    effectiveAnnotation,
    hasMap3D,
    HEIGHT_ATTR,
    KIND_ATTR,
    mapUnit,
    ownAnnotation,
    removeMap3D,
    setAnnotation,
    setMapUnit,
    UNIT_ATTR,
} from '../lib/annotations';

function parse(markup: string): Element {
    return new DOMParser().parseFromString(markup, 'image/svg+xml')
        .documentElement;
}

describe('map 3D annotations', () => {
    it('reads an annotation from the nearest annotated ancestor', () => {
        const svg = parse(
            `<svg xmlns="http://www.w3.org/2000/svg"><g ${KIND_ATTR}="wall" ${HEIGHT_ATTR}="2.4"><g><line id="a"/></g><line id="b" ${KIND_ATTR}="flat"/></g><rect id="c"/></svg>`,
        );
        expect(effectiveAnnotation(svg.querySelector('#a')!)).toEqual({
            kind: 'wall',
            height: 2.4,
            base: 0,
        });
        expect(effectiveAnnotation(svg.querySelector('#b')!)?.height).toBe(0);
        expect(effectiveAnnotation(svg.querySelector('#c')!)).toBeNull();
    });

    it('gives a kind its default height when none is set', () => {
        const svg = parse(
            `<svg xmlns="http://www.w3.org/2000/svg"><rect ${KIND_ATTR}="desk"/></svg>`,
        );
        expect(ownAnnotation(svg.firstElementChild!)?.height).toBe(
            DEFAULT_HEIGHTS.desk,
        );
    });

    it('treats a bare height as furniture and limits it', () => {
        const svg = parse(
            `<svg xmlns="http://www.w3.org/2000/svg"><rect ${HEIGHT_ATTR}="900"/></svg>`,
        );
        expect(ownAnnotation(svg.firstElementChild!)).toEqual({
            kind: 'furniture',
            height: 20,
            base: 0,
        });
    });

    it('keeps labels and flat elements on the floor whatever height is written', () => {
        const svg = parse(
            `<svg xmlns="http://www.w3.org/2000/svg"><rect ${KIND_ATTR}="label" ${HEIGHT_ATTR}="3"/></svg>`,
        );
        expect(ownAnnotation(svg.firstElementChild!)?.height).toBe(0);
    });

    it('clears annotations below an element it assigns', () => {
        const svg = parse(
            `<svg xmlns="http://www.w3.org/2000/svg"><g id="g"><rect ${KIND_ATTR}="desk" ${HEIGHT_ATTR}="1"/></g></svg>`,
        );
        const group = svg.querySelector('#g')!;
        assignAnnotation([group], { kind: 'wall' });
        expect(group.getAttribute(KIND_ATTR)).toBe('wall');
        expect(group.firstElementChild!.hasAttribute(KIND_ATTR)).toBe(false);
        expect(effectiveAnnotation(group.firstElementChild!)?.kind).toBe(
            'wall',
        );
    });

    it('marks a map as 3D with its unit and removes it again', () => {
        const svg = parse(
            `<svg xmlns="http://www.w3.org/2000/svg"><rect/></svg>`,
        );
        expect(mapUnit(svg)).toBe(0);
        setMapUnit(svg, 12.345678);
        setAnnotation(svg.firstElementChild!, { kind: 'seat' });
        expect(svg.getAttribute(UNIT_ATTR)).toBe('12.3457');
        expect(hasMap3D(new XMLSerializer().serializeToString(svg))).toBe(true);
        removeMap3D(svg);
        expect(mapUnit(svg)).toBe(0);
        expect(svg.firstElementChild!.hasAttribute(KIND_ATTR)).toBe(false);
    });

    it('reads the 3D marker from the root tag only', () => {
        expect(
            hasMap3D('<svg viewBox="0 0 1 1"><g data-3d-unit="4"/></svg>'),
        ).toBe(false);
        expect(
            hasMap3D(
                '<?xml version="1.0"?>\n<svg\n  data-3d-unit="4.5" viewBox="0 0 1 1"></svg>',
            ),
        ).toBe(true);
        expect(hasMap3D('<svg data-3d-unit="0"></svg>')).toBe(false);
        expect(hasMap3D('')).toBe(false);
    });
});
