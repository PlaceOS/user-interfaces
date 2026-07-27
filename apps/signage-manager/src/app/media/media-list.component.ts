import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgTemplateOutlet } from '@angular/common';

import {
    Component,
    computed,
    DestroyRef,
    effect,
    inject,
    input,
    OnInit,
    signal,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AuthenticatedImageDirective,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import { IntersectDirective } from '../shared/intersect.directive';
import { playlistMediaThumbnailUrl } from '../signage-playlist.util';
import { SignageService } from '../signage.service';

// Sentinel folder for media items without any tags.
const UNTAGGED = '\0untagged';

@Component({
    selector: 'media-list',
    template: `
        @if (can_switch_groups()) {
            <nav
                mat-tab-nav-bar
                class="bg-base-100/95 border-base-300 sticky top-2 z-30 mx-2 rounded-xl border"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.MEDIA_GROUPS_ARIA' | translate
                "
                [tabPanel]="group_tabs_panel"
            >
                @if (is_sys_admin()) {
                    <button
                        mat-tab-link
                        type="button"
                        [active]="!selected_group_id()"
                        (click)="selectGroup('')"
                    >
                        {{ 'SIGNAGE_MANAGER.ALL_GROUPS' | translate }}
                    </button>
                }
                @for (item of groups(); track item.group.id) {
                    <button
                        mat-tab-link
                        type="button"
                        [active]="selected_group_id() === item.group.id"
                        (click)="selectGroup(item.group.id)"
                    >
                        {{ item.group.name }}
                    </button>
                }
            </nav>
            <mat-tab-nav-panel #group_tabs_panel />
        }

        <!-- Folder view: show tag folders until one is opened -->
        @if (view_mode() === 'folder' && selected_folder() === null) {
            @if (folders().length > 0) {
                <div
                    class="grid w-full grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
                    role="list"
                >
                    @for (folder of folders(); track folder.id) {
                        <button
                            type="button"
                            role="listitem"
                            matRipple
                            class="border-base-300 bg-base-100 hover:border-info flex flex-col items-center justify-center rounded-lg border p-4 hover:shadow-xl"
                            (click)="openFolder(folder.id)"
                        >
                            <icon class="text-warning -my-2 text-8xl">{{
                                folder.untagged ? 'folder_open' : 'folder'
                            }}</icon>
                            <div
                                class="text-base-content w-full truncate text-center font-medium"
                                [matTooltip]="
                                    folder.untagged
                                        ? ('SIGNAGE_MANAGER.UNTAGGED'
                                          | translate)
                                        : folder.id
                                "
                            >
                                @if (folder.untagged) {
                                    {{ 'SIGNAGE_MANAGER.UNTAGGED' | translate }}
                                } @else {
                                    {{ folder.id }}
                                }
                            </div>
                            <div class="text-base-content/60 text-xs">
                                {{
                                    'COMMON.ITEM_COUNT'
                                        | translate: { count: folder.count }
                                }}
                            </div>
                        </button>
                    }
                </div>
            } @else if (loading()) {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32" />
                </div>
            } @else {
                <div
                    class="text-base-content/70 mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">folder_off</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_MEDIA' | translate }}</p>
                </div>
            }
        } @else {
            <!-- Folder breadcrumb when inside an opened folder -->
            @if (view_mode() === 'folder' && selected_folder() !== null) {
                <div
                    class="text-base-content/80 sticky z-30 mx-2 mt-4 items-center gap-1 px-2 text-sm"
                    [class.top-2]="!can_switch_groups()"
                    [class.top-16]="can_switch_groups()"
                >
                    <div
                        class="bg-base-100 border-base-300 inline-flex items-center rounded-xl border p-1"
                    >
                        <button
                            type="button"
                            matRipple
                            class="hover:text-base-content flex items-center gap-1 rounded-lg px-4 py-2 underline"
                            (click)="closeFolder()"
                        >
                            {{ 'SIGNAGE_MANAGER.VIEW_FOLDER' | translate }}
                        </button>
                        <icon class="text-base-content/60 text-xl"
                            >chevron_right</icon
                        >
                        <span class="text-base-content px-4 font-medium">
                            @if (selected_folder() === untagged_id) {
                                {{ 'SIGNAGE_MANAGER.UNTAGGED' | translate }}
                            } @else {
                                {{ selected_folder() }}
                            }
                        </span>
                    </div>
                </div>
            }

            @if (display_media().length > 0) {
                <div
                    [class]="
                        view_mode() === 'list'
                            ? 'flex w-full flex-col gap-2 p-4'
                            : 'grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    "
                    cdkDropList
                    id="media-list"
                    role="list"
                    [cdkDropListData]="display_media()"
                    [cdkDropListConnectedTo]="playlist_ids()"
                    (cdkDropListDropped)="drop($event)"
                >
                    @for (media_item of display_media(); track media_item.id) {
                        @if (view_mode() === 'list') {
                            <!-- List (row) layout -->
                            <div
                                cdkDrag
                                role="listitem"
                                class="border-base-300 bg-base-100 hover:border-info relative flex items-center gap-3 rounded-lg border p-2 hover:shadow-md"
                                [class.opacity-60]="isExpired(media_item)"
                                [class.ring-2]="isSelected(media_item.id)"
                                [class.ring-primary]="isSelected(media_item.id)"
                            >
                                <div
                                    class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30"
                                    *cdkDragPlaceholder
                                >
                                    <icon class="text-base-100 text-2xl"
                                        >add</icon
                                    >
                                </div>
                                <mat-checkbox
                                    [checked]="isSelected(media_item.id)"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.SELECT_MEDIA'
                                            | translate
                                                : { name: media_item.name }
                                    "
                                    (click)="$event.stopPropagation()"
                                    (change)="toggleSelection(media_item.id)"
                                />
                                <button
                                    preview
                                    type="button"
                                    matRipple
                                    (click)="previewItem(media_item)"
                                    class="bg-base-200 relative h-14 w-20 flex-none overflow-hidden rounded"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.PREVIEW_MEDIA'
                                            | translate
                                                : { name: media_item.name }
                                    "
                                >
                                    <ng-container
                                        [ngTemplateOutlet]="thumb"
                                        [ngTemplateOutletContext]="{
                                            item: media_item,
                                        }"
                                    />
                                </button>
                                <div class="flex w-px flex-1 flex-col">
                                    <button
                                        class="text-base-content w-full truncate text-left"
                                        [matTooltip]="media_item.name"
                                        (click)="toggleSelection(media_item.id)"
                                    >
                                        {{ media_item.name }}
                                    </button>
                                    <div class="flex items-center gap-2">
                                        <span
                                            class="rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                            [class]="typeBadgeClass(media_item)"
                                        >
                                            {{
                                                typeLabelKey(media_item)
                                                    | translate
                                            }}
                                        </span>
                                        @if (isExpired(media_item)) {
                                            <span
                                                class="bg-error text-error-content rounded px-2 py-1 text-xs font-bold"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.EXPIRED'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                        @if (media_item.play_time) {
                                            <span
                                                class="text-base-content/70 hidden font-mono text-xs sm:block"
                                            >
                                                {{
                                                    media_item.play_time / 1000
                                                        | mediaDuration
                                                }}
                                            </span>
                                        }
                                        @if (media_item.tags?.length) {
                                            <div
                                                class="hidden items-center gap-1 lg:flex"
                                            >
                                                @for (
                                                    tag of visibleTags(
                                                        media_item
                                                    );
                                                    track tag
                                                ) {
                                                    <span
                                                        class="bg-info-light text-info max-w-32 truncate rounded-full px-2 py-1 text-[0.625rem] font-medium"
                                                    >
                                                        {{ tag }}
                                                    </span>
                                                }
                                                @if (
                                                    remainingTagCount(
                                                        media_item
                                                    ) > 0
                                                ) {
                                                    <span
                                                        class="bg-info-light text-info rounded-full px-2 py-1 text-[0.625rem] font-medium"
                                                        [matTooltip]="
                                                            remainingTags(
                                                                media_item
                                                            ).join(', ')
                                                        "
                                                    >
                                                        +{{
                                                            remainingTagCount(
                                                                media_item
                                                            )
                                                        }}
                                                    </span>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    [matMenuTriggerFor]="menu"
                                    [matMenuTriggerData]="{ item: media_item }"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.MEDIA_ACTIONS'
                                            | translate
                                    "
                                >
                                    <icon>more_vert</icon>
                                </button>
                            </div>
                        } @else {
                            <!-- Grid (card) layout -->
                            <div
                                cdkDrag
                                role="listitem"
                                class="border-base-300 bg-base-100 hover:border-info relative flex flex-col items-center justify-center rounded-lg border p-3 hover:opacity-80 hover:shadow-xl"
                                [class.opacity-60]="isExpired(media_item)"
                                [class.ring-2]="isSelected(media_item.id)"
                                [class.ring-primary]="isSelected(media_item.id)"
                            >
                                <div
                                    class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30"
                                    *cdkDragPlaceholder
                                >
                                    <icon class="text-base-100 text-2xl"
                                        >add</icon
                                    >
                                </div>
                                <mat-checkbox
                                    class="absolute top-4 right-4 z-20 rounded"
                                    [checked]="isSelected(media_item.id)"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.SELECT_MEDIA'
                                            | translate
                                                : { name: media_item.name }
                                    "
                                    (click)="$event.stopPropagation()"
                                    (change)="toggleSelection(media_item.id)"
                                />
                                <button
                                    preview
                                    type="button"
                                    matRipple
                                    (click)="previewItem(media_item)"
                                    class="bg-base-200 relative h-36 w-full overflow-hidden rounded-lg"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.PREVIEW_MEDIA'
                                            | translate
                                                : { name: media_item.name }
                                    "
                                >
                                    @if (isExpired(media_item)) {
                                        <div
                                            class="bg-error text-error-content absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 py-1 text-center text-xs font-bold tracking-wide"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.EXPIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                    <ng-container
                                        [ngTemplateOutlet]="thumb"
                                        [ngTemplateOutletContext]="{
                                            item: media_item,
                                        }"
                                    />
                                    @if (thumbnailUrl(media_item)) {
                                        <div
                                            class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                        >
                                            <icon class="text-2xl"
                                                >expand_content</icon
                                            >
                                        </div>
                                    }
                                    <div
                                        class="absolute top-1 left-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                        [class]="typeBadgeClass(media_item)"
                                    >
                                        {{
                                            typeLabelKey(media_item) | translate
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
                                    <button
                                        class="text-base-content w-1/2 flex-1 truncate text-left"
                                        [matTooltip]="media_item.name"
                                        (click)="toggleSelection(media_item.id)"
                                    >
                                        {{ media_item.name }}
                                    </button>
                                    <button
                                        icon
                                        type="button"
                                        matRipple
                                        [matMenuTriggerFor]="menu"
                                        [matMenuTriggerData]="{
                                            item: media_item,
                                        }"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.MEDIA_ACTIONS'
                                                | translate
                                        "
                                    >
                                        <icon>more_vert</icon>
                                    </button>
                                </div>
                                @if (media_item.tags?.length) {
                                    <div
                                        class="flex min-h-6 w-full items-center gap-1 overflow-hidden"
                                    >
                                        @for (
                                            tag of visibleTags(media_item);
                                            track tag
                                        ) {
                                            <span
                                                class="bg-info-light text-info max-w-[45%] truncate rounded-full px-2 py-1 text-xs font-medium"
                                            >
                                                {{ tag }}
                                            </span>
                                        }
                                        @if (
                                            remainingTagCount(media_item) > 0
                                        ) {
                                            <span
                                                class="bg-info-light text-info rounded-full px-2 py-1 text-xs font-medium"
                                                [matTooltip]="
                                                    remainingTags(
                                                        media_item
                                                    ).join(', ')
                                                "
                                            >
                                                +{{
                                                    remainingTagCount(
                                                        media_item
                                                    )
                                                }}
                                            </span>
                                        }
                                    </div>
                                }
                            </div>
                        }
                    }
                    @if (has_more()) {
                        <div
                            class="col-span-full h-px w-full"
                            intersect
                            (intersect)="loadMore()"
                        ></div>
                    } @else {
                        <div
                            class="text-base-content/50 bg-base-content/10 col-span-full rounded-lg p-2 text-center text-xs"
                        >
                            {{ 'COMMON.END_OF_LIST' | translate }}
                        </div>
                    }
                </div>
            } @else if (loading()) {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32" />
                </div>
            } @else {
                <div
                    class="text-base-content/70 mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">hide_image</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_MEDIA' | translate }}</p>
                </div>
            }
        }

        <!-- Shared media actions menu (data passed per item) -->
        <mat-menu #menu="matMenu">
            <ng-template matMenuContent let-media_item="item">
                @if (can_update()) {
                    <button
                        type="button"
                        mat-menu-item
                        (click)="editItem(media_item)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">edit</icon>
                            <div class="pr-2">
                                {{ 'COMMON.EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (sidebar_hidden() && can_update()) {
                    <button
                        type="button"
                        mat-menu-item
                        (click)="addToPlaylist(media_item.id)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">add</icon>
                            <div class="pr-2">
                                {{
                                    'SIGNAGE_MANAGER.ADD_TO_PLAYLIST'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                }
                @if (can_share()) {
                    <button
                        type="button"
                        mat-menu-item
                        (click)="shareItem(media_item)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">ios_share</icon>
                            <div class="pr-2">
                                {{ 'SIGNAGE_MANAGER.SHARE' | translate }}
                            </div>
                        </div>
                    </button>
                }
                <button
                    type="button"
                    mat-menu-item
                    (click)="previewItem(media_item)"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">visibility</icon>
                        <div class="pr-2">
                            {{ 'COMMON.PREVIEW' | translate }}
                        </div>
                    </div>
                </button>
                @if (can_delete()) {
                    <button
                        type="button"
                        mat-menu-item
                        (click)="removeItem(media_item)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-2xl">delete</icon>
                            <div class="pr-2">
                                {{ 'COMMON.REMOVE' | translate }}
                            </div>
                        </div>
                    </button>
                }
            </ng-template>
        </mat-menu>

        <!-- Shared thumbnail visual (fills its container) -->
        <ng-template #thumb let-item="item">
            @if (item.media_type === 'webpage' && !thumbnailUrl(item)) {
                <div class="flex h-full w-full items-center justify-center">
                    <icon class="text-8xl opacity-30">http</icon>
                </div>
            } @else if (item.media_type === 'plugin' && !thumbnailUrl(item)) {
                <div class="flex h-full w-full items-center justify-center">
                    <icon class="text-8xl opacity-30">extension</icon>
                </div>
            } @else if (thumbnailUrl(item)) {
                <img
                    auth
                    [source]="thumbnailUrl(item)"
                    [alt]="item.name + ' thumbnail'"
                    class="absolute -inset-px flex h-full w-full items-center justify-center rounded-lg object-contain object-center"
                />
            } @else {
                <div class="flex h-full w-full items-center justify-center">
                    <icon class="text-8xl opacity-30">{{
                        item.media_type === 'video' ? 'video_library' : 'image'
                    }}</icon>
                </div>
            }
        </ng-template>

        @if (selected_count() > 0) {
            <footer
                class="bg-base-100 border-base-300 sticky bottom-2 z-20 mx-2 mt-2 flex items-center justify-between gap-2 rounded-xl border p-2 shadow-lg"
                aria-live="polite"
            >
                <div class="flex items-center gap-3">
                    <button
                        icon
                        matRipple
                        class="hover:bg-base-200 rounded-xl"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.CLEAR_SELECTED' | translate
                        "
                        [matTooltip]="
                            'SIGNAGE_MANAGER.CLEAR_SELECTED' | translate
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
                <div class="flex flex-wrap items-center gap-2">
                    @if (can_update()) {
                        <button
                            icon
                            default
                            matRipple
                            (click)="addTagsToSelected()"
                            [matTooltip]="'COMMON.TAGS' | translate"
                            [attr.aria-label]="'COMMON.TAGS' | translate"
                        >
                            <icon>sell</icon>
                        </button>
                    }
                    @if (can_delete()) {
                        <button
                            icon
                            default
                            matRipple
                            error
                            (click)="deleteSelected()"
                            [matTooltip]="'COMMON.DELETE' | translate"
                        >
                            <icon>delete</icon>
                        </button>
                    }
                    @if (can_update()) {
                        <button
                            icon
                            default
                            matRipple
                            (click)="addSelectedToPlaylist()"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.ADD_TO_PLAYLIST' | translate
                            "
                        >
                            <icon>playlist_add</icon>
                        </button>
                    }
                    @if (can_share()) {
                        <button
                            icon
                            default
                            matRipple
                            (click)="shareSelected()"
                            [matTooltip]="'SIGNAGE_MANAGER.SHARE' | translate"
                        >
                            <icon>ios_share</icon>
                        </button>
                    }
                </div>
            </footer>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                min-height: 100%;
            }

            ::ng-deep .cdk-drag-preview {
                opacity: 0.6;
            }
        `,
    ],
    imports: [
        DragDropModule,
        NgTemplateOutlet,
        MatCheckboxModule,
        MatRippleModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatTooltipModule,
        IconComponent,
        AuthenticatedImageDirective,
        MediaDurationPipe,
        TranslatePipe,
        IntersectDirective,
    ],
})
export class MediaListComponent implements OnInit {
    private readonly _service = inject(SignageService);
    private readonly _destroy = inject(DestroyRef);

