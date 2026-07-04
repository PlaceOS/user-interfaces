import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { SignagePlaylistModalComponent } from '../../app/signage/signage-playlist-modal.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

describe('SignagePlaylistModalComponent', () => {
    let spectator: Spectator<SignagePlaylistModalComponent>;
    let data: any;
    let save_playlist: jest.Mock;

    const createComponent = createComponentFactory({
        component: SignagePlaylistModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(MatDialogRef, { close: jest.fn() }),
        ],
    });

    function build() {
        save_playlist = jest.fn(async () => undefined);
        spectator = createComponent({
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                MockProvider(SignageStateService, {
                    media: signal([]) as any,
                    savePlaylist: save_playlist,
                }),
            ],
        });
    }

    beforeEach(() => {
        jest.clearAllMocks();
        data = { id: 'pl-1', name: 'Promos', play_cron: '', play_at: 0 };
    });

    it('should derive no schedule from empty cron and time', () => {
        build();
        spectator.component.ngOnInit();

        expect(spectator.component.schedule()).toBe('');
    });

    it('should derive an exact schedule from a play time', () => {
        data.play_at = 1_700_000_000_000;
        build();
        spectator.component.ngOnInit();

        expect(spectator.component.schedule()).toBe('exact');
    });

    it('should derive a recurring schedule from a cron expression', () => {
        data.play_cron = '0 9 * * *';
        build();
        spectator.component.ngOnInit();

        expect(spectator.component.schedule()).toBe('recurring');
    });

    it('should not save an invalid playlist', async () => {
        data.name = '';
        build();
        spectator.component.ngOnInit();

        await spectator.component.savePlaylist();

        expect(save_playlist).not.toHaveBeenCalled();
    });

    it('should strip scheduling fields when saving without a schedule', async () => {
        build();
        spectator.component.ngOnInit();

        await spectator.component.savePlaylist();

        expect(save_playlist).toHaveBeenCalledTimes(1);
        const payload = save_playlist.mock.calls[0][0];
        expect(payload.play_at).toBe(0);
        expect(payload.play_cron).toBe('');
        expect(payload).not.toHaveProperty('play_from');
        expect(payload).not.toHaveProperty('play_until');
        expect(payload).not.toHaveProperty('play_duration');
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });

    it('should keep the cron and clear play time for recurring schedules', async () => {
        data.play_cron = '0 9 * * *';
        build();
        spectator.component.ngOnInit();

        await spectator.component.savePlaylist();

        const payload = save_playlist.mock.calls[0][0];
        expect(payload.play_at).toBe(0);
        expect(payload.play_cron).toBe('0 9 * * *');
    });
});
