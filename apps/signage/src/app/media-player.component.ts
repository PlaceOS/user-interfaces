import {
    Component,
    ElementRef,
    input,
    linkedSignal,
    model,
    OnChanges,
    OnInit,
    output,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler, log, shuffleArrayWithFirstItem } from '@placeos/common';
import {
    IconComponent,
    PluginConfigPayload,
    PluginEmbedComponent,
    PluginErrorPayload,
    PluginInteractionPayload,
    SignagePluginMessageType,
} from '@placeos/components';
import { MediaAnimation, SignagePlugin } from '@placeos/ts-client';
import { DebugOverlayComponent } from './debug-overlay.component';
import { MediaControlsComponent } from './media-controls.component';
import {
    findValidPlaylistIndex,
    mockTimeState,
    time,
    validateMedia,
} from './media-helpers';
import { PlaylistDisplayComponent } from './playlist-display.component';
import { MediaEvent } from './signage.service';
import { TimeControlsComponent } from './time-controls.component';
import { MediaPlayerItem, MediaPlayerState } from './types';
import { recordHeartbeat } from './watchdog';

/** Max wait for an item whose data is still being downloaded before skipping */
const MAX_URL_WAIT_LOADING = 30 * 1000;
/** Max wait for an item whose data is not actively loading before skipping */
const MAX_URL_WAIT_IDLE = 3 * 1000;
/** Safety cap so a hung getURL() never pins an item from being re-fetched */
const URL_FETCH_TIMEOUT = 30 * 1000;
/** Minimum time to wait on a media item before skipping a load failure */
const MIN_FAILED_MEDIA_WAIT = 1000;
/** Lead time for rendering the next webpage/plugin output before it is shown */
const INTERACTIVE_PRELOAD_LEAD_TIME = 10 * 1000;
/** Time to let a webpage settle after its load event before it is shown */
const WEBPAGE_REVEAL_DELAY = 3 * 1000;
/** Max wait for plugin load/ready before continuing playback anyway */
const PLUGIN_LOAD_TIMEOUT = 15 * 1000;

