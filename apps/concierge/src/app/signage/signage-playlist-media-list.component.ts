import { Component, Input, SimpleChanges } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { SignageStateService } from './signage-state.service';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    take,
} from 'rxjs/operators';
import {
    listSignagePlaylistMedia,
    MediaAnimation,
    SignageMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { getUnixTime, startOfMinute } from 'date-fns';

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
                <app-icon>more_vert</app-icon>
            </button>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="editPlaylist()">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">edit</app-icon>
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
                        <app-icon class="text-2xl text-error">delete</app-icon>
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
                <div
                    class="m-1 ml-2 rounded bg-secondary px-2 py-1 text-xs text-secondary-content"
                    *ngIf="(selected_playlist | async)?.random"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_SHUFFLE' | translate }}
                </div>
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
                    <ng-container *ngFor="let item of media | async">
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
                                <app-icon class="text-2xl text-base-100">
                                    add
                                </app-icon>
                            </div>
                            <button
                                matRipple
                                cdkDragHandle
                                class="flex h-full w-6 items-center justify-center rounded hover:bg-base-200"
                                matTooltip="Drag to reorder"
                            >
                                <app-icon>drag_handle</app-icon>
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
                                <app-icon>more_vert</app-icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <button mat-menu-item (click)="editItem(item)">
                                    <div class="flex items-center space-x-2">
                                        <app-icon class="text-2xl">
                                            edit
                                        </app-icon>
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
                                        <app-icon class="text-2xl">
                                            visibility
                                        </app-icon>
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
                                        <app-icon class="text-2xl text-error">
                                            delete
                                        </app-icon>
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
                    </ng-container>
                </div>
            } @else {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <app-icon class="text-6xl">hide_image</app-icon>
                    <p>
                        {{
                            'APP.CONCIERGE.SIGNAGE_PLAYLIST_MEDIA_EMPTY'
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
    @Input() public playlist = '';
    @Input() public playlist_count = 0;

    public playlist_ids: string[] = [];

    private _playlist = new BehaviorSubject<string>('');

    public readonly editPlaylist = async () => {
        const playlist = await this.selected_playlist.pipe(take(1)).toPromise();
        this._state.editPlaylist(playlist);
    };

    public readonly removeItem = async (item: SignageMedia) => {
        const playlist = await this._playlist_media.pipe(take(1)).toPromise();
        const list = playlist.items.filter((_) => _ !== item.id);
        await this._state.updatePlaylistMedia(this.playlist, list);
        this._playlist.next(this.playlist);
    };

    public readonly previewItem = (item: SignageMedia) =>
        this._state.previewMedia(item);

    public readonly editItem = (item: SignageMedia) =>
        this._state.editMedia(item);

    public readonly removePlaylist = async () => {
        this._state.removePlaylist(
            await this.selected_playlist.pipe(take(1)).toPromise(),
        );
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

    constructor(
        private _state: SignageStateService,
        private _router: Router,
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist) {
            this._playlist.next(this.playlist);
        }
        if (changes.playlist_count) {
            this.playlist_ids = new Array(this.playlist_count)
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
        const id = await this._playlist.pipe(take(1)).toPromise();
        const playlist = await this._playlist_media.pipe(take(1)).toPromise();
        if (!id && playlist) return;
        const list = [...playlist.items];
        moveItemInArray(list, event.previousIndex, event.currentIndex);
        await this._state.updatePlaylistMedia(id, list);
        this._playlist.next(this.playlist);
    }
}
