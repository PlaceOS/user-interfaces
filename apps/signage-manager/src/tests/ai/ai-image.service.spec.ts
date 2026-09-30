import { TestBed } from '@angular/core/testing';
import { UploadsService } from '@placeos/common';
import { get, post } from '@placeos/ts-client';

import { AiImageService, MAX_JOB_WAIT_MS } from '../../app/ai/ai-image.service';
import { AiCapabilities, AiJob } from '../../app/ai/ai.types';

function runningJob(id = 'job-1'): AiJob {
    return {
        id,
        state: 'running',
        kind: 'generate',
        candidates: 1,
        images_produced: 0,
        version: 1,
        images: [null],
    };
}

vi.mock('@placeos/ts-client', { spy: true });

/** the overloads type every response as a string; these return JSON */
type JsonRequest = (...args: unknown[]) => Promise<unknown>;
const json_get = vi.mocked(get as JsonRequest);
const json_post = vi.mocked(post as JsonRequest);

describe('AiImageService', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        TestBed.configureTestingModule({
            providers: [
                AiImageService,
                {
                    provide: UploadsService,
                    useValue: { uploadFileToCompletion: vi.fn() },
                },
            ],
        });
    });

    afterEach(() => vi.useRealTimers());

    it('reuses a key only when the complete request is unchanged', () => {
        const service = TestBed.inject(AiImageService);
        const first = service.intentKey('generate', {
            prompt: 'A summer party',
            aspect_ratio: '16:9',
            candidates: 2,
            group_id: 'group-1',
        });

        expect(
            service.intentKey('generate', {
                prompt: 'A summer party',
                aspect_ratio: '16:9',
                candidates: 2,
                group_id: 'group-1',
            }),
        ).toBe(first);
        expect(
            service.intentKey('generate', {
                prompt: 'A summer party',
                aspect_ratio: '1:1',
                candidates: 2,
                group_id: 'group-1',
            }),
        ).not.toBe(first);
        expect(
            service.intentKey('generate', {
                prompt: 'A summer party',
                aspect_ratio: '16:9',
                candidates: 2,
                group_id: 'group-2',
            }),
        ).not.toBe(first);
    });

    it('keeps a key to retry a failed submit, and drops it once a job comes back', async () => {
        vi.useFakeTimers();
        const service = TestBed.inject(AiImageService);
        const request = { prompt: 'A summer party', aspect_ratio: '16:9' };
        const first = service.intentKey('generate', request);

        json_post.mockRejectedValueOnce(new Error('offline'));
        await expect(
            service.generate({ ...request, idempotency_key: first }),
        ).rejects.toThrow('offline');
        expect(service.intentKey('generate', request)).toBe(first);

        json_post.mockResolvedValueOnce({
            ...runningJob(),
            state: 'cancelled',
        });
        await service.generate({ ...request, idempotency_key: first });

        expect(service.intentKey('generate', request)).not.toBe(first);
    });

    it('reads the capabilities again after a failed read', async () => {
        vi.useFakeTimers();
        const enabled = {
            enabled: true,
            providers: [],
        } as unknown as AiCapabilities;
        json_get
            .mockRejectedValueOnce(new Error('offline'))
            .mockResolvedValueOnce(enabled);
        const service = TestBed.inject(AiImageService);

        await service.load();
        expect(service.enabled()).toBe(false);

        await vi.advanceTimersByTimeAsync(5_000);

        expect(service.enabled()).toBe(true);
        expect(get).toHaveBeenCalledTimes(2);
    });

    it('gives up on a job that runs past the deadline', async () => {
        vi.useFakeTimers();
        const service = TestBed.inject(AiImageService);
        const job = runningJob();
        service.jobs.set({ [job.id]: job });
        service.watch(job.id);
        vi.setSystemTime(Date.now() + MAX_JOB_WAIT_MS);

        await (
            service as unknown as { _poll: (id: string) => Promise<void> }
        )._poll(job.id);

        expect(get).not.toHaveBeenCalled();
        expect(service.jobs()[job.id].state).toBe('failed');
    });

    it('propagates a failed claim', async () => {
        vi.useFakeTimers();
        vi.mocked(post).mockRejectedValue(new Error('claim failed'));
        const service = TestBed.inject(AiImageService);
        const claim = expect(
            service.claim('job-1', 'upload-1', 'media-1'),
        ).rejects.toThrow('claim failed');

        await vi.runAllTimersAsync();

        await claim;
    });

    it('marks a job failed when status polling exhausts its retries', async () => {
        vi.mocked(get).mockRejectedValue(new Error('network unavailable'));
        const service = TestBed.inject(AiImageService);
        const job = runningJob();
        service.jobs.set({ [job.id]: job });
        service.watch(job.id);
        const test_service = service as unknown as {
            _poll: (id: string) => Promise<void>;
        };

        for (let attempt = 0; attempt < 10; attempt++) {
            await test_service._poll(job.id);
        }

        expect(service.jobs()[job.id].state).toBe('failed');
    });
});
