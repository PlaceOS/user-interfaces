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
import { AsyncHandler, shuffleArrayWithFirstItem } from '@placeos/common';
import { MediaAnimation } from '@placeos/ts-client';
import { validateMedia } from './media-helpers';
import { MediaEvent } from './signage.service';
import { MediaPlayerItem, MediaPlayerState } from './types';

@Component({
    selector: 'media-player',
    template: `
        <div class="absolute inset-0 bg-[#212121]">
            <div
                #previous_container
                class="pointer-events-none absolute left-0 top-0 h-full w-full"
            >
                <img
                    #previous_image_el
                    class="absolute left-0 top-0 hidden h-full w-full object-contain object-center"
                />
                <video
                    #previous_video_el
                    class="absolute left-0 top-0 hidden h-full w-full object-contain object-center"
                ></video>
                <iframe
                    #previous_web_el
                    class="absolute left-0 top-0 h-full w-full border-0"
                ></iframe>
            </div>
            <div
                #media_container
                class="pointer-events-none absolute left-0 top-0 h-full w-full"
            >
                <img
                    #img_el
                    class="absolute left-0 top-0 h-full w-full object-contain object-center"
                />
                <video
                    #video_el
                    class="absolute left-0 top-0 h-full w-full object-contain object-center"
                ></video>
                <iframe
                    #web_el
                    class="absolute left-0 top-0 h-full w-full border-0"
                ></iframe>
            </div>
            @if (controls()) {
                <div class="absolute left-0 top-0 p-4">
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
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 p-2">
                        <div
                            class="flex items-center space-x-4 rounded-full border border-base-200 bg-base-100 p-2"
                        >
                            <h2 class="max-w-[30vw] truncate py-2 pl-4">
                                {{
                                    playlist_items[0]?.playlist_name ||
                                        'Unknown'
                                }}
                            </h2>
                            <div
                                class="rounded bg-base-200 px-2 py-1 font-mono text-[0.625rem]"
                            >
                                Override
                            </div>
                            <button
                                icon
                                matRipple
                                class="border border-base-300"
                                (click)="closed.emit()"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                }
                @if (show_playlist()) {
                    <div class="absolute right-0 top-0 p-4">
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
                    class="absolute right-6 top-6 border border-base-200 bg-base-100 shadow"
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
    standalone: false,
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
    public readonly event = output<MediaEvent>();
    public readonly closed = output<void>();

    public readonly duration = signal(0);
    public readonly progress = signal(0);
    public readonly show_playlist = signal(false);
    public readonly hold_over_item = signal(true);
    public readonly in_animation = signal(false);

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
                requestAnimationFrame(() =>
                    this._video_element().nativeElement.play(),
                );
            }
            if (this.index() === -1) this._updateItem();
        }
    }

    public nextItem() {
        if (this.hold_over_item()) {
            const item = this._item_playlist.shift();
            if (this.progress() > 50) {
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
            this.index.set(-1);
            this.state.set('PAUSED');
            this._item_start = 0;
            this._item_progress = 0;
            return;
        }
        const new_index = next_index % this._item_playlist.length;
        if (this.progress() > 50) {
            this.event.emit({
                type: 'media_count',
                ref_id: this._item_playlist[this.index()].id,
            });
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
    }

    private _updateItem() {
        if (this.state() === 'PAUSED') return;
        const duration = Date.now() - this._item_start;
        if (this._item_start) {
            this.progress.set(
                Math.floor(
                    (duration / (this.active_item?.duration || 15 * 1000)) *
                        100,
                ),
            );
        }
        this.duration.set(Math.floor(duration / 1000));

        if (!this._item_playlist?.length) return;
        this._processURLs();
        if (this.index() === -1) {
            this.setPlaylistItem(0);
        }
        const item = this.active_item;
        if (Date.now() > this._item_start + item.duration) {
            this.nextItem();
        }
    }

    private setPlaylistItem(index: number) {
        const old_index = this.index();
        this.index.set(index);
        this.indexChange.emit(index);
        const item = this.active_item;

        const old_item = this._item_playlist[old_index];
        if (
            old_item?.id !== item?.id &&
            (old_item?.playlist !== item?.playlist ||
                old_index >= this._item_playlist.length - 1) &&
            this.isValidMedia(item)
        ) {
            this.event.emit({ type: 'playlist_count', ref_id: item.playlist });
            if (old_item?.playlist && this.progress() > 0) {
                this.event.emit({
                    type: 'playlist_through',
                    ref_id: old_item.playlist,
                });
            }
        }
        if (!item) return;
        if (!this.isValidMedia(item)) {
            this.nextItem();
            return;
        }
        this._item_start = Date.now();
        this._item_progress = 0;
        this.progress.set(0);
        this.duration.set(0);
        const url = this.url(item.id);
        if (!url) {
            this.timeout('wait-for-url', () => this.setPlaylistItem(index));
            return;
        }
        if (item.type === 'video') {
            this._image_element().nativeElement.classList.add('hidden');
            this._web_element().nativeElement.classList.add('hidden');
            this._video_element().nativeElement.src = url.toString();
            this._video_element().nativeElement.classList.remove('hidden');
            try {
                requestAnimationFrame(() =>
                    this._video_element().nativeElement.play(),
                );
            } catch {
                this.nextItem();
            }
        } else if (item.type === 'webpage') {
            this._video_element().nativeElement.classList.add('hidden');
            this._image_element().nativeElement.classList.add('hidden');
            this._web_element().nativeElement.src = url.toString();
            this._web_element().nativeElement.classList.remove('hidden');
            this._video_element().nativeElement.pause();
        } else {
            this._video_element().nativeElement.classList.add('hidden');
            this._web_element().nativeElement.classList.add('hidden');
            this._image_element().nativeElement.src = url.toString();
            this._image_element().nativeElement.classList.remove('hidden');
            this._video_element().nativeElement.pause();
        }
        this._transition();
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
            let index = indexValue - 1;
            if (index < 0) index = this._item_playlist.length - 1;
            const item = this._item_playlist[index];
            const url = this.url(item.id);
            if (url) {
                if (item.type === 'video') {
                    img_el.classList.add('hidden');
                    web_el.classList.add('hidden');
                    video_el.src = url.toString();
                    video_el.classList.remove('hidden');
                } else if (item.type === 'web') {
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
        const prev_container_el = this._previous_container().nativeElement;
        const container_el = this._container().nativeElement;
        prev_container_el.classList.remove('opacity-0');
        this._previous_video_element().nativeElement.classList.add('hidden');
        this._previous_img_element().nativeElement.classList.add('hidden');
        this._previous_web_element().nativeElement.classList.add('hidden');
        prev_container_el.classList.remove('player-animate');
        container_el.classList.remove('player-animate');
        this.in_animation.set(false);
        this.togglePause();
    }
}
