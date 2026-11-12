import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MediaAnimation } from '@placeos/ts-client';

import { PlaylistDisplayComponent } from '../app/playlist-display.component';
import { MediaPlayerItem } from '../app/types';

describe('PlaylistDisplayComponent', () => {
    let spectator: Spectator<PlaylistDisplayComponent>;

    const create_component = createComponentFactory({
        component: PlaylistDisplayComponent,
        shallow: true,
    });

    const create_item = (
        id: string,
        overrides: Partial<MediaPlayerItem> = {},
    ): MediaPlayerItem => ({
        id,
        name: id,
        playlist: 'playlist-1',
        playlist_name: 'Playlist 1',
        animation: MediaAnimation.Cut,
        type: 'image',
        start_time: 0,
        duration: 15000,
        valid_from: 0,
        valid_until: 0,
        getURL: async () => `blob:${id}`,
        ...overrides,
    });

    beforeEach(() => {
        spectator = create_component();
    });

    it('should return media cache status labels', () => {
        expect(
            spectator.component.cacheStatus(
                create_item('loading-media', { isLoading: () => true }),
            ),
        ).toBe('Caching');
        expect(
            spectator.component.cacheStatus(
                create_item('cached-media', { isCached: () => true }),
            ),
        ).toBe('Cached');
        expect(
            spectator.component.cacheStatus(create_item('remote-media')),
        ).toBe('Not cached');
    });

    it('should mark invalid playlist items as aria-disabled without blocking hover', () => {
        spectator.setInput('playlist', [
            create_item('valid-media'),
            create_item('invalid-media', {
                valid_from: Math.floor(Date.now() / 1000) + 3600,
            }),
        ]);
        spectator.setInput('index', 0);
        spectator.detectChanges();

        const buttons = spectator.queryAll('button') as HTMLButtonElement[];

        expect(buttons).toHaveLength(2);
        expect(buttons[0].disabled).toBe(false);
        expect(buttons[1].disabled).toBe(false);
        expect(buttons[1].getAttribute('aria-disabled')).toBe('true');
    });

    it('should only emit when a valid item other than the active one is clicked', () => {
        const emit_spy = vi.spyOn(spectator.component.selected, 'emit');
        spectator.setInput('playlist', [
            create_item('active-media'),
            create_item('invalid-media', {
                valid_from: Math.floor(Date.now() / 1000) + 3600,
            }),
            create_item('valid-media'),
        ]);
        spectator.setInput('index', 0);
        spectator.detectChanges();

        for (const button of spectator.queryAll('button')) {
            (button as HTMLButtonElement).click();
        }

        expect(emit_spy).toHaveBeenCalledExactlyOnceWith(2);
    });

    it('should show a cache icon for cached playlist items', () => {
        spectator.setInput('playlist', [
            create_item('cached-media', { isCached: () => true }),
            create_item('remote-media', { isCached: () => false }),
        ]);
        spectator.setInput('index', 0);
        spectator.detectChanges();

        expect(
            spectator.queryAll('[data-testid="cached-media-icon"]'),
        ).toHaveLength(1);
    });
});
