import { describeOp, opCategory, opGlyph, whoOf } from '../lib/ai/describe';
import { previewSummary } from '../lib/ai/preview';
import {
    buildProposal,
    cascadeDependencies,
    decisionFor,
    deriveDependencies,
    groupRows,
    heldAfter,
    opsWithServerIssues,
    Proposal,
    referencedTargets,
    resolvePayload,
    toggleGroup,
    toggleRow,
    verdictOf,
} from '../lib/ai/proposal';
import { DEFAULT_AI_STRINGS } from '../lib/ai/strings';
import { MapDocument, Target } from '../lib/map-document';
import { MapOp } from '../lib/ops';
import { FakeSession, job } from './ai-fakes';
import { anchor, svg } from './fixtures';

const MAP = svg(
    `<defs><style>.cls-12{fill:#fff}</style></defs>
    <g id="rooms"><rect id="area-2.01-status" class="cls-12" x="10" y="10" width="100" height="50"><title>Boardroom</title></rect><rect id="area-2.02-status" class="cls-12" x="120" y="10" width="100" height="50"/></g>
    <g id="desks"><rect id="desk-01.004" x="10" y="100" width="30" height="20"/><rect id="desk-01.005" x="50" y="100" width="30" height="20"/><rect id="desk-01.006" x="90" y="100" width="30" height="20"/></g>
    <text id="label-1" x="10" y="80">Boardroom</text>`,
);

function target(doc: MapDocument, id: string): Target {
    const element = doc.byId(id);
    if (!element) throw new Error(`no ${id}`);
    return { a: doc.anchorOf(element), id, h: doc.hashOf(element) };
}

function context(doc: MapDocument) {
    const session = new FakeSession(doc);
    return { doc, index: session.index(), strings: DEFAULT_AI_STRINGS };
}