    public readonly playlist_count = input(0);
    public readonly sidebar_hidden = signal(false);
    public readonly playlist_ids = computed(() =>
        new Array(this.playlist_count())
            .fill(0)
            .map((_, idx) => `playlist-${idx}`),
    );
    public readonly selected_ids = signal(new Set<string>());
    public readonly selected_media = computed(() => {
        const selected_ids = this.selected_ids();
        return this.media().filter((item) => selected_ids.has(item.id));
    });
    public readonly selected_count = computed(
        () => this.selected_media().length,
    );

    private _mql = window.matchMedia('(max-width: 767px)');
    private _onMediaChange = (e: MediaQueryListEvent | MediaQueryList) =>
        this.sidebar_hidden.set(e.matches);

    constructor() {
        // Leaving folder view (or switching group) closes any open folder.
        effect(() => {
            if (this.view_mode() !== 'folder') this.selected_folder.set(null);
        });
    }

    public ngOnInit() {
        this._onMediaChange(this._mql);
        this._mql.addEventListener('change', this._onMediaChange);
        this._destroy.onDestroy(() =>
            this._mql.removeEventListener('change', this._onMediaChange),
        );
    }

    public readonly media = this._service.filtered_media;
    public readonly media_tags = this._service.media_tags;
    public readonly loading = this._service.media_loading;
    public readonly view_mode = this._service.media_view_mode;
    public readonly groups = this._service.signage_groups;
    public readonly selected_group_id = this._service.selected_group_id;
    public readonly is_sys_admin = this._service.is_sys_admin;
    public readonly can_switch_groups = computed(
        () =>
            this._service.show_media_group_tabs() &&
            (this.is_sys_admin()
                ? this.groups().length > 0
                : this.groups().length > 1),
    );

