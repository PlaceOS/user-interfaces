import { DatePipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    computed,
    effect,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AsyncHandler, randomInt, settingSignal } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';

export interface CameraSnapshotData {
    camera_snapshot_urls: string[];
    camera_url?: string;
    room_name: string;
}

interface MpegTsPlayer {
    attachMediaElement(media_el: HTMLMediaElement): void;
    detachMediaElement(): void;
    destroy(): void;
    load(): void;
    play(): Promise<void>;
}

interface MpegTsLibrary {
    createPlayer(
        media_data_source: {
            type: 'mpegts';
            isLive: boolean;
            url: string;
        },
        config?: Record<string, unknown>,
    ): MpegTsPlayer;
    isSupported(): boolean;
}

@Component({
    selector: 'camera-snapshot-modal',
    template: `
        <div>
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    Camera Feed - {{ data.room_name }}
                </h2>
                <button
                    icon
                    type="button"
                    matRipple
                    aria-label="Close camera feed"
                    mat-dialog-close
                >
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="mb-2 max-h-[65vh] w-3xl max-w-[calc(100vw-2rem)] space-y-4 overflow-auto px-2"
            >
                <div
                    class="border-base-300 bg-base-300 relative flex min-h-[45vmin] max-w-full min-w-[80vmin] items-center justify-center overflow-hidden rounded-lg border"
                >
                    @if (has_multiple_feeds()) {
                        <button
                            icon
                            type="button"
                            matRipple
                            class="absolute left-2 z-10 bg-black/40 text-white hover:bg-black/60"
                            aria-label="Previous camera feed"
                            (click)="previousFeed()"
                        >
                            <icon>chevron_left</icon>
                        </button>
                        <button
                            icon
                            type="button"
                            matRipple
                            class="absolute right-2 z-10 bg-black/40 text-white hover:bg-black/60"
                            aria-label="Next camera feed"
                            (click)="nextFeed()"
                        >
                            <icon>chevron_right</icon>
                        </button>
                    }
                    @if (is_stream_url()) {
                        <video
                            #stream_video
                            autoplay
                            controls
                            muted
                            playsinline
                            class="h-full w-full object-contain"
                            [attr.aria-label]="
                                'Camera feed for ' + data.room_name
                            "
                        ></video>
                    } @else if (snapshot_url()) {
                        <img
                            auth
                            [source]="snapshot_url()"
                            class="h-full w-full object-contain"
                            [alt]="'Camera feed for ' + data.room_name"
                        />
                        <div
                            class="absolute right-2 bottom-2 overflow-hidden rounded-full px-2 py-1 font-mono text-xs text-white"
                        >
                            <div
                                class="absolute inset-0 z-0 bg-black opacity-30"
                            ></div>
                            <div class="relative z-10">
                                {{ timestamp() | date: 'mediumTime' }}
                            </div>
                        </div>
                    } @else {
                        <icon class="text-6xl opacity-30">hide_image</icon>
                    }
                    @if (has_multiple_feeds()) {
                        <div
                            class="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center space-x-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white"
                        >
                            <span
                                >{{ feed_index() + 1 }} /
                                {{ feed_count() }}</span
                            >
                        </div>
                    }
                </div>
                @if (data.camera_url) {
                    <a
                        btn
                        matRipple
                        class="flex items-center justify-center space-x-2"
                        [href]="data.camera_url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <icon>videocam</icon>
                        <span>Manage Camera</span>
                    </a>
                }
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                min-width: 500px;
                max-width: 90vw;
            }

            svg {
                font: inherit;
            }

            text {
                fill: white;
                stroke: black;
                stroke-width: 0.5px;
                stroke-linejoin: round;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        DatePipe,
        MatDialogModule,
        AuthenticatedImageDirective,
        IconComponent,
        MatRippleModule,
    ],
})
export class CameraSnapshotModalComponent extends AsyncHandler {
    public readonly data = inject<CameraSnapshotData>(MAT_DIALOG_DATA);

    public readonly timestamp = signal(Date.now());
    private readonly _stream_video_el =
        viewChild<ElementRef<HTMLVideoElement>>('stream_video');
    private _snapshot_interval = settingSignal('snapshot_interval', 10 * 1000);
    private _stream_player: MpegTsPlayer | null = null;
    private _stream_source = '';
    private _stream_load_id = 0;

    public readonly feed_index = signal(0);

    public readonly feed_urls = computed(() => {
        return this.data.camera_snapshot_urls?.filter((url) => !!url) || [];
    });

    public readonly feed_count = computed(() => this.feed_urls().length);

    public readonly has_multiple_feeds = computed(() => this.feed_count() > 1);

    public readonly stream_url = computed(() => {
        return this.feed_urls()[this.feed_index()] || '';
    });

    public readonly is_stream_url = computed(() => {
        const url = this.stream_url().split(/[?#]/)[0].toLowerCase();
        return url.endsWith('/ts') || url.endsWith('.ts');
    });

    public readonly snapshot_url = computed(() => {
        const base_url = this.stream_url();
        if (!base_url) return '';

        const separator = base_url.includes('?') ? '&' : '?';
        return `${base_url}${separator}t=${this.timestamp()}`;
    });

    private _on_interval = effect(() => {
        if (this.is_stream_url()) return this.clearTimeout('refresh');
        const delay = this._snapshot_interval();
        this._refresh(delay);
    });

    private _on_stream_url = effect(() => {
        const video_el = this._stream_video_el()?.nativeElement;
        const stream_url = this.is_stream_url() ? this.stream_url() : '';
        if (!video_el || !stream_url) return this._destroyMpegTsPlayer();
        void this._loadMpegTsPlayer(stream_url, video_el);
    });

    private _on_feed_count = effect(() => {
        const feed_count = this.feed_count();
        if (!feed_count || this.feed_index() < feed_count) return;
        this.feed_index.set(feed_count - 1);
    });

    public nextFeed() {
        this._setFeedIndex(this.feed_index() + 1);
    }

    public previousFeed() {
        this._setFeedIndex(this.feed_index() - 1);
    }

    private _refresh(delay: number) {
        this.timeout(
            'refresh',
            () => {
                this.timestamp.set(Date.now());
                this._refresh(delay);
            },
            delay + randomInt(1000),
        );
    }

    public override ngOnDestroy() {
        this._destroyMpegTsPlayer();
        super.ngOnDestroy();
    }

    private _setFeedIndex(index: number) {
        const feed_count = this.feed_count();
        if (feed_count <= 1) return;
        this.feed_index.set((index + feed_count) % feed_count);
        this.timestamp.set(Date.now());
    }

    private async _loadMpegTsPlayer(
        stream_url: string,
        video_el: HTMLVideoElement,
    ) {
        if (this._stream_player && this._stream_source === stream_url) return;
        this._destroyMpegTsPlayer();
        const load_id = ++this._stream_load_id;
        this._stream_source = stream_url;
        const stream_module = await import('mpegts.js');
        if (load_id !== this._stream_load_id) return;
        const stream =
            (stream_module as { default?: MpegTsLibrary }).default ||
            (stream_module as unknown as MpegTsLibrary);
        if (!stream.isSupported()) return;
        const player = stream.createPlayer(
            { type: 'mpegts', isLive: true, url: stream_url },
            {
                enableStashBuffer: false,
                isLive: true,
                liveBufferLatencyChasing: true,
            },
        );
        this._stream_player = player;
        player.attachMediaElement(video_el);
        player.load();
        await player.play().catch(() => null);
    }

    private _destroyMpegTsPlayer() {
        this._stream_load_id++;
        this._stream_source = '';
        if (!this._stream_player) return;
        this._stream_player.detachMediaElement();
        this._stream_player.destroy();
        this._stream_player = null;
    }
}