describe('describeOp', () => {
    const doc = MapDocument.load(MAP);
    const ctx = context(doc);
    const why = 'because';

    it('names elements as id (label), id, label or tag anchor', () => {
        expect(whoOf(target(doc, 'area-2.01-status'), ctx)).toBe(
            'area-2.01-status (Boardroom)',
        );
        expect(whoOf(target(doc, 'desk-01.004'), ctx)).toBe('desk-01.004');
        expect(whoOf({ a: 'e9999' }, ctx)).toBe('e9999');
        const rooms = doc.byId('rooms') as Element;
        const first_rect = rooms.firstElementChild as Element;
        expect(whoOf({ a: doc.anchorOf(first_rect) }, ctx)).toBe(
            'area-2.01-status (Boardroom)',
        );
    });

    it('describes every op kind in plain words', () => {
        const room = target(doc, 'area-2.01-status');
        const desk = target(doc, 'desk-01.004');
        const desks = ['desk-01.004', 'desk-01.005', 'desk-01.006'].map((id) =>
            target(doc, id),
        );
        const cases: [MapOp, string][] = [
            [
                {
                    op: 'set_attr',
                    why,
                    target: room,
                    name: 'fill',
                    value: '#d1fae5',
                },
                'Change fill of area-2.01-status (Boardroom) to #d1fae5',
            ],
            [
                {
                    op: 'set_attr',
                    why,
                    target: room,
                    name: 'fill',
                    value: null,
                },
                'Remove fill from area-2.01-status (Boardroom)',
            ],
            [
                {
                    op: 'set_style_rule',
                    why,
                    selector: '.cls-12',
                    declarations: [{ name: 'fill', value: '#eee' }],
                },
                'Rule .cls-12 fill #fff -> #eee, affects 2 elements',
            ],
            [
                {
                    op: 'set_text',
                    why,
                    target: target(doc, 'label-1'),
                    text: 'Board room',
                },
                'Change the text of label-1 (Boardroom) to "Board room"',
            ],
            [
                { op: 'transform', why, targets: desks, translate: [120, 0] },
                'Move 3 elements by 120, 0',
            ],
            [
                { op: 'transform', why, target: desk, translate: [12.345, -1] },
                'Move desk-01.004 by 12.35, -1',
            ],
            [
                { op: 'transform', why, target: desk, scale: [2, 2] },
                'Scale desk-01.004 by 2, 2',
            ],
            [
                { op: 'transform', why, target: desk, rotate: 90 },
                'Rotate desk-01.004 by 90 degrees',
            ],
            [
                {
                    op: 'transform',
                    why,
                    target: desk,
                    translate: [1, 1],
                    rotate: 90,
                },
                'Transform desk-01.004',
            ],
            [{ op: 'delete', why, target: desk }, 'Delete desk-01.004'],
            [
                { op: 'delete', why, targets: desks.slice(0, 2) },
                'Delete 2 elements',
            ],
            [
                {
                    op: 'duplicate',
                    why,
                    target: desk,
                    new_id: 'desk-01.007',
                    translate: [40, 0],
                },
                'Duplicate desk-01.004 as desk-01.007',
            ],
            [
                { op: 'duplicate', why, target: desk, translate: [40, 0] },
                'Duplicate desk-01.004',
            ],
            [
                {
                    op: 'duplicate',
                    why,
                    target: desk,
                    translate: [40, 0],
                    count: 3,
                    id_pattern: 'desk-01.0NN',
                },
                'Duplicate desk-01.004 3 times as desk-01.0NN',
            ],
            [
                {
                    op: 'insert_shape',
                    why,
                    parent: target(doc, 'rooms'),
                    kind: 'rect',
                    attrs: [],
                    new_id: 'ai-1',
                },
                'Add rect ai-1 in rooms',
            ],
            [
                { op: 'insert_shape', why, kind: 'circle', attrs: [] },
                'Add circle in the map',
            ],
            [
                { op: 'set_id', why, target: desk, new_id: 'desk-01.010' },
                'Rename desk-01.004 to desk-01.010',
            ],
            [
                { op: 'set_id', why, target: desk, new_id: null },
                'Remove the id of desk-01.004',
            ],
            [
                { op: 'reorder', why, target: desk, position: 'last' },
                'Bring desk-01.004 to the front',
            ],
            [
                { op: 'reorder', why, target: desk, position: 'first' },
                'Send desk-01.004 to the back',
            ],
            [
                {
                    op: 'reorder',
                    why,
                    target: desk,
                    before: target(doc, 'desk-01.005'),
                },
                'Move desk-01.004 behind desk-01.005',
            ],
            [
                {
                    op: 'reorder',
                    why,
                    target: desk,
                    after: target(doc, 'desk-01.005'),
                },
                'Move desk-01.004 in front of desk-01.005',
            ],
            [
                { op: 'group', why, targets: desks.slice(0, 2), new_id: 'g1' },
                'Group 2 elements as g1',
            ],
            [{ op: 'group', why, targets: [desk] }, 'Group desk-01.004'],
            [
                { op: 'ungroup', why, target: target(doc, 'desks') },
                'Ungroup desks',
            ],
            [
                { op: 'replace_element', why, target: desk, markup: '<rect/>' },
                'Replace desk-01.004 with new markup',
            ],
            [
                {
                    op: 'replace_path',
                    why,
                    target: target(doc, 'area-2.02-status'),
                    d: 'M0 0',
                },
                'Redraw the outline of area-2.02-status',
            ],
            [
                { op: 'no_change', why, reason: 'already blue' },
                'No change: already blue',
            ],
            [{ op: 'ask', why, question: 'Which room?' }, 'Which room?'],
        ];
        for (const [op, expected] of cases) {
            expect(describeOp(op, ctx)).toBe(expected);
        }
    });

    it('sorts ops into added, changed, removed, question and none', () => {
        expect(
            opCategory({ op: 'insert_shape', why, kind: 'rect', attrs: [] }),
        ).toBe('added');
        expect(opCategory({ op: 'delete', why, target: { id: 'x' } })).toBe(
            'removed',
        );
        expect(opCategory({ op: 'ask', why, question: '?' })).toBe('question');
        expect(opCategory({ op: 'no_change', why, reason: '-' })).toBe('none');
        expect(
            opCategory({ op: 'set_text', why, target: { id: 'x' }, text: '' }),
        ).toBe('changed');
        expect(opGlyph('added')).toBe('+');
        expect(opGlyph('removed')).toBe('−');
    });
});

