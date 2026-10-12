import { applyOps, ApplyOptions } from '../lib/apply';
import { AttributeGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { MapOp } from '../lib/ops';
import { ProtectedIdSet } from '../lib/protected-ids';
import { FakeRenderCheck } from '../lib/render-check';
import {
    markupDenyListIssue,
    schemaIssues,
    validateProposal,
    ValidationContext,
} from '../lib/validate';
import { anchor, loadMap, OFFICE } from './fixtures';

const geometry = new AttributeGeometryProvider();
const PROTECTED = new ProtectedIdSet([
    { id: 'table-01.001', kind: 'desk', label: 'Desk 1.001' },
    { id: 'table-01.002', kind: 'desk', label: 'Desk 1.002' },
    { id: 'area-1.01-status', kind: 'room', label: 'Meeting 1.01' },
    { id: 'desks', kind: 'other', label: 'Desk bank' },
]);

function office(): MapDocument {
    return MapDocument.load(OFFICE, { geometry, protected: PROTECTED });
}

async function single(
    op: MapOp,
    context: ValidationContext = {},
    doc = office(),
) {
    const result = await validateProposal(doc, [op], context);
    return {
        result,
        row: result.ops[0],
        codes: result.ops[0].issues.map((i) => i.code),
    };
}

describe('validateProposal', () => {
    it('flags unknown anchors and ids as errors and locks the row', async () => {
        const { row, codes } = await single({
            op: 'set_attr',
            why: '',
            target: { a: 'e999' },
            name: 'fill',
            value: 'red',
        });
        expect(codes).toEqual(['unknown_target']);
        expect(row.locked).toBe(true);
        expect(row.checked_by_default).toBe(false);
        expect(row.applied).toBe(false);
    });

    it('flags a stale hash and accepts a current one', async () => {
        const doc = office();
        const good = doc.hashOf(doc.byId('bg') as Element);
        const stale = await single(
            {
                op: 'set_attr',
                why: '',
                target: { id: 'bg', h: 'deadbeef' },
                name: 'fill',
                value: 'red',
            },
            {},
            doc,
        );
        expect(stale.codes).toEqual(['stale_hash']);
        const fresh = await single(
            {
                op: 'set_attr',
                why: '',
                target: { id: 'bg', h: good },
                name: 'fill',
                value: 'red',
            },
            {},
            doc,
        );
        expect(fresh.codes).toEqual([]);
        expect(fresh.row.applied).toBe(true);
    });

    it('accepts the original hash for an element an earlier op in the batch changed', async () => {
        const doc = office();
        const h = doc.hashOf(doc.byId('bg') as Element);
        const result = await validateProposal(doc, [
            {
                op: 'set_attr',
                why: '',
                target: { id: 'bg', h },
                name: 'fill',
                value: 'red',
            },
            {
                op: 'set_attr',
                why: '',
                target: { id: 'bg', h },
                name: 'stroke',
                value: 'blue',
            },
        ]);
        expect(result.ops.every((row) => row.applied)).toBe(true);
        expect(result.blocking).toBe(false);
    });

    it('rejects forbidden attributes, including viewBox on the root', async () => {
        for (const name of [
            'id',
            'transform',
            'href',
            'style',
            'onclick',
            'viewBox',
            'display',
        ]) {
            const { codes } = await single({
                op: 'set_attr',
                why: '',
                target: { a: 'e1' },
                name,
                value: 'x',
            });
            expect(codes).toEqual(['forbidden_attribute']);
        }
    });

    it('rejects a bad colour such as "#f28c28."', async () => {
        const bad = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'bg' },
            name: 'fill',
            value: '#f28c28.',
        });
        expect(bad.codes).toEqual(['bad_value']);
        const garbage = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'bg' },
            name: 'fill',
            value: '#008000 and more',
        });
        expect(garbage.codes).toEqual(['bad_value']);
        const ok = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'bg' },
            name: 'fill',
            value: '#f28c28',
        });
        expect(ok.codes).toEqual([]);
    });

    it('rejects deny-listed replacement markup before any sanitiser runs', async () => {
        const cases: [string, RegExp][] = [
            ['<rect/><script>1</script>', /not allowed/],
            ['<rect onload="x()"/>', /onload/],
            ['<foreignObject><div/></foreignObject>', /foreignObject/],
            ['<g><animate attributeName="href"/></g>', /animate/],
            ['<use href="https://evil/x.svg#a"/>', /reference an id/],
            ['<image href="http://evil/x.png"/>', /reference an id/],
            ['<g><style>@import url(x)</style></g>', /unsafe rule/],
            ['<rect style="fill:url(http://x)"/>', /unsafe value/],
            ['<rect', /well-formed/],
        ];
        for (const [markup, pattern] of cases) {
            expect(markupDenyListIssue(markup)).toMatch(pattern);
            const { codes } = await single({
                op: 'replace_element',
                why: '',
                target: { id: 'bg' },
                markup,
            });
            expect(codes[0]).toMatch(/denied_markup|bad_markup/);
        }
        expect(
            markupDenyListIssue(
                '<g><use href="#a"/><image href="data:image/png;base64,AA"/></g>',
            ),
        ).toBeNull();
    });

    it('rejects digit-leading and malformed new ids', async () => {
        expect(
            (
                await single({
                    op: 'set_id',
                    why: '',
                    target: { id: 'bg' },
                    new_id: '1desk',
                })
            ).codes,
        ).toEqual(['bad_id']);
        expect(
            (
                await single({
                    op: 'insert_shape',
                    why: '',
                    kind: 'rect',
                    attrs: [],
                    new_id: 'a b',
                })
            ).codes,
        ).toEqual(['bad_id']);
        expect(
            (
                await single({
                    op: 'duplicate',
                    why: '',
                    target: { id: 'bg' },
                    translate: [1, 1],
                    new_id: 'desks',
                })
            ).codes,
        ).toEqual(['duplicate_id']);
    });

    it('warns, unchecks and locks a protected delete until the id is unlocked', async () => {
        const locked = await single({
            op: 'delete',
            why: '',
            target: { id: 'table-01.001' },
        });
        expect(locked.codes).toEqual(['protected_delete']);
        expect(locked.row.issues[0].message).toContain('Desk 1.001');
        expect(locked.row.checked_by_default).toBe(false);
        expect(locked.row.locked).toBe(true);
        expect(locked.row.applied).toBe(false);
        const unlocked = await single(
            { op: 'delete', why: '', target: { id: 'table-01.001' } },
            { unlocked: ['table-01.001'] },
        );
        expect(unlocked.row.locked).toBe(false);
        expect(unlocked.row.checked_by_default).toBe(false);
        expect(unlocked.row.applied).toBe(true);
        expect(unlocked.result.blocking).toBe(false);
        const parent = await single({
            op: 'delete',
            why: '',
            target: { id: 'desks' },
        });
        expect(parent.row.issues[0].message).toContain('Desk 1.002');
    });

    it('locks a protected rename and the removal of a protected id', async () => {
        const rename = await single({
            op: 'set_id',
            why: '',
            target: { id: 'table-01.001' },
            new_id: 'table-01.009',
        });
        expect(rename.codes).toEqual(['protected_rename']);
        expect(rename.row.locked).toBe(true);
        const removal = await single({
            op: 'set_id',
            why: '',
            target: { id: 'table-01.001' },
            new_id: null,
        });
        expect(removal.row.locked).toBe(true);
        const unlocked = await single(
            {
                op: 'set_id',
                why: '',
                target: { id: 'table-01.001' },
                new_id: 'table-01.009',
            },
            { unlocked: ['table-01.001'] },
        );
        expect(unlocked.row.locked).toBe(false);
        expect(unlocked.row.applied).toBe(true);
        const takeover = await single({
            op: 'set_id',
            why: '',
            target: { id: 'bg' },
            new_id: 'table-01.001',
        });
        expect(takeover.codes).toEqual(['duplicate_id']);
    });

    it('warns when a protected element is hidden or moved off the canvas', async () => {
        const hidden = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'table-01.001' },
            name: 'visibility',
            value: 'hidden',
        });
        expect(hidden.codes).toEqual(['protected_hidden']);
        expect(hidden.row.locked).toBe(false);
        expect(hidden.row.checked_by_default).toBe(false);
        const rule = await single({
            op: 'set_style_rule',
            why: '',
            selector: '.desk',
            declarations: [{ name: 'visibility', value: 'hidden' }],
        });
        expect(rule.codes).toEqual(['affects', 'protected_hidden']);
        expect(rule.row.affected).toBe(3);
        const moved = await single({
            op: 'transform',
            why: '',
            target: { id: 'table-01.001' },
            translate: [2000, 0],
        });
        expect(moved.codes).toEqual(['protected_off_canvas']);
        expect(moved.row.checked_by_default).toBe(false);
        const off = await single({
            op: 'transform',
            why: '',
            target: { id: 'guide' },
            translate: [0, 400],
        });
        expect(off.codes).toEqual(['off_canvas']);
        const inside = await single({
            op: 'transform',
            why: '',
            target: { id: 'table-01.001' },
            translate: [10, 0],
        });
        expect(inside.codes).toEqual([]);
        expect(inside.row.checked_by_default).toBe(true);
    });

    it('warns when a paint change has no visible effect', async () => {
        const blocked = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'desks' },
            name: 'fill',
            value: '#fff',
        });
        expect(blocked.codes).toEqual(['no_visible_effect']);
        expect(blocked.row.checked_by_default).toBe(false);
        const all_children = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'base' },
            name: 'fill',
            value: '#fff',
        });
        expect(all_children.codes).toEqual(['no_visible_effect']);
        const partial = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'plants' },
            name: 'fill',
            value: '#fff',
        });
        expect(partial.codes).toEqual(['partial_effect']);
        expect(partial.row.issues[0].message).toBe(
            '1 of 2 children set their own fill and keep it',
        );
        expect(partial.row.checked_by_default).toBe(true);
        const reaches = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'labels' },
            name: 'fill',
            value: '#fff',
        });
        expect(reaches.codes).toEqual([]);
        const leaf = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'table-01.003' },
            name: 'fill',
            value: '#fff',
        });
        expect(leaf.codes).toEqual([]);
        const attribute_under_rule = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'table-01.003' },
            name: 'stroke-width',
            value: '3',
        });
        expect(attribute_under_rule.codes).toEqual([]);
        const styled_group = await single({
            op: 'set_attr',
            why: '',
            target: { id: 'label-1' },
            name: 'fill',
            value: '#fff',
        });
        expect(styled_group.codes).toEqual([]);
    });

    it('reports how many elements a style rule affects', async () => {
        const { row, codes } = await single({
            op: 'set_style_rule',
            why: '',
            selector: '.room',
            declarations: [{ name: 'fill', value: '#eee' }],
        });
        expect(codes).toEqual(['affects']);
        expect(row.affected).toBe(2);
        expect(row.issues[0].message).toBe('affects 2 elements');
        expect(row.checked_by_default).toBe(true);
    });

    it('applies the growth caps', async () => {
        const elements = await single({
            op: 'duplicate',
            why: '',
            target: { id: 'desks' },
            translate: [0, 30],
            count: 20,
        });
        expect(elements.result.issues.map((i) => i.message)).toContainEqual(
            expect.stringContaining('adds 80 elements'),
        );
        expect(elements.result.blocking).toBe(true);
        const bytes = await single({
            op: 'duplicate',
            why: '',
            target: { id: 'desks' },
            translate: [0, 30],
            count: 10,
        });
        expect(bytes.result.issues.map((i) => i.code)).toEqual(['growth']);
        expect(bytes.result.issues[0].message).toMatch(/grows the map by \d+%/);
        expect(bytes.result.element_delta).toBe(40);
        const doc = loadMap('level_1', { geometry });
        const fine = await single(
            {
                op: 'duplicate',
                why: '',
                target: { id: 'table-01.004' },
                translate: [0, 30],
                count: 10,
            },
            {},
            doc,
        );
        expect(fine.result.issues).toEqual([]);
        expect(fine.result.element_delta).toBe(10);
    });

    it('rejects a batch over the op limit', async () => {
        const ops: MapOp[] = Array.from({ length: 81 }, () => ({
            op: 'no_change',
            why: '',
            reason: 'x',
        }));
        const result = await validateProposal(office(), ops);
        expect(result.blocking).toBe(true);
        expect(result.issues[0].code).toBe('too_many_ops');
        expect(result.trial).toBeNull();
    });

    it('blocks the batch when the render check fails and passes it the serialised trial', async () => {
        const check = new FakeRenderCheck({ ok: false, error: 'boom' });
        const { result } = await single(
            {
                op: 'set_attr',
                why: '',
                target: { id: 'bg' },
                name: 'fill',
                value: 'red',
            },
            { render_check: check },
        );
        expect(result.blocking).toBe(true);
        expect(result.issues[0].code).toBe('render');
        expect(check.calls[0]).toContain('fill="red"');
        expect(check.calls[0]).not.toContain('data-map-editor');
        const ok = new FakeRenderCheck();
        const passed = await single(
            {
                op: 'set_attr',
                why: '',
                target: { id: 'bg' },
                name: 'fill',
                value: 'red',
            },
            { render_check: ok },
        );
        expect(passed.result.blocking).toBe(false);
    });

    it('catches collateral changes the applier did not declare', async () => {
        const smuggling: ValidationContext['apply'] = (
            doc,
            ops,
            options?: ApplyOptions,
        ) => {
            const result = applyOps(doc, ops, options);
            (doc.byId('table-01.002') as Element).setAttribute(
                'fill',
                'hotpink',
            );
            doc.markChanged();
            return result;
        };
        const { result } = await single(
            {
                op: 'replace_element',
                why: '',
                target: { id: 'bg' },
                markup: '<rect id="x" width="1" height="1"/>',
            },
            { apply: smuggling },
        );
        expect(result.blocking).toBe(true);
        const collateral = result.issues.find((i) => i.code === 'collateral');
        expect(collateral?.message).toContain(
            `${anchor(office(), 'table-01.002')} changed`,
        );
    });

    it('catches an element count the ops do not account for', async () => {
        const extra: ValidationContext['apply'] = (
            doc,
            ops,
            options?: ApplyOptions,
        ) => {
            const result = applyOps(doc, ops, options);
            const rogue = doc.root.ownerDocument.createElementNS(
                'http://www.w3.org/2000/svg',
                'rect',
            );
            doc.root.appendChild(rogue);
            doc.assignAnchors(rogue);
            return result;
        };
        const { result } = await single(
            {
                op: 'set_attr',
                why: '',
                target: { id: 'bg' },
                name: 'fill',
                value: 'red',
            },
            { apply: extra },
        );
        const codes = result.issues.map((i) => i.code);
        expect(codes).toContain('element_delta');
        expect(codes).toContain('collateral');
    });

    it('catches a changed style block without a set_style_rule op', async () => {
        const restyle: ValidationContext['apply'] = (
            doc,
            ops,
            options?: ApplyOptions,
        ) => {
            const result = applyOps(doc, ops, options);
            const style = doc.root.querySelector('style') as Element;
            style.textContent = `${style.textContent}.x{fill:red}`;
            doc.markChanged();
            return result;
        };
        const { result } = await single(
            {
                op: 'set_attr',
                why: '',
                target: { id: 'bg' },
                name: 'fill',
                value: 'red',
            },
            { apply: restyle },
        );
        expect(result.issues.map((i) => i.code)).toContain('style_changed');
    });

    it('treats no_change and ask as cards, not rows', async () => {
        const result = await validateProposal(office(), [
            { op: 'ask', why: '', question: 'Which desk?' },
            { op: 'no_change', why: '', reason: 'Already blue' },
        ]);
        expect(result.ops.map((row) => row.actionable)).toEqual([false, false]);
        expect(result.ops.map((row) => row.checked_by_default)).toEqual([
            false,
            false,
        ]);
        expect(result.trial).toBeNull();
        expect(result.blocking).toBe(false);
    });

    it('reports schema problems from the JSON schema', () => {
        expect(schemaIssues({ op: 'teleport' })[0].code).toBe('unknown_op');
        expect(
            schemaIssues({
                op: 'set_attr',
                why: '',
                target: { a: 'e1' },
                value: 'x',
            })[0].message,
        ).toMatch(/needs "name"/);
        expect(
            schemaIssues({
                op: 'set_attr',
                why: '',
                target: { a: 'e1' },
                name: 'fill',
            }),
        ).toEqual([]);
        expect(
            schemaIssues({
                op: 'set_attr',
                why: '',
                target: { a: 'e1' },
                name: 'fill',
                value: null,
            }),
        ).toEqual([]);
        expect(
            schemaIssues({
                op: 'set_attr',
                why: '',
                target: { a: 'e1' },
                name: 'fill',
                value: 'x',
                bogus: 1,
            })[0].message,
        ).toMatch(/no field "bogus"/);
        expect(
            schemaIssues({
                op: 'transform',
                why: '',
                target: { a: 'e1' },
                translate: ['a', 'b'],
            })[0].message,
        ).toMatch(/wrong type/);
        expect(
            schemaIssues({
                op: 'reorder',
                why: '',
                target: { a: 'e1' },
                position: 'middle',
            })[0].message,
        ).toMatch(/wrong type/);
        expect(schemaIssues('nope')[0].code).toBe('schema');
    });

    it('honours the accepted set and reports the touched anchors', async () => {
        const doc = office();
        const result = await validateProposal(
            doc,
            [
                {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'bg' },
                    name: 'fill',
                    value: 'red',
                },
                {
                    op: 'set_attr',
                    why: '',
                    target: { id: 'guide' },
                    name: 'stroke',
                    value: 'blue',
                },
            ],
            { accepted: new Set([1]) },
        );
        expect(result.ops[0].applied).toBe(false);
        expect(result.ops[0].checked_by_default).toBe(true);
        expect(result.ops[1].applied).toBe(true);
        expect(result.touched).toEqual([anchor(doc, 'guide')]);
        expect(result.trial?.byId('bg')?.getAttribute('fill')).toBe(
            'url(#grad)',
        );
        expect(result.trial?.byId('guide')?.getAttribute('stroke')).toBe(
            'blue',
        );
        expect(doc.byId('guide')?.getAttribute('stroke')).toBe('#f00');
    });

    it('validates a realistic batch on a real map without collateral', async () => {
        const doc = loadMap('level_1', {
            geometry,
            protected: new ProtectedIdSet([
                { id: 'table-01.004', kind: 'desk', label: 'Desk 1.004' },
            ]),
        });
        const result = await validateProposal(doc, [
            {
                op: 'set_attr',
                why: 'recolour',
                target: { id: 'table-01.004' },
                name: 'fill',
                value: '#d1fae5',
            },
            {
                op: 'transform',
                why: 'nudge',
                target: { id: 'table-01.004' },
                translate: [20, 0],
            },
            {
                op: 'duplicate',
                why: 'two more',
                target: { id: 'table-01.004' },
                translate: [40, 0],
                count: 2,
                id_pattern: 'table-01.{n:03}',
            },
            {
                op: 'set_style_rule',
                why: 'lighter walls',
                selector: '.cls-9',
                declarations: [{ name: 'stroke', value: '#999' }],
            },
        ]);
        expect(result.issues).toEqual([]);
        expect(result.blocking).toBe(false);
        expect(result.ops.map((row) => row.applied)).toEqual([
            true,
            true,
            true,
            true,
        ]);
        expect(result.element_delta).toBe(2);
        expect(result.trial?.byId('table-01.006')).not.toBeNull();
    });
});
