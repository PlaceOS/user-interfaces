import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotkeysService, setNotifyOutlet } from '@placeos/common';
import { PlaylistEditModalComponent } from '../../app/shared/playlist-edit-modal.component';
import {
    createPlaylistScheduleModel,
    PlaylistScheduleFormComponent,
} from '../../app/shared/playlist-schedule-form.component';

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('PlaylistEditModalComponent', () => {
    const dialog_ref = {
        close: vi.fn(),
        disableClose: false,
    };
    const onEdit = vi.fn();
    const hotkey_listen = vi.fn();
    let hotkey_callback: () => void;

    beforeEach(async () => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
        onEdit.mockResolvedValue({ id: 'playlist-1' });
        hotkey_listen.mockImplementation(
            (_combo: string[], callback: () => void) => {
                hotkey_callback = callback;
                return { unsubscribe: vi.fn() };
            },
        );
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
                {
                    provide: HotkeysService,
                    useValue: { listen: hotkey_listen },
                },
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

        component.model.update((model) => ({
            ...model,
            name: 'Playlist 1',
            schedules: [
                {
                    ...model.schedules[0],
                    recurrence_type: 'monthly_weekday',
                    play_start: 9 * 60,
                    recurrence_week_of_month: [1, 3],
                    recurrence_weekdays: [1, 3],
                    play_period: 120,
                },
            ],
        }));

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
        expect(notify_open).toHaveBeenCalledWith(
            'Playlist saved',
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('saves when the S hotkey is pressed', () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;
        const save = vi.spyOn(component, 'savePlaylist').mockResolvedValue();

        hotkey_callback();

        expect(hotkey_listen).toHaveBeenCalledWith(
            ['KeyS'],
            expect.any(Function),
        );
        expect(save).toHaveBeenCalled();
    });

    it('starts blank validity dates as empty values', () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;

        expect(component.model().valid_from).toBeNull();
        expect(component.model().valid_until).toBeNull();
    });

    it('does not save playlist-level schedules for distribution playlists', async () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;

        component.model.update((model) => ({
            ...model,
            distribution: true,
            name: 'Playlist 1',
        }));

        await component.savePlaylist();

        expect(onEdit).toHaveBeenCalledWith(
            'playlist-1',
            expect.not.objectContaining({ schedules: expect.anything() }),
        );
    });

    it('saves multiple schedules', async () => {
        const fixture = TestBed.createComponent(PlaylistEditModalComponent);
        const component = fixture.componentInstance;

        component.model.update((model) => ({
            ...model,
            name: 'Playlist 1',
            schedules: [
                {
                    ...model.schedules[0],
                    recurrence_type: 'daily',
                    play_start: 9 * 60,
                    play_period: 120,
                },
            ],
        }));
        component.addSchedule();
        const play_at = Date.UTC(2026, 2, 2, 10, 30);
        component.model.update((model) => ({
            ...model,
            schedules: model.schedules.map((schedule, index) =>
                index === 1
                    ? {
                          ...schedule,
                          schedule_type: 'play_at',
                          play_at,
                          play_period: 45,
                          play_takeover: true,
                      }
                    : schedule,
            ),
        }));

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
                        play_cron: '0 0 * * *',
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
        const event = { preventDefault: vi.fn(), stopPropagation: vi.fn() };

        component.removeSchedule(event as any, 0);

        expect(component.model().schedules.length).toBe(1);
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
        const model = signal(createPlaylistScheduleModel());
        const schedule = TestBed.runInInjectionContext(() => form(model));
        fixture.componentRef.setInput('schedule', schedule);
        fixture.componentRef.setInput('index', 0);
        model.update((schedule) => ({
            ...schedule,
            schedule_type: 'play_at',
            play_at: Date.UTC(2026, 2, 2, 10, 30),
            play_period: 45,
        }));

        expect(fixture.componentInstance.scheduleSummary()).toContain(
            'Plays once on',
        );
        expect(fixture.componentInstance.scheduleSummary()).toContain(
            'for 45 minutes',
        );
    });

    it('formats schedule summary minutes as readable durations', () => {
        const fixture = TestBed.createComponent(PlaylistScheduleFormComponent);
        const model = signal(createPlaylistScheduleModel());
        const schedule = TestBed.runInInjectionContext(() => form(model));
        fixture.componentRef.setInput('schedule', schedule);
        fixture.componentRef.setInput('index', 0);
        model.update((schedule) => ({
            ...schedule,
            recurrence_type: 'daily',
            play_start: 9 * 60,
            play_period: 90,
        }));

        expect(fixture.componentInstance.recurringScheduleSummary()).toContain(
            'for 1 hour 30 minutes',
        );

        model.update((schedule) => ({ ...schedule, play_period: 24 * 60 }));

        expect(fixture.componentInstance.recurringScheduleSummary()).toContain(
            'for 1 day',
        );
    });
});
