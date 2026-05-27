import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';
import { PlaylistEditModalComponent } from '../../app/shared/playlist-edit-modal.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
    notifySuccess: jest.fn(),
}));

describe('PlaylistEditModalComponent', () => {
    const dialog_ref = {
        close: jest.fn(),
        disableClose: false,
    };
    const onEdit = jest.fn();

    beforeEach(async () => {
        jest.clearAllMocks();
        dialog_ref.disableClose = false;
        onEdit.mockResolvedValue({ id: 'playlist-1' });
        await TestBed.configureTestingModule({
            imports: [PlaylistEditModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        playlist: {
                            id: 'playlist-1',
                            name: 'Playlist 1',
                            play_cron: '0 9 1-7 * 1',
                        },
                        onEdit,
                    },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(PlaylistEditModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
    });

    it('saves monthly weekday schedules with multiple month instances', async () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;

        component.form.patchValue({
            name: 'Playlist 1',
            schedule_type: 'play_cron',
            recurrence_type: 'monthly_weekday',
            play_start: 9 * 60,
            recurrence_week_of_month: [1, 3],
            recurrence_weekdays: [1, 3],
            play_period: 120,
        });

        await component.savePlaylist();

        expect(onEdit).toHaveBeenCalledWith(
            'playlist-1',
            expect.objectContaining({
                play_at: 0,
                play_cron: '0 9 1-7,15-21 * 1,3',
                play_period: 120,
            }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'playlist-1' });
        expect(notifySuccess).toHaveBeenCalledWith('Playlist saved');
    });

    it('formats schedule summary minutes as readable durations', () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;

        component.form.patchValue({
            recurrence_type: 'daily',
            play_start: 9 * 60,
            play_period: 90,
        });

        expect(component.recurring_schedule_summary()).toContain(
            'for 1 hour 30 minutes',
        );

        component.form.patchValue({ play_period: 24 * 60 });

        expect(component.recurring_schedule_summary()).toContain('for 1 day');
    });
});
