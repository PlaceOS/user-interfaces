import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SignageItemPlaylistsComponent } from '../../app/signage/signage-item-playlists.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

describe('SignageItemPlaylistsComponent', () => {
    let spectator: Spectator<SignageItemPlaylistsComponent>;
    let state: any;

    const createComponent = createComponentFactory({
        component: SignageItemPlaylistsComponent,
        detectChanges: false,
        providers: [
            MockProvider(SignageStateService, {
                playlists: signal([
                    { id: 'p1', name: 'News', updated_at: 1 },
                    { id: 'p2', name: 'Ads', updated_at: 1 },
                ]) as any,
                has_changed: signal(0) as any,
                getPlaylistMedia: vi.fn(async () => ['m1', 'm2', 'm3', 'm4']),
            }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of({ get: () => null }) as any,
            }),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
        state = spectator.inject(SignageStateService) as any;
        spectator.component.playlist_count.set({});
    });

    it('should resolve active playlists in item order and drop unknown ids', () => {
        spectator.setInput('item', { playlists: ['p2', 'missing', 'p1'] });

        expect(spectator.component.active_playlists().map((_) => _.id)).toEqual([
            'p2',
            'p1',
        ]);
    });

    it('should return an empty list when the item has no playlists', () => {
        spectator.setInput('item', {});

        expect(spectator.component.active_playlists()).toEqual([]);
    });

    it('should load media counts for active playlists via an effect', async () => {
        spectator.setInput('item', { playlists: ['p1'] });
        TestBed.flushEffects();
        await Promise.resolve();
        await Promise.resolve();

        expect(state.getPlaylistMedia).toHaveBeenCalledWith('p1');
        expect(spectator.component.playlist_count()['p1']?.count).toBe(4);
    });

    it('should map stored media ids into thumbnail urls', () => {
        spectator.component.playlist_count.set({
            p1: { count: 2, media_ids: ['m1', 'm2'], last_updated: 1 },
        });

        const thumbnails = spectator.component.playlist_thumbnail_media();
        expect(thumbnails['p1']).toHaveLength(2);
        expect(typeof thumbnails['p1'][0]).toBe('string');
    });

    it('should expose the stored count for a playlist id', () => {
        spectator.component.playlist_count.set({
            p1: { count: 7, media_ids: [], last_updated: 1 },
        });

        expect(spectator.component.playlistCount('p1')).toBe(7);
        expect(spectator.component.playlistCount('unknown')).toBe(0);
    });
});
