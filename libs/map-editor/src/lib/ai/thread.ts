import { computed, signal, Signal, WritableSignal } from '@angular/core';
import { MapIndex } from '../map-index';
import { annotationCandidates } from './annotations';
import {
    cancelMapAIJob,
    errorMessage,
    errorStatus,
    isFinalJob,
    mapAICapabilities,
    MapAiTransport,
    PLACEOS_TRANSPORT,
    resolveMapAIJob,
    Sleep,
    submitMapAIEdit,
    WatchAbortedError,
    watchJob,
    WatchTimeoutError,
} from './api';
import { buildContext, mentionedEntries } from './context';
import {
    buildProposal,
    decisionFor,
    heldAfter,
    Proposal,
    ProposalBase,
    ProposalGroup,
    ProposalRow,
    resolvePayload,
    toggleGroup,
    toggleRow,
} from './proposal';
import { MapEditorSessionLike } from './session-contract';
import { renderSnapshot, SnapshotSize } from './snapshot';
import {
    canCompose,
    effectiveChoice,
    initialState,
    MapAiError,
    MapAiEvent,
    MapAiModelChoice,
    MapAiModelOption,
    MapAiState,
    modelOptions,
    quotaBlock,
    reduce,
} from './state';
import {
    format,
    MapEditorAiStrings,
    MapEditorAiStringsOverride,
    resolveAiStrings,
} from './strings';
import { MapAIAnnotation, MapAIJob, MapAIResolveDecision } from './types';

/** Stores a file and answers with its upload id. */
export type UploadPort = (blob: Blob, name: string) => Promise<string>;

/** Rooms and zones cover at least this share of the map's area to get a tag on the snapshot. */
const TAG_MIN_AREA_SHARE = 0.002;

/** Anchors of the large bookables and zones plus everything the instruction names, for the snapshot tags. */
export function snapshotTags(index: MapIndex, instruction: string): string[] {
    const { width, height } = index.view_box;
    const floor = width * height * TAG_MIN_AREA_SHARE;
    const large = index.entries.filter(
        (entry) =>
            (entry.kind === 'bookable' || entry.kind === 'zone') &&
            !!entry.id &&
            !!entry.bbox &&
            entry.bbox[2] * entry.bbox[3] >= floor,
    );
    const named = mentionedEntries(index, instruction);
    return [...new Set([...large, ...named].map((entry) => entry.anchor))];
}

export type SnapshotPort = (
    session: MapEditorSessionLike,
    selection: readonly string[],
    tags: readonly string[],
    annotations: readonly MapAIAnnotation[],
) => Promise<{ blob: Blob } & SnapshotSize>;

/** Where the model choice is kept between visits; null keeps nothing. */
export interface ModelMemory {
    read(): MapAiModelChoice | null;
    write(choice: MapAiModelChoice | null): void;
}

export const MODEL_MEMORY_KEY = 'placeos.map-editor.ai-model';

/** The choice in this browser's localStorage; a store that fails reads as empty. */
export function localModelMemory(
    storage: () => Storage | undefined = () => globalThis.localStorage,
): ModelMemory {
    return {
        read: () => {
            try {
                const raw = storage()?.getItem(MODEL_MEMORY_KEY);
                if (!raw) return null;
                const parsed = JSON.parse(raw) as Partial<MapAiModelChoice>;
                return typeof parsed.provider_id === 'string' &&
                    typeof parsed.model === 'string'
                    ? { provider_id: parsed.provider_id, model: parsed.model }
                    : null;
            } catch {
                return null;
            }
        },
        write: (choice) => {
            try {
                const store = storage();
                if (!store) return;
                if (choice)
                    store.setItem(MODEL_MEMORY_KEY, JSON.stringify(choice));
                else store.removeItem(MODEL_MEMORY_KEY);
            } catch {
                return;
            }
        },
    };
}

export interface MapAiThreadOptions {
    transport?: MapAiTransport;
    upload?: UploadPort | null;
    strings?: MapEditorAiStringsOverride | null;
    now?: () => number;
    sleep?: Sleep;
    long_side?: number;
    snapshot?: SnapshotPort;
    idempotency_key?: () => string;
    /** Defaults to this browser's localStorage. */
    memory?: ModelMemory | null;
}

