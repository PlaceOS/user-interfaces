import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { AsyncHandler, log, shuffleArrayWithFirstItem } from '@placeos/common';
import { MediaAnimation } from '@placeos/ts-client';

export interface MediaPlayerItem {
    id: string;
    name: string;
    playlist_name: string;
    animation: MediaAnimation;
    type: 'image' | 'video';
    start_time: number;
    duration: number;
    getURL: () => Promise<URL>;
}

export type MediaPlayerState = 'PAUSED' | 'PLAYING';

@Component({
    selector: 'media-player',
    template: `
        <div #previous_container class="absolute top-0 left-0 h-full w-full">
            <img
                #previous_image_el
                class="absolute top-0 left-0 h-full w-full object-contain object-center hidden"
            />
            <video
                #previous_video_el
                class="absolute top-0 left-0 h-full w-full object-contain object-center hidden"
            ></video>
        </div>
        <div #media_container class="absolute top-0 left-0 h-full w-full">
            <img
                #img_el
                class="absolute top-0 left-0 h-full w-full object-contain object-center"
            />
            <video
                #video_el
                class="absolute top-0 left-0 h-full w-full object-contain object-center"
            ></video>
        </div>
        @if (controls) {
            <div
                class="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 w-56 rounded-full overflow-hidden p-1 border border-base-300 bg-base-100"
                [matTooltip]="duration | mediaDuration"
                matTooltipPosition="above"
            >
                <mat-progress-bar
                    class="rounded-full overflow-hidden"
                    mode="determinate"
                    [value]="progress"
                ></mat-progress-bar>
                <div
                    *ngIf="in_animation"
                    class="absolute inset-1 rounded-full bg-success"
                ></div>
            </div>
            <div
                class="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full p-2 flex items-center space-x-2 text-lg overflow-hidden border border-base-300 bg-base-100"
            >
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="previousItem()"
                    matTooltip="Previous Media"
                >
                    <app-icon>skip_previous</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="togglePause()"
                    [matTooltip]="state === 'PLAYING' ? 'Playing' : 'Paused'"
                >
                    <app-icon>{{
                        state === 'PLAYING' ? 'pause' : 'play_arrow'
                    }}</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="nextItem()"
                    matTooltip="Next Media"
                >
                    <app-icon>skip_next</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="toggleLoop()"
                    [matTooltip]="
                        loop === 'ALL'
                            ? 'Loop [All]'
                            : loop === 'ONE'
                              ? 'Loop [One]'
                              : 'Loop [Off]'
                    "
                >
                    <app-icon [class.opacity-30]="loop === 'NONE'">
                        {{
                            loop === 'ALL'
                                ? 'repeat'
                                : loop === 'ONE'
                                  ? 'repeat_one'
                                  : 'repeat'
                        }}
                    </app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="toggleShuffle()"
                    [matTooltip]="shuffle ? 'Shuffle [On]' : 'Shuffle [Off]'"
                >
                    <app-icon [class.opacity-30]="!shuffle"> shuffle </app-icon>
                </button>
            </div>
            <div
                class="absolute flex flex-col top-4 bottom-24 right-4 bg-base-100 border border-base-300 overflow-auto rounded-xl p-2 space-y-2"
                *ngIf="show_playlist"
            >
                <div class="flex items-center space-x-4 p-2">
                    <h2>Media to play</h2>
                    <div class="text-xs opacity-30">
                        ({{ playlist_items?.length || 0 }} items)
                    </div>
                </div>
                <div>
                    @for (item of playlist_items; track item) {
                        <button
                            matRipple
                            class="flex items-center p-2 space-x-2 w-[20rem] text-left hover:bg-base-200 rounded-lg"
                            [class.overflow-visible]="$index === index"
                            [class.pointer-events-none]="$index === index"
                            (click)="setPlaylistItem($index)"
                        >
                            <div
                                class="h-10 w-10 rounded-full flex items-center justify-center"
                                [class.bg-info]="$index === index"
                                [class.text-info-content]="$index === index"
                                [class.bg-base-300]="$index !== index"
                            >
                                <div
                                    class="h-7 w-7 relative flex items-center justify-center"
                                >
                                    <span
                                        *ngIf="$index === index"
                                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-info opacity-75 z-0"
                                    ></span>
                                    <app-icon
                                        class="text-2xl relative z-10"
                                        [class.opacity-30]="$index !== index"
                                        >{{
                                            $index === index
                                                ? 'play_arrow'
                                                : 'not_started'
                                        }}</app-icon
                                    >
                                </div>
                            </div>
                            <div class="flex flex-col flex-1 w-1/2">
                                <div class="truncate">{{ item.name }}</div>
                                <div class="text-xs opacity-30">
                                    {{ item.playlist_name }}
                                </div>
                            </div>
                            <div
                                class="px-2 py-1 rounded bg-info text-info-content font-mono text-xs"
                            >
                                {{ item.duration / 1000 | mediaDuration }}
                            </div>
                        </button>
                    }
                </div>
                <div class="flex flex-col justify-end">
                    <div
                        class="p-2 opacity-30 bg-base-300 text-xs rounded-lg text-center"
                    >
                        End of Player Media
                    </div>
                </div>
            </div>
            <button
                icon
                matRipple
                class="absolute top-6 right-6 bg-base-100 border border-base-200 shadow"
                (click)="show_playlist = !show_playlist"
            >
                <app-icon>{{
                    show_playlist ? 'close' : 'queue_music'
                }}</app-icon>
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
})
export class MediaPlayerComponent extends AsyncHandler {
    @Input() public playlist: MediaPlayerItem[] = [];
    @Input() public controls: boolean = false;
    @Input() public loop: 'NONE' | 'ONE' | 'ALL' = 'ALL';
    @Input() public shuffle: boolean = false;
    @Input() public index: number = -1;
    @Input() public animation_time = 1000;
    @Input() public state: MediaPlayerState = 'PLAYING';
    @Output() public stateChange = new EventEmitter<MediaPlayerState>();
    @Output() public indexChange = new EventEmitter<number>();

    public duration = 0;
    public progress = 0;
    public show_playlist = false;
    public hold_over_item = true;
    public in_animation = false;

    private _item_playlist: MediaPlayerItem[] = [];

    private _item_urls: Record<string, URL> = {};
    private _item_start: number = 0;
    private _item_progress: number = 0;

    public get playlist_items() {
        return this._item_playlist;
    }

    public get active_item() {
        return this._item_playlist[this.index];
    }

    @ViewChild('previous_container', { static: true })
    private _previous_container: ElementRef<HTMLDivElement>;
    @ViewChild('previous_image_el', { static: true })
    private _previous_img_element: ElementRef<HTMLImageElement>;
    @ViewChild('previous_video_el', { static: true })
    private _previous_video_element: ElementRef<HTMLVideoElement>;

    @ViewChild('media_container', { static: true })
    private _container: ElementRef<HTMLDivElement>;
    @ViewChild('img_el', { static: true })
    private _image_element: ElementRef<HTMLImageElement>;
    @ViewChild('video_el', { static: true })
    private _video_element: ElementRef<HTMLVideoElement>;

    public ngOnInit() {
        this.interval('playlist_check', () => this._updateItem(), 50);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist) {
            if (this.state === 'PLAYING') this.togglePause();
            const current_item = this.active_item;
            this._item_playlist = [...(this.playlist || [])];
            const current_exists = this._item_playlist.find(
                (_) => _.id === current_item?.id,
            );
            if (this.index >= 0 && current_exists) {
                this._item_playlist = [current_item, ...this._item_playlist];
                this.hold_over_item = true;
                this.index = 0;
            } else {
                this.hold_over_item = false;
            }
            this.togglePause();
            console.log('Playlist:', this._item_playlist);
            this._updateItem();
        }
        if (changes.animation_time) {
            document.documentElement.style.setProperty(
                '--transition-duration',
                `${this.animation_time || 3000}ms`,
            );
        }
    }

    public url(id: string) {
        return this._item_urls[id];
    }

    public previousItem() {
        const new_index = (this.index - 1) % this._item_playlist.length;
        this.setPlaylistItem(new_index);
    }

    public togglePause() {
        this.clearTimeout('re-start');
        if (this.state === 'PLAYING') {
            this.state = 'PAUSED';
            this._item_progress = Date.now() - this._item_start;
            this._item_start = 0;
            if (this.active_item?.type === 'video') {
                this._video_element.nativeElement.pause();
            }
        } else {
            this.state = 'PLAYING';
            this._item_start = Date.now() - this._item_progress;
            this._item_progress = 0;
            if (this.active_item?.type === 'video') {
                this._video_element.nativeElement.play();
            }
            if (this.index === -1) this._updateItem();
        }
    }

    public nextItem() {
        if (this.hold_over_item) {
            this._item_playlist.shift();
            this.setPlaylistItem(0);
            this.hold_over_item = false;
            return;
        }
        let next_index = this.index + 1;
        if (this.loop === 'ONE') next_index = this.index;
        else if (
            this.loop === 'NONE' &&
            next_index === this._item_playlist.length
        ) {
            this.index = -1;
            this.state = 'PAUSED';
            this._item_start = 0;
            this._item_progress = 0;
            return;
        }
        const new_index = next_index % this._item_playlist.length;
        this.setPlaylistItem(new_index);
    }

    public toggleLoop() {
        if (this.loop === 'ALL') this.loop = 'ONE';
        else if (this.loop === 'NONE') this.loop = 'ALL';
        else if (this.loop === 'ONE') this.loop = 'NONE';
    }

    public toggleShuffle() {
        this.shuffle = !this.shuffle;
        const current_item = this.active_item;
        if (this.hold_over_item) {
            this._item_playlist.shift();
            this.hold_over_item = false;
        }
        if (this.shuffle) {
            shuffleArrayWithFirstItem(this._item_playlist, this.index);
            this.setPlaylistItem(0);
        } else {
            this._item_playlist = [...this.playlist];
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
        if (this.state === 'PAUSED') return;
        const duration = Date.now() - this._item_start;
        this.progress = Math.floor(
            (duration / (this.active_item?.duration || 15 * 1000)) * 100,
        );
        this.duration = Math.floor(duration / 1000);

        if (!this._item_playlist?.length) return;
        this._processURLs();
        if (this.index === -1) {
            this.setPlaylistItem(0);
        }
        const item = this.active_item;
        if (Date.now() > this._item_start + item.duration) {
            this.nextItem();
        }
    }

    private setPlaylistItem(index: number) {
        this.index = index;
        this.indexChange.emit(index);
        const item = this.active_item;
        if (!item) return;
        this._item_start = Date.now();
        this._item_progress = 0;
        this.progress = 0;
        this.duration = 0;
        const url = this.url(item.id);
        if (!url) {
            this.timeout('wait-for-url', () => this.setPlaylistItem(index));
            return;
        }
        if (item.type === 'video') {
            this._image_element.nativeElement.classList.add('hidden');
            this._video_element.nativeElement.src = url.toString();
            this._video_element.nativeElement.classList.remove('hidden');
            try {
                this._video_element.nativeElement.play();
            } catch (e) {
                this.nextItem();
            }
        } else {
            this._video_element.nativeElement.classList.add('hidden');
            this._image_element.nativeElement.src = url.toString();
            this._image_element.nativeElement.classList.remove('hidden');
            this._video_element.nativeElement.pause();
        }
        this._transition();
    }

    private async _processURLs() {
        const current_index = Math.max(this.index, 0);
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
        if (this.state === 'PLAYING') this.togglePause();
        this.in_animation = true;
        if (this.active_item.animation === MediaAnimation.Cut) {
            this.timeout('re-start', () => this._onTransitionEnd(), 500);
            return;
        }
        if (this.index > 0) {
            const img_el = this._previous_img_element.nativeElement;
            const video_el = this._previous_video_element.nativeElement;
            const index = this.index - 1;
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
        const prev_container_el = this._previous_container.nativeElement;
        const container_el = this._container.nativeElement;
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
                this.animation_time || 3000,
            );
        });
    }

    private _onTransitionEnd() {
        const prev_container_el = this._previous_container.nativeElement;
        const container_el = this._container.nativeElement;
        prev_container_el.classList.remove('opacity-0');
        this._previous_video_element.nativeElement.classList.add('hidden');
        this._previous_img_element.nativeElement.classList.add('hidden');
        prev_container_el.classList.remove('player-animate');
        container_el.classList.remove('player-animate');
        this.in_animation = false;
        this.togglePause();
    }
}
