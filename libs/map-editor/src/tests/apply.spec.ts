import { applyOps, upsertStyleRule } from '../lib/apply';
import { ANCHOR_ATTR } from '../lib/constants';
import { AttributeGeometryProvider, NoGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { MapOp, NameValue } from '../lib/ops';
import { anchor, load, loadMap, OFFICE } from './fixtures';

const geometry = new AttributeGeometryProvider();

function office(): MapDocument {
    return MapDocument.load(OFFICE, { geometry });
}

function one(doc: MapDocument, op: MapOp) {
    const result = applyOps(doc, [op]);
    return { result, applied: result.applied[0], rejected: result.rejected[0] };
}

describe('applyOps', () => {
    describe('set_attr', () => {
        it('refuses the editor attributes', () => {
            const doc = office();
            expect(
                one(doc, {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'plant-2' },
                    name: 'data-map-editor-anchor',
                    value: 'e1',
                }).rejected?.reason,
            ).toMatch(/not editable/);
            expect(
                one(doc, {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'plant-2' },
                    name: 'data-name',
                    value: 'Fern',
                }).applied,
            ).toBeDefined();
        });

        it('sets the attribute and the inline style for fill and stroke', () => {
            const doc = office();
            const { applied } = one(doc, {
                op: 'set_attr',
                why: '',
                target: { id: 'table-01.001' },
                name: 'fill',
                value: '#abc',
            });
            const rect = doc.byId('table-01.001') as SVGElement;
            expect(applied).toBeDefined();
            expect(rect.getAttribute('fill')).toBe('#abc');
            expect(rect.style.getPropertyValue('fill')).toBe('#abc');
            expect(applied.anchors).toEqual([anchor(doc, 'table-01.001')]);
        });

        it('removes the attribute and inline style for a null value', () => {
            const doc = office();
            one(doc, {
                op: 'set_attr',
                why: '',
                target: { id: 'table-01.001' },
                name: 'fill',
                value: '#abc',
            });
            one(doc, {
                op: 'set_attr',
                why: '',
                target: { id: 'table-01.001' },
                name: 'fill',
                value: null,
            });
            const rect = doc.byId('table-01.001') as SVGElement;
            expect(rect.hasAttribute('fill')).toBe(false);
            expect(rect.style.getPropertyValue('fill')).toBe('');
        });

        it('rejects attributes outside the allow-list and bad values', () => {
            const doc = office();
            for (const name of [
                'id',
                'transform',
                'href',
                'xlink:href',
                'style',
                'onclick',
                'display',
                'd',
            ]) {
                expect(
                    one(doc, {
                        op: 'set_attr',
                        why: '',
                        target: { id: 'bg' },
                        name,
                        value: 'x',
                    }).rejected?.reason,
                ).toMatch(/not editable/);
            }
            expect(
                one(doc, {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'bg' },
                    name: 'fill',
                    value: '#f28c28.',
                }).rejected?.reason,
            ).toMatch(/not a colour/);
            expect(
                one(doc, {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'bg' },
                    name: 'opacity',
                    value: '2',
                }).rejected?.reason,
            ).toMatch(/opacity/);
            expect(
                one(doc, {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'bg' },
                    name: 'data-name',
                    value: 'Kitchen',
                }).applied,
            ).toBeDefined();
            expect(doc.byId('bg')?.getAttribute('data-name')).toBe('Kitchen');
        });

        it('leaves every other element untouched', () => {
            const doc = loadMap('level_1', { geometry });
            const before = doc.signatures();
            const target = doc.byId('table-01.004') as Element;
            one(doc, {
                op: 'set_attr',
                why: '',
                target: { id: 'table-01.004' },
                name: 'fill',
                value: 'red',
            });
            const after = doc.signatures();
            const changed = [...before]
                .filter(([key, sig]) => after.get(key) !== sig)
                .map(([key]) => key);
            expect(changed).toEqual([doc.anchorOf(target)]);
        });
    });

    describe('set_style_rule', () => {
        it('appends a rule and merges into an existing one', () => {
            expect(
                upsertStyleRule('.a{fill:#000}', '.b', { fill: '#fff' }),
            ).toBe('.a{fill:#000}\n.b{fill:#fff}');
            expect(
                upsertStyleRule(
                    '.a{fill:#000;stroke:#111}.ab{fill:#222}',
                    '.a',
                    { fill: '#fff' },
                ),
            ).toBe('.a{fill:#fff;stroke:#111}.ab{fill:#222}');
            expect(upsertStyleRule('', '.a', { fill: '#fff' })).toBe(
                '.a{fill:#fff}',
            );
        });

        it('matches whole selectors only and keeps !important on untouched declarations', () => {
            expect(
                upsertStyleRule('.foo .cls-1{fill:red !important}', '.cls-1', {
                    stroke: 'blue',
                }),
            ).toBe('.foo .cls-1{fill:red !important}\n.cls-1{stroke:blue}');
            expect(
                upsertStyleRule('.a{fill:red !important;stroke:#111}', '.a', {
                    stroke: 'blue',
                }),
            ).toBe('.a{fill:red !important;stroke:blue}');
            expect(
                upsertStyleRule('.b{fill:#000}\n.a{fill:#000}', '.a', {
                    fill: '#fff',
                }),
            ).toBe('.b{fill:#000}\n.a{fill:#fff}');
        });

        it('edits the first style element and rejects unsafe or unknown properties', () => {
            const doc = office();
            const { applied } = one(doc, {
                op: 'set_style_rule',
                why: '',
                selector: '.desk',
                declarations: [{ name: 'fill', value: '#eee' }],
            });
            expect(applied).toBeDefined();
            expect(doc.root.querySelector('style')?.textContent).toContain(
                '.desk{fill:#eee;stroke:#446}',
            );
            expect(
                one(doc, {
                    op: 'set_style_rule',
                    why: '',
                    selector: '*',
                    declarations: [{ name: 'fill', value: '#eee' }],
                }).rejected,
            ).toBeDefined();
            expect(
                one(doc, {
                    op: 'set_style_rule',
                    why: '',
                    selector: '.desk',
                    declarations: [{ name: 'display', value: 'none' }],
                }).rejected?.reason,
            ).toMatch(/not editable/);
            expect(
                one(doc, {
                    op: 'set_style_rule',
                    why: '',
                    selector: '.desk',
                    declarations: [{ name: 'fill', value: 'url(http://x)' }],
                }).rejected,
            ).toBeDefined();
            expect(
                one(doc, {
                    op: 'set_style_rule',
                    why: '',
                    selector: '.desk[',
                    declarations: [{ name: 'fill', value: '#fff' }],
                }).rejected?.reason,
            ).toMatch(/parse/);
            expect(
                one(doc, {
                    op: 'set_style_rule',
                    why: '',
                    selector: '.desk',
                    declarations: [
                        { name: 5, value: 'x' } as unknown as NameValue,
                    ],
                }).rejected?.reason,
            ).toMatch(/not editable/);
        });

        it('creates a style element when the map has none', () => {
            const doc = load('<rect id="r"/>');
            const { applied } = one(doc, {
                op: 'set_style_rule',
                why: '',
                selector: '#r',
                declarations: [{ name: 'fill', value: 'red' }],
            });
            expect(applied.created.length).toBe(1);
            expect(doc.root.firstElementChild?.localName).toBe('style');
        });
    });

    describe('set_text', () => {
        it('drops the tspan lines of a text element and reports them as touched', () => {
            const doc = office();
            const line = anchor(doc, 'sub-1');
            const { applied } = one(doc, {
                op: 'set_text',
                why: '',
                target: { id: 'label-1' },
                text: 'Boardroom',
            });
            const label = doc.byId('label-1') as Element;
            expect(label.textContent).toBe('Boardroom');
            expect(label.querySelector('tspan')).toBeNull();
            expect(applied.touched).toContain(line);
        });

        it('replaces the text of text and tspan only', () => {
            const doc = office();
            one(doc, {
                op: 'set_text',
                why: '',
                target: { id: 'sub-1' },
                text: '(10 seats)',
            });
            expect(doc.byId('sub-1')?.textContent).toBe('(10 seats)');
            expect(
                one(doc, {
                    op: 'set_text',
                    why: '',
                    target: { id: 'bg' },
                    text: 'x',
                }).rejected?.reason,
            ).toMatch(/text or tspan/);
        });
    });

    describe('transform', () => {
        it('prepends a translate on a root child', () => {
            const doc = office();
            one(doc, {
                op: 'transform',
                why: '',
                target: { id: 'guide' },
                translate: [5, 10],
            });
            expect(doc.byId('guide')?.getAttribute('transform')).toBe(
                'translate(5 10)',
            );
            expect(
                geometry.bboxOf(doc.byId('guide') as Element)?.slice(0, 2),
            ).toEqual([5, 260]);
        });

        it('converts a root-space delta into the parent space through the inverse CTM', () => {
            const doc = load(
                `<g id="g" transform="scale(2)"><rect id="r" x="0" y="0" width="10" height="10"/></g>`,
                { geometry },
            );
            one(doc, {
                op: 'transform',
                why: '',
                target: { id: 'r' },
                translate: [10, 0],
            });
            expect(doc.byId('r')?.getAttribute('transform')).toBe(
                'translate(5 0)',
            );
            expect(geometry.bboxOf(doc.byId('r') as Element)).toEqual([
                10, 0, 20, 20,
            ]);
        });

        it('keeps the element transform and composes scale and rotate about an origin', () => {
            const doc = load(
                `<rect id="r" transform="translate(1 1)" x="0" y="0" width="10" height="10"/>`,
                { geometry },
            );
            one(doc, {
                op: 'transform',
                why: '',
                targets: [{ id: 'r' }],
                scale: [2, 2],
                origin: [0, 0],
            });
            expect(doc.byId('r')?.getAttribute('transform')).toBe(
                'matrix(2 0 0 2 0 0) translate(1 1)',
            );
            expect(geometry.bboxOf(doc.byId('r') as Element)).toEqual([
                2, 2, 20, 20,
            ]);
        });

        it('flags an unconverted transform when the parent CTM is unknown', () => {
            const doc = load(
                `<g transform="scale(2)"><rect id="r" width="10" height="10"/></g>`,
                { geometry: new NoGeometryProvider() },
            );
            const { applied } = one(doc, {
                op: 'transform',
                why: '',
                target: { id: 'r' },
                translate: [10, 0],
            });
            expect(applied.note).toMatch(/parent transform unknown/);
            expect(doc.byId('r')?.getAttribute('transform')).toBe(
                'translate(10 0)',
            );
        });

        it('rejects the root, empty specs and bad numbers', () => {
            const doc = office();
            expect(
                one(doc, {
                    op: 'transform',
                    why: '',
                    target: { a: 'e1' },
                    translate: [1, 1],
                }).rejected?.reason,
            ).toMatch(/root/);
            expect(
                one(doc, { op: 'transform', why: '', target: { id: 'bg' } })
                    .rejected?.reason,
            ).toMatch(/no translate/);
            expect(
                one(doc, {
                    op: 'transform',
                    why: '',
                    target: { id: 'bg' },
                    scale: [0, 1],
                }).rejected?.reason,
            ).toMatch(/scale/);
        });
    });

    describe('delete', () => {
        it('removes elements with their subtrees and reports every removed anchor', () => {
            const doc = office();
            const desks = doc.byId('desks') as Element;
            const subtree = MapDocument.subtree(desks).map((e) =>
                doc.anchorOf(e),
            );
            const { applied } = one(doc, {
                op: 'delete',
                why: '',
                targets: [{ id: 'desks' }],
            });
            expect(doc.byId('desks')).toBeNull();
            expect(applied.touched).toEqual(subtree);
        });

        it('refuses the root, defs and the only style', () => {
            const doc = office();
            expect(
                one(doc, { op: 'delete', why: '', target: { a: 'e1' } })
                    .rejected?.reason,
            ).toMatch(/root/);
            const defs = doc.anchorOf(
                doc.root.querySelector('defs') as Element,
            );
            expect(
                one(doc, { op: 'delete', why: '', target: { a: defs } })
                    .rejected?.reason,
            ).toMatch(/defs/);
            const style = doc.anchorOf(
                doc.root.querySelector('style') as Element,
            );
            expect(
                one(doc, { op: 'delete', why: '', target: { a: style } })
                    .rejected?.reason,
            ).toMatch(/style/);
            expect(
                one(doc, { op: 'delete', why: '' }).rejected?.reason,
            ).toMatch(/no target/);
        });
    });

    describe('duplicate', () => {
        it('copies with an offset per copy, strips descendant ids and follows an id pattern', () => {
            const doc = office();
            const { applied } = one(doc, {
                op: 'duplicate',
                why: '',
                target: { id: 'table-01.003' },
                translate: [40, 0],
                count: 2,
                id_pattern: 'table-01.{n:03}',
            });
            expect(applied.created.length).toBe(2);
            expect(doc.byId('table-01.004')?.getAttribute('transform')).toBe(
                'translate(40 0)',
            );
            expect(doc.byId('table-01.005')?.getAttribute('transform')).toBe(
                'translate(80 0)',
            );
            expect(
                doc
                    .byId('table-01.005')
                    ?.previousElementSibling?.getAttribute('id'),
            ).toBe('table-01.004');
            expect(
                geometry.bboxOf(doc.byId('table-01.005') as Element),
            ).toEqual([260, 200, 30, 20]);
        });

        it('strips ids inside the copy and converts the offset into the parent space', () => {
            const doc = load(
                `<g id="g" transform="scale(2)"><g id="src"><rect id="inner" width="1" height="1"/></g></g>`,
                { geometry },
            );
            const { applied } = one(doc, {
                op: 'duplicate',
                why: '',
                target: { id: 'src' },
                translate: [10, 0],
                new_id: 'copy',
            });
            expect(applied.created.length).toBe(2);
            const copy = doc.byId('copy') as Element;
            expect(copy.querySelector('[id]')).toBeNull();
            expect(copy.getAttribute('transform')).toBe('translate(5 0)');
            expect(copy.getAttribute(ANCHOR_ATTR)).not.toBe(
                doc.byId('src')?.getAttribute(ANCHOR_ATTR),
            );
            expect(doc.byId('inner')).not.toBeNull();
        });

        it('defaults to an ai- id and refuses collisions', () => {
            const doc = office();
            one(doc, {
                op: 'duplicate',
                why: '',
                target: { id: 'zone-01.A' },
                translate: [0, 10],
            });
            expect(doc.byId('ai-1')).not.toBeNull();
            expect(
                one(doc, {
                    op: 'duplicate',
                    why: '',
                    target: { id: 'zone-01.A' },
                    translate: [0, 10],
                    new_id: 'bg',
                }).rejected?.reason,
            ).toMatch(/already exists/);
            expect(
                one(doc, {
                    op: 'duplicate',
                    why: '',
                    target: { id: 'zone-01.A' },
                    translate: [0, 10],
                    new_id: '1bad',
                }).rejected?.reason,
            ).toMatch(/letter/);
            expect(
                one(doc, {
                    op: 'duplicate',
                    why: '',
                    target: { id: 'zone-01.A' },
                    translate: [0, 10],
                    count: 41,
                }).rejected?.reason,
            ).toMatch(/count/);
        });
    });

    describe('insert_shape', () => {
        it('refuses an attribute without a string name', () => {
            const doc = office();
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'rect',
                    attrs: [{ name: 5, value: 'x' } as unknown as NameValue],
                }).rejected?.reason,
            ).toMatch(/not allowed on a rect/);
        });

        it('keeps furniture visible under a new booking overlay copied from a solid room class', () => {
            const doc = MapDocument.load(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><style>.room {fill:#666;fill-opacity:1}</style><g id="furniture"><rect id="desk-1" x="20" y="20" width="20" height="20" fill="#fff"/></g><g id="rooms"><rect id="area-existing-status" class="room" x="60" y="60" width="20" height="20"/></g></svg>`,
                { geometry },
            );
            const furniture = doc.byId('furniture')!.outerHTML;
            const existing = doc.byId('area-existing-status')!.outerHTML;
            const result = one(doc, {
                op: 'insert_shape',
                why: '',
                kind: 'rect',
                parent: { id: 'rooms' },
                new_id: 'area-new-status',
                attrs: [
                    { name: 'x', value: '10' },
                    { name: 'y', value: '10' },
                    { name: 'width', value: '40' },
                    { name: 'height', value: '40' },
                    { name: 'class', value: 'room' },
                ],
            });
            expect(result.rejected).toBeUndefined();
            const overlay = doc.byId('area-new-status') as SVGElement;
            expect(overlay.getAttribute('fill-opacity')).toBe('0.3');
            expect(overlay.style.getPropertyValue('fill-opacity')).toBe('0.3');
            expect(doc.byId('furniture')!.outerHTML).toBe(furniture);
            expect(doc.byId('area-existing-status')!.outerHTML).toBe(existing);
            one(doc, {
                op: 'set_attr',
                why: '',
                target: { id: 'area-new-status' },
                name: 'fill-opacity',
                value: '0.2',
            });
            expect(overlay.style.getPropertyValue('fill-opacity')).toBe('0.2');
        });

        it('preserves explicit overlay opacity and ordinary inserted artwork', () => {
            const doc = office();
            for (const [id, attrs] of [
                [
                    'area-explicit-status',
                    [{ name: 'fill-opacity', value: '0.15' }],
                ],
                ['area-opacity-status', [{ name: 'opacity', value: '0.25' }]],
                ['ai-art', []],
            ] as const) {
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'rect',
                    new_id: id,
                    attrs: [
                        { name: 'width', value: '10' },
                        { name: 'height', value: '10' },
                        ...attrs,
                    ],
                });
            }
            expect(
                (
                    doc.byId('area-explicit-status') as SVGElement
                ).style.getPropertyValue('fill-opacity'),
            ).toBe('0.15');
            expect(
                (
                    doc.byId('area-opacity-status') as SVGElement
                ).style.getPropertyValue('opacity'),
            ).toBe('0.25');
            expect(doc.byId('ai-art')!.hasAttribute('fill-opacity')).toBe(
                false,
            );
        });

        it('inserts into the root with an ai- id and into a group after a sibling', () => {
            const doc = office();
            const first = one(doc, {
                op: 'insert_shape',
                why: '',
                kind: 'rect',
                attrs: [
                    { name: 'x', value: '10' },
                    { name: 'y', value: '10' },
                    { name: 'width', value: '5' },
                    { name: 'height', value: '5' },
                    { name: 'fill', value: 'red' },
                ],
            });
            expect(first.applied.created.length).toBe(1);
            expect(doc.root.lastElementChild?.getAttribute('id')).toBe('ai-1');
            const second = one(doc, {
                op: 'insert_shape',
                why: '',
                parent: { id: 'rooms' },
                after: { id: 'area-1.01-status' },
                kind: 'circle',
                attrs: [
                    { name: 'cx', value: '1' },
                    { name: 'cy', value: '1' },
                    { name: 'r', value: '1' },
                ],
                new_id: 'area-1.03-status',
            });
            expect(second.applied).toBeDefined();
            expect(
                doc
                    .byId('area-1.01-status')
                    ?.nextElementSibling?.getAttribute('id'),
            ).toBe('area-1.03-status');
        });

        it('carries the inverse parent transform so root units stay what was asked', () => {
            const doc = office();
            one(doc, {
                op: 'insert_shape',
                why: '',
                parent: { id: 'desks' },
                kind: 'rect',
                attrs: [
                    { name: 'x', value: '220' },
                    { name: 'y', value: '200' },
                    { name: 'width', value: '30' },
                    { name: 'height', value: '20' },
                ],
                new_id: 'table-01.004',
            });
            const rect = doc.byId('table-01.004') as Element;
            expect(rect.getAttribute('transform')).toBe('translate(-100 -200)');
            expect(geometry.bboxOf(rect)).toEqual([220, 200, 30, 20]);
        });

        it('rejects bad kinds, parents, attributes and path data', () => {
            const doc = office();
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'script' as 'rect',
                    attrs: [],
                }).rejected?.reason,
            ).toMatch(/cannot be inserted/);
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    parent: { id: 'bg' },
                    kind: 'rect',
                    attrs: [],
                }).rejected?.reason,
            ).toMatch(/parent/);
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'rect',
                    attrs: [{ name: 'onclick', value: 'x' }],
                }).rejected?.reason,
            ).toMatch(/not allowed/);
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'rect',
                    attrs: [{ name: 'href', value: '#a' }],
                }).rejected?.reason,
            ).toMatch(/not allowed/);
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'rect',
                    attrs: [{ name: 'x', value: 'ten' }],
                }).rejected?.reason,
            ).toMatch(/not a number/);
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'path',
                    attrs: [],
                }).rejected?.reason,
            ).toMatch(/needs d/);
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'path',
                    attrs: [{ name: 'd', value: 'L1 1' }],
                }).rejected?.reason,
            ).toMatch(/start with M/);
            expect(
                one(doc, {
                    op: 'insert_shape',
                    why: '',
                    kind: 'text',
                    attrs: [{ name: 'x', value: '1' }],
                    text: 'Hi',
                }).applied,
            ).toBeDefined();
            expect(doc.root.lastElementChild?.textContent).toBe('Hi');
        });
    });

    describe('set_id', () => {
        it('renames and rewrites url(#old) and href="#old" references', () => {
            const doc = office();
            const { applied } = one(doc, {
                op: 'set_id',
                why: '',
                target: { id: 'table-01.001' },
                new_id: 'table-01.010',
            });
            expect(doc.byId('table-01.001')).toBeNull();
            expect(doc.byId('table-01.010')).not.toBeNull();
            expect(doc.byId('ghost')?.getAttribute('xlink:href')).toBe(
                '#table-01.010',
            );
            expect(applied.touched).toContain(anchor(doc, 'ghost'));
            one(doc, {
                op: 'set_id',
                why: '',
                target: { id: 'arrow' },
                new_id: 'arrowhead',
            });
            expect(doc.byId('guide')?.getAttribute('marker-end')).toBe(
                'url(#arrowhead)',
            );
            one(doc, {
                op: 'set_id',
                why: '',
                target: { id: 'grad' },
                new_id: 'gradient',
            });
            expect(doc.byId('bg')?.getAttribute('fill')).toBe('url(#gradient)');
        });

        it('refuses duplicates and bad ids, and removes an id for null', () => {
            const doc = office();
            expect(
                one(doc, {
                    op: 'set_id',
                    why: '',
                    target: { id: 'bg' },
                    new_id: 'desks',
                }).rejected?.reason,
            ).toMatch(/already exists/);
            expect(
                one(doc, {
                    op: 'set_id',
                    why: '',
                    target: { id: 'bg' },
                    new_id: '2nd',
                }).rejected?.reason,
            ).toMatch(/letter/);
            expect(
                one(doc, {
                    op: 'set_id',
                    why: '',
                    target: { id: 'bg' },
                    new_id: 'a b',
                }).rejected?.reason,
            ).toMatch(/only contain/);
            const { applied } = one(doc, {
                op: 'set_id',
                why: '',
                target: { id: 'table-01.001' },
                new_id: null,
            });
            expect(doc.byId('table-01.001')).toBeNull();
            expect(applied.note).toMatch(/dangle/);
        });
    });

    describe('reorder', () => {
        it('moves among siblings', () => {
            const doc = office();
            const ids = () =>
                Array.from((doc.byId('desks') as Element).children).map((c) =>
                    c.getAttribute('id'),
                );
            one(doc, {
                op: 'reorder',
                why: '',
                target: { id: 'table-01.003' },
                position: 'first',
            });
            expect(ids()).toEqual([
                'table-01.003',
                'table-01.001',
                'table-01.002',
            ]);
            one(doc, {
                op: 'reorder',
                why: '',
                target: { id: 'table-01.003' },
                after: { id: 'table-01.001' },
            });
            expect(ids()).toEqual([
                'table-01.001',
                'table-01.003',
                'table-01.002',
            ]);
            one(doc, {
                op: 'reorder',
                why: '',
                target: { id: 'table-01.001' },
                before: { id: 'table-01.002' },
            });
            expect(ids()).toEqual([
                'table-01.003',
                'table-01.001',
                'table-01.002',
            ]);
            one(doc, {
                op: 'reorder',
                why: '',
                target: { id: 'table-01.003' },
                position: 'last',
            });
            expect(ids()).toEqual([
                'table-01.001',
                'table-01.002',
                'table-01.003',
            ]);
            expect(
                one(doc, {
                    op: 'reorder',
                    why: '',
                    target: { id: 'table-01.003' },
                    before: { id: 'bg' },
                }).rejected?.reason,
            ).toMatch(/siblings/);
            expect(
                one(doc, {
                    op: 'reorder',
                    why: '',
                    target: { id: 'table-01.003' },
                }).rejected?.reason,
            ).toMatch(/exactly one/);
        });
    });

    describe('group and ungroup', () => {
        it('wraps siblings in a new group and lifts them back out with the transform folded in', () => {
            const doc = office();
            const { applied } = one(doc, {
                op: 'group',
                why: '',
                targets: [{ id: 'table-01.002' }, { id: 'table-01.001' }],
                new_id: 'pod-1',
            });
            const pod = doc.byId('pod-1') as Element;
            expect(applied.created).toEqual([doc.anchorOf(pod)]);
            expect(pod.parentElement?.getAttribute('id')).toBe('desks');
            expect(
                Array.from(pod.children).map((c) => c.getAttribute('id')),
            ).toEqual(['table-01.001', 'table-01.002']);
            expect(pod.previousElementSibling).toBeNull();
            expect(
                one(doc, {
                    op: 'group',
                    why: '',
                    targets: [{ id: 'bg' }, { id: 'table-01.003' }],
                }).rejected?.reason,
            ).toMatch(/share one parent/);
            const ungrouped = one(doc, {
                op: 'ungroup',
                why: '',
                target: { id: 'desks' },
            });
            expect(ungrouped.applied).toBeDefined();
            expect(doc.byId('desks')).toBeNull();
            expect(pod.getAttribute('transform')).toBe('translate(100 200)');
            expect(doc.byId('table-01.003')?.getAttribute('transform')).toBe(
                'translate(100 200)',
            );
            expect(
                geometry.bboxOf(doc.byId('table-01.003') as Element),
            ).toEqual([180, 200, 30, 20]);
            expect(
                one(doc, { op: 'ungroup', why: '', target: { id: 'bg' } })
                    .rejected?.reason,
            ).toMatch(/needs a <g>/);
        });
    });

    describe('replace_element', () => {
        it('swaps in sanitised markup, keeps the id and anchor and assigns fresh descendant anchors', () => {
            const doc = office();
            const before = anchor(doc, 'area-1.02-status');
            const { applied } = one(doc, {
                op: 'replace_element',
                why: '',
                target: { id: 'area-1.02-status' },
                markup: '<g id="other" onclick="x()"><rect x="240" y="20" width="200" height="100"/><script>1</script><title>Room</title></g>',
            });
            expect(applied).toBeDefined();
            const replaced = doc.byId('area-1.02-status') as Element;
            expect(replaced.localName).toBe('g');
            expect(doc.anchorOf(replaced)).toBe(before);
            expect(replaced.hasAttribute('onclick')).toBe(false);
            expect(replaced.querySelector('script')).toBeNull();
            expect(replaced.querySelector('title')?.textContent).toBe('Room');
            expect(applied.created.length).toBe(2);
            expect(applied.note).toMatch(/ignored/);
            expect(doc.byId('other')).toBeNull();
        });

        it('rejects more than one element, oversized markup, the root and id collisions', () => {
            const doc = office();
            expect(
                one(doc, {
                    op: 'replace_element',
                    why: '',
                    target: { id: 'bg' },
                    markup: '<rect/><rect/>',
                }).rejected?.reason,
            ).toMatch(/exactly one/);
            expect(
                one(doc, {
                    op: 'replace_element',
                    why: '',
                    target: { a: 'e1' },
                    markup: '<rect/>',
                }).rejected?.reason,
            ).toMatch(/root/);
            expect(
                one(doc, {
                    op: 'replace_element',
                    why: '',
                    target: { id: 'bg' },
                    markup: `<rect data-x="${'x'.repeat(17 * 1024)}"/>`,
                }).rejected?.reason,
            ).toMatch(/KB/);
            expect(
                one(doc, {
                    op: 'replace_element',
                    why: '',
                    target: { id: 'bg' },
                    markup: '<g><rect id="desks"/></g>',
                }).rejected?.reason,
            ).toMatch(/already exists/);
            expect(
                one(doc, {
                    op: 'replace_element',
                    why: '',
                    target: { id: 'bg' },
                    markup: '<script>x</script>',
                }).rejected,
            ).toBeDefined();
        });
    });

    describe('replace_path', () => {
        it('replaces path data after a grammar check', () => {
            const doc = office();
            expect(
                one(doc, {
                    op: 'replace_path',
                    why: '',
                    target: { id: 'area-1.02-status' },
                    d: 'M240 20 h100 v50 h-100 z',
                }).applied,
            ).toBeDefined();
            expect(doc.byId('area-1.02-status')?.getAttribute('d')).toBe(
                'M240 20 h100 v50 h-100 z',
            );
            expect(
                one(doc, {
                    op: 'replace_path',
                    why: '',
                    target: { id: 'area-1.02-status' },
                    d: 'M1',
                }).rejected?.reason,
            ).toMatch(/partial/);
            expect(
                one(doc, {
                    op: 'replace_path',
                    why: '',
                    target: { id: 'bg' },
                    d: 'M0 0',
                }).rejected?.reason,
            ).toMatch(/needs a <path>/);
        });
    });

    it('applies a batch in order, skips indices and reports unknown targets', () => {
        const doc = office();
        const result = applyOps(
            doc,
            [
                {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'bg' },
                    name: 'fill',
                    value: '#111',
                },
                {
                    op: 'set_attr',
                    why: '',
                    target: { a: 'e999' },
                    name: 'fill',
                    value: '#111',
                },
                { op: 'no_change', why: '', reason: 'fine' },
                {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'bg' },
                    name: 'stroke',
                    value: '#222',
                },
            ],
            { skip: new Set([3]) },
        );
        expect(result.applied.map((a) => a.index)).toEqual([0, 2]);
        expect(result.rejected[0].reason).toMatch(/unknown anchor/);
        expect(doc.byId('bg')?.hasAttribute('stroke')).toBe(false);
        expect(result.touched).toEqual([anchor(doc, 'bg')]);
    });
});

