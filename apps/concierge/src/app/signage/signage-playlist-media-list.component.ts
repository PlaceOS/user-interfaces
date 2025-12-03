import { Clipboard } from '@angular/cdk/clipboard';
import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    OnChanges,
    signal,
    SimpleChanges,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
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
import { of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    switchMap,
    tap,
} from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-playlist-media-list',
    template: `
        <div class="relative flex h-full w-full flex-col">
            @let playlist = selected_playlist();
            <div class="space-y-2 p-2">
                <h3
                    class="flex items-center justify-center space-x-2 rounded-xl bg-base-100 p-2"
                >
                    <div class="text-xl font-medium">Playlist</div>
                    <div
                        class="rounded bg-base-200 px-2 py-1 font-mono text-xs"
                    >
                        {{ playlist?.name }}
                    </div>
                </h3>
                <button
                    icon
                    matRipple
                    [matMenuTriggerFor]="menu"
                    class="absolute right-2.5 top-2.5 !m-0"
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
                            <icon class="text-2xl text-error">delete</icon>
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
                    class="flex flex-wrap items-center rounded-xl bg-base-100 p-1"
                >
                    <div
                        class="m-1 ml-2 rounded px-2 py-1 text-xs"
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
                            class="m-1 ml-2 rounded bg-secondary px-2 py-1 text-xs text-secondary-content"
                        >
                            {{ 'APP.CONCIERGE.SIGNAGE_SHUFFLE' | translate }}
                        </div>
                    }
                    <div
                        class="m-1 rounded bg-base-200 px-2 py-2 text-xs"
                        matTooltip="Default Transition Animation"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate }}
                        <span
                            class="ml-1 rounded bg-base-300 px-2 py-1 uppercase"
                            >{{
                                animation_name(
                                    selected_playlist()?.default_animation
                                )
                            }}</span
                        >
                    </div>
                    <div
                        class="m-1 rounded bg-base-200 px-2 py-2 text-xs"
                        matTooltip="Default Playback Duration"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_DURATION' | translate }}
                        <span
                            class="ml-1 rounded bg-base-300 px-2 py-1 font-mono"
                            >{{
                                selected_playlist()?.default_duration / 1000
                                    | mediaDuration
                            }}</span
                        >
                    </div>
                    <div
                        class="m-1 rounded bg-base-200 px-2 py-2 text-xs"
                        matTooltip="Prefered Orientation"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate }}
                        <span
                            class="ml-1 rounded bg-base-300 px-2 py-1 uppercase"
                            >{{ selected_playlist()?.orientation }}</span
                        >
                    </div>
                    @if (isScheduled(selected_playlist())) {
                        <div
                            class="m-1 rounded bg-base-200 px-2 py-2 text-xs uppercase"
                        >
                            {{ 'COMMON.SCHEDULED' | translate }}
                        </div>
                    }
                </div>
                @if (!approved()) {
                    <button
                        matRipple
                        class="flex w-full items-center space-x-2 rounded border-warning bg-warning p-1 text-xs text-warning-content shadow"
                        [disabled]="!is_admin"
                        [matTooltip]=""
                        (click)="approvePlaylist(playlist)"
                    >
                        <icon class="ml-1 text-xl text-warning-content"
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
                    [cdkDropListConnectedTo]="playlist_ids"
                    (cdkDropListDropped)="drop($event)"
                >
                    @for (item of media(); track item) {
                        <div
                            cdkDrag
                            class="relative flex h-20 w-full items-center space-x-2 rounded-lg border border-base-300 bg-base-100 p-2"
                        >
                            @if (item.valid_from && now < item.valid_from) {
                                <div
                                    class="absolute inset-0 z-0 rounded-lg bg-warning opacity-10"
                                ></div>
                            } @else if (
                                item.valid_until && now > item.valid_until
                            ) {
                                <div
                                    class="absolute inset-0 z-0 rounded-lg bg-error opacity-10"
                                ></div>
                            }
                            <div
                                class="flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed border-base-400 bg-base-300"
                                *cdkDragPlaceholder
                            >
                                <icon class="text-2xl text-base-100">
                                    add
                                </icon>
                            </div>
                            <button
                                matRipple
                                cdkDragHandle
                                class="!m-0 flex h-full w-6 items-center justify-center rounded hover:bg-base-200"
                                matTooltip="Drag to reorder"
                            >
                                <icon>drag_handle</icon>
                            </button>
                            <button
                                preview
                                matRipple
                                class="relative h-16 w-[4.5rem] overflow-hidden rounded-lg bg-base-200"
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
                                class="w-1/2 flex-1 truncate text-base-content"
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
                                        <icon class="text-2xl text-error">
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
    imports: [
        CommonModule,
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
export class SignagePlaylistMediaListComponent implements OnChanges {
    private _state = inject(SignageStateService);
    private _router = inject(Router);
    private _clipboard = inject(Clipboard);
    private _settings = inject(SettingsService);

    public readonly playlist = input('');
    public readonly playlist_count = input(0);
    public readonly approved = signal(0);
    public readonly loading = signal(false);

    public playlist_ids: string[] = [];

    private _playlist = signal<string>('');

    private _playlists = toSignal(this._state.playlists, { initialValue: [] });
    private _state_media = toSignal(this._state.media, { initialValue: [] });

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
        this._playlist.set(this.playlist());
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
        const playlist_id = this._playlist();
        const list = this._playlists();
        const item = list.find((_) => _.id === playlist_id);
        if (!item && playlist_id) {
            this._router.navigate(['/signage/media', {}]);
        }
        return item;
    });

    private _playlist_media_observable = computed(() => {
        const playlist = this.selected_playlist();
        return playlist;
    });

    private _playlist_media = toSignal(
        toObservable(this._playlist_media_observable).pipe(
            filter((playlist) => !!playlist),
            debounceTime(300),
            tap(() => this.loading.set(true)),
            switchMap((playlist) =>
                listSignagePlaylistMedia(playlist.id).pipe(
                    catchError(() => of({ id: '', items: [], approved: 0 })),
                ),
            ),
            tap((_: any) => {
                this.approved.set(_.approved);
                this.loading.set(false);
            }),
        ),
        { initialValue: { id: '', items: [], approved: 0 } },
    );

    public readonly media = computed(() => {
        const playlist = this._playlist_media();
        const media_list = this._state_media();
        if (!playlist) return [];
        return playlist.items
            .map((_) => media_list.find((m) => m.id === _))
            .filter((_) => _);
    });

    public get now() {
        return getUnixTime(startOfMinute(Date.now()));
    }

    public isScheduled(item: SignagePlaylist): boolean {
        return (
            item &&
            (!!item.play_at ||
                !!item.play_cron ||
                item.play_hours.includes('-'))
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist) {
            this._playlist.set(this.playlist());
        }
        if (changes.playlist_count) {
            this.playlist_ids = new Array(this.playlist_count())
                .fill(0)
                .map((_, idx) => `playlist-${idx}`);
        }
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
        const id = this._playlist();
        const playlist = this._playlist_media();
        if (!id || !playlist) return;
        const list = [...playlist.items];
        moveItemInArray(list, event.previousIndex, event.currentIndex);
        await this._state.updatePlaylistMedia(id, list);
        this._playlist.set(this.playlist());
    }

    public async copyID(id: string) {
        this._clipboard.copy(id);
        notifyInfo('Copied playlist ID to clipboard.');
    }
}
