import { TestBed } from '@angular/core/testing';
import { i18n, setNotifyOutlet, UploadsService } from '@placeos/common';
import { get, post, updateMetadata } from '@placeos/ts-client';

import {
    ImageGenService,
    MAX_JOB_WAIT_MS,
} from '../../app/image-gen/image-gen.service';
import {
    ImageGenBrandKit,
    ImageGenCapabilities,
    ImageGenJob,
} from '../../app/image-gen/image-gen.types';

function runningJob(id = 'job-1'): ImageGenJob {
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
/**
 * A service with a stored kit it can write to. jsdom cannot draw, so a
 * flipped logo is stood in for by an upload named after its slot.
 */
function kitService(kit: ImageGenBrandKit = {}) {
    const service = TestBed.inject(ImageGenService);
    Object.assign(service, {
        _org_zone: 'org-1',
        _flip: async (_source: File | string, target: string) =>
            `flipped:${target}`,
    });
    service.brand_kit.set(kit);
    service.brand_kit_read.set('ok');
    return service;
}

/** the details of each brand kit write, in order */
function writtenKits() {
    return vi
        .mocked(updateMetadata)
        .mock.calls.map(([, metadata]) => metadata.details);
}

/** the overloads type every response as a string; these return JSON */
type JsonRequest = (...args: unknown[]) => Promise<unknown>;
const json_get = vi.mocked(get as JsonRequest);
const json_post = vi.mocked(post as JsonRequest);

describe('ImageGenService', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        TestBed.configureTestingModule({
            providers: [
                ImageGenService,
                {
                    provide: UploadsService,
                    // each file is stored under its own name
                    useValue: {
                        uploadFileToCompletion: vi.fn(
                            async (file: File) => `upload:${file.name}`,
                        ),
                    },
                },
            ],
        });
    });

    afterEach(() => vi.useRealTimers());

    beforeEach(() => {
        vi.mocked(updateMetadata).mockResolvedValue(
            {} as Awaited<ReturnType<typeof updateMetadata>>,
        );
    });

    it('reuses a key only when the complete request is unchanged', () => {
        const service = TestBed.inject(ImageGenService);
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
        const service = TestBed.inject(ImageGenService);
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
        } as unknown as ImageGenCapabilities;
        json_get
            .mockRejectedValueOnce(new Error('offline'))
            .mockResolvedValueOnce(enabled);
        const service = TestBed.inject(ImageGenService);

        await service.load();
        expect(service.enabled()).toBe(false);

        await vi.advanceTimersByTimeAsync(5_000);

        expect(service.enabled()).toBe(true);
        expect(get).toHaveBeenCalledTimes(2);
    });

    it('gives up on a job that runs past the deadline', async () => {
        vi.useFakeTimers();
        const service = TestBed.inject(ImageGenService);
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
        const service = TestBed.inject(ImageGenService);
        const claim = expect(
            service.claim('job-1', 'upload-1', 'media-1'),
        ).rejects.toThrow('claim failed');

        await vi.runAllTimersAsync();

        await claim;
    });

    it('marks a job failed when status polling exhausts its retries', async () => {
        vi.mocked(get).mockRejectedValue(new Error('network unavailable'));
        const service = TestBed.inject(ImageGenService);
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

    it('writes brand kit changes one at a time, each on top of the last', async () => {
        const service = kitService({ organisation: 'Acme' });
        let first_done: () => void = () => undefined;
        vi.mocked(updateMetadata).mockImplementationOnce(
            () =>
                new Promise((resolve) => {
                    first_done = () =>
                        resolve(
                            {} as Awaited<ReturnType<typeof updateMetadata>>,
                        );
                }),
        );

        const palette = service.saveBrandKit({ palette: { primary: '#111' } });
        const logo = service.saveBrandKit({ logo_upload_id: 'logo-1' });
        await Promise.resolve();
        expect(updateMetadata).toHaveBeenCalledTimes(1);
        first_done();
        await Promise.all([palette, logo]);

        expect(writtenKits()[1]).toEqual({
            organisation: 'Acme',
            palette: { primary: '#111' },
            logo_upload_id: 'logo-1',
        });
    });

    it('uploads nothing when the brand kit cannot be saved', async () => {
        const service = kitService();
        service.brand_kit_read.set('failed');
        const uploads = TestBed.inject(UploadsService);

        await expect(
            service.replaceBrandLogo(
                'on_light',
                new File([], 'logo.png'),
                true,
            ),
        ).rejects.toThrow();

        expect(uploads.uploadFileToCompletion).not.toHaveBeenCalled();
    });

    it('makes the missing version of a logo from the one uploaded', async () => {
        const service = kitService();

        await service.replaceBrandLogo(
            'on_light',
            new File([], 'logo.png'),
            true,
        );

        expect(writtenKits()[0]).toEqual({
            logo_upload_id: 'upload:logo.png',
            logo_dark_upload_id: 'flipped:on_dark',
            logo_derived: 'on_dark',
        });
    });

    it('replaces a made version, but not an uploaded one', async () => {
        const made = kitService({
            logo_upload_id: 'old-light',
            logo_dark_upload_id: 'old-dark',
            logo_derived: 'on_dark',
        });
        await made.replaceBrandLogo('on_light', new File([], 'logo.png'), true);
        expect(writtenKits()[0]).toMatchObject({
            logo_dark_upload_id: 'flipped:on_dark',
            logo_derived: 'on_dark',
        });

        made.brand_kit.set({
            logo_upload_id: 'old-light',
            logo_dark_upload_id: 'old-dark',
        });
        await made.replaceBrandLogo('on_light', new File([], 'logo.png'), true);
        expect(writtenKits()[1]).toEqual({
            logo_upload_id: 'upload:logo.png',
            logo_dark_upload_id: 'old-dark',
        });
    });

    it('stops calling a slot made once a file is uploaded into it', async () => {
        const service = kitService({
            logo_upload_id: 'light',
            logo_dark_upload_id: 'made-dark',
            logo_derived: 'on_dark',
        });

        await service.replaceBrandLogo('on_dark', new File([], 'dark.png'));

        expect(writtenKits()[0]).toEqual({
            logo_upload_id: 'light',
            logo_dark_upload_id: 'upload:dark.png',
        });
    });

    it('does not announce a finished job that an open screen shows', async () => {
        const notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
            dismiss: vi.fn(),
        }));
        setNotifyOutlet(
            { open: notify_open } as unknown as Parameters<
                typeof setNotifyOutlet
            >[0],
            true,
        );
        const done = { ...runningJob(), state: 'done' as const, version: 2 };
        json_get.mockResolvedValue({ ...done, images_produced: 1 });
        const service = TestBed.inject(ImageGenService);
        service.jobs.set({ [done.id]: runningJob() });
        service.setJobOnScreen(done.id, true);
        service.watch(done.id);

        await (
            service as unknown as { _poll: (id: string) => Promise<void> }
        )._poll(done.id);
        setNotifyOutlet(null, true);

        expect(service.jobs()[done.id].state).toBe('done');
        expect(notify_open).not.toHaveBeenCalledWith(
            i18n('SIGNAGE_MANAGER.IMAGE_GEN_JOB_DONE'),
            expect.anything(),
            expect.anything(),
        );
    });
});
