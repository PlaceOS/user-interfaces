import { DragDropModule } from '@angular/cdk/drag-drop';

import {
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    inject,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AuthenticatedImageDirective,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

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
        @if (media().length > 0) {
            <div
                class="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                cdkDropList
                id="media-list"
                role="list"
                [cdkDropListData]="media()"
                [cdkDropListConnectedTo]="playlist_ids"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media_item of media(); track media_item.id) {
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
                            <icon class="text-base-100 text-2xl">add</icon>
                        </div>
                        <mat-checkbox
                            class="absolute top-4 right-4 z-20 rounded"
                            [checked]="isSelected(media_item.id)"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SELECT_MEDIA'
                                    | translate: { name: media_item.name }
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
                                    | translate: { name: media_item.name }
                            "
                        >
                            @if (isExpired(media_item)) {
                                <div
                                    class="bg-error text-error-content absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 py-1 text-center text-xs font-bold tracking-wide"
                                >
                                    {{ 'SIGNAGE_MANAGER.EXPIRED' | translate }}
                                </div>
                            }
                            @if (
                                media_item.media_type === 'webpage' &&
                                !media_item.thumbnail_url
                            ) {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30"
                                        >http</icon
                                    >
                                </div>
                            } @else if (
                                media_item.media_type === 'plugin' &&
                                !media_item.thumbnail_url
                            ) {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30"
                                        >extension</icon
                                    >
                                </div>
                            } @else if (media_item.thumbnail_url) {
                                <img
                                    auth
                                    [source]="media_item.thumbnail_url"
                                    [alt]="media_item.name + ' thumbnail'"
                                    class="absolute -inset-px flex h-full w-full items-center justify-center rounded-lg object-contain object-center"
                                />
                                <div
                                    class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                >
                                    <icon class="text-2xl">expand_content</icon>
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
                                [class.bg-error]="
                                    media_item.media_type === 'plugin'
                                "
                                [class.text-error-content]="
                                    media_item.media_type === 'plugin'
                                "
                            >
                                {{
                                    (media_item.media_type === 'image'
                                        ? 'COMMON.IMAGE'
                                        : media_item.media_type === 'webpage'
                                          ? 'COMMON.WEBPAGE'
                                          : media_item.media_type === 'plugin'
                                            ? 'SIGNAGE_MANAGER.TYPE_PLUGIN'
                                            : 'COMMON.VIDEO'
                                    ) | translate
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
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.MEDIA_ACTIONS' | translate
                                "
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                @if (can_update()) {
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="editItem(media_item)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
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
                                        <div
                                            class="flex items-center space-x-2"
                                        >
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
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl"
                                                >ios_share</icon
                                            >
                                            <div class="pr-2">
                                                {{
                                                    'SIGNAGE_MANAGER.SHARE'
                                                        | translate
                                                }}
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
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-error text-2xl">
                                                delete
                                            </icon>
                                            <div class="pr-2">
                                                {{
                                                    'COMMON.REMOVE' | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                }
                            </mat-menu>
                        </div>
                        @if (media_item.tags?.length) {
                            <div
                                class="mt-3 flex min-h-6 w-full items-center gap-1 overflow-hidden"
                            >
                                @for (
                                    tag of visibleTags(media_item);
                                    track tag
                                ) {
                                    <span
                                        class="bg-base-200 text-base-content/80 max-w-[45%] truncate rounded px-2 py-1 text-xs"
                                    >
                                        {{ tag }}
                                    </span>
                                }
                                @if (remainingTagCount(media_item) > 0) {
                                    <span
                                        class="bg-base-300 text-base-content/80 rounded px-2 py-1 text-xs"
                                        [matTooltip]="
                                            remainingTags(media_item).join(', ')
                                        "
                                    >
                                        +{{ remainingTagCount(media_item) }}
                                    </span>
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        } @else {
            <div
                class="text-base-content/70 mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">hide_image</icon>
                <p>{{ 'SIGNAGE_MANAGER.NO_MEDIA' | translate }}</p>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        DragDropModule,
        MatCheckboxModule,
        MatRippleModule,
        MatMenuModule,
        MatTabsModule,
        MatTooltipModule,
        IconComponent,
        AuthenticatedImageDirective,
        MediaDurationPipe,
        TranslatePipe,
    ],
})
export class MediaListComponent implements OnChanges, OnInit {
    private readonly _service = inject(SignageService);
    private readonly _destroy = inject(DestroyRef);

    public readonly playlist_count = input(0);
    public readonly sidebar_hidden = signal(false);
    public playlist_ids: string[] = [];
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
    public readonly groups = this._service.signage_groups;
    public readonly selected_group_id = this._service.selected_group_id;
    public readonly is_sys_admin = this._service.is_sys_admin;
    public readonly can_switch_groups = computed(() =>
        this.is_sys_admin()
            ? this.groups().length > 0
            : this.groups().length > 1,
    );

    public selectGroup(group_id: string) {
        this.clearSelection();
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

    public isExpired(item: SignageMedia): boolean {
        return !!item.valid_until && item.valid_until * 1000 < Date.now();
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

    public readonly can_update = this._service.can_update;
    public readonly can_delete = this._service.can_delete;
    public readonly can_share = this._service.can_share;

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