    // Currently opened tag folder (null = showing the folder grid).
    public readonly selected_folder = signal<string | null>(null);
    public readonly untagged_id = UNTAGGED;

    // An always-present "Untagged" bucket shown first, then one folder per
    // distinct tag (sourced from the media-tags endpoint so the list is complete
    // regardless of how much media has been paged in). Tags are pre-sorted by the
    // service. Counts come from the media paged in so far, so they can undercount
    // large libraries until more pages load (the endpoint gives tags, not counts).
    public readonly folders = computed(() => {
        const media = this.media();
        const tags = this.media_tags();
        // Nothing to show at all -> leave empty so the empty state can render.
        if (!media.length && !tags.length) return [];
        const counts = new Map<string, number>();
        let untagged_count = 0;
        for (const item of media) {
            const item_tags = item.tags || [];
            if (!item_tags.length) {
                untagged_count++;
                continue;
            }
            for (const tag of item_tags) {
                counts.set(tag, (counts.get(tag) || 0) + 1);
            }
        }
        return [
            { id: UNTAGGED, count: untagged_count, untagged: true },
            ...tags.map((id) => ({
                id,
                count: counts.get(id) || 0,
                untagged: false,
            })),
        ];
    });

    // Media shown in the main list: filtered to the open folder in folder view,
    // otherwise the full (search-)filtered set.
    public readonly display_media = computed(() => {
        const folder = this.selected_folder();
        if (this.view_mode() !== 'folder' || folder === null) {
            return this.media();
        }
        if (folder === UNTAGGED) {
            return this.media().filter((item) => !(item.tags || []).length);
        }
        return this.media().filter((item) =>
            (item.tags || []).includes(folder),
        );
    });

