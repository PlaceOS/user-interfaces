import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageTemplate } from '@placeos/ts-client';
import { TemplateApprovalPreviewComponent } from '../../app/shared/template-approval-preview.component';
import { SignageService } from '../../app/signage.service';

describe('TemplateApprovalPreviewComponent', () => {
    const service_stub = {
        widgets: signal([
            { id: 'clock', name: 'Clock' },
            { id: 'weather', name: 'Weather' },
        ]),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TemplateApprovalPreviewComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        }).compileComponents();
    });

    it('renders a visual preview for each template version', async () => {
        const fixture = TestBed.createComponent(
            TemplateApprovalPreviewComponent,
        );
        fixture.componentRef.setInput('versions', [
            new SignageTemplate({
                id: 'template-1',
                name: 'Pending',
                layouts: [
                    {
                        position: 'top',
                        plugin_id: 'clock',
                        plugin_params: {},
                        y_pos: 0.25,
                    },
                    {
                        position: 'left',
                        plugin_id: 'weather',
                        plugin_params: {},
                        x_pos: 0.3,
                    },
                    {
                        position: 'floating',
                        plugin_id: 'clock',
                        plugin_params: {},
                        x_pos: 0.5,
                        y_pos: 0.6,
                    },
                ],
            }),
            new SignageTemplate({
                id: 'template-1',
                name: 'Approved',
                layouts: [
                    {
                        position: 'top',
                        plugin_id: 'clock',
                        plugin_params: {},
                        y_pos: 0.25,
                    },
                    {
                        position: 'left',
                        plugin_id: 'weather',
                        plugin_params: {},
                        x_pos: 0.2,
                    },
                ],
            }),
        ]);

        await fixture.whenStable();

        expect(
            fixture.nativeElement.querySelectorAll('[data-template-preview]'),
        ).toHaveLength(2);
        expect(
            fixture.nativeElement.querySelectorAll('[data-template-layout]'),
        ).toHaveLength(3);
        expect(
            fixture.nativeElement.querySelectorAll('[data-layout-item]'),
        ).toHaveLength(3);
        expect(fixture.nativeElement.textContent).toContain('Pending');
        expect(fixture.nativeElement.textContent).toContain('Approved');
        expect(fixture.nativeElement.textContent).toContain('Clock');
        expect(fixture.nativeElement.textContent).toContain('Weather');
        const position_values = Array.from(
            fixture.nativeElement.querySelectorAll('[data-layout-values]'),
        ).map((item: Element) => item.textContent?.replace(/\s+/g, ' ').trim());
        expect(position_values).toEqual([
            'X position: 30%',
            'X position: 50% Y position: 60%',
            'X position: 20%',
        ]);
        expect(fixture.nativeElement.textContent).not.toContain(
            'Y position: 25%',
        );
    });

    it('replaces an unchanged older version with a placeholder', async () => {
        const fixture = TestBed.createComponent(
            TemplateApprovalPreviewComponent,
        );
        const version = {
            id: 'template-1',
            name: 'Template',
            layouts: [
                {
                    position: 'left' as const,
                    plugin_id: 'clock',
                    plugin_params: {},
                    x_pos: 0.2,
                },
            ],
        };
        fixture.componentRef.setInput('versions', [
            new SignageTemplate({ ...version, updated_at: '2026-08-20' }),
            new SignageTemplate({ ...version, updated_at: '2026-08-19' }),
        ]);

        await fixture.whenStable();

        expect(
            fixture.nativeElement.querySelectorAll('[data-template-version]'),
        ).toHaveLength(1);
        expect(
            fixture.nativeElement.querySelector('[data-no-older-version]')
                .textContent,
        ).toContain('No older version');
        expect(fixture.nativeElement.textContent).not.toContain('Old version');
    });

    it('uses the displayed defaults for unset position values', () => {
        const component = TestBed.createComponent(
            TemplateApprovalPreviewComponent,
        ).componentInstance;

        expect(
            component.positionValues({
                position: 'floating',
                plugin_params: {},
            }),
        ).toEqual([
            {
                axis: 'x_pos',
                label: 'SIGNAGE_MANAGER.TEMPLATE_X_POS',
                value: 50,
            },
            {
                axis: 'y_pos',
                label: 'SIGNAGE_MANAGER.TEMPLATE_Y_POS',
                value: 50,
            },
        ]);
    });

    it('resolves each version background independently', () => {
        const component = TestBed.createComponent(
            TemplateApprovalPreviewComponent,
        ).componentInstance;

        expect(
            component.backgroundUrl(
                new SignageTemplate({
                    id: 'template-1',
                    background_item_id: 'media-1',
                }),
            ),
        ).toMatch(/\/api\/engine\/v2\/signage\/media\/media-1\/thumbnail$/);
        expect(
            component.backgroundUrl(new SignageTemplate({ id: 'template-2' })),
        ).toBe('');
    });
});
