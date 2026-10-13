import { buildProposal, Proposal } from '../lib/ai/proposal';
import {
    canCompose,
    effectiveChoice,
    initialState,
    MapAiState,
    modelOptions,
    quotaBlock,
    reduce,
} from '../lib/ai/state';
import { DEFAULT_AI_STRINGS } from '../lib/ai/strings';
import { MapDocument } from '../lib/map-document';
import { capabilities, FakeSession, job } from './ai-fakes';
import { anchor, OFFICE } from './fixtures';

const strings = DEFAULT_AI_STRINGS;

describe('map AI reducer', () => {
    let proposal: Proposal;
    let state: MapAiState;

    beforeAll(async () => {
        const doc = MapDocument.load(OFFICE);
        const element = doc.byId('area-1.01-status') as Element;
        proposal = await buildProposal(
            job({
                id: 'job-p',
                state: 'done',
                summary: 'Recoloured.',
                ops: [
                    {
                        op: 'set_attr',
                        why: '-',
                        target: {
                            a: anchor(doc, 'area-1.01-status'),
                            id: 'area-1.01-status',
                            h: doc.hashOf(element),
                        },
                        name: 'fill',
                        value: '#d1fae5',
                    },
                    {
                        op: 'set_attr',
                        why: '-',
                        target: { a: 'e9999' },
                        name: 'fill',
                        value: '#fff',
                    },
                ],
            }),
            new FakeSession(doc),
            strings,
        );
    });

    beforeEach(() => {
        state = initialState();
    });

    const step = (events: Parameters<typeof reduce>[1][]) => {
        for (const event of events) state = reduce(state, event, strings);
        return state;
    };

    it('moves from idle through checking to composing when the feature is on', () => {
        step([{ type: 'check' }]);
        expect(state.phase.kind).toBe('checking');
        expect(state.announcement).toBe(strings.checking);
        step([{ type: 'capabilities', capabilities: capabilities() }]);
        expect(state.phase.kind).toBe('composing');
        expect(canCompose(state.phase)).toBe(true);
        expect(quotaBlock(state.capabilities, strings)).toBeNull();
    });

    it('is unavailable with the reason when the feature is off, hidden on a 404', () => {
        step([
            { type: 'check' },
            {
                type: 'capabilities',
                capabilities: capabilities({
                    enabled: false,
                    reason: 'no AI provider is configured for this domain',
                }),
            },
        ]);
        expect(state.phase).toEqual({
            kind: 'unavailable',
            reason: 'no AI provider is configured for this domain',
            hidden: false,
        });
        expect(state.announcement).toContain('no AI provider');
        state = initialState();
        step([
            { type: 'check' },
            { type: 'capabilities_failed', status: 404, message: 'not found' },
        ]);
        expect(state.phase).toMatchObject({
            kind: 'unavailable',
            hidden: true,
        });
        state = initialState();
        step([
            { type: 'check' },
            {
                type: 'capabilities_failed',
                status: undefined,
                message: 'offline',
            },
        ]);
        expect(state.phase).toEqual({
            kind: 'unavailable',
            reason: 'offline',
            hidden: false,
        });
    });

    it('keeps a chosen model while the capabilities offer it', () => {
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
        expect(modelOptions(offered).map((option) => option.key)).toEqual([
            'prov-1|gpt-5.4-mini',
            'prov-1|gpt-6-luna',
            'prov-2|claude-opus-5-5',
            'prov-2|claude-fable-5-1',
        ]);
        let next = reduce(
            initialState(),
            { type: 'capabilities', capabilities: offered },
            strings,
        );
        expect(next.choice).toBeNull();
        expect(effectiveChoice(next)).toEqual({
            provider_id: 'prov-1',
            model: 'gpt-5.4-mini',
        });
        next = reduce(
            next,
            {
                type: 'model_chosen',
                choice: { provider_id: 'prov-2', model: 'claude-fable-5-1' },
            },
            strings,
        );
        expect(effectiveChoice(next)).toEqual({
            provider_id: 'prov-2',
            model: 'claude-fable-5-1',
        });
        next = reduce(
            next,
            { type: 'capabilities', capabilities: offered },
            strings,
        );
        expect(next.choice).toEqual({
            provider_id: 'prov-2',
            model: 'claude-fable-5-1',
        });
        next = reduce(
            next,
            { type: 'capabilities', capabilities: capabilities() },
            strings,
        );
        expect(next.choice).toBeNull();
        expect(modelOptions(capabilities())).toHaveLength(1);
    });

    it('blocks the composer when the quota is used up', () => {
        const none = capabilities({
            quota: { user_remaining_today: 0, domain_remaining_month: 5 },
        });
        expect(quotaBlock(none, strings)).toBe(strings.quota_user_exhausted);
        const domain = capabilities({
            quota: { user_remaining_today: 3, domain_remaining_month: 0 },
        });
        expect(quotaBlock(domain, strings)).toBe(
            strings.quota_domain_exhausted,
        );
    });

    it('records a person turn and follows the job to a preview', () => {
        step([
            { type: 'check' },
            { type: 'capabilities', capabilities: capabilities() },
            {
                type: 'submit',
                instruction: 'recolour',
                selected: 2,
                snapshot: false,
                at: 10,
            },
        ]);
        expect(state.phase.kind).toBe('submitting');
        expect(state.draft).toBe('recolour');
        expect(state.turns).toEqual([
            {
                kind: 'person',
                id: 'turn-1',
                instruction: 'recolour',
                selected: 2,
                snapshot: false,
                at: 10,
            },
        ]);
        const queued = job({ id: 'job-p', state: 'queued', version: 1 });
        step([{ type: 'job_accepted', job: queued, at: 11 }]);
        expect(state.phase).toEqual({
            kind: 'running',
            job: queued,
            started_at: 11,
            cancelling: false,
        });
        expect(state.announcement).toBe(strings.states.generating);
        const running = { ...queued, state: 'running' as const, version: 2 };
        step([
            { type: 'job_updated', job: running },
            { type: 'cancel_requested' },
        ]);
        expect(state.phase).toMatchObject({
            kind: 'running',
            job: running,
            cancelling: true,
        });
        step([{ type: 'proposal', proposal, at: 12 }]);
        expect(state.phase).toEqual({
            kind: 'reviewing',
            proposal,
            validating: false,
        });
        expect(state.parent_job_id).toBe('job-p');
        expect(state.turns[1]).toMatchObject({
            kind: 'proposal',
            job_id: 'job-p',
            outcome: 'previewing',
        });
        expect(state.announcement).toBe('2 changes, 1 cannot be applied');
        step([{ type: 'previewed', proposal }]);
        expect(state.phase).toEqual({ kind: 'applied', proposal });
        expect(state.announcement).toBe(
            'Applied 1 changes to the map. Keep them, or undo.',
        );
        step([{ type: 'validating' }]);
        expect(state.phase).toEqual({
            kind: 'reviewing',
            proposal,
            validating: true,
        });
        step([
            { type: 'rows_changed', proposal },
            { type: 'previewed', proposal },
        ]);
        step([
            { type: 'reason_toggled', reason: 'too_much' },
            { type: 'reason_toggled', reason: 'other' },
            { type: 'reason_toggled', reason: 'too_much' },
        ]);
        expect(state.reasons).toEqual(['other']);
        step([{ type: 'kept', proposal }]);
        expect(state.phase.kind).toBe('composing');
        expect(state.reasons).toEqual([]);
        expect(state.turns[1]).toMatchObject({
            kind: 'proposal',
            outcome: 'partial',
        });
        expect(state.announcement).toBe('Kept 1 of 2');
    });

    it('records an undo with its reasons, a failure with its kind, and a cancel', () => {
        step([
            { type: 'check' },
            { type: 'capabilities', capabilities: capabilities() },
            {
                type: 'submit',
                instruction: 'x',
                selected: 0,
                snapshot: true,
                at: 1,
            },
            { type: 'job_accepted', job: job({ id: 'job-p' }), at: 2 },
            { type: 'proposal', proposal, at: 3 },
            { type: 'previewed', proposal },
            { type: 'undone', proposal, reasons: ['wrong_values'] },
        ]);
        expect(state.phase.kind).toBe('composing');
        expect(state.turns[1]).toMatchObject({
            kind: 'proposal',
            outcome: 'undone',
            reasons: ['wrong_values'],
        });
        expect(state.announcement).toBe(strings.outcomes.undone);

        const failed = job({
            id: 'job-f',
            state: 'failed',
            error_kind: 'moderation',
        });
        step([
            {
                type: 'submit',
                instruction: 'y',
                selected: 0,
                snapshot: false,
                at: 4,
            },
            { type: 'job_accepted', job: failed, at: 5 },
            {
                type: 'job_failed',
                job: failed,
                error: {
                    kind: 'refused',
                    message: strings.states.refused,
                    retryable: false,
                    job: failed,
                },
                at: 6,
            },
        ]);
        expect(state.phase).toMatchObject({
            kind: 'error',
            error: { kind: 'refused' },
        });
        expect(state.turns[state.turns.length - 1]).toMatchObject({
            kind: 'status',
            text: strings.states.refused,
        });
        expect(state.parent_job_id).toBe('job-f');
        expect(canCompose(state.phase)).toBe(true);

        step([
            {
                type: 'submit',
                instruction: 'z',
                selected: 0,
                snapshot: false,
                at: 7,
            },
            { type: 'job_accepted', job: job({ id: 'job-c' }), at: 8 },
            {
                type: 'job_cancelled',
                job: job({ id: 'job-c', state: 'cancelled' }),
                at: 9,
            },
        ]);
        expect(state.phase).toMatchObject({ kind: 'cancelled' });
        expect(state.announcement).toBe(strings.states.cancelled);

        step([
            {
                type: 'submit_failed',
                error: {
                    kind: 'busy',
                    message: strings.states.busy,
                    retryable: true,
                },
            },
        ]);
        expect(state.phase).toMatchObject({
            kind: 'error',
            error: { kind: 'busy' },
        });

        step([{ type: 'reset' }]);
        expect(state.phase.kind).toBe('composing');
        expect(state.parent_job_id).toBeNull();
        expect(state.draft).toBe('');
        expect(state.turns.length).toBeGreaterThan(0);
    });

    it('ignores a submit while a job is running and a draft while idle', () => {
        step([
            { type: 'check' },
            { type: 'capabilities', capabilities: capabilities() },
        ]);
        step([
            {
                type: 'submit',
                instruction: 'a',
                selected: 0,
                snapshot: false,
                at: 1,
            },
            { type: 'job_accepted', job: job(), at: 2 },
        ]);
        const before = state;
        step([
            {
                type: 'submit',
                instruction: 'b',
                selected: 0,
                snapshot: false,
                at: 3,
            },
        ]);
        expect(state).toBe(before);
        step([
            { type: 'draft', text: 'c' },
            { type: 'snapshot_toggled', on: true },
        ]);
        expect(state.draft).toBe('c');
        expect(state.snapshot_on).toBe(true);
        step([{ type: 'snapshot_failed' }]);
        expect(state.turns[state.turns.length - 1]).toMatchObject({
            kind: 'status',
            text: strings.snapshot_failed,
        });
    });
});
