import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import * as common_mod from '@placeos/common';
import * as ts_client_mod from '@placeos/ts-client';
import { SignageMediaListComponent } from '../../app/signage/signage-media-list.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return { ...actual, notifyError: jest.fn(), notifySuccess: jest.fn() };
});

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        listSignagePlaylistMedia: jest.fn(async () => ({
            items: ['existing'],
        })),
    };
});

describe('SignageMediaListComponent', () => {
    let spectator: Spectator<SignageMediaListComponent>;
    let state: any;

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
                addMediaFromLink: jest.fn(async () => ({}) as any),
                updatePlaylistMedia: jest.fn(async () => undefined),
                previewFileFromInput: jest.fn(),
            }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        (ts_client_mod.listSignagePlaylistMedia as jest.Mock).mockResolvedValue(
            { items: ['existing'] },
        );
        spectator = createComponent();
        state = spectator.inject(SignageStateService) as any;
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

        expect(common_mod.notifyError).toHaveBeenCalled();
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
