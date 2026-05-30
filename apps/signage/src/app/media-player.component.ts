import {
    Component,
    ElementRef,
    input,
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
import { MediaControlsComponent } from './media-controls.component';
import { findValidPlaylistIndex, time, validateMedia } from './media-helpers';
import { PlaylistDisplayComponent } from './playlist-display.component';
import { MediaEvent } from './signage.service';
import { TimeControlsComponent } from './time-controls.component';
import { MediaPlayerItem, MediaPlayerState } from './types';

/** Max wait for an item whose data is still being downloaded before skipping */
const MAX_URL_WAIT_LOADING = 30 * 1000;
/** Max wait for an item whose data is not actively loading before skipping */
const MAX_URL_WAIT_IDLE = 3 * 1000;
/** Safety cap so a hung getURL() never pins an item from being re-fetched */
const URL_FETCH_TIMEOUT = 30 * 1000;
/** Minimum time to wait on a media item before skipping a load failure */
const MIN_FAILED_MEDIA_WAIT = 1000;

@Component({
    selector: 'media-player',
    template: `
        <div class="absolute inset-0 bg-[#212121]">
            <div
                #previous_container
                class="pointer-events-none absolute top-0 left-0 h-full w-full"
            >
                <img
                    #previous_image_el
                    class="absolute top-0 left-0 hidden h-full w-full object-contain object-center"
                />
                <video
                    #previous_video_el
                    class="absolute top-0 left-0 hidden h-full w-full object-contain object-center"
                ></video>
                <iframe
                    #previous_web_el
                    class="absolute top-0 left-0 hidden h-full w-full border-0"
                ></iframe>
                @if (previous_plugin()) {
                    <plugin-embed
                        class="absolute top-0 left-0 h-full w-full"
                        [plugin]="previous_plugin()"
                    />
                }
            </div>
            <div
                #media_container
                class="pointer-events-none absolute top-0 left-0 h-full w-full"
                [class.opacity-0]="defer_reveal()"
            >
                <img
                    #img_el
                    class="absolute top-0 left-0 h-full w-full object-contain object-center"
                    (load)="onMediaLoadSuccess()"
                    (error)="onMediaLoadError('image')"
                />
                <video
                    #video_el
                    class="absolute top-0 left-0 h-full w-full object-contain object-center"
                    (loadeddata)="onMediaLoadSuccess()"
                    (error)="onMediaLoadError('video')"
                ></video>
                <iframe
                    #web_el
                    class="absolute top-0 left-0 h-full w-full border-0"
                    (load)="onWebpageLoad()"
                ></iframe>
                @if (active_plugin()) {
                    <plugin-embed
                        class="absolute top-0 left-0 h-full w-full"
                        [plugin]="active_plugin()"
                        [config]="plugin_config()"
                        [play]="plugin_play()"
                        (statusChange)="onPluginStatus($event)"
                        (plugin_interaction)="onPluginInteraction($event)"
                        (plugin_error)="onPluginError($event)"
                    />
                }
            </div>
            @if (controls()) {
                <div class="absolute top-0 left-0 p-4">
                    <time-controls />
                </div>
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <media-controls
                        [state]="state()"
                        [loop]="loop()"
                        [muted]="muted()"
                        [shuffle]="shuffle()"
                        [progress]="progress()"
                        [duration]="duration()"
                        [animating]="in_animation()"
                        (event)="handleControlEvent($event)"
                    />
                </div>
                @if (can_close()) {
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 p-2">
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
                                matRipple
                                class="border-base-300 border"
                                (click)="closed.emit()"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                }
                @if (show_playlist()) {
                    <div class="absolute top-0 right-0 p-4">
                        <playlist-display
                            [index]="index()"
                            [playlist]="playlist_items"
                            (selected)="setPlaylistItem($event)"
                        />
                    </div>
                }
                <button
                    icon
                    matRipple
                    class="border-base-200 bg-base-100 absolute top-6 right-6 border shadow-sm"
                    (click)="show_playlist.set(!show_playlist())"
                >
                    <icon>{{ show_playlist() ? 'close' : 'queue_music' }}</icon>
                </button>
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
        `,
    ],
    imports: [
        MatRippleModule,
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
    public readonly override = input(false);
    public readonly can_close = input(false);
    public readonly loop = model<'NONE' | 'ONE' | 'ALL'>('ALL');
    public readonly shuffle = model(false);
    public readonly index = model(-1);
    public readonly animation_time = input(1000);
    public readonly muted = model(false);
    public readonly state = model<MediaPlayerState>('PLAYING');
    public readonly stateChange = output<MediaPlayerState>();
    public readonly indexChange = output<number>();
    public readonly mutedChange = output<boolean>();
    public readonly playing_id = output<string>();
    public readonly event = output<MediaEvent>();
    public readonly closed = output<void>();

    public readonly duration = signal(0);
    public readonly progress = signal(0);
    public readonly show_playlist = signal(true);
    public readonly hold_over_item = signal(true);
    public readonly in_animation = signal(false);
    public readonly defer_reveal = signal(false);

    public readonly active_plugin = signal<SignagePlugin>(null);
    public readonly previous_plugin = signal<SignagePlugin>(null);
    public readonly plugin_config = signal<PluginConfigPayload>(null);
    public readonly plugin_play = signal(0);

    private _plugin_finished = false;
    private _deferred_reveal_item_id = '';
    private _deferred_reveal_resume = true;
    private _deferred_reveal_transition = false;
    private _playback_duration = 0;
    private _web_waiting_item_id = '';
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

    private _item_playlist: MediaPlayerItem[] = [];
    private _playlist_signature = '';

    private _item_urls: Record<string, URL> = {};
    private _item_start = 0;
    private _item_progress = 0;

    public get playlist_items() {
        return this._item_playlist;
    }

    public get active_item() {
        return this._item_playlist[this.index()];
    }

    private readonly _previous_container =
        viewChild<ElementRef<HTMLDivElement>>('previous_container');
    private readonly _previous_img_element =
        viewChild<ElementRef<HTMLImageElement>>('previous_image_el');
    private readonly _previous_video_element =
        viewChild<ElementRef<HTMLVideoElement>>('previous_video_el');
    private readonly _previous_web_element =
        viewChild<ElementRef<HTMLIFrameElement>>('previous_web_el');

    private readonly _container =
        viewChild<ElementRef<HTMLDivElement>>('media_container');
    private readonly _image_element =
        viewChild<ElementRef<HTMLImageElement>>('img_el');
    private readonly _video_element =
        viewChild<ElementRef<HTMLVideoElement>>('video_el');
    private readonly _web_element =
        viewChild<ElementRef<HTMLIFrameElement>>('web_el');

    public readonly validateMedia = (i) => validateMedia(i);

    public ngOnInit() {
        this.interval('playlist_check', () => this._updateItem(), 50);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist) {
            const playlist_signature = this._getPlaylistSignature(
                this.playlist() || [],
            );
            if (playlist_signature !== this._playlist_signature) {
                const was_playing = this.state() === 'PLAYING';
                const current_item = this.active_item;
                this._playlist_signature = playlist_signature;
                this._clearItemURLs();
                this.progress.set(0);
                if (was_playing) this.togglePause();
                this._item_playlist = [...(this.playlist() || [])];
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
            this.state.set('PAUSED');
            this._item_progress = time() - this._item_start;
            this._item_start = 0;
            if (this.active_item?.type === 'video') {
                this._video_element().nativeElement.pause();
            }
        } else {
            this.state.set('PLAYING');
            this._item_start = time() - this._item_progress;
            this._item_progress = 0;
            if (this.active_item?.type === 'video') {
                this._requestVideoPlayback(() => {
                    this.state.set('PAUSED');
                    this._item_start = 0;
                    this._item_progress = 0;
                });
            }
            if (this.index() === -1) this._updateItem();
        }
    }

    public nextItem() {
        if (this._shouldHoldSingleWebpage(this.active_item)) return;
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

    public onWebpageLoad() {
        const item = this.active_item;
        if (item?.type !== 'webpage' || this._web_waiting_item_id !== item.id) {
            return;
        }
        this.onMediaLoadSuccess();
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
            2000,
        );
    }

    private _updateItem() {
        if (this.state() === 'PAUSED') return;
        const item = this.active_item;
        const playback_duration = this._effectivePlaybackDuration(item);
        const now = time();
        const duration = now - this._item_start;
        if (this._item_start && this._web_waiting_item_id !== item?.id) {
            this.progress.set(Math.floor((duration / playback_duration) * 100));
            this.duration.set(Math.floor(duration / 1000));
        } else {
            this.progress.set(0);
            this.duration.set(0);
        }

        if (!this._item_playlist?.length) return;
        this._processURLs();
        if (this.index() === -1) {
            this.progress.set(0);
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
            if (this._shouldHoldSingleWebpage(item)) {
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
        this._startDisplayAttempt(item);
        if (should_defer_reveal) {
            this._prepareDeferredReveal(
                old_item,
                resume_if_paused,
                should_transition,
            );
        } else {
            this._clearDeferredReveal();
        }
        if (item.type === 'plugin' && item.plugin) {
            this._showPlugin(item);
        } else {
            const ready = this._showMediaItem(
                item,
                index,
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
        old_item: MediaPlayerItem,
        resume_if_paused: boolean,
        should_transition: boolean,
    ) {
        this.clearTimeout('deferred-reveal');
        this.defer_reveal.set(true);
        this._deferred_reveal_item_id = this.active_item?.id || '';
        this._deferred_reveal_resume = resume_if_paused;
        this._deferred_reveal_transition = should_transition;
        if (!should_transition) return;
        const url =
            old_item && old_item.type !== 'plugin' ? this.url(old_item.id) : '';
        this._setPreviousMediaLayer(old_item, url?.toString());
    }

    private _clearDeferredReveal() {
        this.clearTimeout('deferred-reveal');
        this._deferred_reveal_item_id = '';
        this._deferred_reveal_resume = true;
        this._deferred_reveal_transition = false;
        this.defer_reveal.set(false);
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
        this.timeout(
            'deferred-reveal',
            reveal,
            delay,
        );
    }

    private _revealPreparedItem(
        item: MediaPlayerItem,
        resume_if_paused: boolean,
        should_transition: boolean,
    ) {
        this._clearDeferredReveal();
        this.playing_id.emit(item.id);
        if (!should_transition) {
            this._resetTransitionState();
            if (resume_if_paused && this.state() === 'PAUSED')
                this.togglePause();
            this._playPreparedPlugin(item);
            return;
        }
        this._transition(resume_if_paused);
        this._playPreparedPlugin(item);
    }

    private _playPreparedPlugin(item: MediaPlayerItem) {
        if (item.type !== 'plugin') return;
        this.timeout('plugin-play', () => this.plugin_play.set(time()), 100);
    }

    private _startDisplayAttempt(item: MediaPlayerItem) {
        this.clearTimeout('webpage-hold-delay');
        this._web_waiting_item_id = item.type === 'webpage' ? item.id : '';
        this._item_start = time();
        this._item_progress = 0;
        this._playback_duration = item.duration || 15 * 1000;
        this.progress.set(0);
        this.duration.set(0);
        this._plugin_finished = false;
        this._hideActiveMediaElements();
        this._holdOutgoingPluginForTransition();
    }

    private _hideActiveMediaElements() {
        this._video_element().nativeElement.classList.add('hidden');
        this._web_element().nativeElement.classList.add('hidden');
        this._image_element().nativeElement.classList.add('hidden');
    }

    private _holdOutgoingPluginForTransition() {
        const outgoing_plugin = this.active_plugin();
        if (outgoing_plugin) this.previous_plugin.set(outgoing_plugin);
    }

    private _showMediaItem(
        item: MediaPlayerItem,
        index: number,
        resume_if_paused: boolean,
        should_transition: boolean,
    ) {
        this.active_plugin.set(null);
        this.plugin_config.set(null);
        const url = this.url(item.id);
        if (!url) {
            return this._handleMissingMediaURL(item, index, resume_if_paused);
        }
        this._url_wait_item_id = '';
        const active_el = this._activeMediaElement(item);
        const url_string = url.toString();
        const keep_webpage_loaded =
            item.type === 'webpage' &&
            this._shouldHoldSingleWebpage(item) &&
            active_el.src === url_string;
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
        this._startNativeMediaPlayback(item, should_transition);
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
            this.timeout('wait-for-url', () =>
                this.setPlaylistItem(index, resume_if_paused),
            );
            return false;
        }
        this._url_wait_item_id = '';
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

    private _activeMediaElement(item: MediaPlayerItem) {
        if (item.type === 'video') return this._video_element().nativeElement;
        if (item.type === 'webpage') return this._web_element().nativeElement;
        return this._image_element().nativeElement;
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
        should_transition: boolean,
    ) {
        if (item.type === 'video') {
            this._requestVideoPlayback(() => {
                if (should_transition) {
                    this.nextItem();
                } else {
                    this.state.set('PAUSED');
                    this._item_start = 0;
                    this._item_progress = 0;
                }
            });
        } else {
            this._video_element().nativeElement.pause();
        }
    }

    public onPluginStatus(status: SignagePluginMessageType | 'unknown') {
        const item = this.active_item;
        if (!item || item.type !== 'plugin') return;
        log('MediaPlayer', `Plugin status: ${status}`, [item.name]);
        if (status === 'ready') {
            this.plugin_config.set({
                instance_id: item.id,
                config: item.plugin_params || {},
                timing: {
                    scheduled_duration_ms:
                        this._effectivePlaybackDuration(item),
                },
            });
            if (this._deferred_reveal_item_id === item.id) {
                this._finishDeferredReveal(item);
            } else {
                this._playPreparedPlugin(item);
            }
        } else if (status === 'finished') {
            this._plugin_finished = true;
        }
    }

    public onPluginInteraction(interaction: PluginInteractionPayload) {
        const item = this.active_item;
        const interactive =
            item?.type === 'plugin' &&
            item.plugin?.playback_type === 'interactive';
        if (!interactive) return;
        const value = Number(interaction.new_duration);
        this._resetPlayback(Number.isFinite(value) && value > 0 ? value : 0);
    }

    public onPluginError(error: PluginErrorPayload) {
        log('MediaPlayer', `Plugin error: ${error.message}`, [error], 'error');
        if (error.fatal) {
            this.nextItem();
        }
    }

    private _showPlugin(item: MediaPlayerItem) {
        log('MediaPlayer', `Showing plugin: ${item.name}`, [item.plugin?.name]);
        this.active_plugin.set(item.plugin);
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
        this.progress.set(0);
        this.duration.set(0);
    }

    private _requestVideoPlayback(on_error?: () => void) {
        const cycle = this._currentMediaCycle();
        requestAnimationFrame(() => {
            const play_action = this._video_element().nativeElement.play();
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

    public onMediaLoadSuccess() {
        this._consecutive_load_errors = 0;
        this.clearTimeout('retry-failed-media');
        this.clearTimeout('skip-failed-media');
    }

    public onMediaLoadError(source: 'image' | 'video') {
        const item = this.active_item;
        if (!item || item.type === 'plugin' || item.type === 'webpage') return;
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
            skip();
            return;
        }
        this.timeout(
            'skip-failed-media',
            skip,
            skip_delay,
        );
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
            this.timeout(
                're-start',
                () => this._onTransitionEnd(resume_on_end),
                500,
            );
            return;
        }
        const indexValue = this.index();
        if (indexValue !== -1) this._showPreviousItemForTransition(indexValue);
        const item = this.active_item;
        const prev_container_el = this._previous_container().nativeElement;
        const container_el = this._container().nativeElement;
        requestAnimationFrame(() => {
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
                () => this._onTransitionEnd(resume_on_end),
                this.animation_time() || 3000,
            );
        });
    }

    private _showPreviousItemForTransition(index: number) {
        const previous_index = findValidPlaylistIndex(
            this._item_playlist,
            index,
            -1,
        );
        const item = this._item_playlist[previous_index];
        const url = item && item.type !== 'plugin' ? this.url(item.id) : '';
        this._setPreviousMediaLayer(item, url?.toString());
    }

    private _setPreviousMediaLayer(item?: MediaPlayerItem, url = '') {
        const img_el = this._previous_img_element().nativeElement;
        const web_el = this._previous_web_element().nativeElement;
        const video_el = this._previous_video_element().nativeElement;
        img_el.classList.add('hidden');
        video_el.classList.add('hidden');
        web_el.classList.add('hidden');
        if (!item || !url) return;
        if (item.type === 'video') {
            video_el.src = url;
            video_el.classList.remove('hidden');
        } else if (item.type === 'webpage') {
            web_el.src = url;
            web_el.classList.remove('hidden');
        } else {
            img_el.src = url;
            img_el.classList.remove('hidden');
        }
    }

    private _onTransitionEnd(resume = true) {
        this._resetTransitionState();
        if (resume) this.togglePause();
    }

    private _resetTransitionState() {
        this.clearTimeout('re-start');
        const prev_container_el = this._previous_container().nativeElement;
        const container_el = this._container().nativeElement;
        prev_container_el.classList.remove('opacity-0');
        this._previous_video_element().nativeElement.classList.add('hidden');
        this._previous_img_element().nativeElement.classList.add('hidden');
        this._previous_web_element().nativeElement.classList.add('hidden');
        this.previous_plugin.set(null);
        prev_container_el.classList.remove('player-animate');
        container_el.classList.remove('player-animate');
        container_el.classList.remove('opacity-0');
        container_el.style.transform = 'translate(0, 0)';
        this.in_animation.set(false);
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
    }
}