const BUSY_MESSAGE = /busy|running right now|try again/i;

/** The person-facing error for a failed request, by HTTP status. */
export function errorFromStatus(
    status: number | undefined,
    message: string,
    strings: MapEditorAiStrings,
): MapAiError {
    const states = strings.states;
    switch (status) {
        case 503:
            return BUSY_MESSAGE.test(message)
                ? { kind: 'busy', message: states.busy, retryable: true }
                : {
                      kind: 'not_configured',
                      message: message || states.not_configured,
                      retryable: false,
                  };
        case 429:
            return {
                kind: 'quota',
                message: message || states.quota,
                retryable: false,
            };
        case 403:
            return {
                kind: 'forbidden',
                message: states.forbidden,
                retryable: false,
            };
        case 404:
        case 409:
        case 422:
            return {
                kind: 'request',
                message: message || states.unknown,
                retryable: false,
            };
        case 502:
            return {
                kind: 'vendor',
                message: message || states.vendor,
                retryable: true,
            };
        case 504:
            return {
                kind: 'timeout',
                message: states.timeout,
                retryable: true,
            };
        case undefined:
            return {
                kind: 'network',
                message: message || states.unknown,
                retryable: true,
            };
        default:
            return {
                kind: 'unknown',
                message: message || states.unknown,
                retryable: status >= 500,
            };
    }
}

/** The person-facing error for a job the runner failed. */
export function errorFromJob(
    job: MapAIJob,
    strings: MapEditorAiStrings,
): MapAiError {
    const states = strings.states;
    switch (job.error_kind) {
        case 'moderation':
            return {
                kind: 'refused',
                message: states.refused,
                retryable: false,
                job,
            };
        case 'timeout':
            return {
                kind: 'timeout',
                message: states.timeout,
                retryable: true,
                job,
            };
        case 'vendor':
            return {
                kind: 'vendor',
                message: job.error_message || states.vendor,
                retryable: true,
                job,
            };
        case 'invalid_response':
            return {
                kind: 'invalid',
                message: states.invalid,
                retryable: true,
                job,
            };
        default:
            return {
                kind: 'unknown',
                message: job.error_message || states.unknown,
                retryable: true,
                job,
            };
    }
}

