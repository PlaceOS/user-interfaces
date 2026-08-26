import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MediaAnimation } from '@placeos/ts-client';

import { setMockTime } from '../app/media-helpers';
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
        getURL: async () => `blob:${id}`,
        ...overrides,
    });

    beforeEach(() => {
        Object.defineProperty(window, 'requestAnimationFrame', {
            configurable: true,
            writable: true,
            value: (fn: FrameRequestCallback) => {
                fn(0);
                return 1;
            },
        });
        Object.defineProperty(HTMLMediaElement.prototype, 'play', {
            configurable: true,
            value: vi.fn().mockResolvedValue(undefined),
        });
        Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
            configurable: true,
            value: vi.fn(),
        });
        Object.defineProperty(URL, 'revokeObjectURL', {
            configurable: true,
            value: vi.fn(),
        });
        spectator = create_component();
    });

    afterEach(() => {
        setMockTime(0);
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    function load_playlist(items: MediaPlayerItem[]) {
        spectator.setInput('playlist', items);
        spectator.detectChanges();
    }

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should toggle mute state and update the video element', () => {
        const emit_spy = vi.spyOn(spectator.component.mutedChange, 'emit');

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

    it('should render debug controls above media outputs', () => {
        spectator.setInput('controls', true);
        spectator.detectChanges();

        expect(spectator.queryAll('debug-overlay')).toHaveLength(3);
    });

    it('should allow the player background to be transparent', () => {
        const surface = spectator.query('div.absolute.inset-0');
        expect(surface?.classList).toContain('bg-black');

        spectator.setInput('controls', true);
        spectator.setInput('transparent', true);
        spectator.detectChanges();

        expect(surface?.classList).not.toContain('bg-black');
        expect(surface?.getAttribute('style')).not.toContain('background');
        expect(spectator.element.classList).toContain('transparent');
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
        const transition_spy = vi.spyOn(
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

    it('should not reset playback when the same playlist is emitted again', () => {
        const items = [create_item('media-1'), create_item('media-2')];
        load_playlist(items);
        spectator.component.index.set(1);
        spectator.component.progress.set(60);
        spectator.component.hold_over_item.set(false);

        load_playlist(items.map((item) => ({ ...item })));

        expect(spectator.component.index()).toBe(1);
        expect(spectator.component.progress()).toBe(60);
        expect(spectator.component.hold_over_item()).toBe(false);
        expect(spectator.component.playlist_items.map((_) => _.id)).toEqual([
            'media-1',
            'media-2',
        ]);
    });

    it('should preserve paused state when the playlist changes', () => {
        const items = [create_item('media-1'), create_item('media-2')];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.state.set('PAUSED');

        load_playlist([...items, create_item('media-3')]);

        expect(spectator.component.state()).toBe('PAUSED');
    });

    it('should clear the active output when the playlist has no playable items', () => {
        const item = create_item('media-1');
        const playing_spy = vi.spyOn(spectator.component.playing_id, 'emit');
        vi.spyOn(spectator.component as any, 'timeout').mockImplementation(
            () => undefined,
        );
        load_playlist([item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component['_output_items'] = [item, null];
        spectator.component['_image_element'](0).nativeElement.classList.remove(
            'hidden',
        );

        load_playlist([]);

        expect(spectator.component.index()).toBe(-1);
        expect(playing_spy).toHaveBeenCalledWith('');
        expect(
            spectator.component['_image_element'](0).nativeElement.classList,
        ).toContain('hidden');
        expect(spectator.component.state()).toBe('PLAYING');
    });

    it('should resume playback when content returns after an empty playlist', () => {
        vi.spyOn(spectator.component as any, '_showMediaItem').mockReturnValue(
            true,
        );
        vi.spyOn(spectator.component as any, 'timeout').mockImplementation(
            () => undefined,
        );

        load_playlist([create_item('media-1')]);
        load_playlist([]);

        expect(spectator.component.state()).toBe('PLAYING');
        expect(spectator.component.index()).toBe(-1);

        load_playlist([create_item('media-2')]);

        expect(spectator.component.state()).toBe('PLAYING');
        expect(spectator.component.active_item?.id).toBe('media-2');
    });

    it('should reset playback when the same media id changes source', () => {
        const items = [create_item('media-1', { url: 'old-url' })];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.progress.set(60);
        spectator.component['_item_urls'] = {
            'media-1': 'blob:old-url' as any,
        };

        load_playlist([create_item('media-1', { url: 'new-url' })]);

        expect(spectator.component.progress()).toBe(0);
        expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:old-url');
    });

    it('should wrap negative playlist indices', async () => {
        load_playlist([
            create_item('media-1'),
            create_item('media-2'),
            create_item('media-3'),
        ]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);

        await spectator.component.previousItem();

        expect(spectator.component.index()).toBe(2);
    });

    it('should emit playlist metrics from the active playlist order', async () => {
        const event_spy = vi.spyOn(spectator.component.event, 'emit');
        const items = [
            create_item('media-1', { playlist: 'playlist-1' }),
            create_item('media-2', { playlist: 'playlist-1' }),
            create_item('media-3', { playlist: 'playlist-2' }),
        ];
        load_playlist(items);
        spectator.component['_item_playlist'] = [items[2], items[0], items[1]];
        spectator.component.index.set(0);
        spectator.component.progress.set(75);

        await spectator.component.setPlaylistItem(1);

        expect(event_spy).toHaveBeenCalledWith({
            type: 'playlist_count',
            ref_id: 'playlist-2',
        });
        expect(event_spy).toHaveBeenCalledWith({
            type: 'playlist_through',
            ref_id: 'playlist-2',
        });
    });

    it('should progress playback using simulated time speed', () => {
        vi.useFakeTimers();
        vi.setSystemTime(0);
        setMockTime(1_000, 16);
        const item = create_item('media-1', { duration: 15_000 });
        load_playlist([item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component.hold_over_item.set(false);
        spectator.component['_item_start'] = 1_000;
        const next_item_spy = vi.spyOn(spectator.component, 'nextItem');

        vi.setSystemTime(1_001);
        spectator.component['_updateItem']();

        expect(next_item_spy).toHaveBeenCalled();
    });

    it('should apply simulated time speed to video playback', () => {
        setMockTime(1_000, 4);
        const item = create_item('video-1', { type: 'video' });
        load_playlist([item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component.hold_over_item.set(false);
        spectator.component['_item_start'] = 1_000;

        spectator.component['_updateItem']();

        expect(
            spectator.component['_video_element']().nativeElement.playbackRate,
        ).toBe(4);
        expect(
            spectator.component['_video_element']().nativeElement.muted,
        ).toBe(true);
    });

    it('should preserve video audio below 4x when the player is not muted', () => {
        setMockTime(1_000, 2);
        const item = create_item('video-1', { type: 'video' });
        load_playlist([item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component.muted.set(false);
        spectator.component.hold_over_item.set(false);
        spectator.component['_item_start'] = 1_000;

        spectator.component['_updateItem']();

        expect(
            spectator.component['_video_element']().nativeElement.muted,
        ).toBe(false);
    });

    it('should pause video playback when simulated time is static', () => {
        setMockTime(1_000, 0);
        const item = create_item('video-1', { type: 'video' });
        const pause_spy = vi.spyOn(HTMLMediaElement.prototype, 'pause');
        load_playlist([item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component.hold_over_item.set(false);
        spectator.component['_item_start'] = 1_000;

        spectator.component['_updateItem']();

        expect(pause_spy).toHaveBeenCalled();
    });

    it('should pause video playback when the video output is no longer active', () => {
        const video_item = create_item('video-1', { type: 'video' });
        const image_item = create_item('image-1');
        load_playlist([video_item, image_item]);
        spectator.component.active_output.set(1);
        spectator.component['_output_items'] = [video_item, image_item];
        spectator.component['_item_output'].set('video-1', 0);
        spectator.component['_item_output'].set('image-1', 1);
        const video_pause = vi.fn();
        Object.defineProperty(
            spectator.component['_video_element'](0).nativeElement,
            'pause',
            {
                configurable: true,
                value: video_pause,
            },
        );

        spectator.component['_cleanupInactiveOutputs']();

        expect(video_pause).toHaveBeenCalled();
    });

    it('should emit playlist metrics when advancing from the last valid playlist item', async () => {
        const event_spy = vi.spyOn(spectator.component.event, 'emit');
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

    it('should emit playlist metrics when a single looping playlist wraps to its start', async () => {
        const event_spy = vi.spyOn(spectator.component.event, 'emit');
        const items = [
            create_item('media-1', { playlist: 'playlist-1' }),
            create_item('media-2', { playlist: 'playlist-1' }),
        ];
        load_playlist(items);
        spectator.component.index.set(1);
        spectator.component.progress.set(75);

        await spectator.component.setPlaylistItem(0);

        expect(event_spy).toHaveBeenCalledWith({
            type: 'playlist_count',
            ref_id: 'playlist-1',
        });
        expect(event_spy).toHaveBeenCalledWith({
            type: 'playlist_through',
            ref_id: 'playlist-1',
        });
    });

    it('should emit playlist metrics for a single-item playlist on every loop', async () => {
        const event_spy = vi.spyOn(spectator.component.event, 'emit');
        load_playlist([create_item('media-1', { playlist: 'playlist-1' })]);
        spectator.component.index.set(0);
        spectator.component.progress.set(75);

        await spectator.component.setPlaylistItem(0);

        expect(event_spy).toHaveBeenCalledWith({
            type: 'playlist_count',
            ref_id: 'playlist-1',
        });
        expect(event_spy).toHaveBeenCalledWith({
            type: 'playlist_through',
            ref_id: 'playlist-1',
        });
    });

    it('should emit media and playlist metrics when a NONE loop reaches the end', () => {
        const event_spy = vi.spyOn(spectator.component.event, 'emit');
        const items = [
            create_item('media-1', { playlist: 'playlist-1' }),
            create_item('media-2', { playlist: 'playlist-1' }),
        ];
        load_playlist(items);
        spectator.component.index.set(1);
        spectator.component.hold_over_item.set(false);
        spectator.component.loop.set('NONE');
        spectator.component.state.set('PLAYING');
        spectator.component.progress.set(75);

        spectator.component.nextItem();

        expect(spectator.component.index()).toBe(-1);
        expect(spectator.component.state()).toBe('PAUSED');
        expect(event_spy).toHaveBeenCalledWith({
            type: 'media_count',
            ref_id: 'media-2',
        });
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
        const transition_spy = vi.spyOn(
            spectator.component as any,
            '_transition',
        );

        spectator.component.nextItem();

        expect(transition_spy).not.toHaveBeenCalled();
        expect(spectator.component.index()).toBe(0);
    });

    it('should hold a single webpage without advancing or reloading it', async () => {
        const item = create_item('webpage-1', {
            type: 'webpage',
            duration: 10_000,
        });
        load_playlist([item]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);
        const set_item_spy = vi.spyOn(spectator.component, 'setPlaylistItem');
        const transition_spy = vi.spyOn(
            spectator.component as any,
            '_transition',
        );

        spectator.component.nextItem();

        expect(set_item_spy).not.toHaveBeenCalled();
        expect(transition_spy).not.toHaveBeenCalled();
        expect(spectator.component.index()).toBe(0);
    });

    it('should hold a single plugin without advancing or reloading it', () => {
        const item = create_item('plugin-1', {
            type: 'plugin',
            duration: 10_000,
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                uri: 'https://plugins.example/weather',
            } as any,
        });
        load_playlist([item]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);
        const set_item_spy = vi.spyOn(spectator.component, 'setPlaylistItem');
        const transition_spy = vi.spyOn(
            spectator.component as any,
            '_transition',
        );

        spectator.component.nextItem();

        expect(set_item_spy).not.toHaveBeenCalled();
        expect(transition_spy).not.toHaveBeenCalled();
        expect(spectator.component.index()).toBe(0);
    });

    it('should keep a single plugin active after its scheduled duration', () => {
        const item = create_item('plugin-1', {
            type: 'plugin',
            duration: 10_000,
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                uri: 'https://plugins.example/weather',
            } as any,
        });
        load_playlist([item]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component['_item_start'] = Date.now() - 10_001;
        const next_item_spy = vi.spyOn(spectator.component, 'nextItem');

        spectator.component['_updateItem']();

        expect(next_item_spy).not.toHaveBeenCalled();
        expect(spectator.component.index()).toBe(0);
        expect(spectator.component.progress()).toBe(100);
        expect(spectator.component.duration()).toBe(10);
    });

    it('should wait for webpages to load and then delay hold timing by three seconds', () => {
        const items = [
            create_item('webpage-1', {
                type: 'webpage',
                duration: 10_000,
            }),
            create_item('media-2'),
        ];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component['_web_waiting_item_id'] = 'webpage-1';
        spectator.component['_item_start'] = Date.now() - 20_000;
        const next_item_spy = vi.spyOn(spectator.component, 'nextItem');
        let hold_delay_callback: () => void = () => undefined;
        const timeout_spy = vi
            .spyOn(spectator.component as any, 'timeout')
            .mockImplementation(
                (name: string, fn: () => void, delay: number) => {
                    if (name === 'webpage-hold-delay') {
                        hold_delay_callback = fn;
                        expect(delay).toBe(3000);
                    }
                },
            );

        spectator.component['_updateItem']();
        expect(next_item_spy).not.toHaveBeenCalled();
        expect(spectator.component.progress()).toBe(0);

        spectator.component.onWebpageLoad();
        expect(timeout_spy).toHaveBeenCalledWith(
            'webpage-hold-delay',
            expect.any(Function),
            3000,
        );
        expect(spectator.component['_web_waiting_item_id']).toBe('webpage-1');

        hold_delay_callback();
        expect(spectator.component['_web_waiting_item_id']).toBe('');
        spectator.component.state.set('PLAYING');

        spectator.component['_item_start'] = Date.now() - 9_999;
        spectator.component['_updateItem']();
        expect(next_item_spy).not.toHaveBeenCalled();

        spectator.component['_item_start'] = Date.now() - 10_001;
        spectator.component['_updateItem']();
        expect(next_item_spy).toHaveBeenCalled();
    });

    it('should keep the previous item visible while a webpage loads', () => {
        vi.useFakeTimers();
        const items = [
            create_item('media-1'),
            create_item('webpage-1', {
                type: 'webpage',
                duration: 10_000,
            }),
        ];
        load_playlist(items);
        spectator.component['_item_urls'] = {
            'media-1': 'blob:media-1' as any,
            'webpage-1': 'blob:webpage-1' as any,
        };
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);
        spectator.component.state.set('PLAYING');
        spectator.component['clearTimeout']('wait-for-url');
        const transition_spy = vi.spyOn(
            spectator.component as any,
            '_transition',
        );

        spectator.component.setPlaylistItem(1);

        expect(spectator.component.defer_reveal()).toBe(true);
        expect(spectator.component.waiting_for_item()).toBe(true);
        expect(transition_spy).not.toHaveBeenCalled();

        spectator.component.onWebpageLoad();
        vi.advanceTimersByTime(2999);
        expect(spectator.component.defer_reveal()).toBe(true);
        expect(spectator.component.waiting_for_item()).toBe(true);
        expect(transition_spy).not.toHaveBeenCalled();

        vi.advanceTimersByTime(1);
        expect(spectator.component.defer_reveal()).toBe(false);
        expect(spectator.component.waiting_for_item()).toBe(false);
        expect(transition_spy).toHaveBeenCalled();
    });

    it('should not preload the next webpage before the final ten seconds', () => {
        const items = [
            create_item('webpage-1', {
                type: 'webpage',
                duration: 15_000,
            }),
            create_item('webpage-2', {
                type: 'webpage',
            }),
        ];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.active_output.set(0);
        spectator.component.pending_output.set(0);
        spectator.component['_output_items'] = [items[0], null];
        spectator.component['_item_start'] = Date.now() - 4_000;
        spectator.component['_item_real_start'] = Date.now() - 4_000;
        spectator.component['_item_urls'] = {
            'webpage-1': 'blob:webpage-1' as any,
            'webpage-2': 'blob:webpage-2' as any,
        };

        spectator.component['_processURLs']();

        expect(spectator.component['_output_items'][1]).toBeNull();
        expect(spectator.component['_web_element'](1).nativeElement.src).toBe(
            '',
        );
    });

    it('should not preload upcoming interactive media early when debug time is fast', () => {
        vi.useFakeTimers();
        vi.setSystemTime(1_000);
        setMockTime(10_000, 16);
        const items = [
            create_item('webpage-1', {
                type: 'webpage',
                duration: 15_000,
            }),
            create_item('webpage-2', {
                type: 'webpage',
            }),
        ];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.active_output.set(0);
        spectator.component.pending_output.set(0);
        spectator.component['_output_items'] = [items[0], null];
        spectator.component['_item_start'] = -2_000;
        spectator.component['_item_real_start'] = 250;
        spectator.component['_item_urls'] = {
            'webpage-1': 'blob:webpage-1' as any,
            'webpage-2': 'blob:webpage-2' as any,
        };

        spectator.component['_processURLs']();

        expect(spectator.component['_output_items'][1]).toBeNull();
        expect(spectator.component['_web_element'](1).nativeElement.src).toBe(
            '',
        );
    });

    it('should preload the next webpage in the final ten seconds', () => {
        const items = [
            create_item('webpage-1', {
                type: 'webpage',
                duration: 15_000,
            }),
            create_item('webpage-2', {
                type: 'webpage',
            }),
        ];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.active_output.set(0);
        spectator.component.pending_output.set(0);
        spectator.component['_output_items'] = [items[0], null];
        spectator.component['_item_start'] = Date.now() - 6_000;
        spectator.component['_item_real_start'] = Date.now() - 6_000;
        spectator.component['_item_urls'] = {
            'webpage-1': 'blob:webpage-1' as any,
            'webpage-2': 'blob:webpage-2' as any,
        };

        spectator.component['_processURLs']();

        expect(spectator.component['_output_items'][1].id).toBe('webpage-2');
        expect(spectator.component['_web_element'](1).nativeElement.src).toBe(
            'blob:webpage-2',
        );
        expect(spectator.component.output_plugins()[1]).toBeNull();
    });

    it('should keep the preloaded webpage output invisible until it is active', () => {
        const items = [
            create_item('webpage-1', {
                type: 'webpage',
                duration: 15_000,
            }),
            create_item('webpage-2', {
                type: 'webpage',
            }),
        ];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.active_output.set(0);
        spectator.component.pending_output.set(0);
        spectator.component['_output_items'] = [items[0], null];
        spectator.component['_item_start'] = Date.now() - 6_000;
        spectator.component['_item_real_start'] = Date.now() - 6_000;
        spectator.component['_item_urls'] = {
            'webpage-1': 'blob:webpage-1' as any,
            'webpage-2': 'blob:webpage-2' as any,
        };

        spectator.component['_processURLs']();
        spectator.detectChanges();

        expect(
            spectator.component['_container'](1).nativeElement.classList,
        ).toContain('invisible');
        expect(
            spectator.component['_container'](1).nativeElement.classList,
        ).toContain('z-0');
    });

    it('should preload the next plugin in the final ten seconds', () => {
        const plugin_1 = {
            id: 'plugin-1',
            name: 'Weather',
            uri: 'https://plugins.example/weather',
        } as any;
        const plugin_2 = {
            id: 'plugin-2',
            name: 'News',
            uri: 'https://plugins.example/news',
        } as any;
        const items = [
            create_item('plugin-item-1', {
                type: 'plugin',
                plugin: plugin_1,
            }),
            create_item('plugin-item-2', {
                type: 'plugin',
                plugin: plugin_2,
                plugin_params: { topic: 'site-updates' },
                duration: 20_000,
            }),
        ];
        load_playlist(items);
        spectator.component.index.set(0);
        spectator.component.active_output.set(0);
        spectator.component.pending_output.set(0);
        spectator.component['_output_items'] = [items[0], null];
        spectator.component['_item_start'] = Date.now() - 6_000;
        spectator.component['_item_real_start'] = Date.now() - 6_000;

        spectator.component['_processURLs']();

        expect(spectator.component['_output_items'][1].id).toBe(
            'plugin-item-2',
        );
        expect(spectator.component.output_plugins()[1]).toBe(plugin_2);

        spectator.component.onPluginStatus('ready', 1);

        expect(spectator.component.output_plugin_configs()[1]).toEqual({
            instance_id: 'plugin-item-2',
            config: { topic: 'site-updates' },
            timing: { scheduled_duration_ms: 20_000 },
        });
    });

    it('should pause cleanly if replaying a looping video is blocked', async () => {
        load_playlist([create_item('video-1', { type: 'video' })]);
        spectator.component.index.set(0);
        spectator.component.hold_over_item.set(false);
        spectator.component.loop.set('ONE');
        const next_item_spy = vi.spyOn(spectator.component, 'nextItem');
        Object.defineProperty(HTMLMediaElement.prototype, 'play', {
            configurable: true,
            value: vi
                .fn()
                .mockRejectedValue(new Error('Playback blocked by browser')),
        });

        spectator.component.nextItem();
        await Promise.resolve();

        expect(next_item_spy).toHaveBeenCalledTimes(1);
    });

    it('should configure plugins when they report ready status and reveal them after two seconds', () => {
        vi.useFakeTimers();
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

        expect(spectator.component.plugin_config()).toEqual({
            instance_id: 'plugin-1',
            config: { theme: 'dark' },
            timing: { scheduled_duration_ms: 20000 },
        });
        expect(spectator.component.defer_reveal()).toBe(true);
        expect(spectator.component.plugin_play()).toBe(0);

        vi.advanceTimersByTime(2000);
        expect(spectator.component.defer_reveal()).toBe(false);

        vi.advanceTimersByTime(101);
        expect(spectator.component.plugin_play()).toBeGreaterThan(0);
        vi.useRealTimers();
    });

    it('should configure and reveal plugins when the iframe loads without ready status', () => {
        vi.useFakeTimers();
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            duration: 20000,
            plugin: { id: 'plugin-1', name: 'Weather' } as any,
            plugin_params: { theme: 'dark' },
        });
        load_playlist([plugin_item]);

        spectator.component.setPlaylistItem(0);
        expect(spectator.component.defer_reveal()).toBe(true);

        spectator.component.onPluginLoad();

        expect(spectator.component.plugin_config()).toEqual({
            instance_id: 'plugin-1',
            config: { theme: 'dark' },
            timing: { scheduled_duration_ms: 20000 },
        });

        vi.advanceTimersByTime(2000);
        expect(spectator.component.defer_reveal()).toBe(false);

        vi.advanceTimersByTime(101);
        expect(spectator.component.plugin_play()).toBeGreaterThan(0);
        vi.useRealTimers();
    });

    it('should continue plugin playback when the plugin never reports load or ready', () => {
        vi.useFakeTimers();
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            duration: 20000,
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                uri: 'https://plugins.example/weather',
            } as any,
            plugin_params: { theme: 'dark' },
        });
        load_playlist([plugin_item]);

        spectator.component.setPlaylistItem(0);
        expect(spectator.component.defer_reveal()).toBe(true);

        vi.advanceTimersByTime(15_000);

        expect(spectator.component.plugin_config()).toEqual({
            instance_id: 'plugin-1',
            config: { theme: 'dark' },
            timing: { scheduled_duration_ms: 20000 },
        });

        vi.advanceTimersByTime(2000);
        expect(spectator.component.defer_reveal()).toBe(false);

        vi.advanceTimersByTime(101);
        expect(spectator.component.plugin_play()).toBeGreaterThan(0);
        vi.useRealTimers();
    });

    it('should reset plugin playback when requested by a plugin interaction', () => {
        vi.useFakeTimers();
        vi.setSystemTime(10_000);
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            duration: 20_000,
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                playback_type: 'interactive',
            } as any,
        });
        const next_item_spy = vi.spyOn(spectator.component, 'nextItem');

        load_playlist([plugin_item, create_item('media-1')]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');
        spectator.component['_item_start'] = 5_000;
        spectator.component['_playback_duration'] = 20_000;
        spectator.component.progress.set(25);
        spectator.component.duration.set(5);

        spectator.component.onPluginInteraction({
            new_duration: 30_000,
        });

        expect(spectator.component['_playback_duration']).toBe(30_000);
        expect(spectator.component['_item_start']).toBe(10_000);
        expect(spectator.component.progress()).toBe(0);
        expect(spectator.component.duration()).toBe(0);

        vi.setSystemTime(39_999);
        spectator.component['_updateItem']();
        expect(next_item_spy).not.toHaveBeenCalled();

        vi.setSystemTime(40_001);
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
            new_duration: 30_000,
        });

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
            new_duration: 30_000,
        });

        expect(spectator.component['_playback_duration']).toBe(20_000);
        expect(spectator.component['_item_start']).toBe(5_000);
    });

    it('should clear the plugin output and skip on a fatal plugin error', () => {
        vi.useFakeTimers();
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                uri: 'https://plugins.example/weather',
            } as any,
        });
        load_playlist([plugin_item, create_item('image-1')]);
        spectator.component.setPlaylistItem(0);

        expect(spectator.component.output_plugins()[0]).toBe(
            plugin_item.plugin,
        );

        spectator.component.onPluginError({
            fatal: true,
            message: 'Boom',
        } as any);

        expect(spectator.component.output_plugins()[0]).toBeNull();
        expect(spectator.component.defer_reveal()).toBe(false);

        vi.advanceTimersByTime(1000);
        expect(spectator.component.index()).toBe(1);
        vi.useRealTimers();
    });

    it('should clear inactive webpage content after moving to another item', () => {
        vi.useFakeTimers();
        const web_item = create_item('webpage-1', {
            type: 'webpage',
        });
        const image_item = create_item('image-1');
        load_playlist([web_item, image_item]);
        spectator.component['_item_urls'] = {
            'webpage-1': 'https://example.com/page' as any,
            'image-1': 'blob:image-1' as any,
        };

        spectator.component.setPlaylistItem(0);
        spectator.component.onWebpageLoad(0);
        vi.advanceTimersByTime(3000);
        expect(
            spectator.component['_web_element'](0).nativeElement.getAttribute(
                'src',
            ),
        ).toBe('https://example.com/page');

        spectator.component.setPlaylistItem(1);
        vi.advanceTimersByTime(500);

        expect(
            spectator.component['_web_element'](0).nativeElement.getAttribute(
                'src',
            ),
        ).toBeNull();
        vi.useRealTimers();
    });

    it('should clear inactive plugin content after moving to another item', () => {
        vi.useFakeTimers();
        const plugin_item = create_item('plugin-1', {
            type: 'plugin',
            plugin: {
                id: 'plugin-1',
                name: 'Weather',
                uri: 'https://plugins.example/weather',
            } as any,
        });
        load_playlist([plugin_item, create_item('image-1')]);

        spectator.component.setPlaylistItem(0);
        spectator.component.onPluginLoad(0);
        vi.advanceTimersByTime(2000);
        expect(spectator.component.output_plugins()[0]).toBe(
            plugin_item.plugin,
        );

        spectator.component.setPlaylistItem(1);
        vi.advanceTimersByTime(500);

        expect(spectator.component.output_plugins()[0]).toBeNull();
        vi.useRealTimers();
    });

    it('should keep skipping a broken item each time the playlist loops back to it', () => {
        setMockTime(10_000);
        load_playlist([
            create_item('good-1'),
            create_item('bad-1'),
            create_item('good-2'),
        ]);
        const next_item_spy = vi.spyOn(spectator.component, 'nextItem');
        let skip_callback: () => void = () => undefined;
        const timeout_spy = vi
            .spyOn(spectator.component as any, 'timeout')
            .mockImplementation(
                (name: string, fn: () => void, delay: number) => {
                    if (name === 'skip-failed-media') {
                        skip_callback = fn;
                        expect(delay).toBe(1000);
                    }
                },
            );
        spectator.component['_item_urls'] = {
            'bad-1': 'blob:bad-1' as any,
        };

        // Land on the broken item and fail during its first second.
        spectator.component.setPlaylistItem(1);
        spectator.component['_item_start'] = 10_000;
        spectator.component.onMediaLoadError('image');
        expect(next_item_spy).not.toHaveBeenCalled();
        expect(timeout_spy).toHaveBeenCalledWith(
            'skip-failed-media',
            expect.any(Function),
            1000,
        );
        skip_callback();
        expect(next_item_spy).toHaveBeenCalled();

        // Loop back around to the same broken item - it must skip again rather
        // than freeze on it (the load error must not be deduped across loops).
        next_item_spy.mockClear();
        skip_callback = () => undefined;
        spectator.component['_item_urls'] = {
            'bad-1': 'blob:bad-1' as any,
        };
        spectator.component.setPlaylistItem(1);
        spectator.component['_item_start'] = 10_000;
        spectator.component.onMediaLoadError('image');
        expect(next_item_spy).not.toHaveBeenCalled();
        skip_callback();
        expect(next_item_spy).toHaveBeenCalled();
    });

    it('should skip a failed media item immediately after waiting one second', () => {
        setMockTime(10_000);
        load_playlist([
            create_item('good-1'),
            create_item('bad-1'),
            create_item('good-2'),
        ]);
        const next_item_spy = vi.spyOn(spectator.component, 'nextItem');
        const timeout_spy = vi
            .spyOn(spectator.component as any, 'timeout')
            .mockImplementation(() => undefined);
        spectator.component['_item_urls'] = {
            'bad-1': 'blob:bad-1' as any,
        };

        spectator.component.setPlaylistItem(1);
        spectator.component['_item_start'] = 9_000;
        spectator.component.onMediaLoadError('image');

        expect(next_item_spy).toHaveBeenCalled();
        expect(timeout_spy).not.toHaveBeenCalledWith(
            'skip-failed-media',
            expect.any(Function),
            expect.any(Number),
        );
    });

    it('should skip an item instead of hanging when its URL never resolves', () => {
        setMockTime(1_000_000);
        load_playlist([
            create_item('a', {
                getURL: () => new Promise<string>((resolve) => void resolve),
            }),
            create_item('b'),
            create_item('c'),
        ]);
        const next_item_spy = vi.spyOn(spectator.component, 'nextItem');
        const timeout_spy = vi
            .spyOn(spectator.component as any, 'timeout')
            .mockImplementation(() => undefined);

        // The fetch for "a" has been in-flight far longer than the wait cap.
        spectator.component['_url_fetch_in_flight'].add('a');
        spectator.component['_url_wait_item_id'] = 'a';
        spectator.component['_url_wait_started'] = 0;
        next_item_spy.mockClear();

        spectator.component.setPlaylistItem(0);

        expect(next_item_spy).toHaveBeenCalled();
        expect(timeout_spy).not.toHaveBeenCalledWith(
            'skip-failed-media',
            expect.any(Function),
            expect.any(Number),
        );
    });

    it('should resolve a URL once media missing from the cache arrives', async () => {
        vi.useFakeTimers();
        let cached = false;
        load_playlist([
            create_item('morning-media', {
                getURL: async () => (cached ? 'blob:morning-media' : ''),
                isLoading: () => !cached,
                isCached: () => cached,
            }),
        ]);

        await vi.advanceTimersByTimeAsync(60 * 1000);
        cached = true;
        await vi.advanceTimersByTimeAsync(60 * 1000);
        spectator.detectChanges();

        expect(spectator.component.url('morning-media')?.toString()).toBe(
            'blob:morning-media',
        );
    });

    it('should start playing a single item that follows an empty playlist', async () => {
        vi.useFakeTimers();
        load_playlist([]);
        await vi.advanceTimersByTimeAsync(1000);

        load_playlist([create_item('morning-media')]);
        await vi.advanceTimersByTimeAsync(1000);

        expect(spectator.component.index()).toBe(0);
        expect(spectator.component.state()).toBe('PLAYING');
    });

    it('should start playing an item once it becomes valid', async () => {
        vi.useFakeTimers();
        const now = new Date('2026-01-02T05:00:00').getTime();
        vi.setSystemTime(now);
        load_playlist([
            create_item('morning-media', {
                valid_from: Math.floor((now + 60 * 60 * 1000) / 1000),
            }),
        ]);
        expect(spectator.component.index()).toBe(-1);

        vi.setSystemTime(new Date('2026-01-02T06:00:02'));
        await vi.advanceTimersByTimeAsync(10_000);
        spectator.detectChanges();

        expect(spectator.component.index()).toBe(0);
        expect(spectator.component.state()).toBe('PLAYING');
    });

    it('should report a playing video as mid play-through', () => {
        load_playlist([create_item('a', { type: 'video' })]);
        spectator.component.index.set(0);
        spectator.component.state.set('PLAYING');

        expect(spectator.component.isMidPlayThroughItem()).toBe(true);
    });

    it('should not report images or webpages as mid play-through', () => {
        load_playlist([
            create_item('a', { type: 'image' }),
            create_item('b', { type: 'webpage' }),
        ]);
        spectator.component.state.set('PLAYING');

        spectator.component.index.set(0);
        expect(spectator.component.isMidPlayThroughItem()).toBe(false);
        spectator.component.index.set(1);
        expect(spectator.component.isMidPlayThroughItem()).toBe(false);
    });

    it('should report plugins that signal completion as mid play-through', () => {
        load_playlist([
            create_item('a', {
                type: 'plugin',
                plugin: { playback_type: 'playsthrough' } as any,
            }),
            create_item('b', {
                type: 'plugin',
                plugin: { playback_type: 'static' } as any,
            }),
        ]);
        spectator.component.state.set('PLAYING');

        spectator.component.index.set(0);
        expect(spectator.component.isMidPlayThroughItem()).toBe(true);
        spectator.component.index.set(1);
        expect(spectator.component.isMidPlayThroughItem()).toBe(false);
    });

    it('should not report a paused player as mid play-through', () => {
        load_playlist([create_item('a', { type: 'video' })]);
        spectator.component.index.set(0);
        spectator.component.state.set('PAUSED');

        expect(spectator.component.isMidPlayThroughItem()).toBe(false);
    });
});