describe('proposal', () => {
    function officeDoc(): MapDocument {
        return MapDocument.load(MAP);
    }

    it('writes op ids and the server reasons onto the ops', () => {
        const ops = opsWithServerIssues({
            ops: [
                { op: 'no_change', why: '-', reason: 'a' },
                { op: 'ask', why: '-', question: 'b' },
            ],
            server_issues: { 'op-2': 'doubtful' },
        });
        expect(ops[0]).toEqual({
            op: 'no_change',
            why: '-',
            reason: 'a',
            id: 'op-1',
        });
        expect(ops[1]).toMatchObject({ id: 'op-2', server_issue: 'doubtful' });
    });

    it('derives dependencies from elements earlier ops create', () => {
        const doc = officeDoc();
        const rooms = target(doc, 'rooms');
        const desk = target(doc, 'desk-01.004');
        const ops: MapOp[] = [
            {
                op: 'insert_shape',
                why: '-',
                parent: rooms,
                kind: 'rect',
                attrs: [
                    { name: 'x', value: '300' },
                    { name: 'y', value: '10' },
                    { name: 'width', value: '50' },
                    { name: 'height', value: '50' },
                ],
                new_id: 'ai-1',
            },
            {
                op: 'set_attr',
                why: '-',
                target: { id: 'ai-1' },
                name: 'fill',
                value: '#abc',
            },
            {
                op: 'duplicate',
                why: '-',
                target: desk,
                new_id: 'desk-01.009',
                translate: [0, 40],
            },
            {
                op: 'set_attr',
                why: '-',
                target: { id: 'desk-01.009' },
                name: 'fill',
                value: '#abc',
            },
            {
                op: 'set_id',
                why: '-',
                target: target(doc, 'desk-01.005'),
                new_id: 'desk-01.050',
            },
            {
                op: 'set_attr',
                why: '-',
                target: { id: 'desk-01.050' },
                name: 'fill',
                value: '#abc',
            },
            {
                op: 'set_attr',
                why: '-',
                target: desk,
                name: 'stroke',
                value: '#000',
            },
        ];
        expect(deriveDependencies(doc, ops)).toEqual([
            [],
            [0],
            [],
            [2],
            [],
            [4],
            [],
        ]);
        expect(referencedTargets(ops[0]).map((t) => t.id)).toEqual(['rooms']);
        expect(
            cascadeDependencies(new Set([1, 3, 6]), [
                [],
                [0],
                [],
                [2],
                [],
                [4],
                [],
            ]),
        ).toEqual(new Set([6]));
        expect(doc.byId('ai-1')).toBeNull();
    });

    it('builds rows with the validator verdicts, server reasons and the trial', async () => {
        const doc = officeDoc();
        const session = new FakeSession(doc);
        const room = target(doc, 'area-2.01-status');
        const other = target(doc, 'area-2.02-status');
        const done = job({
            state: 'done',
            summary: 'Recoloured two rooms.',
            ops: [
                {
                    op: 'set_attr',
                    why: '-',
                    target: room,
                    name: 'fill',
                    value: '#d1fae5',
                },
                {
                    op: 'set_attr',
                    why: '-',
                    target: { a: 'e9999' },
                    name: 'fill',
                    value: '#d1fae5',
                },
                {
                    op: 'set_attr',
                    why: '-',
                    target: other,
                    name: 'fill',
                    value: '#fee',
                },
            ],
            server_issues: {
                'op-3': 'the model may have meant the other room',
            },
        });
        const proposal = await buildProposal(done, session, DEFAULT_AI_STRINGS);
        expect(proposal.summary).toBe('Recoloured two rooms.');
        expect(proposal.rows.map((row) => row.id)).toEqual([
            'op-1',
            'op-2',
            'op-3',
        ]);
        expect(proposal.rows[0]).toMatchObject({
            checked: true,
            applied: true,
            locked: false,
            category: 'changed',
            glyph: '~',
            kind_word: 'Change',
            text: 'Change fill of area-2.01-status (Boardroom) to #d1fae5',
            anchors: [room.a],
        });
        expect(proposal.rows[1].locked).toBe(true);
        expect(proposal.rows[1].checked).toBe(false);
        expect(proposal.rows[1].applied).toBe(false);
        expect(proposal.rows[1].issues.map((issue) => issue.code)).toContain(
            'unknown_target',
        );
        expect(proposal.rows[2]).toMatchObject({
            checked: false,
            locked: false,
            applied: false,
            server_issue: 'the model may have meant the other room',
        });
        expect(proposal.rows[2].issues.map((issue) => issue.code)).toEqual([
            'server_issue',
        ]);
        expect(proposal.accepted).toEqual([0]);
        expect(proposal.invalid_count).toBe(1);
        expect(proposal.verdict).toBe('partial');
        expect(proposal.blocking).toBe(false);
        expect(proposal.trial_markup).toContain('#d1fae5');
        expect(proposal.trial_markup).not.toContain('#fee');
        expect(proposal.before_markup).not.toContain('#d1fae5');
        expect(proposal.groups).toBeNull();
        expect(doc.byId('area-2.01-status')?.getAttribute('fill')).toBeNull();

        const reticked = await buildProposal(
            done,
            session,
            DEFAULT_AI_STRINGS,
            {
                accepted: new Set([0, 1, 2]),
                dependencies: proposal.dependencies,
            },
        );
        expect(reticked.accepted).toEqual([0, 2]);
        expect(reticked.rows[2].checked).toBe(true);
        expect(reticked.rows[2].applied).toBe(true);
        expect(reticked.trial_markup).toContain('#fee');
        expect(reticked.verdict).toBe('partial');
        expect(decisionFor(reticked)).toBe('partial');
    });

    it('ticks parents with a child and unticks children with a parent', async () => {
        const doc = officeDoc();
        const session = new FakeSession(doc);
        const done = job({
            state: 'done',
            ops: [
                {
                    op: 'insert_shape',
                    why: '-',
                    parent: target(doc, 'rooms'),
                    kind: 'rect',
                    attrs: [
                        { name: 'x', value: '300' },
                        { name: 'y', value: '10' },
                        { name: 'width', value: '50' },
                        { name: 'height', value: '50' },
                    ],
                    new_id: 'ai-1',
                },
                {
                    op: 'set_attr',
                    why: '-',
                    target: { id: 'ai-1' },
                    name: 'fill',
                    value: '#abc',
                },
                {
                    op: 'set_attr',
                    why: '-',
                    target: target(doc, 'desk-01.004'),
                    name: 'fill',
                    value: '#abc',
                },
            ],
        });
        const proposal = await buildProposal(done, session, DEFAULT_AI_STRINGS);
        expect(proposal.dependencies).toEqual([[], [0], []]);
        expect(proposal.rows[1].depends_on).toEqual([0]);
        expect(proposal.rows[0].dependents).toEqual([1]);
        expect(proposal.accepted).toEqual([0, 1, 2]);
        expect([...toggleRow(proposal, 0, false)].sort()).toEqual([2]);
        const without_parent: Proposal = { ...proposal, accepted: [2] };
        expect([...toggleRow(without_parent, 1, true)].sort()).toEqual([
            0, 1, 2,
        ]);
        expect([...toggleRow(proposal, 2, false)].sort()).toEqual([0, 1]);
        expect([...toggleRow(proposal, 99, false)].sort()).toEqual([0, 1, 2]);
    });

    it('counts only the ticked rows in the preview summary', async () => {
        const doc = officeDoc();
        const session = new FakeSession(doc);
        const fill = (id: string): MapOp => ({
            op: 'set_attr',
            why: '-',
            target: target(doc, id),
            name: 'fill',
            value: '#abc',
        });
        const done = job({
            state: 'done',
            ops: [fill('desk-01.004'), fill('desk-01.005')],
        });
        const all = await buildProposal(done, session, DEFAULT_AI_STRINGS);
        expect(previewSummary(all, DEFAULT_AI_STRINGS)?.title).toBe(
            '2 changes',
        );
        const one = await buildProposal(done, session, DEFAULT_AI_STRINGS, {
            accepted: new Set([1]),
        });
        const summary = previewSummary(one, DEFAULT_AI_STRINGS);
        expect(summary?.title).toBe('1 of 2 changes');
        expect(summary?.counts.map((entry) => entry.count)).toEqual([1]);
    });

    it('ticks the rows a cascade unticked when the row they need is ticked again', async () => {
        const doc = officeDoc();
        const session = new FakeSession(doc);
        const fill = (name: string): MapOp => ({
            op: 'set_attr',
            why: '-',
            target: { id: 'ai-1' },
            name,
            value: '#abc',
        });
        const done = job({
            state: 'done',
            ops: [
                {
                    op: 'insert_shape',
                    why: '-',
                    parent: target(doc, 'rooms'),
                    kind: 'rect',
                    attrs: [
                        { name: 'x', value: '300' },
                        { name: 'y', value: '10' },
                        { name: 'width', value: '50' },
                        { name: 'height', value: '50' },
                    ],
                    new_id: 'ai-1',
                },
                fill('fill'),
                fill('stroke'),
            ],
        });
        const step = async (
            from: Proposal,
            index: number,
            checked: boolean,
        ): Promise<Proposal> => {
            const accepted = toggleRow(from, index, checked);
            const held = heldAfter(from, accepted, checked ? [] : [index]);
            return buildProposal(done, session, DEFAULT_AI_STRINGS, {
                accepted,
                held,
                dependencies: from.dependencies,
            });
        };
        const proposal = await buildProposal(done, session, DEFAULT_AI_STRINGS);

        const parent_off = await step(proposal, 0, false);
        expect(parent_off.accepted).toEqual([]);
        expect(parent_off.held).toEqual([1, 2]);
        const parent_on = await step(parent_off, 0, true);
        expect(parent_on.accepted).toEqual([0, 1, 2]);
        expect(parent_on.held).toEqual([]);

        const stroke_off = await step(proposal, 2, false);
        const both_off = await step(stroke_off, 0, false);
        expect(both_off.held).toEqual([1]);
        expect((await step(both_off, 0, true)).accepted).toEqual([0, 1]);
    });

    it('groups rows by kind above twenty and toggles a group as a whole', async () => {
        const doc = officeDoc();
        const session = new FakeSession(doc);
        const desk = target(doc, 'desk-01.004');
        const ops: MapOp[] = Array.from({ length: 23 }, (_, i) => ({
            op: 'set_attr' as const,
            why: '-',
            target: desk,
            name: `data-n${i}`,
            value: String(i),
        }));
        ops.push({
            op: 'delete',
            why: '-',
            target: target(doc, 'desk-01.006'),
        });
        ops.push({ op: 'ask', why: '-', question: 'Sure?' });
        const proposal = await buildProposal(
            job({ state: 'done', ops }),
            session,
            DEFAULT_AI_STRINGS,
        );
        expect(
            proposal.groups?.map((group) => [
                group.key,
                group.indices.length,
                group.label,
            ]),
        ).toEqual([
            ['changed:set_attr', 23, '23 Change'],
            ['removed:delete', 1, '1 Delete'],
            ['question:ask', 1, '1 Question'],
        ]);
        expect(proposal.groups?.[0].checked).toBe('all');
        expect(proposal.groups?.[2].locked).toBe(true);
        const group = proposal.groups?.[0];
        if (!group) throw new Error('no group');
        expect(toggleGroup(proposal, group, false).size).toBe(1);
        const regrouped = groupRows(
            proposal.rows.map((row) =>
                row.index === 0 ? { ...row, checked: false } : row,
            ),
            DEFAULT_AI_STRINGS,
        );
        expect(regrouped[0].checked).toBe('some');
    });

    it('answers a verdict for every shape of proposal', () => {
        const ask: MapOp = { op: 'ask', why: '-', question: '?' };
        const change: MapOp = { op: 'delete', why: '-', target: { id: 'x' } };
        expect(verdictOf([], new Set(), false, [])).toBe('empty');
        expect(
            verdictOf([{ actionable: false, op: ask }], new Set(), false, []),
        ).toBe('questions');
        expect(
            verdictOf(
                [
                    {
                        actionable: false,
                        op: { op: 'no_change', why: '-', reason: '-' },
                    },
                ],
                new Set(),
                false,
                ['why?'],
            ),
        ).toBe('questions');
        expect(
            verdictOf(
                [{ actionable: true, op: change }],
                new Set([0]),
                true,
                [],
            ),
        ).toBe('blocked');
        expect(
            verdictOf([{ actionable: true, op: change }], new Set(), false, []),
        ).toBe('nothing_accepted');
        expect(
            verdictOf(
                [
                    { actionable: true, op: change },
                    { actionable: true, op: change },
                ],
                new Set([0]),
                false,
                [],
            ),
        ).toBe('partial');
        expect(
            verdictOf(
                [{ actionable: true, op: change }],
                new Set([0]),
                false,
                [],
            ),
        ).toBe('ready');
    });

    it('builds the resolve payload from the rows', async () => {
        const doc = officeDoc();
        const session = new FakeSession(doc);
        const done = job({
            state: 'done',
            ops: [
                {
                    op: 'set_attr',
                    why: '-',
                    target: target(doc, 'desk-01.004'),
                    name: 'fill',
                    value: '#abc',
                },
                {
                    op: 'set_attr',
                    why: '-',
                    target: target(doc, 'desk-01.005'),
                    name: 'fill',
                    value: '#abc',
                },
                { op: 'no_change', why: '-', reason: 'nothing else' },
            ],
        });
        const all = await buildProposal(done, session, DEFAULT_AI_STRINGS);
        expect(decisionFor(all)).toBe('applied');
        expect(resolvePayload(all, 'applied')).toEqual({
            decision: 'applied',
            accepted_op_ids: ['op-1', 'op-2'],
            rejected_op_ids: [],
            saved_upload_id: null,
        });
        expect(resolvePayload(all, 'rejected', ['too_much', 'other'])).toEqual({
            decision: 'rejected',
            accepted_op_ids: [],
            rejected_op_ids: ['op-1', 'op-2'],
            reasons: ['too_much', 'other'],
            saved_upload_id: null,
        });
        const some = await buildProposal(done, session, DEFAULT_AI_STRINGS, {
            accepted: new Set([1]),
        });
        expect(decisionFor(some)).toBe('partial');
        expect(resolvePayload(some, 'partial', [], 'upload-9')).toEqual({
            decision: 'partial',
            accepted_op_ids: ['op-2'],
            rejected_op_ids: ['op-1'],
            saved_upload_id: 'upload-9',
        });
        const none = await buildProposal(done, session, DEFAULT_AI_STRINGS, {
            accepted: new Set(),
        });
        expect(decisionFor(none)).toBe('rejected');
        expect(none.verdict).toBe('nothing_accepted');
    });

    it('reports questions and empty answers without touching the map', async () => {
        const doc = officeDoc();
        const session = new FakeSession(doc);
        const asked = await buildProposal(
            job({
                state: 'done',
                ops: [{ op: 'ask', why: '-', question: 'Which room?' }],
                questions: ['Which room?', 'Which floor?'],
            }),
            session,
            DEFAULT_AI_STRINGS,
        );
        expect(asked.verdict).toBe('questions');
        expect(asked.questions).toEqual(['Which room?', 'Which floor?']);
        expect(asked.rows[0].actionable).toBe(false);
        expect(asked.trial_markup).toBeNull();
        const empty = await buildProposal(
            job({ state: 'done', ops: [], summary: 'Nothing to do.' }),
            session,
            DEFAULT_AI_STRINGS,
        );
        expect(empty.verdict).toBe('empty');
        expect(empty.rows).toEqual([]);
        expect(anchor(doc, 'rooms')).toBeTruthy();
    });
});

