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
import { set } from 'date-fns';
import { MediaEvent } from './signage.service';

export interface MediaPlayerItem {
    id: string;
    name: string;
    playlist: string;
    playlist_name: string;
    animation: MediaAnimation;
    type: 'image' | 'video';
    start_time: number;
    duration: number;
    valid_from: number;
    valid_until: number;
    play_hours: string;
    getURL: () => Promise<URL>;
}

export type MediaPlayerState = 'PAUSED' | 'PLAYING';

@Component({
    selector: 'media-player',
    template: `
        {{ controls() }}
        <div #previous_container class="absolute left-0 top-0 h-full w-full">
            <img
                #previous_image_el
                class="absolute left-0 top-0 hidden h-full w-full object-contain object-center"
            />
            <video
                #previous_video_el
                class="absolute left-0 top-0 hidden h-full w-full object-contain object-center"
            ></video>
        </div>
        <div #media_container class="absolute left-0 top-0 h-full w-full">
            <img
                #img_el
                class="absolute left-0 top-0 h-full w-full object-contain object-center"
            />
            <video
                #video_el
                class="absolute left-0 top-0 h-full w-full object-contain object-center"
            ></video>
        </div>
        @if (controls()) {
            <div
                class="absolute bottom-[4.5rem] left-1/2 w-56 -translate-x-1/2 overflow-hidden rounded-full border border-base-300 bg-base-100 p-1"
                [matTooltip]="duration() | mediaDuration"
                matTooltipPosition="above"
            >
                <mat-progress-bar
                    class="overflow-hidden rounded-full"
                    mode="determinate"
                    [value]="progress()"
                ></mat-progress-bar>
                @if (in_animation()) {
                    <div class="absolute inset-1 rounded-full bg-success"></div>
                }
            </div>
            <div
                class="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center space-x-2 overflow-hidden rounded-full border border-base-300 bg-base-100 p-2 text-lg"
            >
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="previousItem()"
                    [matTooltip]="'APP.SIGNAGE.PREVIOUS' | translate"
                >
                    <icon>skip_previous</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="togglePause()"
                    [matTooltip]="
                        (state() === 'PLAYING'
                            ? 'APP.SIGNAGE.PLAY'
                            : 'APP.SIGNAGE.PAUSE'
                        ) | translate
                    "
                >
                    <icon>{{
                        state() === 'PLAYING' ? 'pause' : 'play_arrow'
                    }}</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="nextItem()"
                    [matTooltip]="'APP.SIGNAGE.NEXT' | translate"
                >
                    <icon>skip_next</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="toggleMuted()"
                    [matTooltip]="
                        'APP.SIGNAGE.VOLUME'
                            | translate
                                : {
                                      state:
                                          (muted() ? 'COMMON.OFF' : 'COMMON.ON')
                                          | translate,
                                  }
                    "
                >
                    <icon>{{ muted() ? 'volume_off' : 'volume_up' }}</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="toggleLoop()"
                    [matTooltip]="
                        (loop() === 'ALL'
                            ? 'APP.SIGNAGE.LOOP_ALL'
                            : loop() === 'ONE'
                              ? 'APP.SIGNAGE.LOOP_ONE'
                              : 'APP.SIGNAGE.LOOP_OFF'
                        ) | translate
                    "
                >
                    <icon [class.opacity-30]="loop() === 'NONE'">
                        {{
                            loop() === 'ALL'
                                ? 'repeat'
                                : loop() === 'ONE'
                                  ? 'repeat_one'
                                  : 'repeat'
                        }}
                    </icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="toggleShuffle()"
                    [matTooltip]="
                        'APP.SIGNAGE.SHUFFLE'
                            | translate
                                : {
                                      state:
                                          (shuffle()
                                              ? 'COMMON.ON'
                                              : 'COMMON.OFF'
                                          ) | translate,
                                  }
                    "
                >
                    <icon [class.opacity-30]="!shuffle()"> shuffle </icon>
                </button>
            </div>
            @if (show_playlist()) {
                <div
                    class="absolute bottom-24 right-4 top-4 flex min-w-[20rem] flex-col space-y-2 overflow-auto rounded-xl border border-base-300 bg-base-100 p-2"
                >
                    <div class="flex items-center space-x-4 p-2">
                        <h2>{{ 'APP.SIGNAGE.MEDIA_LIST' | translate }}</h2>
                        <div class="text-xs opacity-30">
                            ({{ playlist_items?.length || 0 }} items)
                        </div>
                    </div>
                    <div>
                        @for (item of playlist_items; track item) {
                            @let is_valid = isValidMedia(item);
                            <button
                                matRipple
                                class="flex w-[20rem] items-center space-x-2 rounded-lg p-2 text-left hover:bg-base-200"
                                [class.overflow-visible]="$index === index()"
                                [class.pointer-events-none]="$index === index()"
                                (click)="setPlaylistItem($index)"
                                [disabled]="!is_valid"
                            >
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-full"
                                    [class.bg-info]="$index === index()"
                                    [class.text-info-content]="
                                        $index === index()
                                    "
                                    [class.bg-base-300]="$index !== index()"
                                    [class.!bg-error]="!is_valid"
                                    [class.!text-error-content]="!is_valid"
                                >
                                    <div
                                        class="relative flex h-7 w-7 items-center justify-center"
                                    >
                                        @if (is_valid && $index === index()) {
                                            <span
                                                class="absolute z-0 inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75"
                                            ></span>
                                        }
                                        <icon
                                            class="relative z-10 text-2xl"
                                            [class.opacity-30]="
                                                $index !== index()
                                            "
                                            >{{
                                                !is_valid
                                                    ? 'error'
                                                    : $index === index()
                                                      ? 'play_arrow'
                                                      : 'not_started'
                                            }}</icon
                                        >
                                    </div>
                                </div>
                                <div class="flex w-1/2 flex-1 flex-col">
                                    <div class="truncate">{{ item.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ item.playlist_name }}
                                    </div>
                                </div>
                                <div
                                    class="rounded bg-info px-2 py-1 font-mono text-xs text-info-content"
                                >
                                    {{ item.duration / 1000 | mediaDuration }}
                                </div>
                            </button>
                        }
                    </div>
                    <div class="flex flex-col justify-end">
                        <div
                            class="rounded-lg bg-base-300 p-2 text-center text-xs opacity-30"
                        >
                            {{ 'APP.SIGNAGE.MEDIA_LIST_END' | translate }}
                        </div>
                    </div>
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

    private readonly _container =
        viewChild<ElementRef<HTMLDivElement>>('media_container');
    private readonly _image_element =
        viewChild<ElementRef<HTMLImageElement>>('img_el');
    private readonly _video_element =
        viewChild<ElementRef<HTMLVideoElement>>('video_el');

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
                this._video_element().nativeElement.play();
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
        if (item.valid_from && item.valid_from * 1000 > Date.now())
            return false;
        if (item.valid_until && item.valid_until * 1000 < Date.now())
            return false;
        const [from, until] = item.play_hours.split('-');
        if (from !== until) {
            const [from_hours, from_minutes] = from.split(':');
            const [until_hours, until_minutes] = until.split(':');
            const start = set(Date.now(), {
                hours: parseInt(from_hours),
                minutes: parseInt(from_minutes),
            }).valueOf();
            const end = set(Date.now(), {
                hours: parseInt(until_hours),
                minutes: parseInt(until_minutes),
            }).valueOf();
            if (start > Date.now()) return false;
            if (end < Date.now()) return false;
        }
        return true;
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
            old_item?.playlist !== item?.playlist &&
            this.isValidMedia(item)
        ) {
            this.event.emit({ type: 'playlist_count', ref_id: item.playlist });
            if (old_item.playlist && this.progress() > 0) {
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
            this._video_element().nativeElement.src = url.toString();
            this._video_element().nativeElement.classList.remove('hidden');
            try {
                this._video_element().nativeElement.play();
            } catch (e) {
                this.nextItem();
            }
        } else {
            this._video_element().nativeElement.classList.add('hidden');
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
            const video_el = this._previous_video_element().nativeElement;
            let index = indexValue - 1;
            if (index < 0) index = this._item_playlist.length - 1;
            const item = this._item_playlist[index];
            const url = this.url(item.id);
            if (url) {
                if (item.type === 'video') {
                    img_el.classList.add('hidden');
                    video_el.src = url.toString();
                    video_el.classList.remove('hidden');
                } else {
                    video_el.classList.add('hidden');
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
        prev_container_el.classList.remove('player-animate');
        container_el.classList.remove('player-animate');
        this.in_animation.set(false);
        this.togglePause();
    }
}
