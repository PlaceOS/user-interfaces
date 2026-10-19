import { signal } from '@angular/core';
import { MapAiModelChoice } from '../lib/ai/state';
import { DEFAULT_AI_STRINGS } from '../lib/ai/strings';
import { errorFromJob, errorFromStatus, MapAiThread } from '../lib/ai/thread';
import {
    MAP_AI_CONTEXT_SCHEMA,
    MapAIAnnotation,
    MapAIEditRequest,
    MapAIJob,
} from '../lib/ai/types';
import { MapDocument, Target } from '../lib/map-document';
import { MapOp } from '../lib/ops';
import {
    capabilities,
    FakeSession,
    FakeTransport,
    httpError,
    job,
    jobSequence,
} from './ai-fakes';
import { OFFICE } from './fixtures';

const no_sleep = async () => undefined;

function target(doc: MapDocument, id: string): Target {
    const element = doc.byId(id);
    if (!element) throw new Error(`no ${id}`);
    return { a: doc.anchorOf(element), id, h: doc.hashOf(element) };
}

function recolour(doc: MapDocument, id: string, value: string): MapOp {
    return {
        op: 'set_attr',
        why: '-',
        target: target(doc, id),
        name: 'fill',
        value,
    };
}

function fill(doc: MapDocument, id: string): string | null {
    return doc.byId(id)?.getAttribute('fill') ?? null;
}

async function flush(times = 10): Promise<void> {
    for (let i = 0; i < times; i++) await Promise.resolve();
}

function setup(ops: MapOp[], final: Partial<MapAIJob> = {}) {
    const doc = MapDocument.load(OFFICE);
    const session = new FakeSession(doc);
    const sequence = jobSequence({ summary: 'Recoloured.', ops, ...final });
    const transport = new FakeTransport({
        edit: sequence.accepted,
        polls: sequence.polls,
    });
    const thread = new MapAiThread(session, 'zone-1', {
        transport,
        sleep: no_sleep,
        now: () => 1000,
        idempotency_key: () => 'key-1',
    });
    return { doc, session, transport, thread, sequence };
}

