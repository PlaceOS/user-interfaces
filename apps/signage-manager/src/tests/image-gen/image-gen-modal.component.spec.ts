import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { i18n, setNotifyOutlet } from '@placeos/common';

import { ImageGenModalComponent } from '../../app/image-gen/image-gen-modal.component';
import { ImageGenService } from '../../app/image-gen/image-gen.service';
import {
    ImageGenCapabilities,
    ImageGenJob,
    ImageGenJobImage,
} from '../../app/image-gen/image-gen.types';
import { SignageMediaService } from '../../app/media/signage-media.service';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SignageContextService } from '../../app/signage-context.service';

function job(
    id: string,
    changes: Partial<ImageGenJob> = {},
    images: ImageGenJobImage[] = [],
): ImageGenJob {
    return {
        id,
        state: 'done',
        kind: 'generate',
        candidates: images.length || 1,
        images_produced: images.length,
        version: 1,
        images,
        ...changes,
    };
}

function image(upload_id: string): ImageGenJobImage {
    return { upload_id, url: `/uploads/${upload_id}` };
}

function capabilities(
    changes: Partial<ImageGenCapabilities> = {},
): ImageGenCapabilities {
    return {
        enabled: true,
        providers: [
            {
                id: 'provider-1',
                name: 'Provider',
                provider: 'OPENAI',
                default_model: 'model-1',
                models: [
                    {
                        id: 'model-1',
                        name: 'Model',
                        generate: true,
                        edit: true,
                        enhance: false,
                        max_references: 3,
                        max_candidates: 1,
                        qualities: ['standard'],
                        aspect_ratios: ['1:1'],
                    },
                ],
            },
        ],
        default_provider_id: 'provider-1',
        aspect_ratios: ['1:1'],
        qualities: ['standard'],
        max_candidates: 1,
        logo_layer: false,
        quota: {
            user_remaining_today: null,
            domain_remaining_month: null,
        },
        ...changes,
    };
}

