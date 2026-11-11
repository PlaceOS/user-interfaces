import {
    attributeValueIssue,
    geometryValueIssue,
    isValidPaint,
} from '../lib/value-syntax';

describe('attributeValueIssue', () => {
    it('accepts and rejects values per attribute family', () => {
        const cases: [string, string[], string[]][] = [
            [
                'opacity',
                ['0', '1', '0.5', '50%', '100%'],
                ['1.5', '-0.1', '150%', 'half'],
            ],
            [
                'stroke-dasharray',
                ['none', '4 2', '4,2,1', '2px 1em'],
                ['', 'dashed', '4 two'],
            ],
            ['stroke-width', ['2', '1.5px', '.5em', '10%'], ['thick', '2 px']],
            ['class', ['', 'desk', 'desk _a -b c-1'], ['1desk', 'a.b', 'a{b}']],
            ['visibility', ['hidden', ' visible '], ['none']],
            ['font-weight', ['bold', '400', 'lighter'], ['450', 'heavy']],
            ['text-anchor', ['middle'], ['center']],
            ['dominant-baseline', ['central', 'text-before-edge'], ['centre']],
            ['font-family', ['Inter, sans-serif'], ['', 'url(x)', 'a<b']],
            ['data-name', ['Room 1 & 2'], ['<b>Room</b>']],
        ];
        for (const [name, good, bad] of cases) {
            for (const value of good) {
                expect([name, value, attributeValueIssue(name, value)]).toEqual(
                    [name, value, null],
                );
            }
            for (const value of bad) {
                expect([name, value, attributeValueIssue(name, value)]).toEqual(
                    [name, value, expect.any(String)],
                );
            }
        }
    });
});

describe('isValidPaint', () => {
    afterEach(() => vi.unstubAllGlobals());

    it('accepts colours and fragment paints without CSS.supports', () => {
        vi.stubGlobal('CSS', undefined);
        for (const value of [
            '#abc',
            '#aabbccdd',
            'rgb(1, 2, 3)',
            'hsla(10 50% 50% / 0.5)',
            'RebeccaPurple',
            'none',
            'url(#grad)',
            "url('#grad') #fff",
        ]) {
            expect([value, isValidPaint(value)]).toEqual([value, true]);
        }
        for (const value of [
            '',
            '#f28c28.',
            'notacolour',
            'url(http://x/#a)',
        ]) {
            expect([value, isValidPaint(value)]).toEqual([value, false]);
        }
    });

    it('defers to CSS.supports when present, after the unsafe-text check', () => {
        const supports = vi.fn(() => true);
        vi.stubGlobal('CSS', { supports });
        expect(isValidPaint('color(display-p3 1 0 0)')).toBe(true);
        expect(supports).toHaveBeenCalledWith(
            'color',
            'color(display-p3 1 0 0)',
        );
        expect(isValidPaint('red; javascript:alert(1)')).toBe(false);
        expect(isValidPaint('url(#a)')).toBe(true);
        expect(supports).toHaveBeenCalledTimes(1);
    });
});

describe('geometryValueIssue', () => {
    it('wants at least two whole points and plain numbers', () => {
        expect(geometryValueIssue('points', '0,0 10,0')).toBeNull();
        expect(geometryValueIssue('points', '0 0 10 0 10 10')).toBeNull();
        expect(geometryValueIssue('points', '0,0')).toMatch(/points list/);
        expect(geometryValueIssue('points', '0,0 10')).toMatch(/points list/);
        expect(geometryValueIssue('points', '0,0 a,b')).toMatch(/points list/);
        expect(geometryValueIssue('x', '-1.5e2')).toBeNull();
        expect(geometryValueIssue('width', '10px')).toMatch(/not a number/);
        expect(geometryValueIssue('d', 'anything')).toBeNull();
    });
});