describe('MapAiThread', () => {
    it('refreshes remaining usage without clearing the applied proposal', async () => {
        const { thread, transport } = setup([]);
        await thread.load();
        transport.options.capabilities = capabilities({
            quota: { user_remaining_today: 0, domain_remaining_month: 941 },
        });
        await thread.submit('No changes needed');
        await flush();
        expect(thread.capabilities()?.quota.user_remaining_today).toBe(0);
        expect(thread.capabilities()?.quota.domain_remaining_month).toBe(941);
        expect(
            thread.state().turns.some((turn) => turn.kind === 'proposal'),
        ).toBe(true);
        expect(thread.can_send()).toBe(false);
    });

    it('sends the chosen model, remembered for the next thread', async () => {
        const stored: { choice: MapAiModelChoice | null } = { choice: null };
        const memory = {
            read: () => stored.choice,
            write: (choice: MapAiModelChoice | null) => {
                stored.choice = choice;
            },
        };
        const offered = capabilities({
            providers: [
                {
                    id: 'prov-1',
                    name: 'Signage Image Gen',
                    provider: 'OPENAI',
                    text_model: 'gpt-5.4-mini',
                    text_models: ['gpt-5.4-mini', 'gpt-6-luna'],
                },
                {
                    id: 'prov-2',
                    name: 'Claude',
                    provider: 'ANTHROPIC',
                    text_model: 'claude-opus-5-5',
                    text_models: ['claude-opus-5-5', 'claude-fable-5-1'],
                },
            ],
        });
        const doc = MapDocument.load(OFFICE);
        const session = new FakeSession(doc);
        const sequence = jobSequence({
            summary: 'Recoloured.',
            ops: [recolour(doc, 'area-1.01-status', '#d1fae5')],
        });
        const transport = new FakeTransport({
            edit: sequence.accepted,
            polls: sequence.polls,
            capabilities: offered,
        });
        const options = {
            transport,
            sleep: no_sleep,
            now: () => 1000,
            idempotency_key: () => 'key-1',
            memory,
        };
        const thread = new MapAiThread(session, 'zone-1', options);
        await thread.load();
        expect(thread.choice()).toEqual({
            provider_id: 'prov-1',
            model: 'gpt-5.4-mini',
        });
        expect(thread.model_options()).toHaveLength(4);

        thread.chooseModel({
            provider_id: 'prov-2',
            model: 'claude-fable-5-1',
        });
        expect(stored.choice).toEqual({
            provider_id: 'prov-2',
            model: 'claude-fable-5-1',
        });
        await thread.submit('recolour Meeting 1.01 light green');
        expect(transport.edits[0].body).toMatchObject({
            provider_id: 'prov-2',
            model: 'claude-fable-5-1',
        });

        const again = new MapAiThread(session, 'zone-1', options);
        expect(again.state().choice).toEqual({
            provider_id: 'prov-2',
            model: 'claude-fable-5-1',
        });
        await again.load();
        expect(again.choice()).toEqual({
            provider_id: 'prov-2',
            model: 'claude-fable-5-1',
        });

        const forgetful = new MapAiThread(session, 'zone-1', {
            ...options,
            memory: null,
        });
        expect(forgetful.state().choice).toBeNull();
    });

    it('previews a proposal on the map, then keeps it and refines from it', async () => {
        const { doc, session, transport, thread, sequence } = setup([
            recolour(MapDocument.load(OFFICE), 'area-1.01-status', '#d1fae5'),
        ]);
        await thread.load();
        expect(thread.phase().kind).toBe('composing');
        expect(thread.can_send()).toBe(true);
        session.select([doc.anchorOf(doc.byId('table-01.001') as Element)]);

        await thread.submit('  recolour Meeting 1.01 light green ');
        const edit = transport.edits[0].body as MapAIEditRequest;
        expect(edit).toMatchObject({
            zone_id: 'zone-1',
            instruction: 'recolour Meeting 1.01 light green',
            parent_job_id: null,
            markup_upload_id: null,
            idempotency_key: 'key-1',
        });
        expect(edit.context.schema).toBe(MAP_AI_CONTEXT_SCHEMA);
        expect(edit.context.markup.selected).toEqual(session.selection());
        expect(transport.job_polls).toHaveLength(2);

        expect(thread.phase().kind).toBe('applied');
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');
        expect(session.applied).toHaveLength(1);
        expect(session.applied[0].label).toBe('AI: Recoloured.');
        const proposal = thread.proposal();
        expect(proposal?.rows[0]).toMatchObject({
            applied: true,
            checked: true,
            text: 'Change fill of area-1.01-status to #d1fae5',
        });
        expect(thread.turns().map((turn) => turn.kind)).toEqual([
            'person',
            'proposal',
        ]);
        expect(thread.turns()[1]).toMatchObject({ outcome: 'previewing' });
        expect(thread.announcement()).toBe(
            'Applied 1 changes to the map. Keep them, or undo.',
        );

        await thread.keep();
        expect(transport.resolves).toHaveLength(1);
        expect(transport.resolves[0].url).toContain(
            `/jobs/${sequence.accepted.id}/resolve`,
        );
        expect(transport.resolves[0].body).toEqual({
            decision: 'applied',
            accepted_op_ids: ['op-1'],
            rejected_op_ids: [],
            saved_upload_id: null,
        });
        expect(thread.phase().kind).toBe('composing');
        expect(thread.state().parent_job_id).toBe(sequence.accepted.id);
        expect(thread.turns()[1]).toMatchObject({ outcome: 'kept' });
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');

        const second = jobSequence({
            ops: [recolour(doc, 'area-1.02-status', '#fee')],
        });
        transport.options.edit = second.accepted;
        transport.polls = second.polls;
        await thread.submit('and the other one pink');
        expect(
            (transport.edits[1].body as MapAIEditRequest).parent_job_id,
        ).toBe(sequence.accepted.id);
        expect(thread.phase().kind).toBe('applied');
        expect(fill(doc, 'area-1.02-status')).toBe('#fee');
    });

    it('undoes the preview and records the rejection with its reasons', async () => {
        const { doc, session, transport, thread } = setup([
            recolour(MapDocument.load(OFFICE), 'area-1.01-status', '#d1fae5'),
        ]);
        await thread.load();
        await thread.submit('recolour');
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');
        thread.toggleReason('wrong_values');
        thread.toggleReason('too_much');
        await thread.undo();
        expect(fill(doc, 'area-1.01-status')).toBeNull();
        expect(session.can_undo()).toBe(false);
        expect(transport.resolves[0].body).toEqual({
            decision: 'rejected',
            accepted_op_ids: [],
            rejected_op_ids: ['op-1'],
            reasons: ['wrong_values', 'too_much'],
            saved_upload_id: null,
        });
        expect(thread.phase().kind).toBe('composing');
        expect(thread.turns()[1]).toMatchObject({
            outcome: 'undone',
            reasons: ['wrong_values', 'too_much'],
        });
        expect(thread.state().parent_job_id).toBeTruthy();
    });

    it('settles the preview when the map changes outside the panel', async () => {
        const op = recolour(
            MapDocument.load(OFFICE),
            'area-1.01-status',
            '#d1fae5',
        );

        const undone = setup([op]);
        await undone.thread.load();
        await undone.thread.submit('recolour');
        undone.session.undo();
        undone.thread.mapChanged();
        await undone.thread.keep();
        expect(fill(undone.doc, 'area-1.01-status')).toBeNull();
        expect(undone.thread.phase().kind).toBe('composing');
        expect(undone.thread.turns()[1]).toMatchObject({ outcome: 'undone' });
        expect(undone.transport.resolves).toHaveLength(1);
        expect(undone.transport.resolves[0].body).toMatchObject({
            decision: 'rejected',
        });

        const reverted = setup([op]);
        await reverted.thread.load();
        await reverted.thread.submit('recolour');
        reverted.session.dirty.set(false);
        reverted.session.version.update((version) => version + 1);
        reverted.thread.mapChanged();
        await reverted.thread.keep();
        expect(reverted.thread.turns()[1]).toMatchObject({ outcome: 'undone' });

        const edited = setup([op]);
        await edited.thread.load();
        await edited.thread.submit('recolour');
        edited.session.apply(
            [recolour(edited.doc, 'area-1.02-status', '#fee2e2')],
            'Fill',
        );
        edited.thread.mapChanged();
        await edited.thread.keep();
        expect(fill(edited.doc, 'area-1.01-status')).toBe('#d1fae5');
        expect(fill(edited.doc, 'area-1.02-status')).toBe('#fee2e2');
        expect(edited.thread.turns()[1]).toMatchObject({ outcome: 'kept' });
        expect(edited.transport.resolves).toHaveLength(1);
        expect(edited.transport.resolves[0].body).toMatchObject({
            decision: 'applied',
        });
    });

    it('keeps a valid preview when another checkbox exceeds the batch size limit', async () => {
        const base = MapDocument.load(OFFICE);
        const { doc, thread, session } = setup([
            recolour(base, 'area-1.01-status', '#d1fae5'),
            {
                op: 'duplicate',
                why: 'adds furniture',
                target: target(base, 'desks'),
                translate: [0, 0],
                count: 10,
            },
        ]);
        await thread.load();
        await thread.submit('Recolour and copy desks');
        expect(thread.proposal()?.verdict).toBe('blocked');
        expect(thread.proposal()?.rows.every((row) => !row.applied)).toBe(true);
        expect(thread.turns()[1]).toMatchObject({ outcome: 'not_applied' });
        await thread.toggle(1, false);
        const before = doc.serialise();
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');
        await thread.toggle(1, true);
        expect(doc.serialise()).toBe(before);
        expect(thread.phase().kind).toBe('applied');
        expect(thread.proposal()?.accepted).toEqual([0]);
        expect(thread.proposal()?.rows[1].checked).toBe(false);
        expect(thread.selection_error()).toContain(
            'Your previous preview is unchanged',
        );
        expect(session.history.length).toBe(1);
        await thread.toggle(0, false);
        expect(thread.selection_error()).toBe('');
        expect(thread.turns()[1]).toMatchObject({ outcome: 'not_applied' });
    });

    it('swaps the preview in one step when a changed selection is validated', async () => {
        const base = MapDocument.load(OFFICE);
        const { thread, session } = setup([
            recolour(base, 'area-1.01-status', '#d1fae5'),
            recolour(base, 'area-1.02-status', '#fee2e2'),
        ]);
        await thread.load();
        await thread.submit('Recolour both');
        const undo = session.undo.bind(session);
        const apply = session.apply.bind(session);
        let between = false;
        const seen: boolean[] = [];
        session.undo = () => {
            between = true;
            queueMicrotask(() => seen.push(between));
            return undo();
        };
        session.apply = (...args) => {
            between = false;
            return apply(...args);
        };
        await thread.toggle(1, false);
        await thread.toggle(1, true);
        expect(seen).toEqual([false, false]);
        expect(thread.proposal()?.accepted).toEqual([0, 1]);
    });

    it('toggles two complete 41-piece plant copies independently', async () => {
        const markup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><desc>${'existing metadata '.repeat(3000)}</desc><g id="plants">${Array.from({ length: 41 }, (_, i) => `<rect x="${10 + i / 2}" y="20" width="1" height="2" fill="green"/>`).join('')}</g></svg>`;
        const doc = MapDocument.load(markup);
        const session = new FakeSession(doc);
        const ops: MapOp[] = [
            {
                op: 'group',
                why: 'complete plant',
                targets: [...doc.byId('plants')!.children].map((el) => ({
                    a: doc.anchorOf(el),
                    h: doc.hashOf(el),
                })),
                new_id: 'ai-plant-01',
            },
            {
                op: 'duplicate',
                why: 'first plant',
                target: { id: 'ai-plant-01' },
                new_id: 'ai-plant-02',
                translate: [100, 0],
            },
            {
                op: 'duplicate',
                why: 'second plant',
                target: { id: 'ai-plant-01' },
                new_id: 'ai-plant-03',
                translate: [200, 0],
            },
        ];
        const sequence = jobSequence({ ops });
        const thread = new MapAiThread(session, 'zone-1', {
            transport: new FakeTransport({
                edit: sequence.accepted,
                polls: sequence.polls,
            }),
            sleep: no_sleep,
        });
        await thread.load();
        await thread.submit('Add two plants');
        expect(thread.proposal()?.verdict).toBe('ready');
        expect(doc.byId('ai-plant-02')!.children).toHaveLength(41);
        expect(doc.byId('ai-plant-03')!.children).toHaveLength(41);
        await thread.toggle(1, false);
        expect(doc.byId('ai-plant-02')).toBeNull();
        expect(doc.byId('ai-plant-03')!.children).toHaveLength(41);
        await thread.toggle(1, true);
        expect(doc.byId('ai-plant-02')!.children).toHaveLength(41);
        expect(doc.byId('ai-plant-03')!.children).toHaveLength(41);
        await thread.toggle(2, false);
        expect(doc.byId('ai-plant-02')!.children).toHaveLength(41);
        expect(doc.byId('ai-plant-03')).toBeNull();
        await thread.toggle(2, true);
        expect(thread.proposal()?.accepted).toEqual([0, 1, 2]);
        expect(doc.byId('ai-plant-03')!.children).toHaveLength(41);
    });

    it('re-applies the preview when a row is unticked and resolves as partial', async () => {
        const base = MapDocument.load(OFFICE);
        const { doc, session, transport, thread } = setup([
            recolour(base, 'area-1.01-status', '#d1fae5'),
            recolour(base, 'area-1.02-status', '#fee'),
        ]);
        await thread.load();
        await thread.submit('recolour both');
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');
        expect(fill(doc, 'area-1.02-status')).toBe('#fee');

        await thread.toggle(1, false);
        expect(thread.phase().kind).toBe('applied');
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');
        expect(fill(doc, 'area-1.02-status')).toBeNull();
        expect(session.applied).toHaveLength(2);
        expect([...(session.applied[1].options?.skip || [])]).toEqual([1]);
        expect(session.history.length).toBe(1);
        expect(thread.proposal()?.accepted).toEqual([0]);
        expect(thread.proposal()?.verdict).toBe('partial');

        await thread.toggle(0, false);
        expect(thread.phase()).toMatchObject({
            kind: 'reviewing',
            validating: false,
        });
        expect(thread.proposal()?.verdict).toBe('nothing_accepted');
        expect(fill(doc, 'area-1.01-status')).toBeNull();
        expect(session.history.length).toBe(0);

        await thread.toggle(1, true);
        expect(thread.phase().kind).toBe('applied');
        expect(fill(doc, 'area-1.02-status')).toBe('#fee');
        expect(fill(doc, 'area-1.01-status')).toBeNull();

        await thread.keep();
        expect(transport.resolves[0].body).toEqual({
            decision: 'partial',
            accepted_op_ids: ['op-2'],
            rejected_op_ids: ['op-1'],
            saved_upload_id: null,
        });
        expect(thread.turns()[1]).toMatchObject({ outcome: 'partial' });
    });

    it('locks an op the validator rejects and applies the rest', async () => {
        const { doc, thread } = setup([
            recolour(MapDocument.load(OFFICE), 'area-1.01-status', '#d1fae5'),
            {
                op: 'set_attr',
                why: '-',
                target: { a: 'e9999' },
                name: 'fill',
                value: '#fff',
            },
        ]);
        await thread.load();
        await thread.submit('recolour');
        expect(thread.phase().kind).toBe('applied');
        const proposal = thread.proposal();
        expect(proposal?.rows[1]).toMatchObject({
            locked: true,
            applied: false,
            checked: false,
        });
        expect(proposal?.invalid_count).toBe(1);
        expect(proposal?.verdict).toBe('partial');
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');
    });

    it('leaves a server-doubted op unticked until the person ticks it', async () => {
        const { doc, thread } = setup(
            [recolour(MapDocument.load(OFFICE), 'area-1.01-status', '#d1fae5')],
            { server_issues: { 'op-1': 'unknown anchor' } },
        );
        await thread.load();
        await thread.submit('recolour');
        expect(thread.phase()).toMatchObject({
            kind: 'reviewing',
            validating: false,
        });
        expect(thread.proposal()?.verdict).toBe('nothing_accepted');
        expect(thread.proposal()?.rows[0].server_issue).toBe('unknown anchor');
        expect(fill(doc, 'area-1.01-status')).toBeNull();
        await thread.toggle(0, true);
        expect(thread.phase().kind).toBe('applied');
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');
    });

    it('shows a question as a reply prompt and carries the job into the answer', async () => {
        const { doc, transport, thread, sequence } = setup(
            [{ op: 'ask', why: '-', question: 'Which room?' }],
            { questions: ['Which room?'], summary: '' },
        );
        await thread.load();
        await thread.submit('recolour the room');
        expect(thread.phase()).toMatchObject({
            kind: 'reviewing',
            validating: false,
        });
        expect(thread.proposal()?.verdict).toBe('questions');
        expect(thread.proposal()?.questions).toEqual(['Which room?']);
        expect(thread.announcement()).toBe('Which room?');
        expect(fill(doc, 'area-1.01-status')).toBeNull();
        expect(thread.can_send()).toBe(true);
        const answer = jobSequence({
            ops: [recolour(doc, 'area-1.01-status', '#abc')],
        });
        transport.options.edit = answer.accepted;
        transport.polls = answer.polls;
        await thread.submit('Meeting 1.01');
        expect(
            (transport.edits[1].body as MapAIEditRequest).parent_job_id,
        ).toBe(sequence.accepted.id);
        expect(thread.phase().kind).toBe('applied');
    });

    it('reports an empty answer', async () => {
        const { thread } = setup([], { summary: 'Nothing to do.' });
        await thread.load();
        await thread.submit('do nothing');
        expect(thread.phase()).toMatchObject({ kind: 'reviewing' });
        expect(thread.proposal()?.verdict).toBe('empty');
        expect(thread.announcement()).toBe(
            'No changes proposed. The AI said: Nothing to do.',
        );
    });

    it('turns job failures into named errors and retries the same instruction', async () => {
        const failed = jobSequence({
            state: 'failed',
            error_kind: 'timeout',
            error_message: 'slow',
        });
        const doc = MapDocument.load(OFFICE);
        const transport = new FakeTransport({
            edit: failed.accepted,
            polls: failed.polls,
        });
        const thread = new MapAiThread(new FakeSession(doc), 'zone-1', {
            transport,
            sleep: no_sleep,
        });
        await thread.load();
        await thread.submit('recolour');
        expect(thread.phase()).toMatchObject({
            kind: 'error',
            error: { kind: 'timeout', retryable: true },
        });
        expect(thread.turns()[thread.turns().length - 1]).toMatchObject({
            kind: 'status',
            text: DEFAULT_AI_STRINGS.states.timeout,
        });

        const again = jobSequence({ ops: [] });
        transport.options.edit = again.accepted;
        transport.polls = again.polls;
        await thread.retry();
        expect(transport.edits).toHaveLength(2);
        expect((transport.edits[1].body as MapAIEditRequest).instruction).toBe(
            'recolour',
        );
        expect(thread.phase().kind).toBe('reviewing');

        expect(
            errorFromJob(job({ error_kind: 'moderation' }), DEFAULT_AI_STRINGS),
        ).toMatchObject({ kind: 'refused', retryable: false });
        expect(
            errorFromJob(
                job({ error_kind: 'vendor', error_message: 'boom' }),
                DEFAULT_AI_STRINGS,
            ),
        ).toMatchObject({ kind: 'vendor', message: 'boom' });
        expect(
            errorFromJob(
                job({ error_kind: 'invalid_response' }),
                DEFAULT_AI_STRINGS,
            ),
        ).toMatchObject({ kind: 'invalid', retryable: true });
    });

    it('maps submit failures by status', async () => {
        for (const [status, message, kind, retryable] of [
            [503, 'too many map edits are running right now', 'busy', true],
            [
                503,
                'no AI provider is configured for this domain',
                'not_configured',
                false,
            ],
            [
                429,
                'you have used your map editing allowance for today',
                'quota',
                false,
            ],
            [403, '', 'forbidden', false],
            [422, 'context is required', 'request', false],
            [502, '', 'vendor', true],
            [undefined, 'offline', 'network', true],
        ] as const) {
            const transport = new FakeTransport({
                edit: httpError(status, message),
            });
            const thread = new MapAiThread(
                new FakeSession(MapDocument.load(OFFICE)),
                'zone-1',
                { transport, sleep: no_sleep },
            );
            await thread.load();
            await thread.submit('x');
            expect(thread.phase()).toMatchObject({
                kind: 'error',
                error: { kind, retryable },
            });
        }
        expect(errorFromStatus(504, '', DEFAULT_AI_STRINGS)).toMatchObject({
            kind: 'timeout',
        });
        expect(errorFromStatus(500, '', DEFAULT_AI_STRINGS)).toMatchObject({
            kind: 'unknown',
            retryable: true,
        });
    });

    it('hides the panel on a 404, explains a disabled feature and blocks on an empty quota', async () => {
        const missing = new MapAiThread(
            new FakeSession(MapDocument.load(OFFICE)),
            'zone-1',
            {
                transport: new FakeTransport({
                    capabilities: httpError(404, 'not found'),
                }),
            },
        );
        await missing.load();
        expect(missing.phase()).toMatchObject({
            kind: 'unavailable',
            hidden: true,
        });

        const off = new MapAiThread(
            new FakeSession(MapDocument.load(OFFICE)),
            'zone-1',
            {
                transport: new FakeTransport({
                    capabilities: capabilities({
                        enabled: false,
                        reason: 'the feature is switched off',
                    }),
                }),
            },
        );
        await off.load();
        expect(off.phase()).toEqual({
            kind: 'unavailable',
            reason: 'the feature is switched off',
            hidden: false,
        });

        const transport = new FakeTransport({
            capabilities: capabilities({
                quota: { user_remaining_today: 0, domain_remaining_month: 10 },
            }),
        });
        const spent = new MapAiThread(
            new FakeSession(MapDocument.load(OFFICE)),
            'zone-1',
            { transport },
        );
        await spent.load();
        expect(spent.phase().kind).toBe('composing');
        expect(spent.quota_block()).toBe(
            DEFAULT_AI_STRINGS.quota_user_exhausted,
        );
        expect(spent.can_send()).toBe(false);
        await spent.submit('x');
        expect(transport.edits).toHaveLength(0);
    });

    it('refuses an instruction over the limit without sending it', async () => {
        const transport = new FakeTransport({
            capabilities: capabilities({
                limits: {
                    max_context_bytes: 1024 * 512,
                    max_ops: 80,
                    max_instruction_chars: 5,
                },
            }),
        });
        const thread = new MapAiThread(
            new FakeSession(MapDocument.load(OFFICE)),
            'zone-1',
            { transport },
        );
        await thread.load();
        await thread.submit('too long an instruction');
        expect(transport.edits).toHaveLength(0);
        expect(thread.announcement()).toBe(DEFAULT_AI_STRINGS.too_long);
        expect(thread.phase().kind).toBe('composing');
    });

    it('sends the same coloured marks to the snapshot and context while drawing can continue', async () => {
        const sequence = jobSequence({ ops: [] });
        const transport = new FakeTransport({
            edit: sequence.accepted,
            polls: sequence.polls,
        });
        const annotations = signal<readonly MapAIAnnotation[]>([
            {
                n: 1,
                kind: 'ellipse',
                colour: 'red',
                text: 'red circle',
                x: 90,
                y: 190,
                width: 60,
                height: 50,
            },
        ]);
        const session = Object.assign(
            new FakeSession(MapDocument.load(OFFICE)),
            { annotations },
        );
        let captured: readonly MapAIAnnotation[] = [];
        const thread = new MapAiThread(session, 'zone-1', {
            transport,
            sleep: no_sleep,
            upload: async () => 'upload-1',
            snapshot: async (_session, _selection, _tags, marks) => {
                captured = marks;
                annotations.set([]);
                return {
                    blob: new Blob(['png']),
                    image_px: [1024, 512],
                    units_per_px: 0.9766,
                };
            },
        });
        await thread.load();
        await thread.submit('Remove the chairs from the desk circled in red');
        const edit = transport.edits[0].body as MapAIEditRequest;
        expect(edit.context.markup.annotations).toEqual(captured);
        expect(edit.context.markup.annotations[0].colour).toBe('red');
        expect(edit.context.markup.annotations[0].text).toBe('red circle');
        expect(edit.context.markup.annotations[0].hits).toContain(
            session.doc.anchorOf(session.doc.byId('table-01.001')!),
        );
        expect(edit.context.shortlist).toContain(
            session.doc.anchorOf(session.doc.byId('table-01.001')!),
        );
        expect(annotations()).toEqual([]);
    });

    it('sends the snapshot through the upload port and its size in the context', async () => {
        const sequence = jobSequence({ ops: [] });
        const transport = new FakeTransport({
            edit: sequence.accepted,
            polls: sequence.polls,
        });
        const uploads: string[] = [];
        const thread = new MapAiThread(
            new FakeSession(MapDocument.load(OFFICE)),
            'zone-1',
            {
                transport,
                sleep: no_sleep,
                upload: async (_blob, name) => {
                    uploads.push(name);
                    return 'upload-1';
                },
                snapshot: async () => ({
                    blob: new Blob(['png']),
                    image_px: [1024, 512],
                    units_per_px: 0.9766,
                }),
            },
        );
        await thread.load();
        await thread.submit('recolour');
        expect(uploads).toEqual(['map-snapshot.png']);
        const edit = transport.edits[0].body as MapAIEditRequest;
        expect(edit.markup_upload_id).toBe('upload-1');
        expect(edit.context.image_px).toEqual([1024, 512]);
        expect(edit.context.units_per_px).toBe(0.9766);
        expect(thread.turns()[0]).toMatchObject({
            kind: 'person',
            snapshot: true,
        });
    });

    it('does not send when the snapshot upload fails', async () => {
        const sequence = jobSequence({ ops: [] });
        const transport = new FakeTransport({
            edit: sequence.accepted,
            polls: sequence.polls,
        });
        const thread = new MapAiThread(
            new FakeSession(MapDocument.load(OFFICE)),
            'zone-1',
            {
                transport,
                sleep: no_sleep,
                upload: async () => {
                    throw new Error('storage down');
                },
                snapshot: async () => ({
                    blob: new Blob(['png']),
                    image_px: [1024, 512],
                    units_per_px: 0.9766,
                }),
            },
        );
        await thread.load();
        await thread.submit('recolour');
        expect(transport.edits).toHaveLength(0);
        expect(thread.phase()).toMatchObject({
            kind: 'error',
            error: {
                message: DEFAULT_AI_STRINGS.snapshot_failed,
                retryable: true,
            },
        });
    });

    it('cancels a running job and ignores the watch afterwards', async () => {
        const accepted = job({ id: 'job-c', state: 'queued', version: 1 });
        let release: (() => void) | null = null;
        const gate = new Promise<unknown>((resolve) => {
            release = () =>
                resolve({ ...accepted, state: 'running', version: 3 });
        });
        const transport = new FakeTransport({
            edit: accepted,
            polls: [
                { ...accepted, state: 'running', version: 2 },
                () => gate,
                { ...accepted, state: 'done', version: 4 },
            ],
        });
        const thread = new MapAiThread(
            new FakeSession(MapDocument.load(OFFICE)),
            'zone-1',
            { transport, sleep: no_sleep },
        );
        await thread.load();
        const submitting = thread.submit('recolour');
        await flush(20);
        expect(thread.phase()).toMatchObject({
            kind: 'running',
            cancelling: false,
        });
        await thread.cancel();
        expect(transport.cancels).toHaveLength(1);
        expect(thread.phase()).toMatchObject({ kind: 'cancelled' });
        expect(thread.announcement()).toBe(DEFAULT_AI_STRINGS.states.cancelled);
        (release as unknown as () => void)();
        await submitting;
        expect(thread.phase().kind).toBe('cancelled');
        expect(transport.job_polls).toHaveLength(2);
        expect(thread.can_send()).toBe(true);
    });

    it('refines on top of a preview and abandons it on reset', async () => {
        const { doc, transport, thread, sequence } = setup([
            recolour(MapDocument.load(OFFICE), 'area-1.01-status', '#d1fae5'),
        ]);
        await thread.load();
        await thread.submit('recolour');
        expect(thread.phase().kind).toBe('applied');
        const next = jobSequence({
            ops: [recolour(doc, 'area-1.02-status', '#fee')],
        });
        transport.options.edit = next.accepted;
        transport.polls = next.polls;
        await thread.submit('and the other');
        expect(transport.resolves[0].body).toMatchObject({
            decision: 'refined',
            accepted_op_ids: ['op-1'],
        });
        expect(fill(doc, 'area-1.01-status')).toBe('#d1fae5');
        expect(fill(doc, 'area-1.02-status')).toBe('#fee');
        expect(thread.turns()[1]).toMatchObject({
            outcome: 'refined',
            job_id: sequence.accepted.id,
        });
        expect(thread.proposal()?.job.id).toBe(next.accepted.id);

        thread.reset();
        await flush();
        expect(transport.resolves[1].body).toMatchObject({
            decision: 'abandoned',
            accepted_op_ids: ['op-1'],
        });
        expect(thread.phase().kind).toBe('composing');
        expect(thread.state().parent_job_id).toBeNull();
        expect(fill(doc, 'area-1.02-status')).toBe('#fee');
    });

    it('relays hover and selection from rows to the session', async () => {
        const { doc, session, thread } = setup([
            recolour(MapDocument.load(OFFICE), 'area-1.01-status', '#d1fae5'),
        ]);
        await thread.load();
        await thread.submit('recolour');
        const row = thread.proposal()?.rows[0];
        if (!row) throw new Error('no row');
        thread.hoverRow(row);
        expect(session.hover()).toBe(
            doc.anchorOf(doc.byId('area-1.01-status') as Element),
        );
        thread.hoverRow(null);
        expect(session.hover()).toBeNull();
        thread.selectRow(row);
        expect(session.selection()).toEqual(row.anchors);
    });
});
