import { apiEndpoint, get, post } from '@placeos/ts-client';

import {
    MapAICapabilities,
    MapAIEditRequest,
    MapAIJob,
    MapAIJobQueryOptions,
    MapAIJobShowOptions,
    MapAIJobState,
    MapAIResolveRequest,
    MapAIUsageOptions,
    MapAIUsageRow,
} from './types';

/** How requests reach the server; specs substitute a fake. */
export interface MapAiTransport {
    get(url: string): Promise<unknown>;
    post(url: string, body: unknown): Promise<unknown>;
}

/** The ts-client HTTP functions, which attach the session's bearer token. */
export const PLACEOS_TRANSPORT: MapAiTransport = {
    get: (url) => get(url),
    post: (url, body) => post(url, body),
};

const PATH = () => `${apiEndpoint()}/maps/ai`;

/** `?a=1&b=2` from the defined entries, empty when there are none. */
export function toQuery(params: object): string {
    const pairs = Object.entries(params as Record<string, unknown>)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
        );
    return pairs.length ? `?${pairs.join('&')}` : '';
}

/** What this domain can do, and what the caller has left of their quota. */
export function mapAICapabilities(
    transport: MapAiTransport = PLACEOS_TRANSPORT,
): Promise<MapAICapabilities> {
    return transport.get(
        `${PATH()}/capabilities`,
    ) as Promise<MapAICapabilities>;
}

/**
 * Ask for operations that carry out an instruction on a level's map. Answers
 * as soon as the job is accepted; `watchJob` follows it to its end.
 */
export function submitMapAIEdit(
    request: MapAIEditRequest,
    transport: MapAiTransport = PLACEOS_TRANSPORT,
): Promise<MapAIJob> {
    return transport.post(`${PATH()}/edit`, request) as Promise<MapAIJob>;
}

/**
 * One job, optionally holding the request open until it changes past `since`
 * or `wait` seconds pass.
 */
export function showMapAIJob(
    id: string,
    query_params: MapAIJobShowOptions = {},
    transport: MapAiTransport = PLACEOS_TRANSPORT,
): Promise<MapAIJob> {
    return transport.get(
        `${PATH()}/jobs/${encodeURIComponent(id)}${toQuery(query_params)}`,
    ) as Promise<MapAIJob>;
}

/** Recent map edit jobs, the caller's own unless `mine` is false. */
export function queryMapAIJobs(
    query_params: MapAIJobQueryOptions = {},
    transport: MapAiTransport = PLACEOS_TRANSPORT,
): Promise<MapAIJob[]> {
    return transport.get(`${PATH()}/jobs${toQuery(query_params)}`) as Promise<
        MapAIJob[]
    >;
}

/** Ask a running job to stop. A call already with the vendor runs to completion. */
export function cancelMapAIJob(
    id: string,
    transport: MapAiTransport = PLACEOS_TRANSPORT,
): Promise<MapAIJob> {
    return transport.post(
        `${PATH()}/jobs/${encodeURIComponent(id)}/cancel`,
        {},
    ) as Promise<MapAIJob>;
}

/** Record what the person did with the answer. */
export function resolveMapAIJob(
    id: string,
    request: MapAIResolveRequest,
    transport: MapAiTransport = PLACEOS_TRANSPORT,
): Promise<MapAIJob> {
    return transport.post(
        `${PATH()}/jobs/${encodeURIComponent(id)}/resolve`,
        request,
    ) as Promise<MapAIJob>;
}

/** Map edit spend per provider and model; support users only. */
export function mapAIUsage(
    query_params: MapAIUsageOptions = {},
    transport: MapAiTransport = PLACEOS_TRANSPORT,
): Promise<MapAIUsageRow[]> {
    return transport.get(`${PATH()}/usage${toQuery(query_params)}`) as Promise<
        MapAIUsageRow[]
    >;
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
}

/** The HTTP status carried by a ts-client error or its wrapped response. */
export function errorStatus(error: unknown): number | undefined {
    if (!isRecord(error)) return undefined;
    const status = error['status'];
    if (typeof status === 'number') return status;
    const nested = error['error'];
    if (!isRecord(nested)) return undefined;
    const nested_status = nested['status'];
    return typeof nested_status === 'number' ? nested_status : undefined;
}

/** The server's message for a failed request, when it sent one. */
export function errorMessage(error: unknown): string {
    if (!isRecord(error)) return typeof error === 'string' ? error : '';
    const response = error['response'];
    if (isRecord(response)) {
        const message = response['message'] ?? response['error'];
        if (typeof message === 'string' && message) return message;
    }
    if (typeof response === 'string' && response) return response;
    const message = error['message'];
    return typeof message === 'string' ? message : '';
}

export const FINAL_JOB_STATES: ReadonlySet<MapAIJobState> =
    new Set<MapAIJobState>(['done', 'failed', 'cancelled']);

export function isFinalJob(job: Pick<MapAIJob, 'state'> | null | undefined) {
    return !!job && FINAL_JOB_STATES.has(job.state);
}

