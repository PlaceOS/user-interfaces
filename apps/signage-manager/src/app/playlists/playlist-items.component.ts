import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AuthenticatedImageDirective,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { SignageMedia, SignagePlaylistItemSchedule } from '@placeos/ts-client';
import {
    playlistMediaIcon,
    playlistScheduleLabel,
} from '../signage-playlist.util';
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
                @if (requires_approval()) {
                    @if (can_approve()) {
                        <button
                            icon
                            default
                            type="button"
                            matRipple
                            [matTooltip]="
                                'SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP'
                                    | translate
                            "
                            (click)="approvePlaylist()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST'
                                    | translate
                            "
                        >
                            <icon class="text-warning">order_approve</icon>
                        </button>
                    } @else {
                        <button
                            icon
                            default
                            type="button"
                            matRipple
                            [matTooltip]="
                                'SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP'
                                    | translate
                            "
                            (click)="requestApproval()"
                            [disabled]="approval_request_loading()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED'
                                    | translate
                            "
                        >
                            @if (approval_request_loading()) {
                                <mat-spinner diameter="20" />
                            } @else {
                                <icon class="text-warning">approval</icon>
                            }
                        </button>
                    }
                }
                @if (can_update()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP' | translate
                        "
                        (click)="editPlaylist()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST' | translate
                        "
                    >
                        <icon>edit</icon>
                    </button>
                }
                @if (can_share()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP' | translate
                        "
                        (click)="sharePlaylist()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST'
                                | translate
                        "
                    >
                        <icon>ios_share</icon>
                    </button>
                }
                @if (can_delete()) {
                    <button
                        icon
                        default
                        error
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP'
                                | translate
                        "
                        (click)="removePlaylist()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST'
                                | translate
                        "
                    >
                        <icon>delete</icon>
                    </button>
                }
            </div>
            @if (loading()) {
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-3 p-8 opacity-70"
                >
                    <mat-spinner diameter="32" />
                    <p>
                        {{
                            'SIGNAGE_MANAGER.LOADING_PLAYLIST_ITEMS' | translate
                        }}
                    </p>
                </div>
            } @else if (items().length > 0 && !is_distribution()) {
                <div
                    class="w-full flex-1 overflow-auto px-3 py-2"
                    cdkDropList
                    role="list"
                    (cdkDropListDropped)="onDrop($event)"
                >
                    @for (item of items(); track item.id + '-' + $index) {
                        <div
                            cdkDrag
                            role="button"
                            tabindex="0"
                            class="bg-base-100 border-base-300 mb-2 flex cursor-pointer items-center gap-3 rounded-lg border p-2 transition-colors"
                            [class.bg-primary]="selected_item()?.id === item.id"
                            [class.text-primary-content]="
                                selected_item()?.id === item.id
                            "
                            [class.hover:bg-base-200]="
                                selected_item()?.id !== item.id
                            "
                            (click)="selectItem(item)"
                            (keydown.enter)="
                                selectItemWithKeyboard($event, item)
                            "
                            (keydown.space)="
                                selectItemWithKeyboard($event, item)
                            "
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SELECT_MEDIA_ITEM'
                                    | translate: { name: item.name }
                            "
                        >
                            <icon
                                cdkDragHandle
                                class="shrink-0 cursor-grab opacity-40"
                                >drag_indicator</icon
                            >
                            <div
                                class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                            >
                                @let url = thumbnailURL(item);
                                @if (url && item.thumbnail_id) {
                                    <img
                                        auth
                                        [source]="url"
                                        [alt]="item.name + ' thumbnail'"
                                        class="h-full w-full object-cover text-xs"
                                    />
                                } @else {
                                    <div
                                        class="flex h-full w-full items-center justify-center"
                                    >
                                        <icon class="text-4xl opacity-30">{{
                                            item.media_type === 'video'
                                                ? 'video_library'
                                                : item.media_type === 'webpage'
                                                  ? 'http'
                                                  : item.media_type === 'plugin'
                                                    ? 'extension'
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
                                        [class.bg-error]="
                                            item.media_type === 'plugin'
                                        "
                                        [class.text-error-content]="
                                            item.media_type === 'plugin'
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
                                default
                                type="button"
                                matRipple
                                [matMenuTriggerFor]="item_menu"
                                (click)="$event.stopPropagation()"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.ITEM_ACTIONS' | translate
                                "
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #item_menu="matMenu">
                                <button
                                    type="button"
                                    mat-menu-item
                                    (click)="previewItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">visibility</icon>
                                        <div class="pr-2">
                                            {{ 'COMMON.PREVIEW' | translate }}
                                        </div>
                                    </div>
                                </button>
                                @if (can_update()) {
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="removeItem(item, $index)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-error text-2xl">
                                                delete
                                            </icon>
                                            <div class="pr-2">
                                                {{
                                                    'SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                }
                            </mat-menu>
                        </div>
                    }
                </div>
            } @else if (items().length > 0) {
                <div class="w-full flex-1 overflow-auto px-3 py-2" role="list">
                    @for (item of items(); track item.id + '-' + $index) {
                        @let schedule = itemSchedule(item);
                        <div
                            role="button"
                            tabindex="0"
                            class="bg-base-100 border-base-300 mb-2 cursor-pointer rounded-lg border p-2 transition-colors"
                            [class.bg-primary]="selected_item()?.id === item.id"
                            [class.text-primary-content]="
                                selected_item()?.id === item.id
                            "
                            [class.hover:bg-base-200]="
                                selected_item()?.id !== item.id
                            "
                            (click)="selectItem(item)"
                            (keydown.enter)="
                                selectItemWithKeyboard($event, item)
                            "
                            (keydown.space)="
                                selectItemWithKeyboard($event, item)
                            "
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SELECT_MEDIA_ITEM'
                                    | translate: { name: item.name }
                            "
                        >
                            <div class="flex items-start gap-3">
                                <div
                                    class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                                >
                                    @let url = thumbnailURL(item);
                                    @if (url && item.thumbnail_id) {
                                        <img
                                            auth
                                            [source]="url"
                                            [alt]="item.name + ' thumbnail'"
                                            class="h-full w-full object-cover text-xs"
                                        />
                                    } @else {
                                        <div
                                            class="flex h-full w-full items-center justify-center"
                                        >
                                            <icon class="text-4xl opacity-30">{{
                                                mediaIcon(item)
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
                                            [class.bg-error]="
                                                item.media_type === 'plugin'
                                            "
                                            [class.text-error-content]="
                                                item.media_type === 'plugin'
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
                                    default
                                    type="button"
                                    matRipple
                                    [matMenuTriggerFor]="distribution_item_menu"
                                    (click)="$event.stopPropagation()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.ITEM_ACTIONS'
                                            | translate
                                    "
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #distribution_item_menu="matMenu">
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="previewItem(item)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl"
                                                >visibility</icon
                                            >
                                            <div class="pr-2">
                                                {{
                                                    'COMMON.PREVIEW' | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    @if (can_update()) {
                                        <button
                                            type="button"
                                            mat-menu-item
                                            (click)="editItemSchedule(schedule)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >edit_calendar</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.EDIT_SCHEDULE'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            mat-menu-item
                                            (click)="removeItem(item, $index)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon
                                                    class="text-error text-2xl"
                                                >
                                                    delete
                                                </icon>
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                    }
                                </mat-menu>
                            </div>
                            <div
                                class="border-base-300 bg-base-100 relative mt-4 flex flex-col gap-1 rounded-lg border text-sm"
                            >
                                <div
                                    class="bg-base-100 absolute -top-2 left-4 rounded-lg px-2 text-xs font-medium"
                                >
                                    Schedules
                                </div>
                                @if (schedule?.schedules?.length) {
                                    @for (
                                        item_schedule of schedule.schedules;
                                        track $index
                                    ) {
                                        <div class="rounded-md p-2">
                                            {{ scheduleLabel(item_schedule) }}
                                        </div>
                                    }
                                } @else {
                                    <div class="text-base-content/60">
                                        {{
                                            'SIGNAGE_MANAGER.NO_SCHEDULES'
                                                | translate
                                        }}
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">queue_music</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_PLAYLIST_ITEMS' | translate }}</p>
                </div>
            }
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">playlist_play</icon>
                <p>{{ 'SIGNAGE_MANAGER.SELECT_PLAYLIST_ITEMS' | translate }}</p>
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
        MatProgressSpinnerModule,
        MatTooltipModule,
        IconComponent,
        AuthenticatedImageDirective,
        MediaDurationPipe,
        TranslatePipe,
    ],
})
export class PlaylistItemsComponent {
    private readonly _service = inject(SignageService);

    public readonly selected_playlist = this._service.selected_playlist;
    public readonly selected_item = this._service.selected_playlist_item;
    public readonly requires_approval =
        this._service.selected_playlist_requires_approval;
    public readonly can_approve = this._service.can_approve;
    public readonly can_update = this._service.can_update;
    public readonly can_delete = this._service.can_delete;
    public readonly can_share = this._service.can_share;
    public readonly loading = this._service.playlist_media_loading;
    public readonly approval_request_loading =
        this._service.playlist_approval_request_loading;
    public readonly items = this._service.playlist_media_items;
    public readonly item_schedules = this._service.playlist_item_schedules;
    public readonly is_distribution = () =>
        !!this.selected_playlist()?.distribution;

    public selectItem(item: SignageMedia) {
        this._service.selected_playlist_item.set(item);
    }

    public thumbnailURL(item: SignageMedia) {
        return `/api/engine/v2/signage/media/${item.id}/thumbnail`;
    }

    public mediaIcon(item: SignageMedia) {
        return playlistMediaIcon(item);
    }

    public itemSchedule(item: SignageMedia) {
        return (
            this.item_schedules().get(item.id) ||
            new SignagePlaylistItemSchedule({
                item_id: item.id,
                media: item,
            })
        );
    }

    public scheduleLabel = playlistScheduleLabel;

    public selectItemWithKeyboard(event: Event, item: SignageMedia) {
        event.preventDefault();
        event.stopPropagation();
        this.selectItem(item);
    }

    public previewItem(item: SignageMedia) {
        this._service.previewMedia(item);
    }

    public editItemSchedule(schedule: SignagePlaylistItemSchedule) {
        this._service.editPlaylistItemSchedule(schedule);
    }

    public editPlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.editPlaylist(playlist);
    }

    public removePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.removePlaylist(playlist);
    }

    public approvePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.approvePlaylist(playlist);
    }

    public requestApproval() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.requestPlaylistApproval(playlist);
    }

    public sharePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.sharePlaylist(playlist);
    }

    public async removeItem(item: SignageMedia, item_index: number) {
        const playlist = this.selected_playlist();
        if (!playlist?.id || !item?.id) return;
        await this._service.removeMediaFromPlaylist(
            playlist.id,
            item.id,
            item_index,
        );
        if (this.selected_item()?.id === item.id) {
            this._service.selected_playlist_item.set(null);
        }
    }

    public async onDrop(event: CdkDragDrop<SignageMedia[]>) {
        if (!this.can_update() || this.is_distribution()) return;
        const playlist = this.selected_playlist();
        if (!playlist?.id) return;
        const current_items = [...this.items()];
        moveItemInArray(current_items, event.previousIndex, event.currentIndex);
        const item_ids = current_items.map((m) => m.id);
        await this._service.reorderPlaylistMedia(playlist.id, item_ids);
    }
}
