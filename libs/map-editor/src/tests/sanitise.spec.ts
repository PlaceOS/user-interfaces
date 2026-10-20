import { MapDocument } from '../lib/map-document';
import {
    cleanStyleText,
    decodeCssEscapes,
    isUnsafeCssValue,
    purifyMarkup,
    sanitiseTree,
} from '../lib/sanitise';
import { loadMap, readMap, SAMPLE_MAPS, svg } from './fixtures';

const DIRTY = `<g id="wrap" onload="x()">
    <style>.k{fill:#123} .bad{fill:url(http://evil/p)} @import url(x.css);</style>
    <text id="t" x="1" y="2">Hi <tspan id="s">there</tspan></text>
    <marker id="m" viewBox="0 0 10 10"><path d="M0 0 L10 5"/></marker>
    <filter id="f"><feGaussianBlur stdDeviation="1"/></filter>
    <clipPath id="clip"><rect width="1" height="1"/></clipPath>
    <linearGradient id="lg"><stop offset="0"/></linearGradient>
    <script>alert(1)</script>
    <foreignObject><div>html</div></foreignObject>
    <animate attributeName="href" to="javascript:alert(1)"/>
    <animateTransform attributeName="transform"/>
    <set attributeName="x" to="1"/>
    <use href="https://evil/x.svg#a"/><use id="ok-use" href="#t"/>
    <image id="img-external" href="http://evil/x.png" width="1" height="1"/>
    <image id="img-data" href="data:image/png;base64,AAAA" width="1" height="1"/>
    <a href="javascript:alert(1)"><rect id="link" width="1" height="1"/></a>
    <rect id="styled" style="fill:url(http://evil/p);stroke:#000" width="1" height="1"/>
    <iframe src="https://evil"/>
</g>`;

describe('sanitiseTree', () => {
    it('strips the deny-list and keeps style, text, tspan, marker, filters and gradients', () => {
        const doc = new DOMParser().parseFromString(
            svg(DIRTY),
            'image/svg+xml',
        );
        const root = doc.documentElement;
        const report = sanitiseTree(root);
        const tags = Array.from(root.querySelectorAll('*')).map(
            (e) => e.localName,
        );
        for (const kept of [
            'style',
            'text',
            'tspan',
            'marker',
            'filter',
            'feGaussianBlur',
            'clipPath',
            'linearGradient',
            'a',
        ]) {
            expect(tags).toContain(kept);
        }
        for (const gone of [
            'script',
            'foreignObject',
            'animate',
            'animateTransform',
            'set',
            'iframe',
        ]) {
            expect(tags).not.toContain(gone);
        }
        expect(root.querySelector('#wrap')?.hasAttribute('onload')).toBe(false);
        expect(root.querySelector('a')?.hasAttribute('href')).toBe(false);
        expect(root.querySelector('#ok-use')?.getAttribute('href')).toBe('#t');
        expect(root.querySelector('#img-external')?.hasAttribute('href')).toBe(
            false,
        );
        expect(root.querySelector('#img-data')?.getAttribute('href')).toMatch(
            /^data:image/,
        );
        expect(root.querySelector('#styled')?.getAttribute('style')).toBe(
            'stroke:#000',
        );
        const css = root.querySelector('style')?.textContent || '';
        expect(css).toContain('.k{fill:#123}');
        expect(css).not.toContain('evil');
        expect(css).not.toContain('@import');
        expect(report.removed.length).toBeGreaterThanOrEqual(10);
    });

    it('cleans style text without touching safe rules', () => {
        const safe = '.a{fill:#fff;stroke:url(#g)}';
        expect(cleanStyleText(safe)).toEqual({ text: safe, removed: [] });
        const cleaned = cleanStyleText(
            '.a{fill:url("http://x");behavior:url(x.htc);stroke:#000}',
        );
        expect(cleaned.text).toBe('.a{stroke:#000}');
        expect(cleaned.removed.length).toBe(2);
    });

    it('decodes CSS escapes before testing for imports and external urls', () => {
        expect(decodeCssEscapes('\\31 0 u\\72l(\\.)')).toBe('10 url(.)');
        expect(isUnsafeCssValue('fill:u\\72l(http://evil/p)')).toBe(true);
        expect(isUnsafeCssValue('fill:u\\72l(#g)')).toBe(false);
        const cleaned = cleanStyleText(
            '@\\69 mport u\\72l(http://evil/x.css); .a{fill:u\\72l(http://evil/x.svg#g);stroke:#000}',
        );
        expect(cleaned.removed.length).toBe(2);
        expect(cleaned.text).not.toContain('evil');
        expect(cleaned.text).toContain('stroke:#000');
        expect(cleanStyleText('@media print{.a{fill:#000}}').removed).toEqual(
            [],
        );
        const doc = MapDocument.load(
            svg(
                '<style>@\\69 mport u\\72l(http://evil/x.css);</style><rect id="r" style="fill:u\\72l(http://evil/p);stroke:#000" width="1" height="1"/>',
            ),
        );
        expect(doc.sanitise_report.removed.length).toBe(2);
        expect(doc.serialise()).not.toContain('evil');
        expect(doc.byId('r')?.getAttribute('style')).toBe('stroke:#000');
    });

    describe.each(SAMPLE_MAPS)('sample map %s', (name) => {
        it('is untouched by the deny-list', () => {
            const text = readMap(name);
            const parsed = new DOMParser().parseFromString(
                text,
                'image/svg+xml',
            );
            const before = parsed.documentElement.querySelectorAll('*').length;
            const style_before = parsed.querySelector('style')?.textContent;
            const report = sanitiseTree(parsed.documentElement);
            expect(report.removed).toEqual([]);
            expect(parsed.documentElement.querySelectorAll('*').length).toBe(
                before,
            );
            expect(parsed.querySelector('style')?.textContent).toBe(
                style_before,
            );
        });

        it('survives purifyMarkup for its defs, style and text', () => {
            const doc = loadMap(name);
            const serializer = new XMLSerializer();
            for (const selector of ['defs', 'text', 'g']) {
                const element = doc.root.querySelector(selector);
                if (!element) continue;
                const markup = serializer.serializeToString(element);
                const purified = purifyMarkup(markup);
                expect(purified.error).toBeUndefined();
                expect(purified.element?.localName).toBe(selector);
                expect(purified.element?.querySelectorAll('*').length).toBe(
                    element.querySelectorAll('*').length,
                );
                expect(purified.report.removed).toEqual([]);
                if (selector === 'defs') {
                    expect(
                        purified.element?.querySelector('style')?.textContent,
                    ).toBe(element.querySelector('style')?.textContent);
                }
                if (selector === 'text') {
                    expect(purified.element?.textContent).toBe(
                        element.textContent,
                    );
                    expect(
                        purified.element?.querySelectorAll('tspan').length,
                    ).toBe(element.querySelectorAll('tspan').length);
                }
            }
        });
    });
});

