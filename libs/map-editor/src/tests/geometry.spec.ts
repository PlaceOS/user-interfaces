import {
    AttributeGeometryProvider,
    localPoints,
    NoGeometryProvider,
} from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import {
    changeOfBasis,
    composeTransform,
    formatTransform,
    invert,
    multiply,
    parseTransform,
    translation,
} from '../lib/matrix';
import { checkPathData, pathPoints } from '../lib/path-data';
import { load, OFFICE } from './fixtures';

describe('matrix', () => {
    it('parses transform lists in order', () => {
        const m = parseTransform('translate(10 20) scale(2)');
        expect(m).toEqual({ a: 2, b: 0, c: 0, d: 2, e: 10, f: 20 });
        const r = parseTransform('rotate(90 5 5)');
        expect(r.a).toBeCloseTo(0);
        expect(r.b).toBeCloseTo(1);
        expect(r.e).toBeCloseTo(10);
        expect(r.f).toBeCloseTo(0);
        expect(parseTransform('matrix(1,0,0,1,5,6)')).toEqual({
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 5,
            f: 6,
        });
        expect(parseTransform('bogus(1) translate(1)')).toEqual({
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 1,
            f: 0,
        });
    });

    it('formats translations and matrices', () => {
        expect(formatTransform(translation(1.23456, -0))).toBe(
            'translate(1.235 0)',
        );
        expect(formatTransform({ a: 2, b: 0, c: 0, d: 2, e: 1, f: 1 })).toBe(
            'matrix(2 0 0 2 1 1)',
        );
    });

    it('inverts and composes', () => {
        const m = parseTransform('translate(10 20) scale(2)');
        const inverse = invert(m) as NonNullable<ReturnType<typeof invert>>;
        const identity = multiply(m, inverse);
        expect(identity.a).toBeCloseTo(1);
        expect(identity.e).toBeCloseTo(0);
        expect(invert({ a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 })).toBeNull();
    });

    it('changes basis so a root-space translate becomes a parent-space one', () => {
        const parent = parseTransform('scale(2)');
        const converted = changeOfBasis(translation(10, 0), parent);
        expect(converted?.e).toBeCloseTo(5);
    });

    it('composes a transform op about an origin', () => {
        const m = composeTransform({
            scale: [2, 2],
            origin: [10, 10],
            translate: [1, 0],
        });
        expect(m).toEqual({ a: 2, b: 0, c: 0, d: 2, e: -9, f: -10 });
    });
});

describe('path data', () => {
    it('checks the grammar of path data', () => {
        expect(checkPathData('M0 0 L10 10 Z').ok).toBe(true);
        expect(checkPathData('M0,0 c1,1 2,2 3,3 h5 v5 z').ok).toBe(true);
        expect(checkPathData('L10 10').ok).toBe(false);
        expect(checkPathData('M0 0 L10').ok).toBe(false);
        expect(checkPathData('M0 0 X10 10').ok).toBe(false);
        expect(checkPathData('').ok).toBe(false);
    });

    it('collects absolute end and control points', () => {
        expect(pathPoints('M10 10 l5 0 v5 H0 Z')).toEqual([
            [10, 10],
            [15, 10],
            [15, 15],
            [0, 15],
        ]);
        expect(pathPoints('M0 0 A5 5 0 0 1 10 10')).toEqual([
            [0, 0],
            [10, 10],
        ]);
    });
});

describe('AttributeGeometryProvider', () => {
    const geometry = new AttributeGeometryProvider();

    it('boxes shapes from their attributes', () => {
        const doc = load(
            `<rect id="r" x="10" y="20" width="30" height="40"/><circle id="c" cx="50" cy="50" r="5"/>
             <line id="l" x1="0" y1="0" x2="10" y2="5"/><polygon id="p" points="0,0 10,0 10,10"/>
             <path id="d" d="M100 100 h50 v20 z"/>`,
        );
        expect(geometry.bboxOf(doc.byId('r') as Element)).toEqual([
            10, 20, 30, 40,
        ]);
        expect(geometry.bboxOf(doc.byId('c') as Element)).toEqual([
            45, 45, 10, 10,
        ]);
        expect(geometry.bboxOf(doc.byId('l') as Element)).toEqual([
            0, 0, 10, 5,
        ]);
        expect(geometry.bboxOf(doc.byId('p') as Element)).toEqual([
            0, 0, 10, 10,
        ]);
        expect(geometry.bboxOf(doc.byId('d') as Element)).toEqual([
            100, 100, 50, 20,
        ]);
        expect(
            localPoints(doc.root.querySelector('style') || doc.root),
        ).toEqual([]);
    });

    it('maps through ancestor transforms into root space', () => {
        const doc = load(
            `<g transform="translate(100 50)"><g transform="scale(2)"><rect id="r" x="5" y="5" width="10" height="10"/></g></g>`,
        );
        expect(geometry.bboxOf(doc.byId('r') as Element)).toEqual([
            110, 60, 20, 20,
        ]);
        const ctm = geometry.ctmOf(doc.byId('r') as Element);
        expect(ctm).toEqual({ a: 2, b: 0, c: 0, d: 2, e: 100, f: 50 });
    });

    it('unions children for groups and skips non-rendered content', () => {
        const doc = MapDocument.load(OFFICE);
        const desks = geometry.bboxOf(doc.byId('desks') as Element);
        expect(desks).toEqual([100, 200, 110, 20]);
        expect(
            geometry.bboxOf(doc.root.querySelector('defs') as Element),
        ).toBeNull();
        const root = geometry.bboxOf(doc.root);
        expect(root?.[0]).toBe(0);
        expect(root?.[2]).toBe(1000);
    });

    it('answers null for a detached element and for the null provider', () => {
        const doc = load('<rect id="r" x="1" y="1" width="1" height="1"/>');
        const rect = doc.byId('r') as Element;
        rect.remove();
        expect(geometry.ctmOf(rect)).toBeNull();
        const none = new NoGeometryProvider();
        expect(none.bboxOf()).toBeNull();
        expect(none.ctmOf()).toBeNull();
    });
});