    // Backend pagination: fetches the next page as the sentinel scrolls in.
    public readonly has_more = this._service.media_has_more;
    public loadMore() {
        this._service.loadMoreMedia();
    }

    public openFolder(folder_id: string) {
        this.selected_folder.set(folder_id);
    }

    public closeFolder() {
        this.selected_folder.set(null);
    }

    public selectGroup(group_id: string) {
        this.clearSelection();
        this.selected_folder.set(null);
        this._service.setSelectedGroup(group_id);
    }

    public isSelected(id: string) {
        return this.selected_ids().has(id);
    }

    public toggleSelection(id: string) {
        this.selected_ids.update((ids) => {
            const next_ids = new Set(ids);
            next_ids.has(id) ? next_ids.delete(id) : next_ids.add(id);
            return next_ids;
        });
    }

    public clearSelection() {
        this.selected_ids.set(new Set<string>());
    }

    public thumbnailUrl(item: SignageMedia): string {
        return playlistMediaThumbnailUrl(item);
    }

    public isExpired(item: SignageMedia): boolean {
        return !!item.valid_until && item.valid_until * 1000 < Date.now();
    }

    public typeLabelKey(item: SignageMedia): string {
        switch (item.media_type) {
            case 'image':
                return 'COMMON.IMAGE';
            case 'webpage':
                return 'COMMON.WEBPAGE';
            case 'plugin':
                return 'SIGNAGE_MANAGER.TYPE_PLUGIN';
            default:
                return 'COMMON.VIDEO';
        }
    }