/** Seconds one long poll holds the connection; the server caps it at 25. */
export const POLL_WAIT = 25;
/** Consecutive failed polls before a job is given up on. */
export const POLL_RETRIES = 10;
/** A job still not final after this long has stopped responding. */
export const MAX_JOB_WAIT_MS = 30 * 60 * 1000;
const BACKOFF_BASE_MS = 1000;
const BACKOFF_CAP_MS = 30_000;

/** 1 s, 2 s, 4 s ... capped at 30 s. */
export function backoffDelay(failures: number): number {
    return Math.min(
        BACKOFF_CAP_MS,
        BACKOFF_BASE_MS * 2 ** Math.max(0, failures - 1),
    );
}

/** A poll failure worth retrying: no status (network), 408, 429 or 5xx. */
export function isTransientError(error: unknown): boolean {
    const status = errorStatus(error);
    return (
        status === undefined ||
        status === 408 ||
        status === 429 ||
        status >= 500
    );
}

/** Seconds a long poll may run past its `wait` before it counts as a failed poll. */
const POLL_GRACE_SECONDS = 10;

/** Rejects with a status-less error, which counts as transient, if `promise` has not settled in `ms`. */
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const timer = setTimeout(
            () => reject(new Error('the job poll timed out')),
            ms,
        );
        promise.then(
            (value) => {
                clearTimeout(timer);
                resolve(value);
            },
            (error) => {
                clearTimeout(timer);
                reject(error);
            },
        );
    });
}

function isJobBody(job: unknown): job is MapAIJob {
    const value = job as Partial<MapAIJob> | null;
    return (
        !!value &&
        typeof value.id === 'string' &&
        typeof value.state === 'string' &&
        typeof value.version === 'number'
    );
}

export class WatchAbortedError extends Error {
    constructor() {
        super('the job watch was aborted');
        this.name = 'WatchAbortedError';
    }
}

export class WatchTimeoutError extends Error {
    constructor(public readonly job_id: string) {
        super(`job ${job_id} did not finish in time`);
        this.name = 'WatchTimeoutError';
    }
}

export class WatchGaveUpError extends Error {
    constructor(
        public readonly job_id: string,
        public readonly failures: number,
        public readonly last_error: unknown,
    ) {
        super(`gave up on job ${job_id} after ${failures} failed polls`);
        this.name = 'WatchGaveUpError';
    }
}

export type Sleep = (ms: number, signal?: AbortSignal) => Promise<void>;

/** Resolves after `ms`, or at once when the signal aborts. */
export function sleep(ms: number, signal?: AbortSignal): Promise<void> {
    return new Promise<void>((resolve) => {
        if (signal?.aborted) {
            resolve();
            return;
        }
        const timer = setTimeout(done, ms);
        function done() {
            clearTimeout(timer);
            signal?.removeEventListener('abort', done);
            resolve();
        }
        signal?.addEventListener('abort', done, { once: true });
    });
}

export interface WatchJobOptions {
    transport?: MapAiTransport;
    /** Aborting stops the watch after the poll in flight returns. */
    signal?: AbortSignal;
    /** The version already seen; the first poll returns once the job moves past it. */
    since?: number;
    wait?: number;
    max_failures?: number;
    max_wait_ms?: number;
    /** Every job state received, final one included. */
    on_update?: (job: MapAIJob) => void;
    sleep?: Sleep;
    now?: () => number;
}

/**
 * Long-polls a job until it is final. Transient failures retry with backoff;
 * a 4xx other than 408 and 429 rejects at once. Rejects with
 * WatchAbortedError, WatchTimeoutError or WatchGaveUpError otherwise.
 */
export async function watchJob(
    id: string,
    options: WatchJobOptions = {},
): Promise<MapAIJob> {
    const transport = options.transport ?? PLACEOS_TRANSPORT;
    const wait = options.wait ?? POLL_WAIT;
    const max_failures = options.max_failures ?? POLL_RETRIES;
    const max_wait_ms = options.max_wait_ms ?? MAX_JOB_WAIT_MS;
    const pause = options.sleep ?? sleep;
    const now = options.now ?? Date.now;
    const deadline = now() + max_wait_ms;
    let since = options.since;
    let failures = 0;
    for (;;) {
        if (options.signal?.aborted) throw new WatchAbortedError();
        if (now() > deadline) throw new WatchTimeoutError(id);
        let job: MapAIJob;
        try {
            job = await withTimeout(
                showMapAIJob(id, { wait, since }, transport),
                (wait + POLL_GRACE_SECONDS) * 1000,
            );
            if (!isJobBody(job)) throw new Error('the job poll had no job');
        } catch (error) {
            if (options.signal?.aborted) throw new WatchAbortedError();
            if (!isTransientError(error)) throw error;
            failures += 1;
            if (failures > max_failures)
                throw new WatchGaveUpError(id, failures, error);
            await pause(backoffDelay(failures), options.signal);
            continue;
        }
        if (options.signal?.aborted) throw new WatchAbortedError();
        failures = 0;
        options.on_update?.(job);
        if (isFinalJob(job)) return job;
        since = job.version;
    }
}
