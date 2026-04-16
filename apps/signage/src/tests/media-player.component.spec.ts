import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MediaAnimation } from '@placeos/ts-client';

import { MediaPlayerComponent } from '../app/media-player.component';
import { MediaPlayerItem } from '../app/types';

describe('MediaPlayerComponent', () => {
    let spectator: Spectator<MediaPlayerComponent>;

    const create_component = createComponentFactory({
        component: MediaPlayerComponent,
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
        play_hours: '00:00-00:00',
        getURL: async () => `blob:${id}`,
        ...overrides,
    });

    beforeEach(() => {
        Object.defineProperty(window, 'requestAnimationFrame', {
            configurable: true,
            value: (fn: FrameRequestCallback) => {
                fn(0);
                return 1;
            },
        });
        Object.defineProperty(HTMLMediaElement.prototype, 'play', {
            configurable: true,
            value: jest.fn().mockResolvedValue(undefined),
        });
        Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
            configurable: true,
            value: jest.fn(),
        });
        Object.defineProperty(URL, 'revokeObjectURL', {
            configurable: true,
            value: jest.fn(),
        });
        spectator = create_component();
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    function load_playlist(items: MediaPlayerItem[]) {
        spectator.setInput('playlist', items);
        spectator.detectChanges();
    }

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should toggle mute state and update the video element', () => {
        const emit_spy = jest.spyOn(spectator.component.mutedChange, 'emit');

        spectator.component.toggleMuted();

        expect(spectator.component.muted()).toBe(true);
        expect(emit_spy).toHaveBeenCalledWith(true);
        expect(
            spectator.component['_video_element']().nativeElement.muted,
        ).toBe(true);
    });

    it('should toggle between paused and playing states', () => {
        load_playlist([create_item('media-1')]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');

        spectator.component.togglePause();
        expect(spectator.component.state()).toBe('PAUSED');

        spectator.component.togglePause();
        expect(spectator.component.state()).toBe('PLAYING');
    });

    it('should pause playback when loop mode is NONE and the playlist ends', () => {
        load_playlist([create_item('media-1')]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);
        spectator.component.loop.set('NONE');
        spectator.component.state.set('PLAYING');

        spectator.component.nextItem();

        expect(spectator.component.index()).toBe(-1);
        expect(spectator.component.state()).toBe('PAUSED');
    });

    it('should not transition when looping the current item to itself', () => {
        load_playlist([create_item('media-1'), create_item('media-2')]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);
        spectator.component.loop.set('ONE');
        const transition_spy = jest.spyOn(
            spectator.component as any,
            '_transition',
        );

        spectator.component.nextItem();

        expect(transition_spy).not.toHaveBeenCalled();
        expect(spectator.component.index()).toBe(0);
    });

    it('should cycle through loop modes', () => {
        spectator.component.loop.set('ALL');

        spectator.component.toggleLoop();
        expect(spectator.component.loop()).toBe('ONE');

        spectator.component.toggleLoop();
        expect(spectator.component.loop()).toBe('NONE');

        spectator.component.toggleLoop();
        expect(spectator.component.loop()).toBe('ALL');
    });

    it('should shuffle around the current item and restore original order when disabled', () => {
        const items = [
            create_item('media-1'),
            create_item('media-2'),
            create_item('media-3'),
        ];
        load_playlist(items);
        spectator.component.index.set(1);

        spectator.component.toggleShuffle();
        expect(spectator.component.shuffle()).toBe(true);
        expect(spectator.component.active_item?.id).toBe('media-2');

        spectator.component.toggleShuffle();
        expect(spectator.component.shuffle()).toBe(false);
        expect(spectator.component.playlist_items.map((_) => _.id)).toEqual([
            'media-1',
            'media-2',
            'media-3',
        ]);
    });

    it('should emit playlist metrics when advancing from the last valid playlist item', async () => {
        const event_spy = jest.spyOn(spectator.component.event, 'emit');
        const items = [
            create_item('media-1', { playlist: 'playlist-1' }),
            create_item('media-2', { playlist: 'playlist-2' }),
        ];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.progress.set(75);

        await spectator.component.setPlaylistItem(1);

        expect(event_spy).toHaveBeenCalledWith({
            type: 'playlist_count',
            ref_id: 'playlist-1',
        });
        expect(event_spy).toHaveBeenCalledWith({
            type: 'playlist_through',
            ref_id: 'playlist-1',
        });
    });

    it('should skip invalid playlist items when selected', async () => {
        load_playlist([
            create_item('valid-media'),
            create_item('invalid-media', {
                valid_from: Math.floor(Date.now() / 1000) + 3600,
            }),
        ]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);

        await spectator.component.setPlaylistItem(1);

        expect(spectator.component.index()).toBe(0);
    });

    it('should not transition when only one valid item is active in the playlist', () => {
        load_playlist([
            create_item('valid-media'),
            create_item('invalid-media', {
                valid_from: Math.floor(Date.now() / 1000) + 3600,
            }),
        ]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);
        const transition_spy = jest.spyOn(
            spectator.component as any,
            '_transition',
        );

        spectator.component.nextItem();

        expect(transition_spy).not.toHaveBeenCalled();
        expect(spectator.component.index()).toBe(0);
    });

    it('should pause cleanly if replaying a looping video is blocked', async () => {
        load_playlist([create_item('video-1', { type: 'video' })]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);
        spectator.component.loop.set('ONE');
        const next_item_spy = jest.spyOn(spectator.component, 'nextItem');
        Object.defineProperty(HTMLMediaElement.prototype, 'play', {
            configurable: true,
            value: jest
                .fn()
                .mockRejectedValue(new Error('Playback blocked by browser')),
        });

        spectator.component.nextItem();
        await Promise.resolve();

        expect(next_item_spy).toHaveBeenCalledTimes(1);
    });

    it('should configure plugins when they report ready status', () => {
        jest.useFakeTimers();
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            duration: 20000,
            plugin: { id: 'plugin-1', name: 'Weather' } as any,
            plugin_params: { theme: 'dark' },
        });
        load_playlist([plugin_item]);
        spectator.component.index.set(0);
        spectator.component.active_plugin.set(plugin_item.plugin);

        spectator.component.onPluginStatus('ready');
        jest.advanceTimersByTime(101);

        expect(spectator.component.plugin_config()).toEqual({
            instance_id: 'plugin-1',
            config: { theme: 'dark' },
            timing: { scheduled_duration_ms: 20000 },
        });
        expect(spectator.component.plugin_play()).toBeGreaterThan(0);
        jest.useRealTimers();
    });

    it('should reset plugin playback when requested by a plugin interaction', () => {
        jest.useFakeTimers();
        jest.setSystemTime(10_000);
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            duration: 20_000,
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                playback_type: 'interactive',
            } as any,
        });
        const next_item_spy = jest.spyOn(spectator.component, 'nextItem');

        load_playlist([plugin_item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component['_item_start'] = 5_000;
        spectator.component['_playback_duration'] = 20_000;
        spectator.component.progress.set(25);
        spectator.component.duration.set(5);

        spectator.component.onPluginInteraction({
            action: 'reset_playback',
            new_duration: 30_000,
        } as any);

        expect(spectator.component['_playback_duration']).toBe(30_000);
        expect(spectator.component['_item_start']).toBe(10_000);
        expect(spectator.component.progress()).toBe(0);
        expect(spectator.component.duration()).toBe(0);

        jest.setSystemTime(39_999);
        spectator.component['_updateItem']();
        expect(next_item_spy).not.toHaveBeenCalled();

        jest.setSystemTime(40_001);
        spectator.component['_updateItem']();
        expect(next_item_spy).toHaveBeenCalled();
    });

    it('should ignore reset interactions for static plugins', () => {
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            duration: 20_000,
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                playback_type: 'static',
            } as any,
        });

        load_playlist([plugin_item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component['_item_start'] = 5_000;
        spectator.component['_playback_duration'] = 20_000;

        spectator.component.onPluginInteraction({
            action: 'reset_playback',
            new_duration: 30_000,
        } as any);

        expect(spectator.component['_playback_duration']).toBe(20_000);
        expect(spectator.component['_item_start']).toBe(5_000);
    });

    it('should ignore reset interactions for playsthrough plugins', () => {
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            duration: 20_000,
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                playback_type: 'playsthrough',
            } as any,
        });

        load_playlist([plugin_item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component['_item_start'] = 5_000;
        spectator.component['_playback_duration'] = 20_000;

        spectator.component.onPluginInteraction({
            action: 'reset_playback',
            new_duration: 30_000,
        } as any);

        expect(spectator.component['_playback_duration']).toBe(20_000);
        expect(spectator.component['_item_start']).toBe(5_000);
    });

    it('should skip to the next item on a fatal plugin error', () => {
        const next_item_spy = jest.spyOn(spectator.component, 'nextItem');

        spectator.component.onPluginError({
            fatal: true,
            message: 'Boom',
        } as any);

        expect(next_item_spy).toHaveBeenCalled();
    });
});