function randomKey(): string {
    const crypto_api = globalThis.crypto;
    if (crypto_api && typeof crypto_api.randomUUID === 'function')
        return crypto_api.randomUUID();
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function proposalOf(state: MapAiState): Proposal | null {
    const phase = state.phase;
    return phase.kind === 'reviewing' || phase.kind === 'applied'
        ? phase.proposal
        : null;
}

/**
 * One editing thread against one map: capabilities, the request, the job
 * watch, the proposal preview on the live document, keep or undo, and the
 * resolve record. State changes go through the reducer; this class owns the
 * side effects.
 */
export class MapAiThread {
    public readonly strings: MapEditorAiStrings;
    public readonly state: Signal<MapAiState>;
    public readonly phase: Signal<MapAiState['phase']>;
    public readonly capabilities: Signal<MapAiState['capabilities']>;
    public readonly turns: Signal<MapAiState['turns']>;
    public readonly proposal: Signal<Proposal | null>;
    public readonly selection_error = signal('');
    public readonly busy: Signal<boolean>;
    public readonly quota_block: Signal<string | null>;
    public readonly can_send: Signal<boolean>;
    public readonly announcement: Signal<string>;
    /** The model the next request asks for. */
    public readonly choice: Signal<MapAiModelChoice | null>;
    public readonly model_options: Signal<MapAiModelOption[]>;

    private readonly _state: WritableSignal<MapAiState>;
    private readonly _memory: ModelMemory | null;
    private readonly _transport: MapAiTransport;
    private readonly _upload: UploadPort | null;
    private readonly _now: () => number;
    private readonly _sleep: Sleep | undefined;
    private readonly _snapshot: SnapshotPort;
    private readonly _key: () => string;
    private _abort: AbortController | null = null;
    private _queue: Promise<void> = Promise.resolve();
    /** Session version and undo depth right after the preview went on the map; -1 when none is tracked. */
    private _preview_version = -1;
    private _preview_depth = 0;
    /** The map as it was just before the preview went on, for re-validating a changed selection. */
    private _preview_base: ProposalBase | null = null;

    constructor(
        private readonly _session: MapEditorSessionLike,
        private readonly _zone_id: string,
        options: MapAiThreadOptions = {},
    ) {
        this.strings = resolveAiStrings(options.strings);
        this._transport = options.transport ?? PLACEOS_TRANSPORT;
        this._upload = options.upload ?? null;
        this._now = options.now ?? Date.now;
        this._sleep = options.sleep;
        this._key = options.idempotency_key ?? randomKey;
        const long_side = options.long_side;
        this._snapshot =
            options.snapshot ??
            ((session, selection, tags, annotations) =>
                renderSnapshot(session.doc, {
                    selection,
                    tags,
                    annotations,
                    long_side,
                }));
        this._memory =
            options.memory === undefined ? localModelMemory() : options.memory;
        this._state = signal({
            ...initialState(),
            choice: this._memory?.read() ?? null,
        });
        this.state = this._state.asReadonly();
        this.choice = computed(() => effectiveChoice(this._state()));
        this.model_options = computed(() =>
            modelOptions(this._state().capabilities),
        );
        this.phase = computed(() => this._state().phase);
        this.capabilities = computed(() => this._state().capabilities);
        this.turns = computed(() => this._state().turns);
        this.proposal = computed(() => proposalOf(this._state()));
        this.announcement = computed(() => this._state().announcement);
        this.busy = computed(() => {
            const phase = this._state().phase;
            return (
                phase.kind === 'checking' ||
                phase.kind === 'submitting' ||
                phase.kind === 'running' ||
                (phase.kind === 'reviewing' && phase.validating)
            );
        });
        this.quota_block = computed(() =>
            quotaBlock(this._state().capabilities, this.strings),
        );
        this.can_send = computed(
            () => canCompose(this._state().phase) && !this.quota_block(),
        );
    }

    public get zone_id(): string {
        return this._zone_id;
    }

    public dispatch(event: MapAiEvent): void {
        this._state.update((state) => reduce(state, event, this.strings));
    }

    /** Reads the capabilities; a 404 or a network failure hides the panel. */
    public async load(): Promise<void> {
        this.dispatch({ type: 'check' });
        try {
            const capabilities = await mapAICapabilities(this._transport);
            this.dispatch({ type: 'capabilities', capabilities });
        } catch (error) {
            this.dispatch({
                type: 'capabilities_failed',
                status: errorStatus(error),
                message: errorMessage(error),
            });
        }
    }

    /** Picks the model for the next requests, remembered for this browser. */
    public chooseModel(choice: MapAiModelChoice | null): void {
        this.dispatch({ type: 'model_chosen', choice });
        this._memory?.write(choice);
    }

    public setDraft(text: string): void {
        this.dispatch({ type: 'draft', text });
    }

    public toggleReason(reason: string): void {
        this.dispatch({ type: 'reason_toggled', reason });
    }

    public hoverRow(row: ProposalRow | null): void {
        this._session.setHover(row?.anchors[0] ?? null);
    }

    public selectRow(row: ProposalRow): void {
        if (row.anchors.length) this._session.select(row.anchors);
    }

    /**
     * Sends an instruction. A proposal still previewed on the map is left in
     * place and resolved as refined, so the next turn builds on it.
     */
    public async submit(instruction: string): Promise<void> {
        const text = instruction.trim();
        if (!text) return;
        const state = this._state();
        if (!canCompose(state.phase) || this.quota_block()) return;
        const limit = state.capabilities?.limits.max_instruction_chars;
        if (limit && text.length > limit) {
            this.dispatch({ type: 'announce', text: this.strings.too_long });
            return;
        }
        if (state.phase.kind === 'applied') {
            await this._resolveQuietly(state.phase.proposal, 'refined');
            this.dispatch({ type: 'refined', proposal: state.phase.proposal });
        }
        this.selection_error.set('');
        const selection = [...this._session.selection()];
        const annotations = structuredClone([
            ...(this._session.annotations?.() || []),
        ]).map((mark) => ({
            ...mark,
            hits: annotationCandidates(this._session.index(), mark),
        }));
        const want_snapshot = !!this._upload;
        this.dispatch({
            type: 'submit',
            instruction: text,
            selected: selection.length,
            snapshot: want_snapshot,
            at: this._now(),
        });
        let markup_upload_id: string | null = null;
        let size: SnapshotSize | null = null;
        if (want_snapshot && this._upload) {
            try {
                const snapshot = await this._snapshot(
                    this._session,
                    selection,
                    snapshotTags(this._session.index(), text),
                    annotations,
                );
                markup_upload_id = await this._upload(
                    snapshot.blob,
                    'map-snapshot.png',
                );
                size = {
                    image_px: snapshot.image_px,
                    units_per_px: snapshot.units_per_px,
                    view_box: snapshot.view_box,
                };
            } catch {
                this.dispatch({
                    type: 'submit_failed',
                    error: errorFromStatus(
                        undefined,
                        this.strings.snapshot_failed,
                        this.strings,
                    ),
                });
                return;
            }
        }
        const built = buildContext(
            { doc: this._session.doc, index: () => this._session.index() },
            {
                selection,
                instruction: text,
                annotations,
                max_bytes: state.capabilities?.limits.max_context_bytes,
                snapshot: size,
            },
        );
        const choice = state.choice;
        let job: MapAIJob;
        try {
            job = await submitMapAIEdit(
                {
                    zone_id: this._zone_id,
                    instruction: text,
                    context: built.context,
                    markup_upload_id,
                    parent_job_id: state.parent_job_id,
                    idempotency_key: this._key(),
                    ...(choice
                        ? {
                              provider_id: choice.provider_id,
                              model: choice.model,
                          }
                        : {}),
                },
                this._transport,
            );
        } catch (error) {
            this.dispatch({
                type: 'submit_failed',
                error: errorFromStatus(
                    errorStatus(error),
                    errorMessage(error),
                    this.strings,
                ),
            });
            return;
        }
        this.dispatch({ type: 'job_accepted', job, at: this._now() });
        void this._refreshQuota();
        if (isFinalJob(job)) {
            await this._finish(job);
            return;
        }
        const abort = new AbortController();
        this._abort = abort;
        let final: MapAIJob;
        try {
            final = await watchJob(job.id, {
                transport: this._transport,
                signal: abort.signal,
                since: job.version,
                on_update: (update) =>
                    this.dispatch({ type: 'job_updated', job: update }),
                sleep: this._sleep,
                now: this._now,
            });
        } catch (error) {
            if (this._abort !== abort) return;
            this._abort = null;
            if (error instanceof WatchAbortedError) return;
            const failure: MapAiError =
                error instanceof WatchTimeoutError
                    ? {
                          kind: 'timeout',
                          message: this.strings.states.timeout,
                          retryable: true,
                          job,
                      }
                    : errorFromStatus(
                          errorStatus(error),
                          errorMessage(error),
                          this.strings,
                      );
            this.dispatch({
                type: 'job_failed',
                job,
                error: failure,
                at: this._now(),
            });
            return;
        }
        if (this._abort !== abort) return;
        this._abort = null;
        await this._finish(final);
    }

    /** Sends the last instruction again after a failure or a cancel. */
    public retry(): Promise<void> {
        const state = this._state();
        if (state.phase.kind !== 'error' && state.phase.kind !== 'cancelled')
            return Promise.resolve();
        return this.submit(state.draft);
    }

    /** Asks the server to stop the running job; the watch reports the outcome. */
    public async cancel(): Promise<void> {
        const phase = this._state().phase;
        if (phase.kind !== 'running') return;
        this.dispatch({ type: 'cancel_requested' });
        try {
            const job = await cancelMapAIJob(phase.job.id, this._transport);
            if (isFinalJob(job) && job.state === 'cancelled') {
                this._abort?.abort();
                this._abort = null;
                this.dispatch({
                    type: 'job_cancelled',
                    job,
                    at: this._now(),
                });
            }
        } catch {
            // the watch answers with the job's final state
        }
    }

    /** Ticks or unticks a row, then previews the new accepted set. */
    public toggle(index: number, checked: boolean): Promise<void> {
        return this._enqueue(() =>
            this._retick(
                (proposal) => toggleRow(proposal, index, checked),
                checked ? [] : [index],
            ),
        );
    }

    public toggleGroup(group: ProposalGroup, checked: boolean): Promise<void> {
        return this._enqueue(() =>
            this._retick(
                (proposal) => toggleGroup(proposal, group, checked),
                checked ? [] : group.indices,
            ),
        );
    }

    /**
     * Settles the previewed proposal after the map changed outside the panel:
     * undone when the preview was undone or the map is back to its saved
     * state, kept when edits went on top of it.
     */
    public mapChanged(): void {
        const phase = this._state().phase;
        if (phase.kind !== 'applied' || this._preview_version < 0) return;
        if (this._session.version() === this._preview_version) return;
        const undone =
            (this._session.undoDepth?.() ?? this._preview_depth) <
                this._preview_depth || !this._session.dirty();
        this._preview_version = -1;
        this._preview_base = null;
        const proposal = phase.proposal;
        void this._enqueue(async () => {
            if (this._state().phase.kind !== 'applied') return;
            if (undone) {
                await this._resolveQuietly(proposal, 'rejected');
                this.dispatch({ type: 'undone', proposal, reasons: [] });
                return;
            }
            await this._resolveQuietly(proposal, decisionFor(proposal));
            this.dispatch({ type: 'kept', proposal });
        });
    }

    /** Keeps the previewed changes and records the decision. */
    public keep(): Promise<void> {
        return this._enqueue(async () => {
            const phase = this._state().phase;
            if (phase.kind !== 'applied') return;
            const proposal = phase.proposal;
            this._preview_base = null;
            await this._resolveQuietly(proposal, decisionFor(proposal));
            this.dispatch({ type: 'kept', proposal });
        });
    }

    /** Takes the preview off the map and records the rejection with its reasons. */
    public undo(reasons?: readonly string[]): Promise<void> {
        return this._enqueue(async () => {
            const state = this._state();
            const proposal = proposalOf(state);
            if (!proposal) return;
            this._preview_version = -1;
            if (state.phase.kind === 'applied') this._takePreviewOff();
            const chips = [...(reasons ?? state.reasons)];
            await this._resolveQuietly(proposal, 'rejected', chips);
            this.dispatch({ type: 'undone', proposal, reasons: chips });
        });
    }

    /** Starts a new thread; a previewed proposal stays on the map as abandoned. */
    public reset(): void {
        this.selection_error.set('');
        this._abort?.abort();
        this._abort = null;
        const proposal = proposalOf(this._state());
        if (proposal && this._state().phase.kind === 'applied') {
            void this._resolveQuietly(proposal, 'abandoned');
        }
        this.dispatch({ type: 'reset' });
    }

    public dispose(): void {
        this._abort?.abort();
        this._abort = null;
        const proposal = proposalOf(this._state());
        if (proposal && this._state().phase.kind === 'applied') {
            void this._resolveQuietly(proposal, 'abandoned');
        }
    }

    private _enqueue(task: () => Promise<void>): Promise<void> {
        const run = this._queue.then(task, task);
        this._queue = run.catch(() => undefined);
        return run;
    }

    private async _refreshQuota(): Promise<void> {
        try {
            const capabilities = await mapAICapabilities(this._transport);
            this._state.update((state) => ({
                ...state,
                capabilities: state.capabilities
                    ? { ...state.capabilities, quota: capabilities.quota }
                    : null,
            }));
        } catch {
            return;
        }
    }

    private async _finish(job: MapAIJob): Promise<void> {
        if (job.state === 'cancelled') {
            this.dispatch({ type: 'job_cancelled', job, at: this._now() });
            return;
        }
        if (job.state === 'failed') {
            this.dispatch({
                type: 'job_failed',
                job,
                error: errorFromJob(job, this.strings),
                at: this._now(),
            });
            return;
        }
        let proposal: Proposal;
        try {
            proposal = await buildProposal(job, this._session, this.strings);
        } catch {
            this.dispatch({
                type: 'job_failed',
                job,
                error: {
                    kind: 'invalid',
                    message: this.strings.states.invalid,
                    retryable: true,
                    job,
                },
                at: this._now(),
            });
            return;
        }
        this.dispatch({ type: 'proposal', proposal, at: this._now() });
        this._preview(proposal);
    }

    private _preview(proposal: Proposal): void {
        if (proposal.verdict !== 'ready' && proposal.verdict !== 'partial')
            return;
        const accepted = new Set(proposal.accepted);
        const skip = new Set(
            proposal.rows
                .filter((row) => !accepted.has(row.index))
                .map((row) => row.index),
        );
        const index = this._session.index();
        const base: ProposalBase = {
            doc: this._session.doc.clone(),
            index: () => index,
            protected: this._session.protected,
            render_check: this._session.render_check,
            geometry: this._session.geometry,
        };
        const result = this._session.apply(
            proposal.ops,
            `AI: ${proposal.summary || this.strings.title}`,
            { skip },
        );
        this._preview_version = this._session.version();
        this._preview_depth = this._session.undoDepth?.() ?? 0;
        this._preview_base = base;
        const applied = new Set(result.applied.map((step) => step.index));
        const rows = proposal.rows.map((row) => ({
            ...row,
            applied: applied.has(row.index),
        }));
        this.dispatch({ type: 'previewed', proposal: { ...proposal, rows } });
    }

    /** @param unticked rows the person unticked directly, which are never held */
    private async _retick(
        next: (proposal: Proposal) => ReadonlySet<number>,
        unticked: readonly number[] = [],
    ): Promise<void> {
        const state = this._state();
        const proposal = proposalOf(state);
        if (!proposal) return;
        this.selection_error.set('');
        const accepted = next(proposal);
        const held = heldAfter(proposal, accepted, unticked);
        this._preview_version = -1;
        const base = state.phase.kind === 'applied' ? this._preview_base : null;
        if (state.phase.kind === 'applied' && !base) this._takePreviewOff();
        this.dispatch({ type: 'validating', on_map: !!base });
        const rebuilt = await buildProposal(
            proposal.job,
            base ?? this._session,
            this.strings,
            { accepted, dependencies: proposal.dependencies, held },
        );
        if (rebuilt.verdict === 'blocked' && state.phase.kind === 'applied') {
            const restored = await buildProposal(
                proposal.job,
                base ?? this._session,
                this.strings,
                {
                    accepted: new Set(proposal.accepted),
                    dependencies: proposal.dependencies,
                    held: proposal.held,
                },
            );
            if (base) this._takePreviewOff();
            this.dispatch({ type: 'rows_changed', proposal: restored });
            this._preview(restored);
            const reason = rebuilt.batch_issues
                .filter((issue) => issue.level === 'error')
                .map((issue) => issue.message)
                .join('; ');
            const text = format(this.strings.states.selection_refused, {
                reason,
            });
            this.selection_error.set(text);
            this.dispatch({ type: 'announce', text });
            return;
        }
        if (base) this._takePreviewOff();
        this.dispatch({ type: 'rows_changed', proposal: rebuilt });
        this._preview(rebuilt);
    }

    private _takePreviewOff(): void {
        this._session.undo();
        this._preview_base = null;
    }

    private async _resolveQuietly(
        proposal: Proposal,
        decision: MapAIResolveDecision,
        reasons: readonly string[] = [],
    ): Promise<void> {
        try {
            await resolveMapAIJob(
                proposal.job.id,
                resolvePayload(proposal, decision, reasons),
                this._transport,
            );
        } catch {
            // telemetry only; the map is already in the state the person chose
        }
    }
}
