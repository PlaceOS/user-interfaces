import { ANCHOR_ATTR } from '../lib/constants';
import { duplicateIds } from '../lib/ids';
import {
    MapDocument,
    MapDocumentError,
    parseViewBox,
} from '../lib/map-document';
import {
    anchor,
    load,
    loadMap,
    OFFICE,
    readMap,
    SAMPLE_MAPS,
    svg,
} from './fixtures';

function expectRejection(text: string, code: string) {
    let error: unknown;
    try {
        MapDocument.load(text);
    } catch (e) {
        error = e;
    }
    expect(error).toBeInstanceOf(MapDocumentError);
    expect((error as MapDocumentError).code).toBe(code);
}

describe('MapDocument.load', () => {
    it('rejects malformed XML with a parse error', () => {
        expectRejection(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect></svg>',
            'parse_error',
        );
    });

    it('rejects an empty document', () => {
        expectRejection('   ', 'empty');
    });

    it('rejects a DOCTYPE and entity declarations', () => {
        expectRejection(
            '<!DOCTYPE svg [<!ENTITY x "y">]><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">&x;</svg>',
            'doctype',
        );
        expectRejection(
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/>',
            'doctype',
        );
    });

    it('rejects a root that is not svg in the SVG namespace', () => {
        expectRejection(
            '<html xmlns="http://www.w3.org/1999/xhtml"><body/></html>',
            'not_svg',
        );
        expectRejection('<svg viewBox="0 0 1 1"><rect/></svg>', 'not_svg');
        expectRejection(readMap('test'), 'not_svg');
    });

    it('rejects a non-numeric viewBox', () => {
        expectRejection(svg('<rect/>', 'viewBox="0 0 100% 50"'), 'no_viewbox');
        expectRejection(svg('<rect/>', 'viewBox="0 0 100"'), 'no_viewbox');
        expectRejection(svg('<rect/>', 'viewBox="0 0 0 50"'), 'no_viewbox');
    });

    it('synthesises a viewBox once from numeric unitless width and height', () => {
        const doc = load('<rect/>', {}, 'width="800" height="600"');
        expect(doc.view_box).toEqual({ x: 0, y: 0, width: 800, height: 600 });
        expect(doc.view_box_synthesised).toBe(true);
        expect(doc.root.getAttribute('viewBox')).toBe('0 0 800 600');
    });

    it('rejects a missing viewBox when width or height carry units', () => {
        expectRejection(
            svg('<rect/>', 'width="100%" height="600"'),
            'no_viewbox',
        );
        expectRejection(
            svg('<rect/>', 'width="10cm" height="6cm"'),
            'no_viewbox',
        );
        expectRejection(svg('<rect/>', ''), 'no_viewbox');
    });

    it('parses viewBox values with commas and decimals', () => {
        expect(parseViewBox('0,0,2507.883,1523.289')).toEqual({
            x: 0,
            y: 0,
            width: 2507.883,
            height: 1523.289,
        });
        expect(parseViewBox('a b c d')).toBeNull();
    });

    it('keeps whether the source had an XML prolog', () => {
        const with_prolog = MapDocument.load(
            `<?xml version="1.0" encoding="UTF-8"?>\n${svg('<rect/>')}`,
        );
        expect(with_prolog.had_prolog).toBe(true);
        expect(
            with_prolog
                .serialise()
                .startsWith('<?xml version="1.0" encoding="UTF-8"?>\n<svg'),
        ).toBe(true);
        const without = load('<rect/>');
        expect(without.had_prolog).toBe(false);
        expect(without.serialise().startsWith('<svg')).toBe(true);
    });

    it('sanitises on load and records what was stripped', () => {
        const doc = load(
            `<script>alert(1)</script><rect id="r" onclick="x()" fill="red"/><foreignObject><div/></foreignObject>
             <animate attributeName="href"/><use href="https://evil/x.svg#a"/><image href="data:image/png;base64,AAAA" width="1" height="1"/>
             <style>@import url(http://evil/x.css); .a{fill:url(http://evil/p)} .b{fill:url(#grad)}</style>`,
        );
        const reasons = doc.sanitise_report.removed.map(
            (entry) => `${entry.kind}:${entry.name || entry.tag}`,
        );
        expect(reasons).toContain('element:script');
        expect(reasons).toContain('attribute:onclick');
        expect(reasons).toContain('element:foreignobject');
        expect(reasons).toContain('element:animate');
        expect(reasons).toContain('attribute:href');
        expect(
            doc.root.querySelector('script, foreignObject, animate'),
        ).toBeNull();
        expect(doc.root.querySelector('rect')?.hasAttribute('onclick')).toBe(
            false,
        );
        expect(doc.root.querySelector('use')?.hasAttribute('href')).toBe(false);
        expect(doc.root.querySelector('image')?.getAttribute('href')).toMatch(
            /^data:image\/png/,
        );
        const css = doc.root.querySelector('style')?.textContent || '';
        expect(css).not.toContain('@import');
        expect(css).not.toContain('http://evil');
        expect(css).toContain('url(#grad)');
    });

    it('assigns anchors in document order to every element', () => {
        const doc = load(
            '<g id="a"><rect id="b"/><rect id="c"/></g><text id="d">x</text>',
        );
        expect(doc.anchorOf(doc.root)).toBe('e1');
        expect(anchor(doc, 'a')).toBe('e2');
        expect(anchor(doc, 'b')).toBe('e3');
        expect(anchor(doc, 'c')).toBe('e4');
        expect(anchor(doc, 'd')).toBe('e5');
        expect(doc.elementCount()).toBe(5);
    });

    it('resolves targets by anchor, id or both and rejects disagreement', () => {
        const doc = load('<rect id="a"/><rect id="b"/>');
        expect(doc.resolve({ a: 'e2' }).ok).toBe(true);
        expect(doc.resolve({ id: 'b' }).ok).toBe(true);
        expect(doc.resolve({ a: 'e2', id: 'a' }).ok).toBe(true);
        const mismatch = doc.resolve({ a: 'e2', id: 'b' });
        expect(mismatch.ok).toBe(false);
        expect(doc.resolve({ a: 'e99' }).ok).toBe(false);
        expect(doc.resolve({ id: 'nope' }).ok).toBe(false);
        expect(doc.resolve({}).ok).toBe(false);
        expect(doc.resolve(null).ok).toBe(false);
    });

    it('hashes the canonical own-signature and ignores editor attributes', () => {
        const doc = load('<rect id="a" fill="red"/>');
        const rect = doc.byId('a') as Element;
        const hash = doc.hashOf(rect);
        expect(hash).toMatch(/^[0-9a-f]{8}$/);
        rect.setAttribute('data-map-editor-highlight', 'true');
        expect(doc.hashOf(rect)).toBe(hash);
        rect.setAttribute('fill', 'blue');
        expect(doc.hashOf(rect)).not.toBe(hash);
    });

    it('serialises without editor attributes and keeps namespaces', () => {
        const doc = MapDocument.load(OFFICE);
        const markup = doc.serialise();
        expect(markup).not.toContain(ANCHOR_ATTR);
        expect(markup).toContain('xmlns="http://www.w3.org/2000/svg"');
        expect(markup).toContain('xlink:href="#table-01.001"');
        expect(markup).toContain('<marker id="arrow"');
        expect(markup).toContain('<tspan id="sub-1"');
        expect(
            doc
                .elements()
                .every((element) => element.hasAttribute(ANCHOR_ATTR)),
        ).toBe(true);
    });

    it('clones with the same anchors and an independent tree', () => {
        const doc = MapDocument.load(OFFICE);
        const copy = doc.clone();
        expect(copy.elementCount()).toBe(doc.elementCount());
        expect(anchor(copy, 'table-01.002')).toBe(anchor(doc, 'table-01.002'));
        (copy.byId('table-01.002') as Element).setAttribute('fill', 'red');
        expect(doc.byId('table-01.002')?.getAttribute('fill')).toBeNull();
        expect(copy.nextAnchor()).toBe(doc.nextAnchor());
    });

    it('swaps the root in place and re-indexes anchors', () => {
        const doc = MapDocument.load(OFFICE);
        const snapshot = doc.root.cloneNode(true) as Element;
        (doc.byId('table-01.001') as Element).remove();
        expect(doc.byId('table-01.001')).toBeNull();
        doc.replaceRoot(snapshot);
        expect(doc.byId('table-01.001')).not.toBeNull();
        expect(doc.byAnchor(anchor(doc, 'table-01.001'))).toBe(
            doc.byId('table-01.001'),
        );
        expect(doc.root.ownerDocument.documentElement).toBe(doc.root);
    });

    describe.each(SAMPLE_MAPS)('sample map %s', (name) => {
        it('loads, round-trips with equal signatures and stable anchors, and strips nothing', () => {
            const doc = loadMap(name);
            expect(doc.sanitise_report.removed).toEqual([]);
            expect(doc.elementCount()).toBeGreaterThan(20);
            const before = doc.signatures();
            const reloaded = MapDocument.load(doc.serialise());
            expect(reloaded.elementCount()).toBe(doc.elementCount());
            const after = reloaded.signatures();
            let differences = 0;
            for (const [key, signature] of before) {
                if (after.get(key) !== signature) differences++;
            }
            expect(differences).toBe(0);
            const duplicates = duplicateIds(doc.root);
            for (const element of doc.elements()) {
                const id = element.getAttribute('id');
                if (!id || duplicates.includes(id)) continue;
                expect(reloaded.anchorOf(reloaded.byId(id) as Element)).toBe(
                    doc.anchorOf(element),
                );
            }
            expect(reloaded.had_prolog).toBe(doc.had_prolog);
            expect(reloaded.view_box).toEqual(doc.view_box);
        });

        it('serialises within a few bytes of the source', () => {
            const doc = loadMap(name);
            const source = readMap(name);
            expect(
                Math.abs(doc.serialise().length - source.length),
            ).toBeLessThan(200);
        });
    });
});
