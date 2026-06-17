import { Clipboard } from '@angular/cdk/clipboard';
import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';

import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    resource,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { currentUser, notifyInfo, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import {
    listSignagePlaylistMedia,
    MediaAnimation,
    SignageMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import { getUnixTime, startOfMinute } from 'date-fns';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-playlist-media-list',
    template: `
        <div class="relative flex h-full w-full flex-col">
            @let playlist = selected_playlist();
            <div class="space-y-2 p-2">
                <h3
                    class="bg-base-100 flex items-center justify-center space-x-2 rounded-xl p-2"
                >
                    <div class="text-xl font-medium">Playlist</div>
                    <div
                        class="bg-base-200 rounded-sm px-2 py-1 font-mono text-xs"
                    >
                        {{ playlist?.name }}
                    </div>
                </h3>
                <button
                    icon
                    matRipple
                    [matMenuTriggerFor]="menu"
                    class="absolute top-2.5 right-2.5 m-0!"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editPlaylist()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">edit</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        [disabled]="approved() || !is_admin"
                        (click)="approvePlaylist(playlist)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">order_approve</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_APPROVE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="copyID(playlist?.id)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">content_copy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_COPY_ID'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removePlaylist()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-2xl">delete</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
                <div
                    details
                    class="bg-base-100 flex flex-wrap items-center rounded-xl p-1"
                >
                    <div
                        class="m-1 ml-2 rounded-sm px-2 py-1 text-xs"
                        [class.bg-success]="selected_playlist()?.enabled"
                        [class.text-success-content]="
                            selected_playlist()?.enabled
                        "
                        [class.bg-error]="!selected_playlist()?.enabled"
                        [class.text-error-content]="
                            !selected_playlist()?.enabled
                        "
                    >
                        {{
                            (selected_playlist()?.enabled
                                ? 'COMMON.ENABLED'
                                : 'COMMON.DISABLED'
                            ) | translate
                        }}
                    </div>
                    @if (selected_playlist()?.random) {
                        <div
                            class="bg-secondary text-secondary-content m-1 ml-2 rounded-sm px-2 py-1 text-xs"
                        >
                            {{ 'APP.CONCIERGE.SIGNAGE_SHUFFLE' | translate }}
                        </div>
                    }
                    <div
                        class="bg-base-200 m-1 rounded-sm px-2 py-2 text-xs"
                        matTooltip="Default Transition Animation"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate }}
                        <span
                            class="bg-base-300 ml-1 rounded-sm px-2 py-1 uppercase"
                            >{{
                                animation_name(
                                    selected_playlist()?.default_animation
                                )
                            }}</span
                        >
                    </div>
                    <div
                        class="bg-base-200 m-1 rounded-sm px-2 py-2 text-xs"
                        matTooltip="Default Playback Duration"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_DURATION' | translate }}
                        <span
                            class="bg-base-300 ml-1 rounded-sm px-2 py-1 font-mono"
                            >{{
                                selected_playlist()?.default_duration / 1000
                                    | mediaDuration
                            }}</span
                        >
                    </div>
                    <div
                        class="bg-base-200 m-1 rounded-sm px-2 py-2 text-xs"
                        matTooltip="Prefered Orientation"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate }}
                        <span
                            class="bg-base-300 ml-1 rounded-sm px-2 py-1 uppercase"
                            >{{ selected_playlist()?.orientation }}</span
                        >
                    </div>
                    @if (isScheduled(selected_playlist())) {
                        <div
                            class="bg-base-200 m-1 rounded-sm px-2 py-2 text-xs uppercase"
                        >
                            {{ 'COMMON.SCHEDULED' | translate }}
                        </div>
                    }
                </div>
                @if (!approved()) {
                    <button
                        matRipple
                        class="border-warning bg-warning text-warning-content flex w-full items-center space-x-2 rounded-sm p-1 text-xs shadow-sm"
                        [disabled]="!is_admin"
                        [matTooltip]=""
                        (click)="approvePlaylist(playlist)"
                    >
                        <icon class="text-warning-content ml-1 text-xl"
                            >warning</icon
                        >
                        <div>
                            {{
                                'APP.CONCIERGE.SIGNAGE_PLAYLISTS_NOT_APPROVED'
                                    | translate
                            }}
                        </div>
                        <div class="underline">Click here to approve</div>
                    </button>
                }
            </div>
            @if (loading()) {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <mat-spinner diameter="32" />
                    <p>{{ 'COMMON.LOADING' | translate }}...</p>
                </div>
            } @else if (media().length > 0) {
                <div
                    cdkDropList
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto p-2"
                    id="playlist-list"
                    [cdkDropListData]="media()"
                    [cdkDropListConnectedTo]="playlist_ids()"
                    (cdkDropListDropped)="drop($event)"
                >
                    @for (item of media(); track item) {
                        <div
                            cdkDrag
                            class="border-base-300 bg-base-100 relative flex h-20 w-full items-center space-x-2 rounded-lg border p-2"
                        >
                            @if (item.valid_from && now < item.valid_from) {
                                <div
                                    class="bg-warning absolute inset-0 z-0 rounded-lg opacity-10"
                                ></div>
                            } @else if (
                                item.valid_until && now > item.valid_until
                            ) {
                                <div
                                    class="bg-error absolute inset-0 z-0 rounded-lg opacity-10"
                                ></div>
                            }
                            <div
                                class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed"
                                *cdkDragPlaceholder
                            >
                                <icon class="text-base-100 text-2xl">
                                    add
                                </icon>
                            </div>
                            <button
                                matRipple
                                cdkDragHandle
                                class="hover:bg-base-200 m-0! flex h-full w-6 items-center justify-center rounded-sm"
                                matTooltip="Drag to reorder"
                            >
                                <icon>drag_handle</icon>
                            </button>
                            <button
                                preview
                                matRipple
                                class="bg-base-200 relative h-16 w-18 overflow-hidden rounded-lg"
                                (click)="previewItem(item)"
                            >
                                <img
                                    auth
                                    [source]="item.thumbnail_url"
                                    class="h-full w-full object-contain"
                                />
                                <div
                                    class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                >
                                    <icon class="text-2xl">expand_content</icon>
                                </div>
                            </button>
                            <div
                                class="text-base-content w-1/2 flex-1 truncate"
                            >
                                {{ item.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                aria-label="Media Actions"
                                [matMenuTriggerFor]="menu"
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <button mat-menu-item (click)="editItem(item)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"> edit </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="previewItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">
                                            visibility
                                        </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW'
                                                    | translate
                                            }}
                                        </div>
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
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <icon class="text-6xl">hide_image</icon>
                    <p>
                        {{
                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_MEDIA_EMPTY'
                                | translate
                        }}
                    </p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        TranslatePipe,
        IconComponent,
        MatMenuModule,
        MatRippleModule,
        AuthenticatedImageDirective,
        DragDropModule,
        MatTooltipModule,
        MediaDurationPipe,
        MatProgressSpinnerModule,
    ],
})
export class SignagePlaylistMediaListComponent {
    private _state = inject(SignageStateService);
    private _router = inject(Router);
    private _clipboard = inject(Clipboard);
    private _settings = inject(SettingsService);

    public readonly playlist = input('');
    public readonly playlist_count = input(0);
    public readonly approved = signal(0);
    public readonly loading = signal(false);

    public readonly playlist_ids = computed(() =>
        new Array(this.playlist_count())
            .fill(0)
            .map((_, idx) => `playlist-${idx}`),
    );

    public get is_admin() {
        const groups = currentUser().groups || [];
        const admin_group = this._settings.get('app.admin_group') || 'admin';
        return groups.includes(admin_group) || groups.includes('placeos_admin');
    }

    public readonly editPlaylist = () => {
        const playlist = this.selected_playlist();
        if (playlist) {
            this._state.editPlaylist(playlist);
        }
    };

    public readonly removeItem = async (item: SignageMedia) => {
        const playlist = this._playlist_media();
        if (!playlist) return;
        const list = playlist.items.filter((_) => _ !== item.id);
        await this._state.updatePlaylistMedia(this.playlist(), list);
    };

    public readonly previewItem = (item: SignageMedia) =>
        this._state.previewMedia(item);

    public readonly editItem = (item: SignageMedia) =>
        this._state.editMedia(item);

    public readonly removePlaylist = () => {
        const playlist = this.selected_playlist();
        if (playlist) {
            this._state.removePlaylist(playlist);
            this._router.navigate(['/signage/media', {}]);
        }
    };

    public readonly approvePlaylist = async (plist) => {
        await this._state.approvePlaylist(plist);
    };

    public readonly selected_playlist = computed(() => {
        const playlist_id = this.playlist();
        const list = this._state.playlists();
        const item = list.find((_) => _.id === playlist_id);
        if (!item && playlist_id) {
            this._router.navigate(['/signage/media', {}]);
        }
        return item;
    });

    private readonly _playlist_media_resource = resource({
        params: () => ({
            id: this.selected_playlist()?.id,
            change: this._state.has_changed(),
        }),
        defaultValue: { id: '', items: [], approved: 0 } as any,
        loader: async ({ params }) => {
            if (!params.id) return { id: '', items: [], approved: 0 };
            this.loading.set(true);
            try {
                const result = await listSignagePlaylistMedia(
                    params.id,
                ).catch(() => ({ id: '', items: [], approved: 0 }) as any);
                this.approved.set(result.approved);
                return result;
            } finally {
                this.loading.set(false);
            }
        },
    });
    private _playlist_media = this._playlist_media_resource.value;

    public readonly media = computed(() => {
        const playlist = this._playlist_media();
        const media_list = this._state.media();
        if (!playlist) return [];
        return playlist.items
            .map((_) => media_list.find((m) => m.id === _))
            .filter((_) => _);
    });

    public get now() {
        return getUnixTime(startOfMinute(Date.now()));
    }

    public isScheduled(item: SignagePlaylist): boolean {
        return !!item;
    }

    public animation_name(value: MediaAnimation) {
        switch (value) {
            case MediaAnimation.Cut:
                return 'Cut';
            case MediaAnimation.CrossFade:
                return 'Cross Fade';
            case MediaAnimation.SlideBottom:
                return 'Slide Bottom';
            case MediaAnimation.SlideLeft:
                return 'Slide Left';
            case MediaAnimation.SlideRight:
                return 'Slide Right';
            case MediaAnimation.SlideTop:
                return 'Slide Top';
        }
        return 'Default';
    }

    public async drop(event: CdkDragDrop<SignageMedia[]>) {
        if (event.previousIndex === event.currentIndex) return;
        const id = this.playlist();
        const playlist = this._playlist_media();
        if (!id || !playlist) return;
        const list = [...playlist.items];
        moveItemInArray(list, event.previousIndex, event.currentIndex);
        await this._state.updatePlaylistMedia(id, list);
    }

    public async copyID(id: string) {
        this._clipboard.copy(id);
        notifyInfo('Copied playlist ID to clipboard.');
    }
}
