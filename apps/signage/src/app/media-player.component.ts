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
import { findValidPlaylistIndex, validateMedia } from './media-helpers';
import { PlaylistDisplayComponent } from './playlist-display.component';
import { MediaEvent } from './signage.service';
import { TimeControlsComponent } from './time-controls.component';
import { MediaPlayerItem, MediaPlayerState } from './types';

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
                    class="absolute top-0 left-0 h-full w-full border-0"
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
            >
                <img
                    #img_el
                    class="absolute top-0 left-0 h-full w-full object-contain object-center"
                />
                <video
                    #video_el
                    class="absolute top-0 left-0 h-full w-full object-contain object-center"
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

    public readonly active_plugin = signal<SignagePlugin>(null);
    public readonly previous_plugin = signal<SignagePlugin>(null);
    public readonly plugin_config = signal<PluginConfigPayload>(null);
    public readonly plugin_play = signal(0);

    private _plugin_finished = false;
    private _playback_duration = 0;
    private _web_waiting_item_id = '';

    private _item_playlist: MediaPlayerItem[] = [];

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
            this.progress.set(0);
            if (this.state() === 'PLAYING') this.togglePause();
            const current_item = this.active_item;
            this._item_playlist = [...(this.playlist() || [])];
            const current_exists = this._item_playlist.find(
                (_) => _.id === current_item?.id,
            );
            if (this.index() >= 0 && current_exists) {
                this._item_playlist = [current_item, ...this._item_playlist];
                this.hold_over_item.set(true);
                this.index.set(0);
            } else {
                this.hold_over_item.set(false);
            }
            this.togglePause();
            this._updateItem();
            this._validatePlaylist();
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
        const new_index = (this.index() - 1) % this._item_playlist.length;
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
            this._item_progress = Date.now() - this._item_start;
            this._item_start = 0;
            if (this.active_item?.type === 'video') {
                this._video_element().nativeElement.pause();
            }
        } else {
            this.state.set('PLAYING');
            this._item_start = Date.now() - this._item_progress;
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
        const new_index = next_index % this._item_playlist.length;
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
            },
            2000,
        );
    }

    private _updateItem() {
        if (this.state() === 'PAUSED') return;
        const item = this.active_item;
        const playback_duration = this._effectivePlaybackDuration(item);
        const duration = Date.now() - this._item_start;
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
        if (Date.now() > this._item_start + playback_duration) {
            if (this._shouldHoldSingleWebpage(item)) {
                this.progress.set(100);
                this.duration.set(Math.floor(playback_duration / 1000));
                return;
            }
            this.nextItem();
        }
    }

    public setPlaylistItem(index: number) {
        if (!this._hasValidPlaylistItem()) {
            return this.timeout(
                'retry_set_item',
                () => this.setPlaylistItem(index),
                5000,
            );
        }
        this.clearTimeout('retry_set_item');
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
        const should_transition = this._shouldTransition(old_item, item);
        this.clearTimeout('webpage-hold-delay');
        this._web_waiting_item_id = item.type === 'webpage' ? item.id : '';
        this._item_start = Date.now();
        this._item_progress = 0;
        this._playback_duration = item.duration || 15 * 1000;
        this.progress.set(0);
        this.duration.set(0);
        this._plugin_finished = false;
        // Hide all media elements first
        this._video_element().nativeElement.classList.add('hidden');
        this._web_element().nativeElement.classList.add('hidden');
        this._image_element().nativeElement.classList.add('hidden');
        // Preserve outgoing plugin in previous layer for transitions
        const outgoing_plugin = this.active_plugin();
        if (outgoing_plugin) {
            this.previous_plugin.set(outgoing_plugin);
        }
        if (item.type === 'plugin' && item.plugin) {
            this._showPlugin(item);
        } else {
            // Clear active plugin when switching to non-plugin media
            this.active_plugin.set(null);
            this.plugin_config.set(null);
            const url = this.url(item.id);
            if (!url) {
                this.timeout('wait-for-url', () => this.setPlaylistItem(index));
                return;
            }
            const active_el = (
                item.type === 'video'
                    ? this._video_element()
                    : item.type === 'webpage'
                      ? this._web_element()
                      : this._image_element()
            ).nativeElement;
            const url_string = url.toString();
            const keep_webpage_loaded =
                item.type === 'webpage' &&
                this._shouldHoldSingleWebpage(item) &&
                active_el.src === url_string;
            if (keep_webpage_loaded) {
                this._web_waiting_item_id = '';
            } else {
                active_el.src = url_string;
            }
            active_el.classList.remove('hidden');
            if (item.type === 'webpage' && !keep_webpage_loaded) {
                this.progress.set(0);
                this.duration.set(0);
            }
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
        this.playing_id.emit(item.id);
        if (!should_transition) {
            this._resetTransitionState();
            if (this.state() === 'PAUSED') this.togglePause();
            return;
        }
        this._transition();
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
            // Send play signal after config
            this.timeout(
                'plugin-play',
                () => this.plugin_play.set(Date.now()),
                100,
            );
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
        this._item_start = this.state() === 'PLAYING' ? Date.now() : 0;
        this.progress.set(0);
        this.duration.set(0);
    }

    private _requestVideoPlayback(on_error?: () => void) {
        requestAnimationFrame(() => {
            const play_action = this._video_element().nativeElement.play();
            play_action?.catch((error) => {
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

    private async _processURLs() {
        const current_index = Math.max(this.index(), 0);
        const item_count = this._item_playlist.length;
        // Get current
        const current_item = this._item_playlist[current_index];
        // Get previous 2 items
        const prev_item =
            this._item_playlist[(current_index - 1 + item_count) % item_count];
        const prev_prev_item =
            this._item_playlist[(current_index - 2 + item_count) % item_count];
        // Get next 2 items
        const next_item = this._item_playlist[(current_index + 1) % item_count];
        const next_next_item =
            this._item_playlist[(current_index + 2) % item_count];
        const item_list = [
            current_item,
            next_item,
            prev_item,
            next_next_item,
            prev_prev_item,
        ];
        //
        // Request new URLs
        for (const item of item_list) {
            if (!item?.id || this._item_urls[item.id]) continue;
            // Plugins don't need pre-fetched URLs
            if (item.type === 'plugin') continue;
            this._item_urls[item.id] = await item.getURL().catch((_) => null);
        }
        // Revoke old URLs
        for (const key in this._item_urls) {
            if (item_list.find((_) => _.id === key)) continue;
            const url = this._item_urls[key];
            if (!url) continue;
            URL.revokeObjectURL(url.toString());
            delete this._item_urls[key];
        }
    }

    private _transition() {
        if (!this.active_item) return;
        if (this.state() === 'PLAYING') this.togglePause();
        this.in_animation.set(true);
        if (this.active_item.animation === MediaAnimation.Cut) {
            this.timeout('re-start', () => this._onTransitionEnd(), 500);
            return;
        }
        const indexValue = this.index();
        if (indexValue !== -1) {
            const img_el = this._previous_img_element().nativeElement;
            const web_el = this._previous_web_element().nativeElement;
            const video_el = this._previous_video_element().nativeElement;
            const previous_index = findValidPlaylistIndex(
                this._item_playlist,
                indexValue,
                -1,
            );
            if (previous_index === -1) {
                img_el.classList.add('hidden');
                video_el.classList.add('hidden');
                web_el.classList.add('hidden');
            } else {
                const item = this._item_playlist[previous_index];
                if (item.type === 'plugin') {
                    // Plugin is handled by previous_plugin signal in the previous container
                    img_el.classList.add('hidden');
                    video_el.classList.add('hidden');
                    web_el.classList.add('hidden');
                } else {
                    const url = this.url(item.id);
                    if (url) {
                        if (item.type === 'video') {
                            img_el.classList.add('hidden');
                            web_el.classList.add('hidden');
                            video_el.src = url.toString();
                            video_el.classList.remove('hidden');
                        } else if (item.type === 'webpage') {
                            img_el.classList.add('hidden');
                            video_el.classList.add('hidden');
                            web_el.src = url.toString();
                            web_el.classList.remove('hidden');
                        } else {
                            video_el.classList.add('hidden');
                            web_el.classList.add('hidden');
                            img_el.src = url.toString();
                            img_el.classList.remove('hidden');
                        }
                    }
                }
            }
        }
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
                () => this._onTransitionEnd(),
                this.animation_time() || 3000,
            );
        });
    }

    private _onTransitionEnd() {
        this._resetTransitionState();
        this.togglePause();
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
        if (!this.playlist().length) return;
        const has_valid_items = this.playlist().some((item) =>
            this.isValidMedia(item),
        );
        if (!has_valid_items) {
            this.event.emit({
                type: 'playlist_through',
                ref_id: this.playlist()[0]?.playlist,
            });
        }
    }

    private _hasValidPlaylistItem() {
        return this.playlist().some((item) => this.isValidMedia(item));
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
        const playlist = this.playlist();
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

    private _hasValidPlaylist() {
        return this.playlist().some((item) => this.isValidMedia(item));
    }
}
