import { MapDocument } from '../lib/map-document';
import {
    parseStyleText,
    selectorSpecificity,
    StyleResolver,
} from '../lib/style-resolution';
import { load, loadMap, OFFICE } from './fixtures';

describe('style resolution', () => {
    it('parses flat rules and ignores comments and at-rules', () => {
        const rules = parseStyleText(
            '/* c */ .a, .b { fill: red; stroke: blue } @media print { .c { fill: x } } .d{opacity:0.5!important}',
        );
        expect(rules).toEqual([
            {
                selectors: ['.a', '.b'],
                declarations: { fill: 'red', stroke: 'blue' },
            },
            { selectors: ['.d'], declarations: { opacity: '0.5' } },
        ]);
    });

    it('ranks specificity id > class > tag', () => {
        expect(selectorSpecificity('#a')).toBe(100);
        expect(selectorSpecificity('.a.b')).toBe(20);
        expect(selectorSpecificity('g rect')).toBe(2);
        expect(selectorSpecificity('*')).toBe(0);
    });

    it('resolves inline style over rules over attributes, inherited', () => {
        const doc = load(
            `<defs><style>.x{fill:#111}rect{fill:#222}#i{fill:#333}</style></defs>
             <g fill="#444"><rect id="a" class="x" fill="#555"/><rect id="b"/><rect id="c" class="x" style="fill:#666"/><rect id="i" class="x"/><circle id="d"/></g>`,
        );
        const resolver = new StyleResolver(doc.root);
        expect(resolver.own(doc.byId('a') as Element, 'fill')).toBe('#111');
        expect(resolver.own(doc.byId('b') as Element, 'fill')).toBe('#222');
        expect(resolver.own(doc.byId('c') as Element, 'fill')).toBe('#666');
        expect(resolver.own(doc.byId('i') as Element, 'fill')).toBe('#333');
        expect(
            resolver.inherited(doc.byId('d') as Element, 'fill', 'black'),
        ).toBe('#444');
        expect(resolver.visibleColour(doc.byId('d') as Element, 'stroke')).toBe(
            '',
        );
    });

    it('applies the modal visibility rules', () => {
        const doc = load(
            `<defs><style>.hidden{display:none}</style></defs>
             <g class="hidden"><rect id="in-hidden" width="1" height="1"/></g>
             <rect id="no-fill" fill="none" width="1" height="1"/>
             <rect id="stroked" fill="none" stroke="#000" width="1" height="1"/>
             <line id="bare-line" x1="0" y1="0" x2="1" y2="1"/>
             <line id="stroked-line" x1="0" y1="0" x2="1" y2="1" stroke="#000"/>
             <text id="empty-text">   </text><text id="text">Hi</text>
             <g id="empty-group"/><g id="group"><rect width="1" height="1"/></g>
             <rect id="zero-opacity" opacity="0" width="1" height="1"/>
             <use id="use-no-ref"/><use id="use" href="#group"/>`,
        );
        const resolver = new StyleResolver(doc.root);
        const visible = (id: string) =>
            resolver.isVisible(doc.byId(id) as Element);
        expect(visible('in-hidden')).toBe(false);
        expect(visible('no-fill')).toBe(false);
        expect(visible('stroked')).toBe(true);
        expect(visible('bare-line')).toBe(false);
        expect(visible('stroked-line')).toBe(true);
        expect(visible('empty-text')).toBe(false);
        expect(visible('text')).toBe(true);
        expect(visible('empty-group')).toBe(false);
        expect(visible('group')).toBe(true);
        expect(visible('zero-opacity')).toBe(false);
        expect(visible('use-no-ref')).toBe(false);
        expect(visible('use')).toBe(true);
        expect(
            resolver.isVisible(doc.root.querySelector('style') as Element),
        ).toBe(false);
    });

    it('finds descendants that override a property', () => {
        const doc = MapDocument.load(OFFICE);
        const resolver = new StyleResolver(doc.root);
        const desks = doc.byId('desks') as Element;
        expect(resolver.overridingDescendants(desks, 'fill').length).toBe(3);
        expect(resolver.overridingDescendants(desks, 'opacity').length).toBe(0);
    });

    it('resolves class fills on a real map', () => {
        const doc = loadMap('level_1');
        const resolver = new StyleResolver(doc.root);
        const rules = resolver.rules;
        expect(rules.length).toBeGreaterThan(40);
        const cls1 = doc.root.querySelector('.cls-1') as Element;
        expect(resolver.own(cls1, 'fill')).toBe('#81949b');
        expect(resolver.isVisible(cls1)).toBe(true);
    });
});
