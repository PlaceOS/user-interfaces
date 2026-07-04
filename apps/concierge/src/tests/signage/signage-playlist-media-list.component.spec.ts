import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MediaAnimation } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import * as common_mod from '@placeos/common';
import { SignagePlaylistMediaListComponent } from '../../app/signage/signage-playlist-media-list.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        currentUser: jest.fn(() => ({ groups: [] })),
        notifyInfo: jest.fn(),
    };
});

describe('SignagePlaylistMediaListComponent', () => {
    let spectator: Spectator<SignagePlaylistMediaListComponent>;
    let state: any;
    let router: any;
    let settings_map: Record<string, any>;

    const createComponent = createComponentFactory({
        component: SignagePlaylistMediaListComponent,
        detectChanges: false,
        providers: [
            MockProvider(SignageStateService, {
                playlists: signal([{ id: 'p1', name: 'News' }]) as any,
                media: signal([]) as any,
                has_changed: signal(0) as any,
                editPlaylist: jest.fn(),
                removePlaylist: jest.fn(),
                updatePlaylistMedia: jest.fn(async () => undefined),
                previewMedia: jest.fn(),
                editMedia: jest.fn(),
                approvePlaylist: jest.fn(async () => undefined),
            }),
            MockProvider(Clipboard, { copy: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn((key: string) => settings_map[key]),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        settings_map = { 'app.admin_group': 'signage-admin' };
        router = { navigate: jest.fn() };
        spectator = createComponent({
            providers: [MockProvider(Router, router)],
        });
        state = spectator.inject(SignageStateService) as any;
    });

    it('should map animation enum values to labels', () => {
        expect(spectator.component.animation_name(MediaAnimation.Cut)).toBe(
            'Cut',
        );
        expect(
            spectator.component.animation_name(MediaAnimation.CrossFade),
        ).toBe('Cross Fade');
        expect(spectator.component.animation_name(99 as any)).toBe('Default');
    });

    it('should treat members of the admin group as admins', () => {
        (common_mod.currentUser as jest.Mock).mockReturnValue({
            groups: ['signage-admin'],
        });

        expect(spectator.component.is_admin).toBe(true);
    });

    it('should treat placeos_admin members as admins', () => {
        (common_mod.currentUser as jest.Mock).mockReturnValue({
            groups: ['placeos_admin'],
        });

        expect(spectator.component.is_admin).toBe(true);
    });

    it('should deny admin for users without the group', () => {
        (common_mod.currentUser as jest.Mock).mockReturnValue({
            groups: ['staff'],
        });

        expect(spectator.component.is_admin).toBe(false);
    });

    it('should resolve the selected playlist from the input id', () => {
        spectator.setInput('playlist', 'p1');

        expect(spectator.component.selected_playlist()?.id).toBe('p1');
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should redirect when the selected playlist cannot be found', () => {
        spectator.setInput('playlist', 'ghost');

        expect(spectator.component.selected_playlist()).toBeUndefined();
        expect(router.navigate).toHaveBeenCalledWith(['/signage/media', {}]);
    });

    it('should copy the playlist id to the clipboard', async () => {
        await spectator.component.copyID('p1');

        expect(spectator.inject(Clipboard).copy).toHaveBeenCalledWith('p1');
        expect(common_mod.notifyInfo).toHaveBeenCalled();
    });

    it('should skip reordering when the drop does not move the item', async () => {
        spectator.setInput('playlist', 'p1');

        await spectator.component.drop({
            previousIndex: 1,
            currentIndex: 1,
        } as any);

        expect(state.updatePlaylistMedia).not.toHaveBeenCalled();
    });

    it('should remove the playlist and return to the media list', () => {
        spectator.setInput('playlist', 'p1');

        spectator.component.removePlaylist();

        expect(state.removePlaylist).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'p1' }),
        );
        expect(router.navigate).toHaveBeenCalledWith(['/signage/media', {}]);
    });
});
