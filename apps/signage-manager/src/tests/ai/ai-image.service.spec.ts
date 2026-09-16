import { TestBed } from '@angular/core/testing';
import { UploadsService } from '@placeos/common';
import { get, post } from '@placeos/ts-client';

import { AiImageService } from '../../app/ai/ai-image.service';
import { AiJob } from '../../app/ai/ai.types';

vi.mock('@placeos/ts-client', { spy: true });

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
        const job: AiJob = {
            id: 'job-1',
            state: 'running',
            kind: 'generate',
            candidates: 1,
            images_produced: 0,
            version: 1,
            images: [null],
        };
        service.jobs.set({ [job.id]: job });
        service.watch(job.id);
        const test_service = service as unknown as {
            _poll: (id: string) => Promise<void>;
        };

        for (let attempt = 0; attempt < 10; attempt++) {
            await test_service._poll(job.id);
        }

        expect(service.job(job.id).state).toBe('failed');
    });
});