describe('connected ID renames', () => {
    function swap() {
        const doc = MapDocument.load(
            svg(
                '<rect id="zone-3.WAT" x="100"/><rect id="zone-3.CF" x="10"/><text id="label">Waters</text>',
            ),
        );
        const waters = target(doc, 'zone-3.WAT');
        const food = target(doc, 'zone-3.CF');
        const ops: MapOp[] = [
            {
                op: 'set_text',
                why: 'Rename label',
                target: target(doc, 'label'),
                text: 'Confectionery & Food',
            },
            {
                op: 'set_id',
                why: 'Temporary ID',
                target: waters,
                new_id: 'ai-zone-swap-tmp',
            },
            {
                op: 'set_id',
                why: 'Swap left zone',
                target: food,
                new_id: 'zone-3.WAT',
            },
            {
                op: 'set_id',
                why: 'Swap right zone',
                target: { a: waters.a },
                new_id: 'zone-3.CF',
            },
        ];
        return { doc, ops, session: new FakeSession(doc) };
    }
    it('applies a complete temporary-ID swap and toggles its renames together', async () => {
        const { doc, ops, session } = swap();
        const proposal = await buildProposal(
            job({ state: 'done', ops }),
            session,
            DEFAULT_AI_STRINGS,
        );
        expect(proposal.accepted).toEqual([0, 1, 2, 3]);
        const trial = MapDocument.load(proposal.trial_markup!);
        expect(trial.byId('zone-3.WAT')?.getAttribute('x')).toBe('10');
        expect(trial.byId('zone-3.CF')?.getAttribute('x')).toBe('100');
        expect(trial.byId('ai-zone-swap-tmp')).toBeNull();
        const unchecked = toggleRow(proposal, 2, false);
        expect([...unchecked]).toEqual([0]);
        const partial = await buildProposal(
            job({ state: 'done', ops }),
            session,
            DEFAULT_AI_STRINGS,
            { accepted: unchecked },
        );
        expect(toggleRow(partial, 1, true)).toEqual(new Set([0, 1, 2, 3]));
        expect(doc.byId('zone-3.WAT')?.getAttribute('x')).toBe('100');
    });
    it('does not leave a temporary ID when a later swap step has a server warning', async () => {
        const { ops, session } = swap();
        const proposal = await buildProposal(
            job({
                state: 'done',
                ops,
                server_issues: {
                    'op-3': 'zone-3.WAT is already an id in the map',
                },
            }),
            session,
            DEFAULT_AI_STRINGS,
        );
        expect(proposal.accepted).toEqual([0]);
        const trial = MapDocument.load(proposal.trial_markup!);
        expect(trial.byId('zone-3.WAT')?.getAttribute('x')).toBe('100');
        expect(trial.byId('zone-3.CF')?.getAttribute('x')).toBe('10');
        expect(trial.byId('ai-zone-swap-tmp')).toBeNull();
        expect(trial.byId('label')?.textContent).toBe('Confectionery & Food');
    });
    it('rejects all connected renames when the final target is stale', async () => {
        const { ops, session } = swap();
        ops[3] = { ...ops[3], target: { a: 'missing-anchor' } } as MapOp;
        const proposal = await buildProposal(
            job({ state: 'done', ops }),
            session,
            DEFAULT_AI_STRINGS,
        );
        expect(proposal.accepted).toEqual([0]);
        const trial = MapDocument.load(proposal.trial_markup!);
        expect(trial.byId('ai-zone-swap-tmp')).toBeNull();
        expect(trial.byId('zone-3.WAT')).toBeTruthy();
        expect(trial.byId('zone-3.CF')).toBeTruthy();
    });
});

