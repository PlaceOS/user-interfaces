import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageMediaListComponent } from '../../app/signage/signage-media-list.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageMediaListComponent', () => {
    let spectator: Spectator<SignageMediaListComponent>;
    let state: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: SignageMediaListComponent,
        detectChanges: false,
        providers: [
            MockProvider(SignageStateService, {
                playlists: signal([
                    { id: 'p1', name: 'News' },
                    { id: 'p2', name: 'Ads' },
                ]) as any,
                media: signal([
                    { id: 'm1', name: 'Sunset' },
                    { id: 'm2', name: 'Logo' },
                ]) as any,
                addMediaFromLink: vi.fn(async () => ({}) as any),
                updatePlaylistMedia: vi.fn(async () => undefined),
                previewFileFromInput: vi.fn(),
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        (ts_client_mod.listSignagePlaylistMedia as any).mockResolvedValue(
            { items: ['existing'] },
        );
        spectator = createComponent();
        state = spectator.inject(SignageStateService) as any;
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
    });

    it('should filter the media list by search term', () => {
        spectator.component.search.set('logo');

        expect(spectator.component.media()).toEqual([
            { id: 'm2', name: 'Logo' },
        ]);
    });

    it('should filter the playlist list by search term', () => {
        spectator.component.playlist_search.set('ad');

        expect(spectator.component.playlists()).toEqual([
            { id: 'p2', name: 'Ads' },
        ]);
    });

    it('should build drop-target playlist ids from the playlist count', () => {
        spectator.setInput('playlist_count', 3);

        expect(spectator.component.playlist_ids()).toEqual([
            'playlist-0',
            'playlist-1',
            'playlist-2',
        ]);
    });

    it('should reject an invalid link before adding media', async () => {
        await spectator.component.addFromLink('not a url');

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(state.addMediaFromLink).not.toHaveBeenCalled();
    });

    it('should add media from a valid link and clear the input', async () => {
        spectator.component.link.set('https://example.com');

        await spectator.component.addFromLink('https://example.com');

        expect(state.addMediaFromLink).toHaveBeenCalledWith(
            'https://example.com',
        );
        expect(spectator.component.link()).toBe('');
    });

    it('should append media to an existing playlist', async () => {
        await spectator.component.addToPlaylist('m1', { id: 'p1' });

        expect(ts_client_mod.listSignagePlaylistMedia).toHaveBeenCalledWith(
            'p1',
        );
        expect(state.updatePlaylistMedia).toHaveBeenCalledWith('p1', [
            'existing',
            'm1',
        ]);
    });
});
