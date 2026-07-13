import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    SettingsService,
    StaffUser,
    setCurrentUser,
    setNotifyOutlet,
} from '@placeos/common';
import { MediaAnimation } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { SignagePlaylistMediaListComponent } from '../../app/signage/signage-playlist-media-list.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

describe('SignagePlaylistMediaListComponent', () => {
    let spectator: Spectator<SignagePlaylistMediaListComponent>;
    let state: any;
    let router: any;
    let settings_map: Record<string, any>;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: SignagePlaylistMediaListComponent,
        detectChanges: false,
        providers: [
            MockProvider(SignageStateService, {
                playlists: signal([{ id: 'p1', name: 'News' }]) as any,
                media: signal([]) as any,
                has_changed: signal(0) as any,
                editPlaylist: vi.fn(),
                removePlaylist: vi.fn(),
                updatePlaylistMedia: vi.fn(async () => undefined),
                previewMedia: vi.fn(),
                editMedia: vi.fn(),
                approvePlaylist: vi.fn(async () => undefined),
            }),
            MockProvider(Clipboard, { copy: vi.fn() }),
            MockProvider(SettingsService, {
                get: vi.fn((key: string) => settings_map[key]),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        setCurrentUser(new StaffUser({ groups: [] }) as any);
        settings_map = { 'app.admin_group': 'signage-admin' };
        router = { navigate: vi.fn() };
        spectator = createComponent({
            providers: [MockProvider(Router, router)],
        });
        state = spectator.inject(SignageStateService) as any;
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
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
        setCurrentUser(new StaffUser({ groups: ['signage-admin'] }) as any);

        expect(spectator.component.is_admin).toBe(true);
    });

    it('should treat placeos_admin members as admins', () => {
        setCurrentUser(new StaffUser({ groups: ['placeos_admin'] }) as any);

        expect(spectator.component.is_admin).toBe(true);
    });

    it('should deny admin for users without the group', () => {
        setCurrentUser(new StaffUser({ groups: ['staff'] }) as any);

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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['info'] }),
        );
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
