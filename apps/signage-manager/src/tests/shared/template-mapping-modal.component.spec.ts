import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import { SignageTemplate } from '@placeos/ts-client';
import { TemplateMappingModalComponent } from '../../app/shared/template-mapping-modal.component';
import { HydratedSignageTemplateMapping } from '../../app/signage-template-mapping';

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('TemplateMappingModalComponent', () => {
    const dialog_ref = { close: vi.fn(), disableClose: false };
    const save = vi.fn();

    async function createComponent(
        mapping: HydratedSignageTemplateMapping | null = null,
    ) {
        await TestBed.configureTestingModule({
            imports: [TemplateMappingModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        mapping,
                        templates: [
                            new SignageTemplate({
                                id: 'template-1',
                                name: 'Welcome',
                                approved: true,
                            }),
                        ],
                        save,
                    },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(TemplateMappingModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(TemplateMappingModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
        save.mockResolvedValue(undefined);
        TestBed.resetTestingModule();
    });

    it('saves an unscheduled mapping as the default template', async () => {
        const component = await createComponent();
        component.model.update((value) => ({
            ...value,
            template_id: 'template-1',
        }));

        await component.saveMapping();

        expect(save).toHaveBeenCalledWith('template-1', null);
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
    });

    it('serialises the existing schedule form when scheduling is enabled', async () => {
        const component = await createComponent();
        component.model.update((value) => ({
            ...value,
            template_id: 'template-1',
            scheduled: true,
            schedule: {
                ...value.schedule,
                schedule_type: 'play_cron',
                recurrence_type: 'daily',
                play_start: 9 * 60,
                play_period: 30,
            },
        }));

        await component.saveMapping();

        expect(save).toHaveBeenCalledWith(
            'template-1',
            expect.objectContaining({
                play_at: 0,
                play_cron: '0 9 * * *',
                play_period: 30,
            }),
        );
    });

    it('loads the mapped template and schedule for editing', async () => {
        const component = await createComponent(
            new HydratedSignageTemplateMapping({
                id: 'mapping-1',
                template_id: 'template-2',
                schedule: {
                    play_at: 0,
                    play_cron: '30 8 * * 1-5',
                    play_period: 60,
                    play_takeover: false,
                },
                template_details: { name: 'Weekday welcome' },
            }),
        );

        expect(component.model().template_id).toBe('template-2');
        expect(component.model().scheduled).toBe(true);
        expect(component.model().schedule.recurrence_type).toBe('weekdays');
        expect(component.selected_template()?.name).toBe('Weekday welcome');
    });
});
