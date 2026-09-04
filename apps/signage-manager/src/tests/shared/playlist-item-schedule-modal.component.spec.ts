import { DatePipe } from '@angular/common';
import { Component, Pipe, PipeTransform, input, output } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import {
    PlaylistItemScheduleModalComponent,
    PlaylistItemScheduleModalData,
} from '../../app/shared/playlist-item-schedule-modal.component';

@Component({ selector: 'fullscreen-modal-shell', template: '<ng-content />' })
class ModalShellStubComponent {
    public readonly heading = input('');
    public readonly loading = input('');
    public readonly confirm = output();
}

@Component({ selector: 'playlist-schedule-form', template: '' })
class ScheduleFormStubComponent {
    public readonly schedule = input<any>();
    public readonly index = input(0);
    public readonly open = input(false);
    public readonly can_remove = input(false);
    public readonly toggle = output();
    public readonly remove = output<Event>();
}

@Component({ selector: 'media-thumbnail', template: '' })
class MediaThumbnailStubComponent {
    public readonly item = input<any>();
    public readonly cover = input(false);
}

@Pipe({ name: 'translate' })
class TranslateStubPipe implements PipeTransform {
    public transform(key: string) {
        return key;
    }
}

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('PlaylistItemScheduleModalComponent', () => {
    const dialog_ref = { close: vi.fn(), disableClose: false };
    const save = vi.fn();
    let modal_data: PlaylistItemScheduleModalData;

    async function createComponent() {
        await TestBed.configureTestingModule({
            imports: [PlaylistItemScheduleModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(PlaylistItemScheduleModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(PlaylistItemScheduleModalComponent)
            .componentInstance;
    }

    /** Renders the real template with stubbed children so the media header can be asserted */
    async function renderComponent() {
        await TestBed.configureTestingModule({
            imports: [PlaylistItemScheduleModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(PlaylistItemScheduleModalComponent, {
                set: {
                    imports: [
                        DatePipe,
                        ModalShellStubComponent,
                        ScheduleFormStubComponent,
                        MediaThumbnailStubComponent,
                        TranslateStubPipe,
                    ],
                },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(
            PlaylistItemScheduleModalComponent,
        );
        await fixture.whenStable();
        return fixture;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
        save.mockResolvedValue(undefined);
        modal_data = {
            item: { item_id: 'item-1', schedules: [] } as any,
            save,
        };
        TestBed.resetTestingModule();
    });

    it('shows the media preview, name, description and expiry', async () => {
        const valid_until = Math.floor(Date.UTC(2026, 6, 28, 3) / 1000);
        modal_data.item = {
            item_id: 'item-1',
            schedules: [],
            media: {
                id: 'media-1',
                name: 'Lobby Promo',
                description: 'Plays in the foyer',
                valid_until,
            },
        } as any;
        const fixture = await renderComponent();
        const text = fixture.nativeElement.textContent;

        expect(
            fixture.nativeElement.querySelector('media-thumbnail'),
        ).toBeTruthy();
        expect(text).toContain('Lobby Promo');
        expect(text).toContain('Plays in the foyer');
        expect(text).toContain('FORM.EXPIRES_AT');
        expect(text).toContain(
            new DatePipe('en-US').transform(valid_until * 1000, 'mediumDate'),
        );
    });

    it('hides the media header when the item has no media', async () => {
        const fixture = await renderComponent();

        expect(
            fixture.nativeElement.querySelector('media-thumbnail'),
        ).toBeNull();
    });

    it('seeds a single schedule when the item has none', async () => {
        const component = await createComponent();

        expect(component.model().schedules.length).toBe(1);
        expect(component.isScheduleOpen(0)).toBe(true);
    });

    it('adds a schedule and focuses the new entry', async () => {
        const component = await createComponent();

        component.addSchedule();

        expect(component.model().schedules.length).toBe(2);
        expect(component.isScheduleOpen(1)).toBe(true);
        expect(component.isScheduleOpen(0)).toBe(false);
    });

    it('removes a schedule but keeps at least one', async () => {
        const component = await createComponent();
        const event = { preventDefault: vi.fn(), stopPropagation: vi.fn() };
        component.addSchedule();

        component.removeSchedule(event as any, 1);
        expect(component.model().schedules.length).toBe(1);

        component.removeSchedule(event as any, 0);
        expect(component.model().schedules.length).toBe(1);
        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('collapses an open schedule when toggled again', async () => {
        const component = await createComponent();

        component.openSchedule(0);
        expect(component.isScheduleOpen(0)).toBe(false);

        component.openSchedule(0);
        expect(component.isScheduleOpen(0)).toBe(true);
    });

    it('saves schedule payloads and closes on success', async () => {
        const component = await createComponent();

        await component.saveSchedule();

        expect(save).toHaveBeenCalledTimes(1);
        const [item_id, schedules] = save.mock.calls[0];
        expect(item_id).toBe('item-1');
        expect(schedules[0]).toEqual(
            expect.objectContaining({
                play_period: expect.any(Number),
                play_takeover: false,
            }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
        expect(dialog_ref.disableClose).toBe(false);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('saves play_at schedules with the backend fallback cron', async () => {
        const component = await createComponent();
        const play_at = Date.UTC(2026, 2, 2, 10, 30);
        component.model.update((model) => ({
            schedules: [
                {
                    ...model.schedules[0],
                    schedule_type: 'play_at',
                    play_at,
                    play_period: 45,
                },
            ],
        }));

        await component.saveSchedule();

        expect(save).toHaveBeenCalledWith('item-1', [
            expect.objectContaining({
                play_at: Math.floor(play_at / 1000),
                play_cron: '0 0 * * *',
                play_period: 45,
            }),
        ]);
    });

    it('saves existing schedule entries by schedule id', async () => {
        modal_data.item = {
            id: 'schedule-1',
            item_id: 'media-1',
            schedules: [],
        } as any;
        const component = await createComponent();

        await component.saveSchedule();

        expect(save.mock.calls[0][0]).toBe('schedule-1');
    });

    it('keeps the dialog open and resets loading when saving fails', async () => {
        save.mockRejectedValue(new Error('nope'));
        const component = await createComponent();

        await component.saveSchedule().catch(() => undefined);

        expect(component.loading()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });
});
