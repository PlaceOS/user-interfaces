import { signal } from '@angular/core';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { MapAiTransport } from '../lib/ai/api';
import { PreviewSummary } from '../lib/ai/preview';
import {
    MapEditorSessionLike,
    SessionApplyOptions,
} from '../lib/ai/session-contract';
import {
    MapAICapabilities,
    MapAIContext,
    MapAIJob,
    MapAIResolveRequest,
} from '../lib/ai/types';
import { applyOps, ApplyResult } from '../lib/apply';
import { GeometryProvider } from '../lib/geometry';
import { MapHistory } from '../lib/history';
import { MapDocument } from '../lib/map-document';
import { buildIndex, MapIndex } from '../lib/map-index';
import { MapOp } from '../lib/ops';
import { ProtectedIdSet } from '../lib/protected-ids';
import { FakeRenderCheck } from '../lib/render-check';

/** The server's own context fixture, copied from rest-api spec/fixtures/map_ai/context.json. */
export function fixtureContext(): MapAIContext {
    return JSON.parse(
        readFileSync(
            join(
                process.cwd(),
                'libs/map-editor/src/tests/fixtures',
                'map-ai-context.json',
            ),
            'utf8',
        ),
    ) as MapAIContext;
}

/** A session over a document with snapshot history, as the canvas lane provides. */
export class FakeSession implements MapEditorSessionLike {
    public readonly version = signal(0);
    public readonly selection = signal<readonly string[]>([]);
    public readonly hover = signal<string | null>(null);
    public readonly can_undo = signal(false);
    public readonly can_redo = signal(false);
    public readonly dirty = signal(false);
    public readonly geometry: GeometryProvider;
    public readonly protected: ProtectedIdSet;
    public readonly render_check = new FakeRenderCheck();
    public readonly history: MapHistory;
    public readonly applied: {
        ops: readonly MapOp[];
        label: string;
        options?: SessionApplyOptions;
    }[] = [];
    /** Every summary the panel handed to `setPreview`, in order. */
    public readonly previews: (PreviewSummary | null)[] = [];
    private _index: MapIndex | null = null;
    private _index_version = -1;

    constructor(public readonly doc: MapDocument) {
        this.geometry = doc.geometry;
        this.protected = doc.protected;
        this.history = new MapHistory(doc);
    }

    public setPreview(summary: PreviewSummary | null): void {
        this.previews.push(summary);
    }

    public index(): MapIndex {
        if (!this._index || this._index_version !== this.version()) {
            this._index = buildIndex(this.doc, {
                geometry: this.geometry,
                protected: this.protected,
            });
            this._index_version = this.version();
        }
        return this._index;
    }

    public select(anchors: readonly string[]): void {
        this.selection.set([...anchors]);
    }

    public setHover(anchor: string | null): void {
        this.hover.set(anchor);
    }

    public apply(
        ops: readonly MapOp[],
        label: string,
        options?: SessionApplyOptions,
    ): ApplyResult {
        const before = this.history.capture(label);
        this.applied.push({ ops, label, options });
        const result = applyOps(this.doc, ops, {
            skip: options?.skip,
            geometry: this.geometry,
        });
        if (!result.applied.length) return result;
        this.history.commit(before);
        this._bump();
        return result;
    }

    public historyPosition(): number {
        return this.history.position();
    }

    public undo(): boolean {
        const ok = this.history.undo();
        if (ok) this._bump();
        return ok;
    }

    public redo(): boolean {
        const ok = this.history.redo();
        if (ok) this._bump();
        return ok;
    }

    private _bump(): void {
        this.version.update((version) => version + 1);
        this.can_undo.set(this.history.can_undo);
        this.can_redo.set(this.history.can_redo);
        this.dirty.set(true);
    }
}

export interface FakeRequest {
    method: 'GET' | 'POST';
    url: string;
    body?: unknown;
}

/** A ts-client style error: `{ status, message }`. */
export function httpError(status: number | undefined, message = ''): unknown {
    return status === undefined
        ? new Error(message || 'network')
        : { status, message };
}

export function capabilities(
    overrides: Partial<MapAICapabilities> = {},
): MapAICapabilities {
    return {
        enabled: true,
        reason: null,
        providers: [
            {
                id: 'prov-1',
                name: 'Signage Image Gen',
                provider: 'OPENAI',
                text_model: 'gpt-5.4-mini',
            },
        ],
        default_provider_id: 'prov-1',
        quota: { user_remaining_today: 39, domain_remaining_month: 980 },
        limits: {
            max_context_bytes: 512 * 1024,
            max_ops: 80,
            max_instruction_chars: 4000,
        },
        ...overrides,
    };
}

let job_counter = 0;