describe('inserting an overlay with a released ID', () => {
    it('keeps a room renumbering and its replacement overlay together', async () => {
        const doc = MapDocument.load(
            svg(
                '<rect id="area-R19.04-status" x="10"/><rect id="area-R19.05-status" x="20"/>',
            ),
        );
        const ops: MapOp[] = [
            {
                op: 'set_id',
                why: 'Shift room 5',
                target: target(doc, 'area-R19.05-status'),
                new_id: 'area-R19.06-status',
            },
            {
                op: 'set_id',
                why: 'Shift room 4',
                target: target(doc, 'area-R19.04-status'),
                new_id: 'area-R19.05-status',
            },
            {
                op: 'insert_shape',
                why: 'New room 4',
                kind: 'rect',
                new_id: 'area-R19.04-status',
                attrs: [
                    { name: 'x', value: '30' },
                    { name: 'y', value: '0' },
                    { name: 'width', value: '5' },
                    { name: 'height', value: '5' },
                ],
            },
        ];
        const session = new FakeSession(doc);
        const valid = await buildProposal(
            job({ state: 'done', ops }),
            session,
            DEFAULT_AI_STRINGS,
        );
        expect(valid.accepted).toEqual([0, 1, 2]);
        expect(toggleRow(valid, 2, false)).toEqual(new Set());
        const incomplete = await buildProposal(
            job({
                state: 'done',
                ops,
                server_issues: { 'op-3': 'Cannot create room' },
            }),
            session,
            DEFAULT_AI_STRINGS,
        );
        expect(incomplete.accepted).toEqual([]);
        expect(incomplete.trial_markup).toBeNull();
        const trial = doc;
        expect(trial.byId('area-R19.04-status')?.getAttribute('x')).toBe('10');
        expect(trial.byId('area-R19.05-status')?.getAttribute('x')).toBe('20');
        expect(trial.byId('area-R19.06-status')).toBeNull();
    });
});

describe('canvas expansion review', () => {
    it('keeps the canvas and its edits together when any checkbox changes', async () => {
        const doc = MapDocument.load(MAP);
        const ops: MapOp[] = [
            {
                op: 'set_attr',
                why: '',
                target: { a: doc.anchorOf(doc.root) },
                name: 'viewBox',
                value: '0 -100 1000 600',
            },
            {
                op: 'set_attr',
                why: '',
                target: { id: 'desk-01.004' },
                name: 'fill',
                value: 'red',
            },
        ];
        const proposal = await buildProposal(
            job({ state: 'done', ops }),
            new FakeSession(doc),
            DEFAULT_AI_STRINGS,
        );
        expect(proposal.accepted).toEqual([0, 1]);
        expect(toggleRow(proposal, 1, false)).toEqual(new Set());
        const unticked = await buildProposal(
            job({ state: 'done', ops }),
            new FakeSession(doc),
            DEFAULT_AI_STRINGS,
            { accepted: new Set() },
        );
        expect(toggleRow(unticked, 1, true)).toEqual(new Set([0, 1]));
    });
});
