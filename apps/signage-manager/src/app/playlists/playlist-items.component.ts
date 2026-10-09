import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
    afterNextRender,
    Component,
    computed,
    ElementRef,
    inject,
    Injector,
    linkedSignal,
    signal,
    viewChildren,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n } from '@placeos/common';
import {
    IconComponent,
    LoadErrorComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import {
    SignageMedia,
    SignagePlaylistItemSchedule,
    type SignagePlaylistSchedule,
} from '@placeos/ts-client';
import { SignageMediaService } from '../media/signage-media.service';
import { MediaThumbnailComponent } from '../shared/media-thumbnail.component';
import { SignageContextService } from '../signage-context.service';
import {
    playlistLoopDuration,
    playlistScheduleExpiryTooltip,
    playlistScheduleLabel,
    playlistScheduleNextPlayLabels,
} from '../signage-playlist.util';
import { PlaylistActionsComponent } from './playlist-actions.component';
import { SignagePlaylistService } from './signage-playlist.service';

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
                <playlist-actions />
            </div>
            @if (!loading() && items().length > 0 && !is_distribution()) {
                <div
                    class="text-base-content/60 flex items-center gap-1 px-4 pt-2 text-xs"
                    [matTooltip]="
                        'SIGNAGE_MANAGER.PLAYLIST_LOOP_TOOLTIP' | translate
                    "
                >
                    <icon class="text-sm">timer</icon>
                    {{
                        'SIGNAGE_MANAGER.PLAYLIST_LOOP_DURATION'
                            | translate
                                : {
                                      count: items().length,
                                      duration:
                                          loop_duration() / 1000
                                          | mediaDuration,
                                  }
                    }}
                </div>
            }
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
            } @else if (load_error()) {
                <load-error class="flex-1" (retry)="reloadItems()" />
            } @else if (items().length > 0 && !is_distribution()) {
                <div
                    class="w-full flex-1 overflow-auto px-3 py-2"
                    cdkDropList
                    role="list"
                    (cdkDropListDropped)="onDrop($event)"
                >
                    @for (item of items(); track item.id + '-' + $index) {
                        <div cdkDrag role="listitem" class="mb-2">
                            <div
                                #item_row
                                role="button"
                                tabindex="0"
                                class="bg-base-100 border-base-300 flex cursor-pointer items-center gap-3 rounded-lg border p-2 transition-colors"
                                [class.bg-primary]="
                                    isItemSelected(item, $index)
                                "
                                [class.text-primary-content]="
                                    isItemSelected(item, $index)
                                "
                                [class.hover:bg-base-200]="
                                    !isItemSelected(item, $index)
                                "
                                [class.ring-2]="isBulkItemSelected($index)"
                                [class.ring-primary]="
                                    isBulkItemSelected($index)
                                "
                                (click)="selectItem(item, $index)"
                                (keydown.enter)="
                                    selectItemWithKeyboard($event, item, $index)
                                "
                                (keydown.space)="
                                    selectItemWithKeyboard($event, item, $index)
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
                                <mat-checkbox
                                    [checked]="isBulkItemSelected($index)"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.SELECT_MEDIA'
                                            | translate: { name: item.name }
                                    "
                                    (click)="$event.stopPropagation()"
                                    (change)="toggleSelection($index)"
                                />
                                <media-thumbnail
                                    [item]="item"
                                    [cover]="true"
                                    class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                                />
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
                                        'SIGNAGE_MANAGER.ITEM_ACTIONS'
                                            | translate
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
                                            [disabled]="$first"
                                            (click)="moveItem($index, -1)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >arrow_upward</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.PLAYLIST_ITEM_MOVE_UP'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            mat-menu-item
                                            [disabled]="$last"
                                            (click)="moveItem($index, 1)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >arrow_downward</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.PLAYLIST_ITEM_MOVE_DOWN'
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
                        </div>
                    }
                </div>
            } @else if (items().length > 0) {
                <div class="w-full flex-1 overflow-auto px-3 py-2" role="list">
                    <div class="-mt-2 mb-2 flex justify-end lg:mt-0">
                        <button
                            type="button"
                            class="text-base-content/70 hover:bg-base-200 flex w-28 items-center justify-center gap-1 rounded px-2 py-1 text-xs font-medium"
                            matRipple
                            (click)="toggleAllSchedules($event)"
                        >
                            <icon class="text-base">{{
                                allSchedulesCollapsed()
                                    ? 'unfold_more'
                                    : 'unfold_less'
                            }}</icon>
                            <span class="mr-2">{{
                                (allSchedulesCollapsed()
                                    ? 'COMMON.EXPAND_ALL'
                                    : 'COMMON.COLLAPSE_ALL'
                                ) | translate
                            }}</span>
                        </button>
                    </div>
                    @for (item of items(); track item.id + '-' + $index) {
                        @let schedule = itemSchedule(item, $index);
                        <div role="listitem" class="mb-2">
                            <div
                                role="button"
                                tabindex="0"
                                class="bg-base-100 border-base-300 cursor-pointer rounded-lg border p-2 transition-colors"
                                [class.bg-primary]="
                                    isItemSelected(item, $index)
                                "
                                [class.text-primary-content]="
                                    isItemSelected(item, $index)
                                "
                                [class.hover:bg-base-200]="
                                    !isItemSelected(item, $index)
                                "
                                [class.ring-2]="isBulkItemSelected($index)"
                                [class.ring-primary]="
                                    isBulkItemSelected($index)
                                "
                                (click)="selectItem(item, $index)"
                                (keydown.enter)="
                                    selectItemWithKeyboard($event, item, $index)
                                "
                                (keydown.space)="
                                    selectItemWithKeyboard($event, item, $index)
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SELECT_MEDIA_ITEM'
                                        | translate: { name: item.name }
                                "
                            >
                                <div class="flex items-start gap-3">
                                    <mat-checkbox
                                        [checked]="isBulkItemSelected($index)"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SELECT_MEDIA'
                                                | translate: { name: item.name }
                                        "
                                        (click)="$event.stopPropagation()"
                                        (change)="toggleSelection($index)"
                                    />
                                    <media-thumbnail
                                        [item]="item"
                                        [cover]="true"
                                        class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                                    />
                                    <div class="min-w-0 flex-1">
                                        <div
                                            class="truncate text-sm font-medium"
                                        >
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
                                                    item.media_type ===
                                                    'webpage'
                                                "
                                                [class.text-success-content]="
                                                    item.media_type ===
                                                    'webpage'
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
                                        [matMenuTriggerFor]="
                                            distribution_item_menu
                                        "
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
                                                        'COMMON.PREVIEW'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        @if (can_update()) {
                                            <button
                                                type="button"
                                                mat-menu-item
                                                (click)="
                                                    editItemSchedule(schedule)
                                                "
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
                                                (click)="
                                                    removeItem(item, $index)
                                                "
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
                                    class="border-base-300 bg-base-100 text-base-content relative mt-4 flex flex-col gap-1 rounded-lg border text-sm"
                                >
                                    <button
                                        type="button"
                                        class="bg-base-100 absolute -top-3 left-4 flex items-center gap-1 rounded-lg px-2 text-xs font-medium"
                                        (click)="
                                            toggleSchedules(
                                                $event,
                                                item,
                                                $index
                                            )
                                        "
                                        [attr.aria-expanded]="
                                            schedulesOpen(item, $index)
                                        "
                                    >
                                        <span>{{
                                            'SIGNAGE_MANAGER.NAV_SCHEDULES'
                                                | translate
                                        }}</span>
                                        <icon class="text-base">{{
                                            schedulesOpen(item, $index)
                                                ? 'expand_less'
                                                : 'expand_more'
                                        }}</icon>
                                    </button>
                                    @if (schedulesOpen(item, $index)) {
                                        @if (schedule?.schedules?.length) {
                                            @for (
                                                item_schedule of schedule.schedules;
                                                track $index
                                            ) {
                                                <div
                                                    class="rounded-md p-2"
                                                    [matTooltip]="
                                                        schedule_tooltips().get(
                                                            item_schedule
                                                        )
                                                    "
                                                    matTooltipClass="playlist-schedule-tooltip"
                                                >
                                                    {{
                                                        scheduleLabel(
                                                            item_schedule
                                                        )
                                                    }}
                                                </div>
                                            }
                                        } @else {
                                            <div
                                                class="text-base-content/60 rounded-md p-2"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.NO_SCHEDULES'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                    }
                                </div>
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
            @if (selected_count() > 0) {
                <footer
                    class="bg-base-100 border-base-300 sticky bottom-2 z-20 mx-2 mt-2 flex items-center justify-between gap-2 rounded-xl border p-2 shadow-lg"
                    aria-live="polite"
                >
                    <div class="flex items-center gap-3">
                        <button
                            icon
                            type="button"
                            matRipple
                            class="hover:bg-base-200 rounded-xl"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.CLEAR_SELECTED_PLAYLIST_ITEMS'
                                    | translate
                            "
                            [matTooltip]="
                                'SIGNAGE_MANAGER.CLEAR_SELECTED_PLAYLIST_ITEMS'
                                    | translate
                            "
                            (click)="clearSelection()"
                        >
                            <icon>close</icon>
                        </button>
                        <div class="font-medium">
                            {{
                                'COMMON.SELECTED_COUNT'
                                    | translate: { count: selected_count() }
                            }}
                        </div>
                    </div>
                    @if (can_update()) {
                        <div class="flex items-center gap-2">
                            @if (is_distribution()) {
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    (click)="applyScheduleToSelected()"
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.APPLY_SCHEDULE'
                                            | translate
                                    "
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.APPLY_SCHEDULE'
                                            | translate
                                    "
                                >
                                    <icon>edit_calendar</icon>
                                </button>
                            }
                            <button
                                icon
                                default
                                error
                                type="button"
                                matRipple
                                (click)="deleteSelected()"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.REMOVE_SELECTED_FROM_PLAYLIST'
                                        | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.REMOVE_SELECTED_FROM_PLAYLIST'
                                        | translate
                                "
                            >
                                <icon>delete</icon>
                            </button>
                        </div>
                    }
                </footer>
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

            ::ng-deep .playlist-schedule-tooltip .mdc-tooltip__surface {
                white-space: pre-line;
            }
        `,
    ],
    imports: [
        DragDropModule,
        MatCheckboxModule,
        MatRippleModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        IconComponent,
        LoadErrorComponent,
        MediaDurationPipe,
        TranslatePipe,
        MediaThumbnailComponent,
        PlaylistActionsComponent,
    ],
})
export class PlaylistItemsComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _media_service = inject(SignageMediaService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _injector = inject(Injector);
    private readonly _rows = viewChildren<ElementRef<HTMLElement>>('item_row');

    public readonly selected_playlist =
        this._playlist_service.selected_playlist;
    public readonly selected_item =
        this._playlist_service.selected_playlist_item;
    public readonly selected_item_index =
        this._playlist_service.selected_playlist_item_index;
    public readonly can_update = this._context.can_update;
    public readonly items = this._playlist_service.playlist_media_items;
    /** Only show the spinner when there are no items to show yet */
    public readonly loading = computed(
        () =>
            this._playlist_service.playlist_media_loading() &&
            !this.items().length,
    );
    /** Whether the items failed to load */
    public readonly load_error = this._playlist_service.playlist_media_error;
    /** Time in milliseconds to play each item once */
    public readonly loop_duration = computed(() =>
        playlistLoopDuration(
            this.items(),
            this.selected_playlist()?.default_duration,
        ),
    );
    public readonly item_schedules =
        this._playlist_service.playlist_item_schedules;
    public readonly item_schedule_list =
        this._playlist_service.playlist_item_schedule_list;
    public readonly is_distribution = () =>
        !!this.selected_playlist()?.distribution;
    public readonly collapsed_schedules = signal<Record<string, boolean>>({});
    public readonly selected_indices = linkedSignal({
        source: () => [this.selected_playlist()?.id, this.items()] as const,
        computation: () => new Set<number>(),
    });
    public readonly selected_items = computed(() => {
        const selected_indices = this.selected_indices();
        return this.items().flatMap((item, index) =>
            selected_indices.has(index) ? [{ item, index }] : [],
        );
    });
    public readonly selected_count = computed(
        () => this.selected_items().length,
    );

    public selectItem(item: SignageMedia, index: number) {
        this._playlist_service.selected_playlist_item.set(item);
        this._playlist_service.selected_playlist_item_index.set(index);
    }

    public isItemSelected(item: SignageMedia, index: number) {
        return (
            this.selected_item()?.id === item.id &&
            this.selected_item_index() === index
        );
    }

    public isBulkItemSelected(index: number) {
        return this.selected_indices().has(index);
    }

    public toggleSelection(index: number) {
        this.selected_indices.update((indices) => {
            const selected_indices = new Set(indices);
            selected_indices.has(index)
                ? selected_indices.delete(index)
                : selected_indices.add(index);
            return selected_indices;
        });
    }

    public clearSelection() {
        this.selected_indices.set(new Set<number>());
    }

    public itemSchedule(item: SignageMedia, index = -1) {
        const schedule = this.item_schedule_list()[index];
        if (schedule?.media?.id === item.id) return schedule;
        return (
            this.item_schedules().get(item.id) ||
            new SignagePlaylistItemSchedule({
                item_id: item.id,
                media: item,
            })
        );
    }

    public scheduleLabel = playlistScheduleLabel;

    /** Next plays tooltip of each item schedule. Updates when the schedules change. */
    public readonly schedule_tooltips = computed(
        () =>
            new Map(
                this.item_schedule_list().flatMap((item) =>
                    (item.schedules || []).map(
                        (schedule) =>
                            [schedule, this.scheduleTooltip(schedule)] as const,
                    ),
                ),
            ),
    );

    public scheduleTooltip(schedule: Partial<SignagePlaylistSchedule>) {
        const labels = playlistScheduleNextPlayLabels(schedule);
        const expiry = playlistScheduleExpiryTooltip(schedule);
        return [
            `-- ${i18n('SIGNAGE_MANAGER.NEXT_5_PLAYS')} --`,
            ...(labels.length
                ? labels
                : [i18n('SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES')]),
            ...(expiry ? [`${i18n('FORM.EXPIRES_AT')}: ${expiry}`] : []),
        ].join('\n');
    }

    public scheduleKey(item: SignageMedia, index: number) {
        const schedule = this.itemSchedule(item, index);
        return `${schedule.id || schedule.item_id || item.id}:${index}`;
    }

    public schedulesOpen(item: SignageMedia, index: number) {
        return !this.collapsed_schedules()[this.scheduleKey(item, index)];
    }

    public toggleSchedules(event: Event, item: SignageMedia, index: number) {
        event.preventDefault();
        event.stopPropagation();
        const key = this.scheduleKey(item, index);
        this.collapsed_schedules.update((state) => ({
            ...state,
            [key]: !state[key],
        }));
    }

    public allSchedulesCollapsed() {
        const items = this.items();
        return (
            items.length > 0 &&
            items.every((item, index) => !this.schedulesOpen(item, index))
        );
    }

    public toggleAllSchedules(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.allSchedulesCollapsed()) {
            this.collapsed_schedules.set({});
            return;
        }
        const collapsed: Record<string, boolean> = {};
        this.items().forEach((item, index) => {
            collapsed[this.scheduleKey(item, index)] = true;
        });
        this.collapsed_schedules.set(collapsed);
    }

    /**
     * Select an item with Enter or Space on its row. Keys from controls in
     * the row, such as the checkbox and the actions button, keep their own
     * behaviour.
     */
    public selectItemWithKeyboard(
        event: Event,
        item: SignageMedia,
        index: number,
    ) {
        if (event.target !== event.currentTarget) return;
        event.preventDefault();
        event.stopPropagation();
        this.selectItem(item, index);
    }

    public previewItem(item: SignageMedia) {
        this._media_service.previewMedia(item);
    }

    public editItemSchedule(schedule: SignagePlaylistItemSchedule) {
        this._playlist_service.editPlaylistItemSchedules([schedule]);
    }

    public async applyScheduleToSelected() {
        const schedules = this.selected_items().map(({ item, index }) =>
            this.itemSchedule(item, index),
        );
        if (await this._playlist_service.editPlaylistItemSchedules(schedules)) {
            this.clearSelection();
        }
    }

    public async removeItem(item: SignageMedia, item_index: number) {
        const playlist = this.selected_playlist();
        if (!playlist?.id || !item?.id) return;
        const schedule = playlist.distribution
            ? this.itemSchedule(item, item_index)
            : null;
        const playlist_item_id = schedule?.id || schedule?.item_id || item.id;
        await this._playlist_service.removeMediaFromPlaylist(
            playlist.id,
            playlist_item_id,
            item_index,
        );
        if (this.isItemSelected(item, item_index)) {
            this._playlist_service.selected_playlist_item.set(null);
            this._playlist_service.selected_playlist_item_index.set(null);
        }
    }

    public async deleteSelected() {
        const playlist = this.selected_playlist();
        if (!playlist?.id) return;
        const selected_items = this.selected_items().map(({ item, index }) => {
            const schedule = playlist.distribution
                ? this.itemSchedule(item, index)
                : null;
            return {
                id: schedule?.id || schedule?.item_id || item.id,
                index,
            };
        });
        if (
            await this._playlist_service.removeMediaItemsFromPlaylist(
                playlist.id,
                selected_items,
            )
        ) {
            this.clearSelection();
        }
    }

    public reloadItems() {
        this._playlist_service.reloadPlaylistMedia();
    }

    public async onDrop(event: CdkDragDrop<SignageMedia[]>) {
        await this._reorder(event.previousIndex, event.currentIndex);
    }

    /**
     * Move an item one place, for users who cannot drag. Keeps the focus
     * on the moved item, so it can be moved again.
     * @param offset -1 to move up, 1 to move down
     */
    public async moveItem(index: number, offset: -1 | 1) {
        const target = index + offset;
        const saved = this._reorder(index, target);
        afterNextRender(() => this._rows()[target]?.nativeElement.focus(), {
            injector: this._injector,
        });
        await saved;
    }

    private async _reorder(from: number, to: number) {
        if (!this.can_update() || this.is_distribution()) return;
        const playlist = this.selected_playlist();
        const current_items = [...this.items()];
        if (!playlist?.id || from === to) return;
        if (to < 0 || to >= current_items.length) return;
        moveItemInArray(current_items, from, to);
        await this._playlist_service.reorderPlaylistMedia(
            playlist.id,
            current_items.map((m) => m.id),
        );
    }
}
