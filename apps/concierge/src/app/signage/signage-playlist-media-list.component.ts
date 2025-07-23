import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, inject, input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { nextValueFrom } from '@placeos/common';
import {
    listSignagePlaylistMedia,
    MediaAnimation,
    SignageMedia,
} from '@placeos/ts-client';
import { getUnixTime, startOfMinute } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-playlist-media-list',
    template: `
        <div class="relative flex h-full w-full flex-col space-y-4 p-4">
            <h3 class="text-center text-xl font-medium">
                Playlist - {{ (selected_playlist | async)?.name }}
            </h3>
            <button
                icon
                matRipple
                [matMenuTriggerFor]="menu"
                class="absolute right-2 top-2 !m-0"
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
            <div details class="flex flex-wrap items-center">
                <div
                    class="m-1 ml-2 rounded px-2 py-1 text-xs"
                    [class.bg-success]="(selected_playlist | async)?.enabled"
                    [class.text-success-content]="
                        (selected_playlist | async)?.enabled
                    "
                    [class.bg-error]="!(selected_playlist | async)?.enabled"
                    [class.text-error-content]="
                        !(selected_playlist | async)?.enabled
                    "
                >
                    {{
                        ((selected_playlist | async)?.enabled
                            ? 'COMMON.ENABLED'
                            : 'COMMON.DISABLED'
                        ) | translate
                    }}
                </div>
                @if ((selected_playlist | async)?.random) {
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
                                (selected_playlist | async)?.default_animation
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
                            (selected_playlist | async)?.default_duration / 1000
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
                        >{{ (selected_playlist | async)?.orientation }}</span
                    >
                </div>
            </div>
            @if ((media | async).length > 0) {
                <div
                    cdkDropList
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto"
                    id="playlist-list"
                    [cdkDropListData]="media | async"
                    [cdkDropListConnectedTo]="playlist_ids"
                    (cdkDropListDropped)="drop($event)"
                >
                    @for (item of media | async; track item) {
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
                                class="flex h-full w-6 items-center justify-center rounded hover:bg-base-200"
                                matTooltip="Drag to reorder"
                            >
                                <icon>drag_handle</icon>
                            </button>
                            <div
                                preview
                                class="h-16 w-[4.5rem] overflow-hidden rounded-lg bg-base-200"
                            >
                                <img
                                    auth
                                    [source]="item.thumbnail_url"
                                    class="h-full w-full object-contain"
                                />
                            </div>
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
    standalone: false,
})
export class SignagePlaylistMediaListComponent {
    private _state = inject(SignageStateService);
    private _router = inject(Router);

    public readonly playlist = input('');
    public readonly playlist_count = input(0);

    public playlist_ids: string[] = [];

    private _playlist = new BehaviorSubject<string>('');

    public readonly editPlaylist = async () => {
        const playlist = await nextValueFrom(this.selected_playlist);
        this._state.editPlaylist(playlist);
    };

    public readonly removeItem = async (item: SignageMedia) => {
        const playlist = await nextValueFrom(this._playlist_media);
        const list = playlist.items.filter((_) => _ !== item.id);
        await this._state.updatePlaylistMedia(this.playlist(), list);
        this._playlist.next(this.playlist());
    };

    public readonly previewItem = (item: SignageMedia) =>
        this._state.previewMedia(item);

    public readonly editItem = (item: SignageMedia) =>
        this._state.editMedia(item);

    public readonly removePlaylist = async () => {
        this._state.removePlaylist(await nextValueFrom(this.selected_playlist));
        this._router.navigate(['/signage/media', {}]);
    };

    public readonly selected_playlist = combineLatest([
        this._playlist,
        this._state.playlists,
    ]).pipe(
        map(([playlist, list]) => {
            const item = list.find((_) => _.id === playlist);
            if (!item) this._router.navigate(['/signage/media', {}]);
            return item;
        }),
    );

    private _playlist_media = this._playlist.pipe(
        filter((playlist) => !!playlist),
        debounceTime(300),
        switchMap((playlist) =>
            listSignagePlaylistMedia(playlist).pipe(
                catchError(() => of({ id: '', items: [] })),
            ),
        ),
        shareReplay(1),
    );

    public readonly media = combineLatest([
        this._playlist_media,
        this._state.media,
    ]).pipe(
        map(([playlist, media]) =>
            playlist.items
                .map((_) => media.find((m) => m.id === _))
                .filter((_) => _),
        ),
        startWith([]),
    );

    public get now() {
        return getUnixTime(startOfMinute(Date.now()));
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist) {
            this._playlist.next(this.playlist());
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
        const id = await nextValueFrom(this._playlist);
        const playlist = await nextValueFrom(this._playlist_media);
        if (!id && playlist) return;
        const list = [...playlist.items];
        moveItemInArray(list, event.previousIndex, event.currentIndex);
        await this._state.updatePlaylistMedia(id, list);
        this._playlist.next(this.playlist());
    }
}
