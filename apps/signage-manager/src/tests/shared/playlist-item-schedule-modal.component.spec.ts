import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import {
    PlaylistItemScheduleModalComponent,
    PlaylistItemScheduleModalData,
} from '../../app/shared/playlist-item-schedule-modal.component';

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