describe('ImageGenModalComponent', () => {
    const notify_open = vi.fn(() => ({
        onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
        dismiss: vi.fn(),
    }));

    // jsdom has no object URL support and the modal revokes on removal
    beforeAll(() => {
        URL.createObjectURL ??= vi.fn(() => 'blob:mock');
        URL.revokeObjectURL ??= vi.fn();
    });

    beforeEach(() => {
        notify_open.mockClear();
        setNotifyOutlet(
            { open: notify_open } as unknown as Parameters<
                typeof setNotifyOutlet
            >[0],
            true,
        );
    });

    async function make(data: Record<string, string> = {}) {
        const jobs = signal<Record<string, ImageGenJob>>({});
        const current_capabilities = capabilities();
        const generate = vi.fn(async (request) => {
            const job: ImageGenJob = {
                id: 'job-1',
                state: 'done',
                kind: 'generate',
                candidates: 1,
                images_produced: 0,
                version: 1,
                images: [],
            };
            jobs.set({ [job.id]: job });
            return job;
        });
        const edit = vi.fn(async (request) => {
            const job: ImageGenJob = {
                id: 'job-1',
                state: 'done',
                kind: 'edit',
                candidates: 1,
                images_produced: 0,
                version: 1,
                images: [],
            };
            jobs.set({ [job.id]: job });
            return job;
        });
        const image_gen = {
            capabilities: signal(current_capabilities),
            default_model: signal(current_capabilities.providers[0].models[0]),
            can_edit: signal(true),
            brand_kit: signal(null),
            jobs,
            intentKey: vi.fn(() => 'intent-1'),
            edit,
            generate,
            cancel: vi.fn(),
            unwatch: vi.fn(),
            setJobOnScreen: vi.fn(),
            abandon: vi.fn(),
            claim: vi.fn().mockResolvedValue({}),
            removeReference: vi.fn(),
            loadImage: vi.fn().mockResolvedValue('blob:artwork'),
        };
        const context_stub = {
            is_sys_admin: signal(false),
            global_features: signal<string[]>(['branding-editing']),
            selected_group: signal({ group: { id: 'group-1' } }),
            hasFeature: vi.fn(() => true),
        };
        const media_stub = {
            addMedia: vi.fn(),
            addMediaFromUpload: vi.fn(),
            discardCreatedMedia: vi.fn(),
        };
        const playlist_stub = { addMediaToPlaylist: vi.fn() };
        const dialog_ref = { close: vi.fn(), disableClose: false };
        await TestBed.configureTestingModule({
            imports: [ImageGenModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: ImageGenService, useValue: image_gen },
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageMediaService, useValue: media_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
            ],
        })
            .overrideComponent(ImageGenModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            ImageGenModalComponent,
        ).componentInstance;
        return {
            image_gen,
            component,
            context_stub,
            dialog_ref,
            media_stub,
            playlist_stub,
        };
    }

    afterEach(() => {
        vi.useRealTimers();
        TestBed.resetTestingModule();
        setNotifyOutlet(null, true);
    });

    const pick = {
        job_id: 'job-1',
        index: 0,
        upload_id: 'upload-1',
        url: '/uploads/upload-1',
        width: 1024,
        height: 1536,
        version: 1,
    };

    it('does not let a cancelled job take over when it finishes later', async () => {
        vi.useFakeTimers();
        const { image_gen, component } = await make();
        image_gen.generate
            .mockImplementationOnce(async () => {
                image_gen.jobs.set({
                    'job-1': job('job-1', { state: 'running' }),
                });
                return image_gen.jobs()['job-1'];
            })
            .mockImplementationOnce(async () => {
                const next = job('job-2', { state: 'running' });
                image_gen.jobs.update((jobs) => ({ ...jobs, [next.id]: next }));
                return next;
            });
        image_gen.cancel.mockResolvedValue(
            job('job-1', { state: 'cancelled' }),
        );
        component.brief.set('A poster for the launch');

        await component.start();
        await component.cancel();
        expect(component.state()).toBe('compose');
        await component.start();
        // the provider finished the first job before the cancel reached it
        image_gen.jobs.update((jobs) => ({
            ...jobs,
            'job-1': job('job-1', {}, [image('upload-1')]),
        }));
        TestBed.tick();

        expect(component.state()).toBe('generating');
        expect(component.selected()).toBeNull();
    });

    it('keeps following the job when the server refuses to cancel it', async () => {
        vi.useFakeTimers();
        const { image_gen, component } = await make();
        image_gen.generate.mockImplementationOnce(async () => {
            image_gen.jobs.set({ 'job-1': job('job-1', { state: 'running' }) });
            return image_gen.jobs()['job-1'];
        });
        image_gen.cancel.mockResolvedValue(null);
        component.brief.set('A poster for the launch');

        await component.start();
        await component.cancel();
        expect(component.state()).toBe('generating');

        image_gen.jobs.set({ 'job-1': job('job-1', {}, [image('upload-1')]) });
        TestBed.tick();

        expect(component.state()).toBe('review');
    });

    it('keeps every version in the rail after refining an older one', async () => {
        const { image_gen, component } = await make();
        const respond = (next: ImageGenJob) => async () => {
            image_gen.jobs.update((jobs) => ({ ...jobs, [next.id]: next }));
            return next;
        };
        image_gen.generate.mockImplementationOnce(
            respond(job('job-1', {}, [image('upload-1'), image('upload-2')])),
        );
        image_gen.edit
            .mockImplementationOnce(
                respond(
                    job('job-2', { parent_job_id: 'job-1' }, [
                        image('upload-3'),
                    ]),
                ),
            )
            .mockImplementationOnce(
                // no url on the image: the rail reads it by upload id
                respond(
                    job('job-3', { parent_job_id: 'job-1' }, [
                        { upload_id: 'upload-4' },
                    ]),
                ),
            );
        component.brief.set('A poster for the launch');
        await component.start();
        TestBed.tick();
        component.refinement.set('Darker');
        await component.refine();
        TestBed.tick();

        // refine option 2 of version 1 after version 2 exists
        await component.select(component.rail()[1]);
        component.refinement.set('Brighter');
        await component.refine();

        expect(
            component
                .rail()
                .map(({ version, upload_id }) => `${version}:${upload_id}`),
        ).toEqual(['1:upload-1', '1:upload-2', '2:upload-3', '3:upload-4']);
        expect(component.rail()[3].url).toBe(
            '/api/engine/v2/uploads/upload-4/url',
        );
    });

    it('does not offer refining when the model cannot edit', async () => {
        const { image_gen, component } = await make();
        image_gen.can_edit.set(false);

        expect(component.can_refine()).toBe(false);
    });

    it('reuses the saved row when Save is retried after a playlist failure', async () => {
        const { image_gen, component, dialog_ref, media_stub, playlist_stub } =
            await make({
                playlist_id: 'playlist-1',
            });
        const media = { id: 'media-1', thumbnail_id: '' };
        media_stub.addMediaFromUpload.mockResolvedValue(media);
        component.selected_object_url.set('blob:artwork');
        playlist_stub.addMediaToPlaylist
            .mockRejectedValueOnce(new Error('offline'))
            .mockResolvedValueOnce(undefined);
        component.selected.set(pick);

        await component.save();
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(component.claim_pending()).toBe(true);
        await component.save();

        expect(media_stub.addMediaFromUpload).toHaveBeenCalledTimes(1);
        expect(media_stub.addMediaFromUpload).toHaveBeenCalledWith(
            'upload-1',
            expect.objectContaining({ orientation: 'portrait' }),
        );
        expect(image_gen.claim).toHaveBeenCalledTimes(1);
        expect(playlist_stub.addMediaToPlaylist).toHaveBeenCalledTimes(2);
        expect(dialog_ref.close).toHaveBeenCalledWith(media);
        expect(dialog_ref.disableClose).toBe(false);
    });

    it('uses supported defaults and the model reference limit', async () => {
        const { component } = await make();

        expect(component.aspect()).toBe('1:1');
        expect(component.candidates()).toBe(1);
        expect(component.max_references()).toBe(3);
    });

    it('sends the include images first and the style reference last', async () => {
        const { image_gen, component } = await make();
        component.include_references.set([
            { id: 'inc-1', name: 'one.png', url: 'blob:one' },
            { id: 'inc-2', name: 'two.png', url: 'blob:two' },
        ]);
        component.style_reference.set({
            id: 'style-1',
            name: 'style.png',
            url: 'blob:style',
        });
        component.brief.set('A poster for the launch');

        await component.start();

        expect(image_gen.generate).toHaveBeenCalledWith(
            expect.objectContaining({
                references: ['inc-1', 'inc-2', 'style-1'],
            }),
        );
    });

    it('tells the model what each attached image is for', async () => {
        const { image_gen, component } = await make();
        component.include_references.set([
            { id: 'inc-1', name: 'one.png', url: 'blob:one' },
            { id: 'inc-2', name: 'two.png', url: 'blob:two' },
        ]);
        component.style_reference.set({
            id: 'style-1',
            name: 'style.png',
            url: 'blob:style',
        });
        component.brief.set('A poster for the launch');

        await component.start();

        const request = image_gen.generate.mock.calls[0][0];
        expect(request.prompt).toContain('A poster for the launch');
        expect(request.prompt).toContain(
            'Include images 1 to 2 in the artwork',
        );
        expect(request.prompt).toContain('Use image 3 as a style guide');
    });

    it('leaves the brief untouched when nothing is attached', async () => {
        const { image_gen, component } = await make();
        component.brief.set('A poster for the launch');

        await component.start();

        expect(image_gen.generate).toHaveBeenCalledWith(
            expect.objectContaining({ prompt: 'A poster for the launch' }),
        );
    });

    it('counts the style reference against the model limit', async () => {
        const { component } = await make();

        expect(component.include_max()).toBe(3);
        component.style_reference.set({
            id: 'style-1',
            name: 'style.png',
            url: 'blob:style',
        });
        expect(component.include_max()).toBe(2);
        component.include_references.set([
            { id: 'inc-1', name: 'one.png', url: 'blob:one' },
            { id: 'inc-2', name: 'two.png', url: 'blob:two' },
        ]);
        expect(component.style_max()).toBe(1);
        component.style_reference.set(null);
        component.include_references.set([
            { id: 'inc-1', name: 'one.png', url: 'blob:one' },
            { id: 'inc-2', name: 'two.png', url: 'blob:two' },
            { id: 'inc-3', name: 'three.png', url: 'blob:three' },
        ]);
        expect(component.style_max()).toBe(0);
    });

    it('removing the style reference clears its slot', async () => {
        const { component } = await make();
        component.style_reference.set({
            id: 'style-1',
            name: 'style.png',
            url: 'blob:style',
        });

        component.removeReference('style-1');

        expect(component.style_reference()).toBeNull();
        expect(component.references()).toEqual([]);
    });

    it('does not send a synthetic aspect ratio when editing', async () => {
        const { image_gen, component } = await make({
            source_upload_id: 'source-1',
            source_name: 'Poster',
        });
        component.brief.set('Make it darker');

        await component.start();

        expect(image_gen.edit).toHaveBeenCalledWith(
            expect.not.objectContaining({ aspect_ratio: expect.anything() }),
        );
    });

    it('starts one save when Save is clicked again while the image is encoded', async () => {
        const { component, media_stub } = await make();
        media_stub.addMedia.mockResolvedValue({ id: 'media-1' });
        let encoded: (blob: Blob) => void = () => undefined;
        const toBlob = vi.fn(
            () => new Promise<Blob>((resolve) => (encoded = resolve)),
        );
        Object.assign(component, { _layer: () => ({ toBlob }) });
        component.layer_state.update((state) => ({
            ...state,
            blocks: [{ ...state.blocks[0], text: 'Launch party' }],
        }));
        component.selected.set(pick);
        component.selected_object_url.set('blob:artwork');

        const first = component.save();
        const second = component.save();
        encoded(new Blob(['png']));
        await Promise.all([first, second]);

        expect(toBlob).toHaveBeenCalledTimes(1);
        expect(media_stub.addMedia).toHaveBeenCalledTimes(1);
    });

    it('names the action that failed, not the raw upload error', async () => {
        const { image_gen, component, context_stub, media_stub } = await make();
        const raw = new Error('Creating upload failed with status 500: {}');
        const shown = () =>
            notify_open.mock.calls.map((call: unknown[]) => call[0]);
        Object.assign(image_gen, {
            uploadReference: vi.fn().mockRejectedValue(raw),
            uploadBrandLogo: vi.fn().mockRejectedValue(raw),
        });
        media_stub.addMediaFromUpload.mockRejectedValue(raw);
        context_stub.is_sys_admin.set(true);
        component.selected.set(pick);
        component.selected_object_url.set('blob:artwork');

        await component.addReferences([new File([], 'a.png')], 'include');
        await component.uploadLogo(new File([], 'logo.png'));
        await component.save();

        expect(shown()).toEqual([
            i18n('SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_UPLOAD_FAILED'),
            i18n('SIGNAGE_MANAGER.IMAGE_GEN_LOGO_SAVE_FAILED'),
            i18n('SIGNAGE_MANAGER.IMAGE_GEN_SAVE_FAILED'),
        ]);
    });

    it('saves nothing until the picked option has loaded', async () => {
        const { component, media_stub } = await make();
        component.selected.set(pick);

        expect(component.can_save()).toBe(false);
        await component.save();

        expect(media_stub.addMediaFromUpload).not.toHaveBeenCalled();
    });

    it('tells the service which jobs it shows while open', async () => {
        const { image_gen, component } = await make();
        component.brief.set('A poster for the launch');
        await component.start();
        expect(image_gen.setJobOnScreen).toHaveBeenCalledWith('job-1', true);

        component.ngOnDestroy();

        expect(image_gen.setJobOnScreen).toHaveBeenCalledWith('job-1', false);
    });

    it('stops the running job when the modal closes', async () => {
        const { image_gen, component } = await make();
        image_gen.generate.mockImplementationOnce(async () => {
            image_gen.jobs.set({ 'job-1': job('job-1', { state: 'running' }) });
            return image_gen.jobs()['job-1'];
        });
        image_gen.cancel.mockResolvedValue(
            job('job-1', { state: 'cancelled' }),
        );
        component.include_references.set([
            { id: 'inc-1', name: 'one.png', url: 'blob:one' },
        ]);
        component.brief.set('A poster for the launch');
        await component.start();

        component.ngOnDestroy();

        // the service clears the reference once the job has stopped
        expect(image_gen.abandon).toHaveBeenCalledWith('job-1', ['inc-1']);
        expect(image_gen.removeReference).not.toHaveBeenCalled();
    });

    it('stops a job the server accepts after the modal closed', async () => {
        const { image_gen, component } = await make();
        let accept: (job: ImageGenJob) => void = () => undefined;
        image_gen.generate.mockImplementationOnce(
            () => new Promise<ImageGenJob>((resolve) => (accept = resolve)),
        );
        component.brief.set('A poster for the launch');

        const started = component.start();
        component.ngOnDestroy();
        accept(job('job-1', { state: 'running' }));
        await started;

        expect(image_gen.abandon).toHaveBeenCalledWith('job-1', []);
    });

    it('clears the attached images when a request fails after the modal closed', async () => {
        const { image_gen, component } = await make();
        let refuse: (error: Error) => void = () => undefined;
        image_gen.generate.mockImplementationOnce(
            () => new Promise<ImageGenJob>((_, reject) => (refuse = reject)),
        );
        component.include_references.set([
            { id: 'inc-1', name: 'one.png', url: 'blob:one' },
        ]);
        component.brief.set('A poster for the launch');

        const started = component.start();
        component.ngOnDestroy();
        expect(image_gen.removeReference).not.toHaveBeenCalled();
        refuse(new Error('offline'));
        await started;

        expect(image_gen.removeReference).toHaveBeenCalledWith('inc-1');
    });

    it('lets go of an option whose image cannot be read', async () => {
        const { image_gen, component } = await make();
        image_gen.loadImage.mockRejectedValueOnce(new Error('offline'));

        await component.select(pick);

        expect(component.selected()).toBeNull();
        expect(notify_open).toHaveBeenCalledWith(
            i18n('SIGNAGE_MANAGER.IMAGE_GEN_IMAGE_UNREADABLE'),
            expect.anything(),
            expect.anything(),
        );
    });

    it('offers logo changes only when branding editing is on', async () => {
        const { component, context_stub } = await make();
        context_stub.is_sys_admin.set(true);
        expect(component.can_set_logo()).toBe(true);

        context_stub.global_features.set([]);

        expect(component.can_set_logo()).toBe(false);
    });
});