    public typeBadgeClass(item: SignageMedia): string {
        switch (item.media_type) {
            case 'image':
                return 'bg-warning text-warning-content';
            case 'webpage':
                return 'bg-success text-success-content';
            case 'plugin':
                return 'bg-error text-error-content';
            default:
                return 'bg-info text-info-content';
        }
    }

    public visibleTags(item: SignageMedia): string[] {
        return (item.tags || []).slice(0, 2);
    }

    public remainingTags(item: SignageMedia): string[] {
        return (item.tags || []).slice(2);
    }

    public remainingTagCount(item: SignageMedia): number {
        return this.remainingTags(item).length;
    }

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

    public readonly shareItem = (item: SignageMedia) =>
        this._service.shareMedia(item);

    public async deleteSelected() {
        if (await this._service.removeMediaItems(this.selected_media())) {
            this.clearSelection();
        }
    }

    public async addSelectedToPlaylist() {
        const media_ids = this.selected_media().map((item) => item.id);
        if (await this._service.openBulkPlaylistSelectModal(media_ids)) {
            this.clearSelection();
        }
    }

    public async shareSelected() {
        if (await this._service.shareMediaItems(this.selected_media())) {
            this.clearSelection();
        }
    }

    public async addTagsToSelected() {
        if (await this._service.addMediaTags(this.selected_media())) {
            this.clearSelection();
        }
    }

    public readonly can_update = this._service.can_update;
    public readonly can_delete = this._service.can_delete;
    public readonly can_share = this._service.can_share;

    public drop(_event: any) {
        // No-op for media list drops
    }
}