@Component({
    selector: 'media-player',
    host: {
        '[class.transparent]': 'transparent()',
    },
    template: `
        <div
            class="absolute inset-0"
            [class.bg-black]="!controls() && !transparent()"
            [style.background]="controls() && !transparent() ? '#212121' : ''"
        >
            <div
                #media_container_0
                class="pointer-events-none absolute top-0 left-0 h-full w-full"
                [class.invisible]="
                    !in_animation() &&
                    (active_output() !== 0 ||
                        (defer_reveal() && pending_output() === 0))
                "
                [class.z-10]="active_output() === 0"
                [class.z-0]="active_output() !== 0"
                [class.opacity-0]="
                    active_output() !== 0 ||
                    (defer_reveal() && pending_output() === 0)
                "
            >
                <img
                    #img_el_0
                    class="absolute top-0 left-0 hidden h-full w-full object-contain object-center"
                    (load)="onMediaLoadSuccess(0)"
                    (error)="onMediaLoadError('image', 0)"
                />
                <video
                    #video_el_0
                    class="absolute top-0 left-0 hidden h-full w-full object-contain object-center"
                    (loadeddata)="onMediaLoadSuccess(0)"
                    (error)="onMediaLoadError('video', 0)"
                ></video>
                <iframe
                    #web_el_0
                    class="absolute top-0 left-0 hidden h-full w-full border-0"
                    (load)="onWebpageLoad(0)"
                ></iframe>
                @if (output_plugins()[0]) {
                    <plugin-embed
                        class="absolute top-0 left-0 h-full w-full"
                        [plugin]="output_plugins()[0]"
                        [config]="output_plugin_configs()[0]"
                        [play]="output_plugin_plays()[0]"
                        (loaded)="onPluginLoad(0)"
                        (statusChange)="onPluginStatus($event, 0)"
                        (plugin_interaction)="onPluginInteraction($event, 0)"
                        (plugin_error)="onPluginError($event, 0)"
                    />
                }
            </div>
            <div
                #media_container_1
                class="pointer-events-none absolute top-0 left-0 h-full w-full"
                [class.invisible]="
                    !in_animation() &&
                    (active_output() !== 1 ||
                        (defer_reveal() && pending_output() === 1))
                "
                [class.z-10]="active_output() === 1"
                [class.z-0]="active_output() !== 1"
                [class.opacity-0]="
                    active_output() !== 1 ||
                    (defer_reveal() && pending_output() === 1)
                "
            >
                <img
                    #img_el_1
                    class="absolute top-0 left-0 h-full w-full object-contain object-center"
                    (load)="onMediaLoadSuccess(1)"
                    (error)="onMediaLoadError('image', 1)"
                />
                <video
                    #video_el_1
                    class="absolute top-0 left-0 h-full w-full object-contain object-center"
                    (loadeddata)="onMediaLoadSuccess(1)"
                    (error)="onMediaLoadError('video', 1)"
                ></video>
                <iframe
                    #web_el_1
                    class="absolute top-0 left-0 h-full w-full border-0"
                    (load)="onWebpageLoad(1)"
                ></iframe>
                @if (output_plugins()[1]) {
                    <plugin-embed
                        class="absolute top-0 left-0 h-full w-full"
                        [plugin]="output_plugins()[1]"
                        [config]="output_plugin_configs()[1]"
                        [play]="output_plugin_plays()[1]"
                        (loaded)="onPluginLoad(1)"
                        (statusChange)="onPluginStatus($event, 1)"
                        (plugin_interaction)="onPluginInteraction($event, 1)"
                        (plugin_error)="onPluginError($event, 1)"
                    />
                }
            </div>
            @if (controls()) {
                <debug-overlay
                    [overlay_id]="can_close() ? 'override-time' : 'player-time'"
                    [editing]="layout_editing()"
                    [reset_count]="layout_reset_count()"
                    label="debug time"
                    icon="event"
                    [initial_position]="{ x: 0.01, y: 0.01 }"
                >
                    <time-controls />
                </debug-overlay>
                <debug-overlay
                    [overlay_id]="
                        can_close() ? 'override-playback' : 'player-playback'
                    "
                    [editing]="layout_editing()"
                    [reset_count]="layout_reset_count()"
                    label="playback controls"
                    icon="play_circle"
                    [initial_position]="{ x: 0.5, y: 0.99 }"
                >
                    <media-controls
                        [state]="state()"
                        [loop]="loop()"
                        [muted]="muted()"
                        [shuffle]="shuffle()"
                        [progress]="progress()"
                        [duration]="duration()"
                        [playback_start]="progress_start()"
                        [playback_duration]="progress_duration()"
                        [animating]="in_animation()"
                        [loading]="waiting_for_item()"
                        (event)="handleControlEvent($event)"
                    />
                </debug-overlay>
                @if (can_close()) {
                    <debug-overlay
                        overlay_id="override-details"
                        [editing]="layout_editing()"
                        [reset_count]="layout_reset_count()"
                        label="override details"
                        icon="priority_high"
                        [initial_position]="{ x: 0.5, y: 0.01 }"
                    >
                        <div
                            class="border-base-200 bg-base-100 flex items-center space-x-4 rounded-full border p-2"
                        >
                            <h2 class="max-w-[30vw] truncate py-2 pl-4">
                                {{
                                    playlist_items[0]?.playlist_name ||
                                        'Unknown'
                                }}
                            </h2>
                            <div
                                class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                            >
                                Override
                            </div>
                            <button
                                icon
                                default
                                matRipple
                                (click)="closed.emit()"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </debug-overlay>
                }
                <debug-overlay
                    [overlay_id]="
                        can_close() ? 'override-playlist' : 'player-playlist'
                    "
                    [editing]="layout_editing()"
                    [reset_count]="layout_reset_count()"
                    label="playlist"
                    icon="queue_music"
                    [initial_position]="{ x: 0.99, y: 0.01 }"
                >
                    <playlist-display
                        [index]="index()"
                        [playlist]="playlist_items"
                        (selected)="setPlaylistItem($event)"
                    />
                </debug-overlay>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                height: 100%;
                width: 100%;
                background: var(--bg);
            }

            :host(.transparent) {
                background: transparent;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        DebugOverlayComponent,
        PlaylistDisplayComponent,
        IconComponent,
        MediaControlsComponent,
        TimeControlsComponent,
        PluginEmbedComponent,
    ],
})
export class MediaPlayerComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    public readonly playlist = input<MediaPlayerItem[]>([]);
    public readonly controls = input(false);
    public readonly layout_editing = input(false);
    public readonly layout_reset_count = input(0);
    /** Let media render over a parent surface, such as a signage template. */
    public readonly transparent = input(false);
    public readonly override = input(false);
    public readonly can_close = input(false);
    public readonly loop = model<'NONE' | 'ONE' | 'ALL'>('ALL');
    public readonly shuffle = model(false);
    public readonly indexInput = input(-1, { alias: 'index' });
    public readonly index = linkedSignal(this.indexInput);
    public readonly animation_time = input(1000);
    public readonly mutedInput = input(false, { alias: 'muted' });
    public readonly muted = linkedSignal(this.mutedInput);
    public readonly stateInput = input<MediaPlayerState>('PLAYING', {
        alias: 'state',
    });
    public readonly state = linkedSignal(this.stateInput);
    public readonly stateChange = output<MediaPlayerState>();
    public readonly indexChange = output<number>();
    public readonly mutedChange = output<boolean>();
    public readonly playing_id = output<string>();
    public readonly event = output<MediaEvent>();
    public readonly closed = output<void>();

    public readonly duration = signal(0);
    public readonly progress = signal(0);
    public readonly progress_start = signal(0);
    public readonly progress_duration = signal(0);
    public readonly hold_over_item = signal(true);
    public readonly in_animation = signal(false);
    public readonly defer_reveal = signal(false);
    public readonly waiting_for_item = signal(false);
    public readonly active_output = signal<0 | 1>(0);
    public readonly pending_output = signal<0 | 1>(0);

    public readonly active_plugin = signal<SignagePlugin>(null);
    public readonly plugin_config = signal<PluginConfigPayload>(null);
    public readonly plugin_play = signal(0);
    public readonly output_plugins = signal<[SignagePlugin, SignagePlugin]>([
        null,
        null,
    ]);
    public readonly output_plugin_configs = signal<
        [PluginConfigPayload, PluginConfigPayload]
    >([null, null]);
    public readonly output_plugin_plays = signal<[number, number]>([0, 0]);

    private _plugin_finished = false;
    private _deferred_reveal_item_id = '';
    private _deferred_reveal_resume = true;
    private _deferred_reveal_transition = false;
    private _playback_duration = 0;
    private _web_waiting_item_id = '';
    private _web_waiting_output: 0 | 1 = 0;
    /** Number of items skipped due to load failures since the last good display */
    private _consecutive_load_errors = 0;
    /** Marks the display cycle whose load error has already been handled */
    private _handled_error_cycle = '';
    /** Increments on every item (re)display; scopes load-error handling so a
     * looping playlist keeps skipping a broken item rather than freezing on it */
    private _display_generation = 0;
    /** Media item ids whose URL is currently being fetched */
    private _url_fetch_in_flight = new Set<string>();
    /** Id of the item we are currently waiting on a URL for, and when we began */
    private _url_wait_item_id = '';
    private _url_wait_started = 0;
    private _last_video_speed = new Map<0 | 1, number>();

    private _item_playlist: MediaPlayerItem[] = [];
    private _playlist_signature = '';

    private _item_urls: Record<string, URL> = {};
    private _item_start = 0;
    private _item_progress = 0;
    private _item_real_start = 0;
    private _item_real_progress = 0;
    private _item_output = new Map<string, 0 | 1>();
    private _output_items: [MediaPlayerItem, MediaPlayerItem] = [null, null];
    private _ready_output_items = new Set<string>();

    public get playlist_items() {
        return this._item_playlist;
    }

    public get active_item() {
        return this._item_playlist[this.index()];
    }

    private readonly _container_0 =
        viewChild<ElementRef<HTMLDivElement>>('media_container_0');
    private readonly _container_1 =
        viewChild<ElementRef<HTMLDivElement>>('media_container_1');
    private readonly _image_element_0 =
        viewChild<ElementRef<HTMLImageElement>>('img_el_0');
    private readonly _image_element_1 =
        viewChild<ElementRef<HTMLImageElement>>('img_el_1');
    private readonly _video_element_0 =
        viewChild<ElementRef<HTMLVideoElement>>('video_el_0');
    private readonly _video_element_1 =
        viewChild<ElementRef<HTMLVideoElement>>('video_el_1');
    private readonly _web_element_0 =
        viewChild<ElementRef<HTMLIFrameElement>>('web_el_0');
    private readonly _web_element_1 =
        viewChild<ElementRef<HTMLIFrameElement>>('web_el_1');

    public readonly validateMedia = (i) => validateMedia(i);

    private _container(output: 0 | 1 = this.active_output()) {
        return output === 0 ? this._container_0() : this._container_1();
    }

    private _image_element(output: 0 | 1 = this.active_output()) {
        return output === 0 ? this._image_element_0() : this._image_element_1();
    }

    private _video_element(output: 0 | 1 = this.active_output()) {
        return output === 0 ? this._video_element_0() : this._video_element_1();
    }

    private _web_element(output: 0 | 1 = this.active_output()) {
        return output === 0 ? this._web_element_0() : this._web_element_1();
    }

    private _inactiveOutput(): 0 | 1 {
        return this.active_output() === 0 ? 1 : 0;
    }

    private _activeItemOutput(): 0 | 1 {
        return (
            this._item_output.get(this.active_item?.id) ?? this.active_output()
        );
    }

    private _setOutputPlugin(output: 0 | 1, plugin: SignagePlugin) {
        const plugins = [...this.output_plugins()] as [
            SignagePlugin,
            SignagePlugin,
        ];
        plugins[output] = plugin;
        this.output_plugins.set(plugins);
        if (!plugin) {
            this._setOutputPluginConfig(output, null);
            this._setOutputPluginPlay(output, 0);
        }
    }

    private _setOutputPluginConfig(output: 0 | 1, config: PluginConfigPayload) {
        const configs = [...this.output_plugin_configs()] as [
            PluginConfigPayload,
            PluginConfigPayload,
        ];
        configs[output] = config;
        this.output_plugin_configs.set(configs);
    }

    private _setOutputPluginPlay(output: 0 | 1, value: number) {
        const plays = [...this.output_plugin_plays()] as [number, number];
        plays[output] = value;
        this.output_plugin_plays.set(plays);
    }

    private _outputKey(output: 0 | 1, item: MediaPlayerItem) {
        return `${output}:${item?.id || ''}`;
    }

    public ngOnInit() {
        this.interval(
            'playlist_check',
            () => {
                // Checked in from the timer rather than from item changes: a
                // single interactive item legitimately holds the screen for
                // hours, so what matters is that the loop is still running.
                recordHeartbeat('playback');
                this._updateItem();
            },
            50,
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist) {
            const next_playlist = this.playlist() || [];
            const playlist_signature =
                this._getPlaylistSignature(next_playlist);
            if (playlist_signature !== this._playlist_signature) {
                const was_playing = this.state() === 'PLAYING';
                const current_item = this.active_item;
                this._playlist_signature = playlist_signature;
                this._clearItemURLs();
                this.progress.set(0);
                if (was_playing && next_playlist.length) this.togglePause();
                this._item_playlist = [...next_playlist];
                const current_index = this._item_playlist.findIndex(
                    (_) => _.id === current_item?.id,
                );
                this.hold_over_item.set(false);
                const target_index = current_index >= 0 ? current_index : 0;
                this.setPlaylistItem(target_index, was_playing);
                this._validatePlaylist();
            }
        }
        if (changes.animation_time) {
            document.documentElement.style.setProperty(
                '--transition-duration',
                `${this.animation_time() || 3000}ms`,
            );
        }
        if (changes.muted) {
            this._video_element().nativeElement.muted = !!this.muted();
        }
        if (changes.override) {
            if (this.override()) {
                if (this.state() === 'PLAYING') this.togglePause();
                this.interval('override', () =>
                    this.state() === 'PLAYING' ? this.togglePause() : '',
                );
            } else {
                if (this.state() === 'PAUSED') this.togglePause();
                this.clearInterval('override');
            }
        }
    }

    public url(id: string) {
        return this._item_urls[id] || '';
    }

    public previousItem() {
        const new_index = this._normalisePlaylistIndex(this.index() - 1);
        this.setPlaylistItem(new_index);
    }

    public toggleMuted() {
        this.muted.set(!this.muted());
        const muted = this.muted();
        this.mutedChange.emit(muted);
        this._video_element().nativeElement.muted = muted;
    }

    public togglePause() {
        this.clearTimeout('re-start');
        if (this.state() === 'PLAYING') {
            this._updateProgress();
            this.state.set('PAUSED');
            this._item_progress = time() - this._item_start;
            this._item_real_progress = Date.now() - this._item_real_start;
            this._item_start = 0;
            this._item_real_start = 0;
            this.progress_start.set(0);
            if (this.active_item?.type === 'video') {
                this._video_element().nativeElement.pause();
            }
        } else {
            this.state.set('PLAYING');
            this._item_start = time() - this._item_progress;
            this._item_real_start = Date.now() - this._item_real_progress;
            this._item_progress = 0;
            this._item_real_progress = 0;
            this.progress_start.set(this._item_start);
            this.progress_duration.set(
                this._effectivePlaybackDuration(this.active_item),
            );
            if (this.active_item?.type === 'video') {
                this._applyVideoPlaybackSpeed(
                    this.active_output(),
                    () => this._pauseBlockedVideoPlayback(),
                    true,
                );
            }
            if (this.index() === -1) this._updateItem();
        }
    }

    public nextItem() {
        if (this._shouldHoldSingleInteractiveItem(this.active_item)) return;
        if (this.hold_over_item()) {
            const item = this._item_playlist.shift();
            if (this.progress() > 50 && this.isValidMedia(item)) {
                this.event.emit({ type: 'media_count', ref_id: item.id });
            }
            this.setPlaylistItem(0);
            this.hold_over_item.set(false);
            return;
        }
        let next_index = this.index() + 1;
        const loop = this.loop();
        if (loop === 'ONE') next_index = this.index();
        else if (loop === 'NONE' && next_index === this._item_playlist.length) {
            // Playlist has ended; still credit the final item before pausing.
            const last_index = this.index();
            const last_item = this._item_playlist[last_index];
            if (this.progress() > 50 && this.isValidMedia(last_item)) {
                this.event.emit({ type: 'media_count', ref_id: last_item.id });
            }
            this._emitPlaylistMetrics(last_index);
            this.index.set(-1);
            this.state.set('PAUSED');
            this._item_start = 0;
            this._item_progress = 0;
            this._item_real_start = 0;
            this._item_real_progress = 0;
            this.progress_start.set(0);
            return;
        }
        const new_index = this._normalisePlaylistIndex(next_index);
        const old_item = this._item_playlist[this.index()];
        if (this.progress() > 50 && this.isValidMedia(old_item)) {
            this.event.emit({ type: 'media_count', ref_id: old_item.id });
        }
        this.setPlaylistItem(new_index);
    }

    public isValidMedia(item: MediaPlayerItem): boolean {
        return validateMedia(item) === '';
    }

    /**
     * Whether the item on screen plays to completion, so interrupting it now
     * would be noticed. Images and webpages hold a static frame and can be
     * replaced without anyone seeing a difference; videos and plugins that
     * report when they finish cannot.
     */
    public isMidPlayThroughItem() {
        const item = this.active_item;
        if (!item || this.state() !== 'PLAYING') return false;
        if (item.type === 'video') return true;
        if (item.type === 'plugin') {
            const playback = item.plugin?.playback_type;
            return playback === 'playsthrough' || playback === 'interactive';
        }
        return false;
    }

    public toggleLoop() {
        const loop = this.loop();
        if (loop === 'ALL') this.loop.set('ONE');
        else if (loop === 'NONE') this.loop.set('ALL');
        else if (loop === 'ONE') this.loop.set('NONE');
    }

    public toggleShuffle() {
        this.shuffle.set(!this.shuffle());
        const current_item = this.active_item;
        if (this.hold_over_item()) {
            this._item_playlist.shift();
            this.hold_over_item.set(false);
        }
        if (this.shuffle()) {
            shuffleArrayWithFirstItem(this._item_playlist, this.index());
            this.setPlaylistItem(0);
        } else {
            this._item_playlist = [...this.playlist()];
            this.setPlaylistItem(
                current_item
                    ? this._item_playlist.findIndex(
                          (_) => _.id === current_item.id,
                      )
                    : 0,
            );
        }
    }

    public handleControlEvent(event: any) {
        if (event === 'SHUFFLE') this.toggleShuffle();
        else if (event === 'PLAY') this.togglePause();
        else if (event === 'PAUSE') this.togglePause();
        else if (event === 'NEXT') this.nextItem();
        else if (event === 'PREVIOUS') this.previousItem();
        else if (event === 'MUTE') this.toggleMuted();
        else if (event === 'LOOP') this.toggleLoop();
    }

    public onWebpageLoad(output: 0 | 1 = this.pending_output()) {
        const item = this._output_items[output] || this.active_item;
        if (item?.type === 'webpage') {
            this._ready_output_items.add(this._outputKey(output, item));
        }
        if (
            item?.type !== 'webpage' ||
            this.active_item?.id !== item.id ||
            this._web_waiting_item_id !== item.id ||
            this._web_waiting_output !== output
        ) {
            return;
        }
        this.onMediaLoadSuccess(output);
        this.clearTimeout('webpage-load-timeout');
        this.clearTimeout('webpage-hold-delay');
        this.timeout(
            'webpage-hold-delay',
            () => {
                if (
                    this.active_item?.id !== item.id ||
                    this._web_waiting_item_id !== item.id
                ) {
                    return;
                }
                this._web_waiting_item_id = '';
                this._resetPlayback();
                this._finishDeferredReveal(item, 0);
            },
            WEBPAGE_REVEAL_DELAY,
        );
    }

    private _updateProgress(
        item: MediaPlayerItem = this.active_item,
        now = time(),
    ) {
        const playback_duration = this._effectivePlaybackDuration(item);
        const duration = now - this._item_start;
        if (this._item_start && this._web_waiting_item_id !== item?.id) {
            this.progress.set((duration / playback_duration) * 100);
            this.duration.set(Math.floor(duration / 1000));
        } else {
            this.progress.set(0);
            this.duration.set(0);
        }
    }

    private _updateItem() {
        if (this.state() === 'PAUSED') return;
        const item = this.active_item;
        if (item?.type === 'video') {
            this._applyVideoPlaybackSpeed(this._activeItemOutput());
        }
        const now = time();
        const playback_duration = this._effectivePlaybackDuration(item);
        this._updateProgress(item, now);

        if (!this._item_playlist?.length) return;
        this._processURLs();
        if (this.index() === -1) {
            this.progress.set(0);
            this.progress_start.set(0);
            this.setPlaylistItem(0);
        }
        // For playsthrough plugins, advance when plugin signals finished
        if (
            item?.type === 'plugin' &&
            item.plugin?.playback_type === 'playsthrough'
        ) {
            if (this._plugin_finished) {
                this.nextItem();
            }
            return;
        }
        if (this._web_waiting_item_id === item?.id) return;
        if (now > this._item_start + playback_duration) {
            if (this._shouldHoldSingleInteractiveItem(item)) {
                this.progress.set(100);
                this.duration.set(Math.floor(playback_duration / 1000));
                return;
            }
            // Reaching full duration means the current item displayed fine, so
            // the run of consecutive load failures (if any) is broken here.
            this._consecutive_load_errors = 0;
            this.nextItem();
        }
    }

    public setPlaylistItem(index: number, resume_if_paused = true) {
        if (!this._hasValidPlaylistItem()) {
            this._clearActiveItem();
            return this.timeout(
                'retry_set_item',
                () => this.setPlaylistItem(index, resume_if_paused),
                5000,
            );
        }
        this.clearTimeout('retry_set_item');
        index = this._normalisePlaylistIndex(index);
        const old_index = this.index();
        this.index.set(index);
        this.indexChange.emit(index);
        const item = this.active_item;

        const old_item = this._item_playlist[old_index];
        this._emitPlaylistMetrics(old_index);
        if (!item) return;
        if (!this.isValidMedia(item)) {
            if (old_index !== index) this.nextItem();
            return;
        }
        // New display attempt - scope load-error handling to this attempt so the
        // same item can be skipped again the next time the playlist loops.
        this._display_generation++;
        const should_transition = this._shouldTransition(old_item, item);
        const should_defer_reveal = this._shouldDeferReveal(item);
        const output = should_transition
            ? this._inactiveOutput()
            : this.active_output();
        this.pending_output.set(output);
        this._startDisplayAttempt(item, output);
        if (should_defer_reveal) {
            this._prepareDeferredReveal(resume_if_paused, should_transition);
        } else {
            this._clearDeferredReveal();
        }
        if (item.type === 'plugin' && item.plugin) {
            this._showPlugin(item, output);
            if (this._ready_output_items.has(this._outputKey(output, item))) {
                this._finishDeferredReveal(item);
            }
        } else {
            const ready = this._showMediaItem(
                item,
                index,
                output,
                resume_if_paused,
                should_transition,
            );
            if (!ready) return;
        }
        if (should_defer_reveal) return;
        this._revealPreparedItem(item, resume_if_paused, should_transition);
    }

    private _shouldDeferReveal(item: MediaPlayerItem) {
        return item?.type === 'webpage' || item?.type === 'plugin';
    }

    private _prepareDeferredReveal(
        resume_if_paused: boolean,
        should_transition: boolean,
    ) {
        this.clearTimeout('deferred-reveal');
        this.defer_reveal.set(true);
        this.waiting_for_item.set(true);
        this._deferred_reveal_item_id = this.active_item?.id || '';
        this._deferred_reveal_resume = resume_if_paused;
        this._deferred_reveal_transition = should_transition;
    }

    private _clearDeferredReveal() {
        this.clearTimeout('deferred-reveal');
        this._deferred_reveal_item_id = '';
        this._deferred_reveal_resume = true;
        this._deferred_reveal_transition = false;
        this.defer_reveal.set(false);
        this.waiting_for_item.set(false);
    }

    private _finishDeferredReveal(item: MediaPlayerItem, delay = 2000) {
        if (this._deferred_reveal_item_id !== item.id) return;
        const reveal = () => {
            if (
                this.active_item?.id !== item.id ||
                this._deferred_reveal_item_id !== item.id
            ) {
                return;
            }
            this._resetPlayback();
            this._revealPreparedItem(
                item,
                this._deferred_reveal_resume,
                this._deferred_reveal_transition,
            );
        };
        if (delay <= 0) {
            reveal();
            return;
        }
        this.timeout('deferred-reveal', reveal, delay);
    }

    private _revealPreparedItem(
        item: MediaPlayerItem,
        resume_if_paused: boolean,
        should_transition: boolean,
    ) {
        if (item.type === 'plugin') {
            this._playPreparedPlugin(item);
            // Keep the old output visible until Angular forwards `play` to the
            // prepared plugin on the next render frame.
            requestAnimationFrame(() => {
                if (
                    this.active_item?.id !== item.id ||
                    this._deferred_reveal_item_id !== item.id
                ) {
                    return;
                }
                this._activatePreparedItem(
                    item,
                    resume_if_paused,
                    should_transition,
                );
            });
            return;
        }
        this._activatePreparedItem(item, resume_if_paused, should_transition);
    }

    private _activatePreparedItem(
        item: MediaPlayerItem,
        resume_if_paused: boolean,
        should_transition: boolean,
    ) {
        this._clearDeferredReveal();
        this.playing_id.emit(item.id);
        if (!should_transition) {
            this.active_output.set(this.pending_output());
            this._resetTransitionState();
            if (resume_if_paused && this.state() === 'PAUSED')
                this.togglePause();
            this._cleanupInactiveOutputs();
            return;
        }
        this._transition(resume_if_paused);
    }

    private _playPreparedPlugin(item: MediaPlayerItem) {
        if (item.type !== 'plugin') return;
        const output = this._item_output.get(item.id) ?? this.active_output();
        const value = time();
        this._setOutputPluginPlay(output, value);
        this.plugin_play.set(value);
    }

    private _startDisplayAttempt(item: MediaPlayerItem, output: 0 | 1) {
        this.clearTimeout('webpage-hold-delay');
        this._web_waiting_item_id = item.type === 'webpage' ? item.id : '';
        this._web_waiting_output = output;
        const output_item = this._output_items[output];
        if (output_item?.id !== item.id) {
            this._clearOutput(output);
        } else if (item.type !== 'plugin') {
            this._hideMediaElements(output);
        }
        this._output_items[output] = item;
        this._item_start = time();
        this._item_progress = 0;
        this._item_real_start = Date.now();
        this._item_real_progress = 0;
        this._playback_duration = item.duration || 15 * 1000;
        this.progress_start.set(this._item_start);
        this.progress_duration.set(this._playback_duration);
        this.progress.set(0);
        this.duration.set(0);
        this._plugin_finished = false;
        this._last_video_speed.delete(output);
    }

    private _hideMediaElements(output: 0 | 1) {
        this.clearTimeout(this._pluginLoadTimeoutName(output));
        this._video_element(output).nativeElement.classList.add('hidden');
        this._web_element(output).nativeElement.classList.add('hidden');
        this._image_element(output).nativeElement.classList.add('hidden');
        this._setOutputPlugin(output, null);
    }

    private _clearOutput(output: 0 | 1) {
        const item = this._output_items[output];
        this._hideMediaElements(output);
        if (item?.type === 'video') this._pauseOutputVideo(output);
        this._web_element(output).nativeElement.removeAttribute('src');
        if (item) {
            this._item_output.delete(item.id);
            this._ready_output_items.delete(this._outputKey(output, item));
        }
        this._output_items[output] = null;
    }

    private _showMediaItem(
        item: MediaPlayerItem,
        index: number,
        output: 0 | 1,
        resume_if_paused: boolean,
        should_transition: boolean,
    ) {
        const url = this.url(item.id);
        if (!url) {
            return this._handleMissingMediaURL(item, index, resume_if_paused);
        }
        this._url_wait_item_id = '';
        if (!this._shouldDeferReveal(item)) this.waiting_for_item.set(false);
        const active_el = this._activeMediaElement(item, output);
        const url_string = url.toString();
        const keep_webpage_loaded =
            item.type === 'webpage' &&
            (this._shouldHoldSingleWebpage(item) ||
                this._ready_output_items.has(this._outputKey(output, item))) &&
            active_el.src === url_string;
        this._item_output.set(item.id, output);
        if (keep_webpage_loaded) {
            this._web_waiting_item_id = '';
            this._finishDeferredReveal(item, 0);
        } else {
            active_el.src = url_string;
        }
        active_el.classList.remove('hidden');
        if (item.type === 'webpage' && !keep_webpage_loaded) {
            this._waitForWebpageLoad(item);
        }
        this._startNativeMediaPlayback(item, output, should_transition);
        return true;
    }

    private _handleMissingMediaURL(
        item: MediaPlayerItem,
        index: number,
        resume_if_paused: boolean,
    ) {
        const fetched = this._item_urls[item.id] !== undefined;
        const fetching = this._url_fetch_in_flight.has(item.id);
        const still_loading = item.isLoading?.() ?? false;
        if (
            this._shouldWaitForMediaURL(item, fetched, fetching, still_loading)
        ) {
            this._ensureItemURL(item);
            this.waiting_for_item.set(true);
            this.timeout('wait-for-url', () =>
                this.setPlaylistItem(index, resume_if_paused),
            );
            return false;
        }
        this._url_wait_item_id = '';
        this.waiting_for_item.set(false);
        log(
            'MediaPlayer',
            `Unable to resolve URL for media "${item.name}"`,
            [item],
            'warn',
        );
        this._handled_error_cycle = this._currentMediaCycle();
        this._skipFailedMedia(this._url_wait_started);
        return false;
    }

    private _shouldWaitForMediaURL(
        item: MediaPlayerItem,
        fetched: boolean,
        fetching: boolean,
        still_loading: boolean,
    ) {
        // Track how long we have waited on THIS item. The wait-for-url retry
        // re-runs setPlaylistItem, which resets _item_start and so disables the
        // normal duration-based advance; the cap keeps bad media from hanging.
        if (this._url_wait_item_id !== item.id) {
            this._url_wait_item_id = item.id;
            this._url_wait_started = time();
        }
        const waited = time() - this._url_wait_started;
        const max_wait = still_loading
            ? MAX_URL_WAIT_LOADING
            : MAX_URL_WAIT_IDLE;
        return (still_loading || fetching || !fetched) && waited < max_wait;
    }

    private _activeMediaElement(item: MediaPlayerItem, output: 0 | 1) {
        if (item.type === 'video')
            return this._video_element(output).nativeElement;
        if (item.type === 'webpage')
            return this._web_element(output).nativeElement;
        return this._image_element(output).nativeElement;
    }

    private _waitForWebpageLoad(item: MediaPlayerItem) {
        this.progress.set(0);
        this.duration.set(0);
        // Some pages never report a load (e.g. blocked by the remote server's
        // X-Frame-Options). Without this fallback the player would wait on that
        // page forever, so continue after a delay.
        this.timeout(
            'webpage-load-timeout',
            () => {
                if (this._web_waiting_item_id !== item.id) return;
                log(
                    'MediaPlayer',
                    `Webpage "${item.name}" did not load in time; continuing.`,
                    [this.url(item.id)?.toString()],
                    'warn',
                );
                this._web_waiting_item_id = '';
                this._resetPlayback();
                this._finishDeferredReveal(item, 0);
            },
            15 * 1000,
        );
    }

    private _startNativeMediaPlayback(
        item: MediaPlayerItem,
        output: 0 | 1,
        should_transition: boolean,
    ) {
        if (item.type === 'video') {
            this._applyVideoPlaybackSpeed(output, () => {
                if (should_transition) this.nextItem();
                else this._pauseBlockedVideoPlayback();
            });
        } else {
            this._video_element(output).nativeElement.pause();
        }
    }

    private _pauseBlockedVideoPlayback() {
        this.state.set('PAUSED');
        this._item_start = 0;
        this._item_progress = 0;
        this._item_real_start = 0;
        this._item_real_progress = 0;
        this.progress_start.set(0);
    }

    private _applyVideoPlaybackSpeed(
        output: 0 | 1,
        on_error?: () => void,
        force_play = false,
    ) {
        const video = this._video_element(output).nativeElement;
        const { active, speed } = mockTimeState();
        const playback_speed = active ? speed : 1;
        if (
            !force_play &&
            this._last_video_speed.get(output) === playback_speed
        ) {
            return;
        }
        this._last_video_speed.set(output, playback_speed);
        if (playback_speed <= 0) {
            video.pause();
            return;
        }
        video.playbackRate = playback_speed;
        video.muted = this.muted() || playback_speed >= 4;
        if (this.state() === 'PLAYING')
            this._requestVideoPlayback(output, on_error);
    }

    public onPluginStatus(
        status: SignagePluginMessageType | 'unknown',
        output: 0 | 1 = this.pending_output(),
    ) {
        const item = this._output_items[output] || this.active_item;
        if (!item || item.type !== 'plugin') return;
        if (this._item_output.get(item.id) !== output) return;
        log('MediaPlayer', `Plugin status: ${status}`, [item.name]);
        if (status === 'ready') {
            this._handlePluginReady(item, output);
        } else if (status === 'finished') {
            this._plugin_finished = true;
        }
    }

    public onPluginLoad(output: 0 | 1 = this.pending_output()) {
        const item = this._output_items[output] || this.active_item;
        if (!item || item.type !== 'plugin') return;
        if (this._item_output.get(item.id) !== output) return;
        this._handlePluginReady(item, output);
    }

    public onPluginInteraction(
        interaction: PluginInteractionPayload,
        output: 0 | 1 = this._activeItemOutput(),
    ) {
        const item = this.active_item;
        if (this._item_output.get(item?.id) !== output) return;
        const interactive =
            item?.type === 'plugin' &&
            item.plugin?.playback_type === 'interactive';
        if (!interactive) return;
        const value = Number(interaction.new_duration);
        this._resetPlayback(Number.isFinite(value) && value > 0 ? value : 0);
    }

    public onPluginError(
        error: PluginErrorPayload,
        output: 0 | 1 = this._activeItemOutput(),
    ) {
        const item = this.active_item;
        if (
            item?.type === 'plugin' &&
            this._item_output.get(item.id) !== output
        )
            return;
        log('MediaPlayer', `Plugin error: ${error.message}`, [error], 'error');
        if (!error.fatal) return;
        if (item?.type === 'plugin') {
            this._handled_error_cycle = this._currentMediaCycle();
            this._clearDeferredReveal();
            this._clearOutput(output);
            this._skipFailedMedia(this._item_start || time());
        } else {
            this.nextItem();
        }
    }

    private _showPlugin(item: MediaPlayerItem, output: 0 | 1) {
        log('MediaPlayer', `Showing plugin: ${item.name}`, [item.plugin?.name]);
        this._item_output.set(item.id, output);
        this._setOutputPlugin(output, item.plugin);
        this.active_plugin.set(item.plugin);
        this._waitForPluginLoad(item, output);
    }

    private _waitForPluginLoad(item: MediaPlayerItem, output: 0 | 1) {
        const timeout_name = this._pluginLoadTimeoutName(output);
        this.clearTimeout(timeout_name);
        this.timeout(
            timeout_name,
            () => {
                if (this._item_output.get(item.id) !== output) return;
                log(
                    'MediaPlayer',
                    `Plugin "${item.name}" did not report load in time; continuing.`,
                    [item.plugin?.uri],
                    'warn',
                );
                this._configurePluginOutput(item, output);
            },
            PLUGIN_LOAD_TIMEOUT,
        );
    }

    private _handlePluginReady(item: MediaPlayerItem, output: 0 | 1) {
        this.clearTimeout(this._pluginLoadTimeoutName(output));
        this._configurePluginOutput(item, output);
    }

    private _pluginLoadTimeoutName(output: 0 | 1) {
        return `plugin-load-timeout-${output}`;
    }

    private _configurePluginOutput(item: MediaPlayerItem, output: 0 | 1) {
        const config = {
            instance_id: item.id,
            config: item.plugin_params || {},
            timing: {
                scheduled_duration_ms:
                    this.active_item?.id === item.id
                        ? this._effectivePlaybackDuration(item)
                        : item.duration || 15 * 1000,
            },
        };
        this._setOutputPluginConfig(output, config);
        this._ready_output_items.add(this._outputKey(output, item));
        if (this.active_item?.id !== item.id) return;
        this.plugin_config.set(config);
        if (
            this._deferred_reveal_item_id === item.id &&
            this.pending_output() === output
        ) {
            this._finishDeferredReveal(item);
        } else {
            this._playPreparedPlugin(item);
        }
    }

    private _effectivePlaybackDuration(
        item: MediaPlayerItem = this.active_item,
    ) {
        return this._playback_duration || item?.duration || 15 * 1000;
    }

    private _resetPlayback(playback_duration = 0) {
        if (playback_duration > 0) {
            this._playback_duration = playback_duration;
        }
        this._item_progress = 0;
        this._item_start = this.state() === 'PLAYING' ? time() : 0;
        this._item_real_progress = 0;
        this._item_real_start = this.state() === 'PLAYING' ? Date.now() : 0;
        this.progress_start.set(this._item_start);
        this.progress_duration.set(this._effectivePlaybackDuration());
        this.progress.set(0);
        this.duration.set(0);
    }

    private _requestVideoPlayback(output: 0 | 1, on_error?: () => void) {
        const cycle = this._currentMediaCycle();
        requestAnimationFrame(() => {
            const play_action =
                this._video_element(output).nativeElement.play();
            play_action?.catch((error) => {
                // The active item changed before playback started - ignore this
                // stale rejection so we don't skip the wrong (now current) item.
                if (cycle !== this._currentMediaCycle()) return;
                log(
                    'MediaPlayer',
                    'Video playback could not be started.',
                    [error, this.active_item],
                    'warn',
                );
                on_error?.();
            });
        });
    }

    public onMediaLoadSuccess(output: 0 | 1 = this._activeItemOutput()) {
        const item = this.active_item;
        if (item && this._item_output.get(item.id) !== output) return;
        this._consecutive_load_errors = 0;
        this.clearTimeout('retry-failed-media');
        this.clearTimeout('skip-failed-media');
    }

    public onMediaLoadError(
        source: 'image' | 'video',
        output: 0 | 1 = this._activeItemOutput(),
    ) {
        const item = this.active_item;
        if (!item || item.type === 'plugin' || item.type === 'webpage') return;
        if (this._item_output.get(item.id) !== output) return;
        // The image element is reused for unknown media types; the video
        // element is only used for video. Match the error to the active item so
        // a stale, hidden element doesn't skip the current media.
        const is_video_item = item.type === 'video';
        if (is_video_item !== (source === 'video')) return;
        // Only react to a given item's failure once per display cycle.
        const cycle = this._currentMediaCycle();
        if (cycle === this._handled_error_cycle) return;
        this._handled_error_cycle = cycle;
        log(
            'MediaPlayer',
            `Failed to load ${item.type} media "${item.name}"`,
            [this.url(item.id)?.toString()],
            'warn',
        );
        this._skipFailedMedia(this._item_start);
    }

    private _currentMediaCycle() {
        return `${this.index()}:${this._display_generation}`;
    }

    private _skipFailedMedia(wait_started = time()) {
        const valid_count = this._item_playlist.filter((item) =>
            this.isValidMedia(item),
        ).length;
        this._consecutive_load_errors++;
        // Drop the cached URL so a transient failure can be re-fetched on retry.
        const failed = this.active_item;
        if (failed) {
            const url = this._item_urls[failed.id];
            if (url) URL.revokeObjectURL(url.toString());
            delete this._item_urls[failed.id];
        }
        // If every playable item has failed to load, stop cycling (which would
        // peg the CPU) and retry the whole playlist after a short delay.
        if (valid_count <= 1 || this._consecutive_load_errors >= valid_count) {
            this._consecutive_load_errors = 0;
            this.timeout(
                'retry-failed-media',
                () => {
                    this._handled_error_cycle = '';
                    this.setPlaylistItem(this.index());
                },
                30 * 1000,
            );
            return;
        }
        const failed_cycle = this._currentMediaCycle();
        const skip_delay = Math.max(
            MIN_FAILED_MEDIA_WAIT - (time() - wait_started),
            0,
        );
        const skip = () => {
            if (this._currentMediaCycle() !== failed_cycle) return;
            this.nextItem();
        };
        if (skip_delay <= 0) {
            this.waiting_for_item.set(false);
            skip();
            return;
        }
        this.timeout('skip-failed-media', skip, skip_delay);
    }

    private _processURLs() {
        const current_index = Math.max(this.index(), 0);
        const item_count = this._item_playlist.length;
        if (!item_count) return;
        const item_list = this._nearbyPlaylistItems(current_index);
        // Request new URLs
        for (const item of item_list) {
            this._ensureItemURL(item);
        }
        // Revoke old URLs
        for (const key in this._item_urls) {
            if (item_list.find((_) => _?.id === key)) continue;
            const url = this._item_urls[key];
            if (url) URL.revokeObjectURL(url.toString());
            delete this._item_urls[key];
        }
        this._preloadUpcomingInteractiveContent(current_index);
    }

    private _clearActiveItem() {
        if (this.index() !== -1) {
            this.index.set(-1);
            this.indexChange.emit(-1);
        }
        this.playing_id.emit('');
        this._item_start = 0;
        this._item_progress = 0;
        this._item_real_start = 0;
        this._item_real_progress = 0;
        this.progress.set(0);
        this.duration.set(0);
        this.progress_start.set(0);
        this._clearDeferredReveal();
        this._clearOutput(0);
        this._clearOutput(1);
    }

    private _preloadUpcomingInteractiveContent(current_index: number) {
        if (!this._shouldPreloadUpcomingInteractiveContent()) return;
        const next_index = findValidPlaylistIndex(
            this._item_playlist,
            current_index,
            1,
        );
        const item =
            next_index >= 0 && next_index !== current_index
                ? this._item_playlist[next_index]
                : null;
        const output = this._inactiveOutput();
        if (!item || (item.type !== 'webpage' && item.type !== 'plugin')) {
            return;
        }
        if (this._output_items[output]?.id === item.id) return;
        this._clearOutput(output);
        this._output_items[output] = item;
        this._item_output.set(item.id, output);
        this._ready_output_items.delete(this._outputKey(output, item));
        if (item.type === 'webpage') {
            const url = this.url(item.id);
            if (!url) return;
            const web_el = this._web_element(output).nativeElement;
            web_el.src = url.toString();
            web_el.classList.remove('hidden');
            return;
        }
        if (item.plugin) {
            this._setOutputPlugin(output, item.plugin);
        }
    }

    private _shouldPreloadUpcomingInteractiveContent() {
        if (!this._item_real_start) return false;
        const item = this.active_item;
        const remaining =
            this._effectivePlaybackDuration(item) -
            (Date.now() - this._item_real_start);
        return remaining <= INTERACTIVE_PRELOAD_LEAD_TIME;
    }

    private _nearbyPlaylistItems(current_index: number) {
        const item_count = this._item_playlist.length;
        return [0, 1, -1, 2, -2].map((offset) => {
            const index = (current_index + offset + item_count) % item_count;
            return this._item_playlist[index];
        });
    }

    private _ensureItemURL(item: MediaPlayerItem) {
        // Plugins render directly and don't need a pre-fetched URL.
        if (!item?.id || item.type === 'plugin') return;
        // A truthy entry is already a usable URL; '' / null mark a previous
        // failure that we retry, undefined means we have not fetched it yet.
        if (this._item_urls[item.id]) return;
        if (this._url_fetch_in_flight.has(item.id)) return;
        const id = item.id;
        this._url_fetch_in_flight.add(id);
        let settled = false;
        const settle = (resolved: string | URL | null) => {
            if (settled) return;
            settled = true;
            this.clearTimeout(`url-fetch-${id}`);
            this._url_fetch_in_flight.delete(id);
            this._item_urls[id] = (resolved ?? null) as any;
        };
        item.getURL()
            .then((resolved) => settle(resolved ?? null))
            .catch(() => settle(null));
        // A hung getURL() must not pin the in-flight flag, or the item could
        // never be re-fetched on later loops.
        this.timeout(`url-fetch-${id}`, () => settle(null), URL_FETCH_TIMEOUT);
    }

    private _transition(resume_on_end = true) {
        if (!this.active_item) return;
        if (this.state() === 'PLAYING') this.togglePause();
        this.in_animation.set(true);
        if (this.active_item.animation === MediaAnimation.Cut) {
            this._onTransitionEnd(resume_on_end, true);
            return;
        }
        const item = this.active_item;
        const previous_output = this.active_output();
        const next_output = this.pending_output();
        const prev_container_el =
            this._container(previous_output).nativeElement;
        const container_el = this._container(next_output).nativeElement;
        requestAnimationFrame(() => {
            prev_container_el.classList.remove('opacity-0');
            if (item.animation !== MediaAnimation.CrossFade) {
                container_el.classList.remove('opacity-0');
            }
            switch (item.animation) {
                case MediaAnimation.SlideTop:
                    container_el.style.transform = 'translate(0, -100%)';
                    break;
                case MediaAnimation.SlideLeft:
                    container_el.style.transform = 'translate(-100%, 0)';
                    break;
                case MediaAnimation.SlideRight:
                    container_el.style.transform = 'translate(100%, 0)';
                    break;
                case MediaAnimation.SlideBottom:
                    container_el.style.transform = 'translate(0, 100%)';
                    break;
                case MediaAnimation.CrossFade:
                    prev_container_el.classList.remove('opacity-0');
                    container_el.classList.add('opacity-0');
                    break;
            }
            requestAnimationFrame(() => {
                prev_container_el.classList.add('player-animate');
                container_el.classList.add('player-animate');

                requestAnimationFrame(() => {
                    container_el.style.transform = 'translate(0, 0)';
                    prev_container_el.classList.add('opacity-0');
                    container_el.classList.remove('opacity-0');
                });
            });
            this.timeout(
                're-start',
                () => this._onTransitionEnd(resume_on_end, true),
                this.animation_time() || 3000,
            );
        });
    }

    private _onTransitionEnd(resume = true, swap_outputs = false) {
        if (swap_outputs) this.active_output.set(this.pending_output());
        this._resetTransitionState();
        this._cleanupInactiveOutputs();
        if (resume) this.togglePause();
    }

    private _resetTransitionState() {
        this.clearTimeout('re-start');
        for (const output of [0, 1] as const) {
            const container_el = this._container(output).nativeElement;
            container_el.classList.remove('player-animate');
            container_el.classList.remove('opacity-0');
            container_el.style.transform = 'translate(0, 0)';
        }
        this.in_animation.set(false);
    }

    private _cleanupInactiveOutputs() {
        const active_output = this.active_output();
        for (const output of [0, 1] as const) {
            if (output === active_output) continue;
            const item = this._output_items[output];
            if (item?.type === 'webpage' || item?.type === 'plugin') {
                this._clearOutput(output);
            } else if (item?.type === 'video') {
                this._pauseOutputVideo(output);
            }
        }
    }

    private _pauseOutputVideo(output: 0 | 1) {
        this._video_element(output).nativeElement.pause();
        this._last_video_speed.delete(output);
    }

    private _shouldTransition(
        old_item: MediaPlayerItem,
        new_item: MediaPlayerItem,
    ) {
        if (!this._hasMultipleActivePlaylistItems()) return false;
        return old_item?.id !== new_item?.id;
    }

    private _shouldHoldSingleWebpage(item: MediaPlayerItem) {
        return (
            item?.type === 'webpage' && !this._hasMultipleActivePlaylistItems()
        );
    }

    private _shouldHoldSingleInteractiveItem(item: MediaPlayerItem) {
        return (
            (item?.type === 'webpage' || item?.type === 'plugin') &&
            !this._hasMultipleActivePlaylistItems()
        );
    }

    private _hasMultipleActivePlaylistItems() {
        const active_item_ids = new Set(
            this._item_playlist
                .filter((item) => this.isValidMedia(item))
                .map((item) => item.id),
        );
        return active_item_ids.size > 1;
    }

    private _validatePlaylist() {
        if (!this._item_playlist.length) return;
        const has_valid_items = this._item_playlist.some((item) =>
            this.isValidMedia(item),
        );
        if (!has_valid_items) {
            this.event.emit({
                type: 'playlist_through',
                ref_id: this._item_playlist[0]?.playlist,
            });
        }
    }

    private _hasValidPlaylistItem() {
        return this._item_playlist.some((item) => this.isValidMedia(item));
    }

    private _emitPlaylistMetrics(idx: number) {
        const item = this._item_playlist[idx];
        if (!this._isLastValidPlaylistItem(idx) || !item?.playlist) return;
        this.event.emit({ type: 'playlist_count', ref_id: item.playlist });
        if (this.progress() > 50) {
            this.event.emit({
                type: 'playlist_through',
                ref_id: item.playlist,
            });
        }
    }

    private _isLastValidPlaylistItem(idx: number) {
        const playlist = this._item_playlist;
        const item = playlist[idx];
        if (!item || !this.isValidMedia(item)) return false;
        const next_index = findValidPlaylistIndex(playlist, idx, 1);
        if (next_index === idx) return true;
        if (next_index === -1) return true;
        // Forward search wrapped past the end of the list back to the start,
        // so this is the last valid item (e.g. a single playlist on loop).
        if (next_index < idx) return true;
        const next_item = playlist[next_index];
        return item.playlist !== next_item.playlist;
    }

    private _getPlaylistSignature(playlist: MediaPlayerItem[]) {
        return JSON.stringify(
            playlist.map((item) => ({
                id: item.id,
                name: item.name,
                playlist: item.playlist,
                playlist_name: item.playlist_name,
                type: item.type,
                url: item.url,
                animation: item.animation,
                start_time: item.start_time,
                duration: item.duration,
                valid_from: item.valid_from,
                valid_until: item.valid_until,
                plugin_id: item.plugin?.id,
                plugin_params: item.plugin_params,
            })),
        );
    }

    private _normalisePlaylistIndex(index: number) {
        const length = this._item_playlist.length;
        return length ? (index + length) % length : -1;
    }

    private _clearItemURLs() {
        for (const key in this._item_urls) {
            const url = this._item_urls[key];
            if (url) URL.revokeObjectURL(url.toString());
            delete this._item_urls[key];
        }
        this._item_output.clear();
        this._output_items = [null, null];
        this._ready_output_items.clear();
        this._setOutputPlugin(0, null);
        this._setOutputPlugin(1, null);
    }
}
