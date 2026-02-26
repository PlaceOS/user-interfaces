import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
    selector: 'playlist-items',
    template: `
        @if (selected_playlist()) {
            <div
                class="bg-base-100 border-base-300 mx-2 hidden items-center gap-2 rounded-b-lg border px-4 py-3 lg:flex"
            >
                <icon class="shrink-0 text-2xl opacity-60">playlist_play</icon>
                <div class="min-w-0 flex-1">
                    <h4 class="truncate text-lg font-medium">
                        {{ selected_playlist().name }}
                    </h4>
                </div>
                <button
                    icon
                    matRipple
                    matTooltip="Edit playlist"
                    (click)="editPlaylist()"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="Delete playlist"
                    (click)="removePlaylist()"
                >
                    <icon class="text-error">delete</icon>
                </button>
            </div>
            @if (items().length > 0) {
                <div
                    class="flex-1 overflow-auto px-3 py-2"
                    cdkDropList
                    (cdkDropListDropped)="onDrop($event)"
                >
                    @for (item of items(); track item.id) {
                        <div
                            cdkDrag
                            class="bg-base-100 border-base-300 mb-2 flex cursor-pointer items-center gap-3 rounded-lg border p-2 transition-colors"
                            [class.bg-primary]="selected_item()?.id === item.id"
                            [class.text-primary-content]="
                                selected_item()?.id === item.id
                            "
                            [class.hover:bg-base-200]="
                                selected_item()?.id !== item.id
                            "
                            (click)="selectItem(item)"
                        >
                            <icon
                                cdkDragHandle
                                class="shrink-0 cursor-grab opacity-40"
                                >drag_indicator</icon
                            >
                            <div
                                class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                            >
                                @if (item.thumbnail_url && item.thumbnail_id) {
                                    <img
                                        auth
                                        [source]="item.thumbnail_url"
                                        class="h-full w-full object-cover"
                                    />
                                } @else {
                                    <div
                                        class="flex h-full w-full items-center justify-center"
                                    >
                                        <icon class="text-2xl opacity-30">{{
                                            item.media_type === 'video'
                                                ? 'video_library'
                                                : item.media_type === 'webpage'
                                                  ? 'http'
                                                  : 'image'
                                        }}</icon>
                                    </div>
                                }
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{ item.name }}
                                </div>
                                <div class="flex items-center gap-2">
                                    <span
                                        class="rounded px-1.5 py-0.5 text-[10px] capitalize"
                                        [class.bg-info]="
                                            item.media_type === 'video'
                                        "
                                        [class.text-info-content]="
                                            item.media_type === 'video'
                                        "
                                        [class.bg-warning]="
                                            item.media_type === 'image'
                                        "
                                        [class.text-warning-content]="
                                            item.media_type === 'image'
                                        "
                                        [class.bg-success]="
                                            item.media_type === 'webpage'
                                        "
                                        [class.text-success-content]="
                                            item.media_type === 'webpage'
                                        "
                                    >
                                        {{ item.media_type }}
                                    </span>
                                    @if (item.play_time) {
                                        <span
                                            class="font-mono text-[10px] opacity-60"
                                        >
                                            {{
                                                item.play_time / 1000
                                                    | mediaDuration
                                            }}
                                        </span>
                                    }
                                </div>
                            </div>
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="item_menu"
                                (click)="$event.stopPropagation()"
                                aria-label="Item Actions"
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #item_menu="matMenu">
                                <button
                                    mat-menu-item
                                    (click)="previewItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">visibility</icon>
                                        <div class="pr-2">Preview</div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="removeItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl">
                                            delete
                                        </icon>
                                        <div class="pr-2">
                                            Remove from Playlist
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <icon class="text-6xl">queue_music</icon>
                    <p>No items in this playlist.</p>
                </div>
            }
        } @else {
            <div
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
                <icon class="text-6xl">playlist_play</icon>
                <p>Select a playlist to view its items.</p>
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

            .cdk-drag-placeholder {
                opacity: 0.3;
            }
        `,
    ],
    imports: [
        DragDropModule,
        MatRippleModule,
        MatMenuModule,
        MatTooltipModule,
        IconComponent,
        AuthenticatedImageDirective,
        MediaDurationPipe,
    ],
})
export class PlaylistItemsComponent {
    private readonly _service = inject(SignageService);

    public readonly selected_playlist = this._service.selected_playlist;
    public readonly selected_item = this._service.selected_playlist_item;
    public readonly items = toSignal(this._service.playlist_media_items$, {
        initialValue: [] as SignageMedia[],
    });

    public selectItem(item: SignageMedia) {
        this._service.selected_playlist_item.set(item);
    }

    public previewItem(item: SignageMedia) {
        this._service.previewMedia(item);
    }

    public editPlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.editPlaylist(playlist);
    }

    public removePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.removePlaylist(playlist);
    }

    public async removeItem(item: SignageMedia) {
        const playlist = this.selected_playlist();
        if (!playlist?.id || !item?.id) return;
        await this._service.removeMediaFromPlaylist(playlist.id, item.id);
        if (this.selected_item()?.id === item.id) {
            this._service.selected_playlist_item.set(null);
        }
    }

    public async onDrop(event: CdkDragDrop<SignageMedia[]>) {
        const playlist = this.selected_playlist();
        if (!playlist?.id) return;
        const current_items = [...this.items()];
        moveItemInArray(current_items, event.previousIndex, event.currentIndex);
        const item_ids = current_items.map((m) => m.id);
        await this._service.reorderPlaylistMedia(playlist.id, item_ids);
    }
}