describe('deleted positions and text lines', () => {
    const map = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100"><g id="labels"><rect id="first" x="0" y="0" width="5" height="5"/><path id="g1" d="M10 10h5v5h-5z" fill="#fff"/><path id="g2" d="M16 10h5v5h-5z" fill="#fff"/><rect id="last" x="30" y="0" width="5" height="5"/></g><g id="rooms"></g></svg>`;

    it('inserts where a sibling deleted earlier in the batch stood', () => {
        const doc = MapDocument.load(map, {
            geometry: new AttributeGeometryProvider(),
        });
        const g2 = anchor(doc, 'g2');
        const result = applyOps(doc, [
            {
                op: 'delete',
                why: '',
                target: { a: anchor(doc, 'g1') },
                targets: [{ a: anchor(doc, 'g1') }, { a: g2 }],
            },
            {
                op: 'insert_shape',
                why: '',
                kind: 'text',
                text: 'Studio Space\n1.04',
                parent: { id: 'rooms' },
                after: { a: g2 },
                attrs: [
                    { name: 'x', value: '12' },
                    { name: 'y', value: '20' },
                ],
                new_id: 'ai-label',
            },
        ]);
        expect(result.rejected).toEqual([]);
        const text = doc.byId('ai-label') as Element;
        expect(text.parentElement?.getAttribute('id')).toBe('labels');
        expect(text.nextElementSibling?.getAttribute('id')).toBe('last');
        expect(text.previousElementSibling?.getAttribute('id')).toBe('first');
        expect(result.applied[1].note).toContain('placed where');
        const spans = Array.from(text.children);
        expect(spans.map((span) => span.textContent)).toEqual([
            'Studio Space',
            '1.04',
        ]);
        expect(spans.map((span) => span.getAttribute('x'))).toEqual([
            '12',
            '12',
        ]);
        expect(spans.map((span) => span.getAttribute('dy'))).toEqual([
            null,
            '1.2em',
        ]);
        expect(result.applied[1].created.length).toBe(3);
    });

    it('lays out several lines of set_text as tspans and one line as plain text', () => {
        const doc = MapDocument.load(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text id="t" x="50" y="20">Old</text></svg>`,
            { geometry: new AttributeGeometryProvider() },
        );
        const multi = applyOps(doc, [
            {
                op: 'set_text',
                why: '',
                target: { id: 't' },
                text: 'Two\nLines',
            },
        ]);
        expect(multi.rejected).toEqual([]);
        expect(multi.applied[0].created.length).toBe(2);
        const text = doc.byId('t') as Element;
        expect(text.children.length).toBe(2);
        expect(text.children[1].getAttribute('dy')).toBe('1.2em');
        const single = applyOps(doc, [
            { op: 'set_text', why: '', target: { id: 't' }, text: 'One' },
        ]);
        expect(single.rejected).toEqual([]);
        expect(text.children.length).toBe(0);
        expect(text.textContent).toBe('One');
    });
});
