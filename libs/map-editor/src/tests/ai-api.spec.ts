import {
    backoffDelay,
    cancelMapAIJob,
    errorMessage,
    errorStatus,
    isFinalJob,
    isTransientError,
    mapAICapabilities,
    MapAiTransport,
    queryMapAIJobs,
    resolveMapAIJob,
    showMapAIJob,
    submitMapAIEdit,
    toQuery,
    WatchAbortedError,
    WatchGaveUpError,
    watchJob,
    WatchTimeoutError,
} from '../lib/ai/api';
import { MapAIJob } from '../lib/ai/types';
import { FakeTransport, fixtureContext, httpError, job } from './ai-fakes';

const no_sleep = async () => undefined;

describe('map AI client', () => {
    it('builds a query string from the defined values only', () => {
        expect(toQuery({ wait: 25, since: 0, skip: undefined, x: null })).toBe(
            '?wait=25&since=0',
        );
        expect(toQuery({})).toBe('');
        expect(toQuery({ zone_id: 'zone 1' })).toBe('?zone_id=zone%201');
    });

    it('addresses the maps/ai routes', async () => {
        const transport = new FakeTransport({
            polls: [job({ id: 'j 1', state: 'done' })],
        });
        await mapAICapabilities(transport);
        await submitMapAIEdit(
            {
                zone_id: 'zone-1',
                instruction: 'x',
                context: fixtureContext(),
            },
            transport,
        );
        await showMapAIJob('j 1', { wait: 25, since: 3 }, transport);
        await queryMapAIJobs({ zone_id: 'zone-1', mine: true }, transport);
        await cancelMapAIJob('j 1', transport);
        await resolveMapAIJob(
            'j 1',
            { decision: 'applied', accepted_op_ids: [], rejected_op_ids: [] },
            transport,
        );
        const urls = transport.requests.map((request) =>
            request.url.replace(/^.*\/maps\/ai/, '/maps/ai'),
        );
        expect(urls).toEqual([
            '/maps/ai/capabilities',
            '/maps/ai/edit',
            '/maps/ai/jobs/j%201?wait=25&since=3',
            '/maps/ai/jobs?zone_id=zone-1&mine=true',
            '/maps/ai/jobs/j%201/cancel',
            '/maps/ai/jobs/j%201/resolve',
        ]);
        expect(transport.requests[0].url).toContain('/api/engine/v2/maps/ai');
        expect(transport.requests[5].body).toEqual({
            decision: 'applied',
            accepted_op_ids: [],
            rejected_op_ids: [],
        });
    });

    it('reads the status and message of a ts-client error', () => {
        expect(errorStatus({ status: 429, message: 'quota' })).toBe(429);
        expect(errorStatus({ error: { status: 503 } })).toBe(503);
        expect(errorStatus(new Error('network'))).toBeUndefined();
        expect(
            errorMessage({ status: 422, response: { message: 'bad' } }),
        ).toBe('bad');
        expect(errorMessage({ status: 422, response: 'text' })).toBe('text');
        expect(errorMessage(new Error('network'))).toBe('network');
        expect(isTransientError(httpError(undefined))).toBe(true);
        expect(isTransientError(httpError(503))).toBe(true);
        expect(isTransientError(httpError(429))).toBe(true);
        expect(isTransientError(httpError(404))).toBe(false);
        expect(isTransientError(httpError(422))).toBe(false);
    });

    it('backs off exponentially to a cap', () => {
        expect([1, 2, 3, 4, 5, 6].map(backoffDelay)).toEqual([
            1000, 2000, 4000, 8000, 16000, 30000,
        ]);
        expect(isFinalJob(job({ state: 'done' }))).toBe(true);
        expect(isFinalJob(job({ state: 'running' }))).toBe(false);
        expect(isFinalJob(null)).toBe(false);
    });

    describe('watchJob', () => {
        it('polls with wait and since until the job is final', async () => {
            const states: MapAIJob[] = [
                job({ id: 'j', state: 'queued', version: 1 }),
                job({ id: 'j', state: 'running', version: 2 }),
                job({ id: 'j', state: 'done', version: 3 }),
            ];
            const transport = new FakeTransport({ polls: states });
            const seen: string[] = [];
            const final = await watchJob('j', {
                transport,
                since: 1,
                on_update: (update) => seen.push(update.state),
                sleep: no_sleep,
            });
            expect(final.state).toBe('done');
            expect(seen).toEqual(['queued', 'running', 'done']);
            expect(
                transport.job_polls.map((request) =>
                    request.url.slice(request.url.indexOf('?')),
                ),
            ).toEqual([
                '?wait=25&since=1',
                '?wait=25&since=1',
                '?wait=25&since=2',
            ]);
        });

        it('retries transient failures with backoff and gives up after the limit', async () => {
            const transport = new FakeTransport({
                polls: [
                    httpError(503, 'busy'),
                    httpError(undefined),
                    job({ id: 'j', state: 'done', version: 2 }),
                ],
            });
            const waits: number[] = [];
            const final = await watchJob('j', {
                transport,
                sleep: async (ms) => {
                    waits.push(ms);
                },
            });
            expect(final.state).toBe('done');
            expect(waits).toEqual([1000, 2000]);

            const failing = new FakeTransport({
                polls: [httpError(500), httpError(500), httpError(500)],
            });
            await expect(
                watchJob('j', {
                    transport: failing,
                    sleep: no_sleep,
                    max_failures: 2,
                }),
            ).rejects.toBeInstanceOf(WatchGaveUpError);
            expect(failing.job_polls).toHaveLength(3);
        });

        it('backs off after a poll whose body is not a job', async () => {
            const answers: unknown[] = [
                {},
                job({ id: 'j', state: 'done', version: 2 }),
            ];
            const transport = {
                get: async () => answers.shift(),
                post: async () => ({}),
            } as unknown as MapAiTransport;
            const waits: number[] = [];
            const final = await watchJob('j', {
                transport,
                sleep: async (ms) => {
                    waits.push(ms);
                },
            });
            expect(final.state).toBe('done');
            expect(waits).toEqual([1000]);
        });

        it('counts a poll that never answers as a failed poll', async () => {
            vi.useFakeTimers();
            const transport = new FakeTransport({
                polls: [
                    () => new Promise(() => undefined),
                    job({ id: 'j', state: 'done', version: 2 }),
                ],
            });
            const waits: number[] = [];
            const watch = watchJob('j', {
                transport,
                wait: 5,
                sleep: async (ms) => {
                    waits.push(ms);
                },
            });
            await vi.advanceTimersByTimeAsync(15_000);
            await expect(watch).resolves.toMatchObject({ state: 'done' });
            expect(waits).toEqual([1000]);
            vi.useRealTimers();
        });

        it('rejects at once on a permanent failure', async () => {
            const transport = new FakeTransport({
                polls: [httpError(404, 'no such job')],
            });
            await expect(
                watchJob('j', { transport, sleep: no_sleep }),
            ).rejects.toEqual({ status: 404, message: 'no such job' });
            expect(transport.job_polls).toHaveLength(1);
        });

        it('stops when the signal aborts', async () => {
            const controller = new AbortController();
            controller.abort();
            const transport = new FakeTransport({
                polls: [job({ id: 'j', state: 'done' })],
            });
            await expect(
                watchJob('j', {
                    transport,
                    signal: controller.signal,
                    sleep: no_sleep,
                }),
            ).rejects.toBeInstanceOf(WatchAbortedError);
            expect(transport.job_polls).toHaveLength(0);

            const later = new AbortController();
            const slow = new FakeTransport({
                polls: [httpError(503), job({ id: 'j', state: 'done' })],
            });
            await expect(
                watchJob('j', {
                    transport: slow,
                    signal: later.signal,
                    sleep: async () => {
                        later.abort();
                    },
                }),
            ).rejects.toBeInstanceOf(WatchAbortedError);
            expect(slow.job_polls).toHaveLength(1);
        });

        it('times out when the job never finishes', async () => {
            let clock = 0;
            const transport = new FakeTransport({
                polls: [job({ id: 'j', state: 'running', version: 2 })],
            });
            await expect(
                watchJob('j', {
                    transport,
                    sleep: no_sleep,
                    now: () => (clock += 20 * 60 * 1000),
                    max_wait_ms: 30 * 60 * 1000,
                }),
            ).rejects.toBeInstanceOf(WatchTimeoutError);
        });
    });
});
