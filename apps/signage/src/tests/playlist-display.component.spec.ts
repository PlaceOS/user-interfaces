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

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should mark invalid media items as invalid', () => {
        const invalid_item = create_item('future-media', {
            valid_from: Math.floor(Date.now() / 1000) + 3600,
        });

        expect(spectator.component.isValidMedia(invalid_item)).toBe(false);
    });

    it('should mark cached media items as cached', () => {
        expect(
            spectator.component.isCachedMedia(
                create_item('cached-media', { isCached: () => true }),
            ),
        ).toBe(true);
        expect(spectator.component.isCachedMedia(create_item('media'))).toBe(
            false,
        );
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

    it('should emit the selected playlist index', () => {
        const emit_spy = vi.spyOn(spectator.component.selected, 'emit');
        spectator.setInput('playlist', [
            create_item('media-1'),
            create_item('media-2'),
            create_item('media-3'),
        ]);
        spectator.setInput('index', 0);

        spectator.component.setPlaylistItem(2);

        expect(emit_spy).toHaveBeenCalledWith(2);
    });

    it('should map media types to playlist display icons', () => {
        expect(
            spectator.component.mediaTypeIcon(
                create_item('image-media', { type: 'image' }),
            ),
        ).toBe('image');
        expect(
            spectator.component.mediaTypeIcon(
                create_item('video-media', { type: 'video' }),
            ),
        ).toBe('video_library');
        expect(
            spectator.component.mediaTypeIcon(
                create_item('webpage-media', { type: 'webpage' }),
            ),
        ).toBe('http');
        expect(
            spectator.component.mediaTypeIcon(
                create_item('plugin-media', { type: 'plugin' }),
            ),
        ).toBe('extension');
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

    it('should scroll overflowing playlist items without shrinking them', async () => {
        spectator.setInput('playlist', [
            create_item('active-media'),
            create_item('queued-media'),
        ]);
        spectator.setInput('index', 0);
        await spectator.fixture.whenStable();

        const list = spectator.query('[data-testid="playlist-media-list"]');
        const buttons = spectator.queryAll('button');

        expect(list?.classList).toContain('max-h-[50vh]');
        expect(list?.classList).toContain('overflow-auto');
        expect(buttons).toHaveLength(2);
        expect(buttons.every((button) => button.classList.contains('shrink-0')))
            .toBe(true);
    });

    it('should not emit when selecting invalid or active playlist items', () => {
        const emit_spy = vi.spyOn(spectator.component.selected, 'emit');
        spectator.setInput('playlist', [
            create_item('active-media'),
            create_item('invalid-media', {
                valid_from: Math.floor(Date.now() / 1000) + 3600,
            }),
        ]);
        spectator.setInput('index', 0);

        spectator.component.setPlaylistItem(0);
        spectator.component.setPlaylistItem(1);

        expect(emit_spy).not.toHaveBeenCalled();
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