describe('purifyMarkup', () => {
    it('keeps style, text, tspan and marker and strips scripts, handlers, foreign content, animation and use', () => {
        const purified = purifyMarkup(DIRTY);
        expect(purified.element?.localName).toBe('g');
        const tags = Array.from(
            purified.element?.querySelectorAll('*') || [],
        ).map((e) => e.localName);
        for (const kept of [
            'style',
            'text',
            'tspan',
            'marker',
            'filter',
            'clipPath',
            'linearGradient',
        ]) {
            expect(tags).toContain(kept);
        }
        for (const gone of [
            'script',
            'foreignObject',
            'animate',
            'animateTransform',
            'set',
            'iframe',
        ]) {
            expect(tags).not.toContain(gone);
        }
        expect(purified.element?.hasAttribute('onload')).toBe(false);
        expect(
            purified.element
                ?.querySelector('#img-external')
                ?.hasAttribute('href'),
        ).toBe(false);
        expect(purified.element?.querySelector('a')?.hasAttribute('href')).toBe(
            false,
        );
        expect(tags).not.toContain('use');
        expect(
            purified.report.removed.filter((entry) => entry.tag === 'use')
                .length,
        ).toBe(2);
        expect(purified.report.removed.length).toBeGreaterThan(5);
    });

    it('removes SVG elements outside the allow-list and refuses a root outside it', () => {
        const purified = purifyMarkup(
            '<g><feImage href="#t"/><unknownThing/><rect id="r"/></g>',
        );
        expect(
            Array.from(purified.element?.querySelectorAll('*') || []).map(
                (e) => e.localName,
            ),
        ).toEqual(['rect']);
        expect(purified.report.removed.map((entry) => entry.tag)).toEqual([
            'feImage',
            'unknownThing',
        ]);
        expect(purifyMarkup('<use href="#t"/>').error).toMatch(/not allowed/);
    });

    it('strips attributes with external or escaped url values', () => {
        const purified = purifyMarkup(
            '<g fill="url(http://evil/p#g)" cursor="u\\72l(http://evil/c)" stroke="url(#g)" data-note="url(x)"><rect/></g>',
        );
        expect(purified.element?.hasAttribute('fill')).toBe(false);
        expect(purified.element?.hasAttribute('cursor')).toBe(false);
        expect(purified.element?.getAttribute('stroke')).toBe('url(#g)');
        expect(purified.element?.getAttribute('data-note')).toBe('url(x)');
    });

    it('strips link pings', () => {
        const purified = purifyMarkup(
            '<a href="#t" ping="https://evil/audit"><rect/></a>',
        );
        expect(purified.element?.hasAttribute('ping')).toBe(false);
        expect(purified.element?.getAttribute('href')).toBe('#t');
    });

    it('rejects markup that is not exactly one element', () => {
        expect(purifyMarkup('<rect/><rect/>').error).toMatch(
            /exactly one element/,
        );
        expect(purifyMarkup('just text').error).toMatch(/exactly one element/);
        expect(purifyMarkup('<script>x</script>').error).toBeDefined();
        expect(purifyMarkup('<rect>').error).toMatch(/not well-formed/);
        expect(purifyMarkup('<?pi x?><rect/>').element?.localName).toBe('rect');
        expect(purifyMarkup('<rect id="a"/>').element?.getAttribute('id')).toBe(
            'a',
        );
    });

    it('keeps camel-case SVG names and attributes', () => {
        const purified = purifyMarkup(
            '<g><linearGradient id="g" gradientUnits="userSpaceOnUse"/><rect clip-path="url(#c)" fill="url(#g)"/></g>',
        );
        expect(
            purified.element
                ?.querySelector('linearGradient')
                ?.getAttribute('gradientUnits'),
        ).toBe('userSpaceOnUse');
        expect(
            purified.element?.querySelector('rect')?.getAttribute('fill'),
        ).toBe('url(#g)');
    });
});
