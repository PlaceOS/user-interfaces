import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AiImageModalComponent } from '../../app/ai/ai-image-modal.component';
import { AiImageService } from '../../app/ai/ai-image.service';
import { AiCapabilities, AiJob } from '../../app/ai/ai.types';
import { SignageService } from '../../app/signage.service';

function capabilities(changes: Partial<AiCapabilities> = {}): AiCapabilities {
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

describe('AiImageModalComponent', () => {
    // jsdom has no object URL support and the modal revokes on removal
    beforeAll(() => {
        URL.createObjectURL ??= vi.fn(() => 'blob:mock');
        URL.revokeObjectURL ??= vi.fn();
    });

    async function make(data: Record<string, string> = {}) {
        const jobs = signal<Record<string, AiJob>>({});
        const current_capabilities = capabilities();
        const generate = vi.fn(async (request) => {
            const job: AiJob = {
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
            const job: AiJob = {
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
        const ai = {
            capabilities: signal(current_capabilities),
            default_model: signal(current_capabilities.providers[0].models[0]),
            brand_kit: signal(null),
            jobs,
            intentKey: vi.fn(() => 'intent-1'),
            edit,
            generate,
            removeReference: vi.fn(),
            loadImage: vi.fn().mockResolvedValue(''),
        };
        const signage = {
            is_sys_admin: signal(false),
            selected_group: signal({ group: { id: 'group-1' } }),
        };
        await TestBed.configureTestingModule({
            imports: [AiImageModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: MatDialogRef, useValue: { close: vi.fn() } },
                { provide: AiImageService, useValue: ai },
                { provide: SignageService, useValue: signage },
            ],
        })
            .overrideComponent(AiImageModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            AiImageModalComponent,
        ).componentInstance;
        return { ai, component };
    }

    afterEach(() => TestBed.resetTestingModule());

    it('uses supported defaults and the model reference limit', async () => {
        const { component } = await make();

        expect(component.aspect()).toBe('1:1');
        expect(component.candidates()).toBe(1);
        expect(component.max_references()).toBe(3);
    });

    it('sends the include images first and the style reference last', async () => {
        const { ai, component } = await make();
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

        expect(ai.generate).toHaveBeenCalledWith(
            expect.objectContaining({
                references: ['inc-1', 'inc-2', 'style-1'],
            }),
        );
    });

    it('tells the model what each attached image is for', async () => {
        const { ai, component } = await make();
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

        const request = ai.generate.mock.calls[0][0];
        expect(request.prompt).toContain('A poster for the launch');
        expect(request.prompt).toContain(
            'Include images 1 to 2 in the artwork',
        );
        expect(request.prompt).toContain('Use image 3 as a style guide');
    });

    it('leaves the brief untouched when nothing is attached', async () => {
        const { ai, component } = await make();
        component.brief.set('A poster for the launch');

        await component.start();

        expect(ai.generate).toHaveBeenCalledWith(
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
        const { ai, component } = await make({
            source_upload_id: 'source-1',
            source_name: 'Poster',
        });
        component.brief.set('Make it darker');

        await component.start();

        expect(ai.edit).toHaveBeenCalledWith(
            expect.not.objectContaining({ aspect_ratio: expect.anything() }),
        );
    });
});
