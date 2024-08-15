import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';

export interface MediaPlayerItem {
    id: string;
    type: 'image' | 'video';
    start_time: number;
    duration: number;
    getURL: () => URL;
}

export type MediaPlayerState = 'PAUSED' | 'PLAYING';

@Component({
    selector: 'media-player',
    template: `
        <img #img_el class="absolute inset-0 object-contain object-center" />
        <video
            #video_el
            class="absolute inset-0 object-contain object-center"
        ></video>
        @if (controls) {
            <div
                class="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full p-2 flex items-center space-x-2 text-lg overflow-hidden border border-neutral"
            >
                <div class="absolute inset-0 bg-base-content opacity-30"></div>
                <button
                    icon
                    matRipple
                    class="text-base-100"
                    (click)="previousItem()"
                    matTooltip="Previous Media"
                >
                    <app-icon>skip_previous</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-base-100"
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
                    class="text-base-100"
                    (click)="nextItem()"
                    matTooltip="Next Media"
                >
                    <app-icon>skip_next</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-base-100"
                    (click)="toggleLoop()"
                    [matTooltip]="
                        loop === 'ALL'
                            ? 'Loop'
                            : loop === 'ONE'
                              ? 'Loop One'
                              : 'No Loop'
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
                    class="text-base-100"
                    (click)="toggleShuffle()"
                    [matTooltip]="shuffle ? 'Shuffle On' : 'Shuffle Off'"
                >
                    <app-icon [class.opacity-30]="!shuffle"> shuffle </app-icon>
                </button>
            </div>
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
    @Input() public controls: boolean = true;
    @Input() public loop: 'NONE' | 'ONE' | 'ALL' = 'ALL';
    @Input() public shuffle: boolean = false;
    @Input() public index: number = -1;
    @Input() public state: MediaPlayerState = 'PAUSED';
    @Output() public stateChange = new EventEmitter<MediaPlayerState>();
    @Output() public indexChange = new EventEmitter<number>();

    private _item_playlist: MediaPlayerItem[] = [];

    private _item_urls: Record<string, URL> = {};
    private _item_start: number = 0;
    private _item_progress: number = 0;

    public get active_item() {
        return this._item_playlist[this.index];
    }

    @ViewChild('img_el', { static: true })
    private _image_element: ElementRef<HTMLImageElement>;
    @ViewChild('video_el', { static: true })
    private _video_element: ElementRef<HTMLVideoElement>;

    public ngOnInit() {
        this.interval('playlist_check', () => this._updateItem(), 50);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist) {
            this._item_playlist = this.playlist || [];
            this._updateItem();
        }
    }

    public url(id: string) {
        return this._item_urls[id];
    }

    public previousItem() {
        const new_index = (this.index - 1) % this._item_playlist.length;
        this._setPlaylistItem(new_index);
    }

    public togglePause() {
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
        }
    }

    public nextItem() {
        const new_index = (this.index + 1) % this._item_playlist.length;
        this._setPlaylistItem(new_index);
    }

    public toggleLoop() {
        if (this.loop === 'ALL') this.loop = 'ONE';
        else if (this.loop === 'NONE') this.loop = 'ALL';
        else if (this.loop === 'ONE') this.loop = 'NONE';
    }

    public toggleShuffle() {
        this.shuffle = !this.shuffle;
    }

    private _updateItem() {
        this._processURLs();
        if (this.state === 'PAUSED') return;
        if (!this._item_playlist?.length) return;
        if (this.index === -1) {
            this._setPlaylistItem(0);
        }
        const item = this.active_item;
        if (Date.now() > this._item_start + item.duration * 1000) {
            this.nextItem();
        }
    }

    private _setPlaylistItem(index: number) {
        this.index = index;
        this.indexChange.emit(index);
        const item = this.active_item;
        if (!item) return;
        this._item_start = Date.now();
        this._item_progress = 0;
        if (item.type === 'video') {
            this._image_element.nativeElement.classList.add('hidden');
            this._video_element.nativeElement.src = this.url(
                item.id,
            ).toString();
            this._video_element.nativeElement.classList.remove('hidden');
        } else {
            this._video_element.nativeElement.classList.add('hidden');
            this._image_element.nativeElement.src = this.url(
                item.id,
            ).toString();
            this._image_element.nativeElement.classList.remove('hidden');
        }
    }

    private _processURLs() {
        if (!this._item_playlist?.length) return;
        // Get current
        const current_item = this._item_playlist[Math.max(this.index, 0)];
        // Get previous 2 items

        // Get next 2 items

        // Request new URLs

        // Revoke old URLs
    }
}
