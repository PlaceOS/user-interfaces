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
    async function make(data: Record<string, string> = {}) {
        const jobs = signal<Record<string, AiJob>>({});
        const current_capabilities = capabilities();
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
            generate: vi.fn(),
            loadImage: vi.fn().mockResolvedValue(''),
        };
        const signage = {
            is_sys_admin: signal(false),
            api_group_id: signal('group-1'),
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
