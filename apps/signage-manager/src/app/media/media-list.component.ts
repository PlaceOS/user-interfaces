import { CommonModule } from '@angular/common';
import {
    Component,
    DestroyRef,
    inject,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AuthenticatedImageDirective,
    IconComponent,
    MediaDurationPipe,
} from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

@Component({
    selector: 'media-list',
    template: `
        @if (media().length > 0) {
            <div
                class="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                cdkDropList
                id="media-list"
                [cdkDropListData]="media()"
                [cdkDropListConnectedTo]="playlist_ids"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media_item of media(); track media_item.id) {
                    <div
                        cdkDrag
                        class="border-base-300 bg-base-100 relative flex flex-col items-center justify-center rounded-lg border p-3 hover:opacity-80"
                    >
                        <div
                            class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30"
                            *cdkDragPlaceholder
                        >
                            <icon class="text-base-100 text-2xl">add</icon>
                        </div>
                        <button
                            preview
                            matRipple
                            (click)="previewItem(media_item)"
                            class="bg-base-200 relative h-36 w-full overflow-hidden rounded-lg"
                        >
                            @if (media_item.media_type === 'webpage') {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30"
                                        >http</icon
                                    >
                                </div>
                            } @else if (media_item.thumbnail_url) {
                                <img
                                    auth
                                    [source]="media_item.thumbnail_url"
                                    class="absolute -inset-px rounded-lg object-contain"
                                />
                                <div
                                    class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                >
                                    <icon class="text-2xl"
                                        >expand_content</icon
                                    >
                                </div>
                            } @else {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30">{{
                                        media_item.media_type === 'video'
                                            ? 'video_library'
                                            : 'image'
                                    }}</icon>
                                </div>
                            }

                            <div
                                class="absolute top-1 left-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="
                                    media_item.media_type === 'video'
                                "
                                [class.text-info-content]="
                                    media_item.media_type === 'video'
                                "
                                [class.bg-warning]="
                                    media_item.media_type === 'image'
                                "
                                [class.text-warning-content]="
                                    media_item.media_type === 'image'
                                "
                                [class.bg-success]="
                                    media_item.media_type === 'webpage'
                                "
                                [class.text-success-content]="
                                    media_item.media_type === 'webpage'
                                "
                            >
                                {{
                                    media_item.media_type === 'image'
                                        ? 'Image'
                                        : media_item.media_type === 'webpage'
                                          ? 'Webpage'
                                          : 'Video'
                                }}
                            </div>
                            @if (media_item.play_time) {
                                <div
                                    class="bg-info text-info-content absolute right-1 bottom-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                >
                                    {{
                                        media_item.play_time / 1000
                                            | mediaDuration
                                    }}
                                </div>
                            }
                        </button>
                        <div
                            class="relative top-1 flex w-full items-center justify-between"
                        >
                            <div
                                class="text-base-content w-1/2 flex-1 truncate"
                                [matTooltip]="media_item.name"
                            >
                                {{ media_item.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                aria-label="Media Actions"
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <button
                                    mat-menu-item
                                    (click)="editItem(media_item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">edit</icon>
                                        <div class="pr-2">Edit</div>
                                    </div>
                                </button>
                                @if (sidebar_hidden()) {
                                    <button
                                        mat-menu-item
                                        (click)="
                                            addToPlaylist(media_item.id)
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl"
                                                >add</icon
                                            >
                                            <div class="pr-2">
                                                Add to Playlist
                                            </div>
                                        </div>
                                    </button>
                                }
                                <button
                                    mat-menu-item
                                    (click)="previewItem(media_item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >visibility</icon
                                        >
                                        <div class="pr-2">Preview</div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="removeItem(media_item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl">
                                            delete
                                        </icon>
                                        <div class="pr-2">Remove</div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
                <icon class="text-6xl">hide_image</icon>
                <p>No media items found.</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            ::ng-deep .cdk-drag-preview {
                opacity: 0.6;
            }
        `,
    ],
    imports: [
        CommonModule,
        DragDropModule,
        MatRippleModule,
        MatMenuModule,
        MatTooltipModule,
        IconComponent,
        AuthenticatedImageDirective,
        MediaDurationPipe,
    ],
})
export class MediaListComponent implements OnChanges, OnInit {
    private readonly _service = inject(SignageService);
    private readonly _destroy = inject(DestroyRef);

    public readonly playlist_count = input(0);
    public readonly sidebar_hidden = signal(false);
    public playlist_ids: string[] = [];

    private _mql = window.matchMedia('(max-width: 767px)');
    private _onMediaChange = (e: MediaQueryListEvent | MediaQueryList) =>
        this.sidebar_hidden.set(e.matches);

    public ngOnInit() {
        this._onMediaChange(this._mql);
        this._mql.addEventListener('change', this._onMediaChange);
        this._destroy.onDestroy(() =>
            this._mql.removeEventListener('change', this._onMediaChange),
        );
    }

    public readonly media = toSignal(this._service.filtered_media, {
        initialValue: [] as SignageMedia[],
    });

    public readonly previewFile = (event: Event) =>
        this._service.previewFileFromInput(event);

    public readonly previewItem = (item: SignageMedia) =>
        this._service.previewMedia(item);

    public readonly editItem = (item: SignageMedia) =>
        this._service.editMedia(item);

    public readonly removeItem = (item: SignageMedia) =>
        this._service.removeMedia(item);

    public readonly addToPlaylist = (media_id: string) =>
        this._service.openPlaylistSelectModal(media_id);

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist_count) {
            this.playlist_ids = new Array(this.playlist_count())
                .fill(0)
                .map((_, idx) => `playlist-${idx}`);
        }
    }

    public drop(_event: any) {
        // No-op for media list drops
    }
}
