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
} from '@placeos/ts-client';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { getUnixTime, startOfMinute } from 'date-fns';

@Component({
    selector: 'signage-playlist-media-list',
    template: `
        <div class="flex flex-col space-y-4 relative p-4 h-full w-full">
            <h3 class="text-xl font-medium text-center">
                Playlist - {{ (selected_playlist | async)?.name }}
            </h3>
            <button
                icon
                matRipple
                matTooltip="Edit Playlist"
                class="absolute top-2 right-2 !m-0"
                (click)="editPlaylist()"
            >
                <app-icon>edit</app-icon>
            </button>
            <div details class="flex items-center flex-wrap">
                <div
                    class="ml-2 text-xs px-2 py-1 m-1 rounded"
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
                        (selected_playlist | async)?.enabled
                            ? 'Enabled'
                            : 'Disabled'
                    }}
                </div>
                <div
                    class="ml-2 text-xs px-2 py-1 m-1 rounded bg-secondary text-secondary-content"
                    *ngIf="(selected_playlist | async)?.random"
                >
                    Shuffle ON
                </div>
                <div
                    class="text-xs px-2 py-1 m-1 "
                    matTooltip="Default Transition Animation"
                >
                    Animation:
                    <span
                        class="ml-1 uppercase bg-base-200 px-2 py-1 rounded"
                        >{{
                            animation_name(
                                (selected_playlist | async)?.default_animation
                            )
                        }}</span
                    >
                </div>
                <div
                    class="text-xs px-2 py-1 m-1"
                    matTooltip="Default Playback Duration"
                >
                    Duration:
                    <span
                        class="ml-1 font-mono bg-base-200 px-2 py-1 rounded"
                        >{{
                            (selected_playlist | async)?.default_duration / 1000
                                | mediaDuration
                        }}</span
                    >
                </div>
                <div
                    class="text-xs px-2 py-1 m-1"
                    matTooltip="Prefered Orientation"
                >
                    Orientation:
                    <span
                        class="ml-1 uppercase bg-base-200 px-2 py-1 rounded"
                        >{{ (selected_playlist | async)?.orientation }}</span
                    >
                </div>
            </div>
            @if ((media | async).length > 0) {
                <div
                    cdkDropList
                    class="flex-1 h-1/2 overflow-auto flex flex-col space-y-2"
                    id="playlist-list"
                    [cdkDropListData]="media | async"
                    [cdkDropListConnectedTo]="playlist_ids"
                    (cdkDropListDropped)="drop($event)"
                >
                    <ng-container *ngFor="let item of media | async">
                        <div
                            cdkDrag
                            class="relative w-full bg-base-100 h-20 rounded-lg flex items-center p-2 space-x-2 border border-base-300"
                        >
                            @if (item.valid_from && now < item.valid_from) {
                                <div
                                    class="absolute inset-0 z-0 bg-warning opacity-10 rounded-lg"
                                ></div>
                            } @else if (
                                item.valid_until && now > item.valid_until
                            ) {
                                <div
                                    class="absolute inset-0 z-0 bg-error opacity-10 rounded-lg"
                                ></div>
                            }
                            <div
                                class="min-h-10 min-w-10 border-4 rounded-2xl border-base-400 bg-base-300 border-dashed flex items-center justify-center"
                                *cdkDragPlaceholder
                            >
                                <app-icon class="text-2xl text-base-100">
                                    add
                                </app-icon>
                            </div>
                            <button
                                matRipple
                                cdkDragHandle
                                class="flex items-center justify-center w-6 h-full rounded hover:bg-base-200"
                                matTooltip="Drag to reorder"
                            >
                                <app-icon>drag_handle</app-icon>
                            </button>
                            <div
                                preview
                                class="w-[4.5rem] h-16 bg-base-200 rounded-lg overflow-hidden"
                            >
                                <img
                                    auth
                                    [source]="item.thumbnail_url"
                                    class="w-full h-full object-contain"
                                />
                            </div>
                            <div
                                class="text-base-content truncate flex-1 w-1/2"
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
                                        <div class="pr-2">Edit Media Item</div>
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
                                            Preview Media Item
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
                                            Remove Media Item
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    </ng-container>
                </div>
            } @else {
                <div
                    class="flex flex-col items-center justify-center p-8 space-y-2 opacity-30 mx-auto flex-1"
                >
                    <app-icon class="text-6xl">hide_image</app-icon>
                    <p>No media in playlist.</p>
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
        console.log('Remove Item:', playlist, item, list);
        await this._state.updatePlaylistMedia(this.playlist, list);
        this._playlist.next(this.playlist);
    };

    public readonly previewItem = (item: SignageMedia) =>
        this._state.previewMedia(item);

    public readonly editItem = (item: SignageMedia) =>
        this._state.editMedia(item);

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
