import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';
import { PlaylistEditModalComponent } from '../../app/shared/playlist-edit-modal.component';
import {
    createPlaylistScheduleForm,
    PlaylistScheduleFormComponent,
} from '../../app/shared/playlist-schedule-form.component';

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
            imports: [
                PlaylistEditModalComponent,
                PlaylistScheduleFormComponent,
            ],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        playlist: {
                            id: 'playlist-1',
                            name: 'Playlist 1',
                            schedules: [
                                {
                                    play_cron: '0 9 1-7 * 1',
                                    play_period: 120,
                                    play_takeover: false,
                                },
                            ],
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
        });
        component.schedule_forms.at(0).patchValue({
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
                schedules: [
                    {
                        play_at: 0,
                        play_cron: '0 9 1-7,15-21 * 1,3',
                        play_period: 120,
                        play_takeover: false,
                    },
                ],
            }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'playlist-1' });
        expect(notifySuccess).toHaveBeenCalledWith('Playlist saved');
    });

    it('saves multiple schedules', async () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;

        component.form.patchValue({ name: 'Playlist 1' });
        component.schedule_forms.at(0).patchValue({
            recurrence_type: 'daily',
            play_start: 9 * 60,
            play_period: 120,
        });
        component.addSchedule();
        const play_at = Date.UTC(2026, 2, 2, 10, 30);
        component.schedule_forms.at(1).patchValue({
            schedule_type: 'play_at',
            play_at,
            play_period: 45,
            play_takeover: true,
        });

        await component.savePlaylist();

        expect(onEdit).toHaveBeenCalledWith(
            'playlist-1',
            expect.objectContaining({
                schedules: [
                    {
                        play_at: 0,
                        play_cron: '0 9 * * *',
                        play_period: 120,
                        play_takeover: false,
                    },
                    {
                        play_at: Math.floor(play_at / 1000),
                        play_cron: '',
                        play_period: 45,
                        play_takeover: true,
                    },
                ],
            }),
        );
    });

    it('keeps at least one schedule', () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;
        const event = { preventDefault: jest.fn(), stopPropagation: jest.fn() };

        component.removeSchedule(event as any, 0);

        expect(component.schedule_forms.length).toBe(1);
        expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('allows only one schedule open at a time and can collapse all', () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;

        component.addSchedule();
        expect(component.isScheduleOpen(1)).toBe(true);
        expect(component.isScheduleOpen(0)).toBe(false);

        component.openSchedule(0);

        expect(component.isScheduleOpen(0)).toBe(true);
        expect(component.isScheduleOpen(1)).toBe(false);

        component.openSchedule(0);

        expect(component.isScheduleOpen(0)).toBe(false);
        expect(component.isScheduleOpen(1)).toBe(false);
    });

    it('shows a summary for one-off schedules', () => {
        const fixture = TestBed.createComponent(PlaylistScheduleFormComponent);
        const schedule = createPlaylistScheduleForm();
        fixture.componentRef.setInput('schedule', schedule);
        fixture.componentRef.setInput('index', 0);
        schedule.patchValue({
            schedule_type: 'play_at',
            play_at: Date.UTC(2026, 2, 2, 10, 30),
            play_period: 45,
        });

        expect(fixture.componentInstance.scheduleSummary()).toContain(
            'Plays once on',
        );
        expect(fixture.componentInstance.scheduleSummary()).toContain(
            'for 45 minutes',
        );
    });

    it('formats schedule summary minutes as readable durations', () => {
        const fixture = TestBed.createComponent(PlaylistScheduleFormComponent);
        const schedule = createPlaylistScheduleForm();
        fixture.componentRef.setInput('schedule', schedule);
        fixture.componentRef.setInput('index', 0);
        schedule.patchValue({
            recurrence_type: 'daily',
            play_start: 9 * 60,
            play_period: 90,
        });

        expect(fixture.componentInstance.recurringScheduleSummary()).toContain(
            'for 1 hour 30 minutes',
        );

        schedule.patchValue({ play_period: 24 * 60 });

        expect(fixture.componentInstance.recurringScheduleSummary()).toContain(
            'for 1 day',
        );
    });
});
