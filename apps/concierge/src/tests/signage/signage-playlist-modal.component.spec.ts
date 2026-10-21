import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { SignagePlaylistModalComponent } from '../../app/signage/signage-playlist-modal.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

describe('SignagePlaylistModalComponent', () => {
    let spectator: Spectator<SignagePlaylistModalComponent>;
    let data: any;
    let save_playlist: any;

    const createComponent = createComponentFactory({
        component: SignagePlaylistModalComponent,
        detectChanges: false,
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(MatDialogRef, { close: vi.fn() }),
        ],
    });

    function build() {
        save_playlist = vi.fn(async () => undefined);
        spectator = createComponent({
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                MockProvider(SignageStateService, {
                    media: signal([]),
                    savePlaylist: save_playlist,
                }),
            ],
        });
    }

    beforeEach(() => {
        vi.clearAllMocks();
        data = { id: 'pl-1', name: 'Promos' };
    });

    it('should not save an invalid playlist', async () => {
        data.name = '';
        build();
        spectator.component.ngOnInit();

        await spectator.component.savePlaylist();

        expect(save_playlist).not.toHaveBeenCalled();
    });

    it('should close with the saved playlist', async () => {
        build();
        save_playlist.mockResolvedValue({ id: 'pl-1', name: 'Promos' });
        spectator.component.ngOnInit();

        await spectator.component.savePlaylist();

        expect(save_playlist).toHaveBeenCalledTimes(1);
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith({
            id: 'pl-1',
            name: 'Promos',
        });
    });
});
