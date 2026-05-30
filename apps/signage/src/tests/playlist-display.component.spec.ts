import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
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

    it('should emit the selected playlist index', () => {
        const emit_spy = jest.spyOn(spectator.component.selected, 'emit');

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

    it('should disable invalid playlist items in the template', () => {
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
        expect(buttons[1].disabled).toBe(true);
    });
});