export function job(overrides: Partial<MapAIJob> = {}): MapAIJob {
    job_counter += 1;
    return {
        id: `job-${job_counter}`,
        state: 'queued',
        kind: 'map_edit',
        zone_id: 'zone-1',
        provider: 'OPENAI',
        model: 'gpt-5.4-mini',
        parent_job_id: null,
        version: 1,
        instruction: 'recolour',
        markup_upload_id: null,
        schema_version: null,
        summary: null,
        ops: [],
        server_issues: {},
        questions: [],
        usage: null,
        resolution: null,
        error_kind: null,
        error_message: null,
        cost_units: null,
        latency_ms: null,
        created_at: 1,
        finished_at: null,
        ...overrides,
    };
}

export interface FakeTransportOptions {
    capabilities?: MapAICapabilities | unknown;
    /** The answer to an edit, or a thrown error. */
    edit?: MapAIJob | ((body: unknown) => MapAIJob | never) | unknown;
    /** Answers to job polls, in order; the last one repeats. A function defers its answer. */
    polls?: (MapAIJob | (() => Promise<unknown>) | unknown)[];
    cancel?: (id: string) => MapAIJob;
    resolve?: (id: string, body: MapAIResolveRequest) => MapAIJob;
}

function isJob(value: unknown): value is MapAIJob {
    return (
        typeof value === 'object' &&
        value !== null &&
        typeof (value as MapAIJob).state === 'string' &&
        typeof (value as MapAIJob).id === 'string'
    );
}

function isCapabilities(value: unknown): value is MapAICapabilities {
    return (
        typeof value === 'object' &&
        value !== null &&
        typeof (value as MapAICapabilities).enabled === 'boolean'
    );
}

/** Answers from a script and records every request. */
export class FakeTransport implements MapAiTransport {
    public readonly requests: FakeRequest[] = [];
    public polls: (MapAIJob | unknown)[];

    constructor(public options: FakeTransportOptions = {}) {
        this.polls = [...(options.polls || [])];
    }

    public get edits(): FakeRequest[] {
        return this.requests.filter(
            (request) =>
                request.method === 'POST' && /\/edit$/.test(request.url),
        );
    }

    public get resolves(): FakeRequest[] {
        return this.requests.filter(
            (request) =>
                request.method === 'POST' && /\/resolve$/.test(request.url),
        );
    }

    public get cancels(): FakeRequest[] {
        return this.requests.filter(
            (request) =>
                request.method === 'POST' && /\/cancel$/.test(request.url),
        );
    }

    public get job_polls(): FakeRequest[] {
        return this.requests.filter(
            (request) =>
                request.method === 'GET' && /\/jobs\/[^/?]+/.test(request.url),
        );
    }

    public async get(url: string): Promise<unknown> {
        this.requests.push({ method: 'GET', url });
        if (/\/capabilities$/.test(url)) {
            const answer = this.options.capabilities ?? capabilities();
            if (isCapabilities(answer)) return answer;
            throw answer;
        }
        if (/\/jobs\/[^/?]+/.test(url)) {
            const scripted =
                this.polls.length > 1 ? this.polls.shift() : this.polls[0];
            const answer =
                typeof scripted === 'function'
                    ? await (scripted as () => Promise<unknown>)()
                    : scripted;
            if (answer === undefined) throw httpError(404, 'no such job');
            if (isJob(answer)) return answer;
            throw answer;
        }
        if (/\/jobs(\?|$)/.test(url)) return [];
        if (/\/usage(\?|$)/.test(url)) return [];
        throw httpError(404, `no route for ${url}`);
    }

    public async post(url: string, body: unknown): Promise<unknown> {
        this.requests.push({ method: 'POST', url, body });
        if (/\/edit$/.test(url)) {
            const answer = this.options.edit ?? job();
            if (typeof answer === 'function')
                return (answer as (body: unknown) => MapAIJob)(body);
            if (isJob(answer)) return answer;
            throw answer;
        }
        const cancel = url.match(/\/jobs\/([^/]+)\/cancel$/);
        if (cancel) {
            const id = decodeURIComponent(cancel[1]);
            if (this.options.cancel) return this.options.cancel(id);
            return job({ id, state: 'cancelled', version: 99 });
        }
        const resolve = url.match(/\/jobs\/([^/]+)\/resolve$/);
        if (resolve) {
            const id = decodeURIComponent(resolve[1]);
            if (this.options.resolve)
                return this.options.resolve(id, body as MapAIResolveRequest);
            return job({ id, state: 'done', version: 100 });
        }
        throw httpError(404, `no route for ${url}`);
    }
}

/** A finished job: queued, running, then done with the ops. */
export function jobSequence(
    final: Partial<MapAIJob>,
    base: Partial<MapAIJob> = {},
): { accepted: MapAIJob; polls: MapAIJob[] } {
    const accepted = job({ ...base, state: 'queued', version: 1 });
    const running = { ...accepted, state: 'running' as const, version: 2 };
    const done = {
        ...accepted,
        state: 'done' as const,
        version: 3,
        finished_at: 2,
        ...final,
    };
    return { accepted, polls: [running, done] };
}
