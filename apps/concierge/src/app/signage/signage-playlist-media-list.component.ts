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
import { listSignagePlaylistMedia, SignageMedia } from '@placeos/ts-client';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

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
            <div details></div>
            @if ((media | async).length > 0) {
                <div
                    cdkDropList
                    class="flex-1 h-1/2 overflow-auto flex flex-col space-y-2"
                    (cdkDropListDropped)="drop($event)"
                >
                    @for (item of media | async; track item.id) {
                        <div
                            cdkDrag
                            class="w-full bg-base-100 shadow h-20 rounded-lg flex items-center p-2 space-x-2"
                        >
                            <div
                                class="h-20 w-full border-4 border-dashed border-base-400 bg-base-300 rounded-xl"
                                *cdkDragPlaceholder
                            ></div>
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
                                    [source]="item.thumbnail_id"
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
                                <button
                                    mat-menu-item
                                    (click)="previewItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <app-icon class="text-2xl"
                                            >visibility</app-icon
                                        >
                                        <div class="pr-2">
                                            Preview Media Item
                                        </div>
                                    </div>
                                </button>
                                <button mat-menu-item (click)="removeItem(row)">
                                    <div class="flex items-center space-x-2">
                                        <app-icon class="text-2xl text-error"
                                            >delete</app-icon
                                        >
                                        <div class="pr-2">
                                            Remove Media Item
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    }
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

    private _playlist = new BehaviorSubject<string>('');

    public readonly editPlaylist = async () => {
        const playlist = await this.selected_playlist.pipe(take(1)).toPromise();
        this._state.editPlaylist(playlist);
    };

    public readonly removeItem = async (item: SignageMedia) => {
        const playlist = await this._playlist_media.pipe(take(1)).toPromise();
        const list = [...playlist.items];
        list.splice(
            list.findIndex((_) => _ === item.id),
            1,
        );
        await this._state.updatePlaylistMedia(playlist.id, list);
        this._playlist.next(this.playlist);
    };

    public readonly previewItem = (item: SignageMedia) => {
        this._state.previewMedia(item);
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
            playlist.items.map((_) => media.find((m) => m.id === _)),
        ),
        startWith([]),
    );

    constructor(
        private _state: SignageStateService,
        private _router: Router,
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist) {
            this._playlist.next(this.playlist);
        }
    }

    public async drop(event: CdkDragDrop<SignageMedia[]>) {
        const playlist = await this._playlist_media.pipe(take(1)).toPromise();
        if (!playlist?.id) return;
        const list = [...playlist.items];
        moveItemInArray(
            playlist.items,
            event.previousIndex,
            event.currentIndex,
        );
        await this._state.updatePlaylistMedia(playlist.id, list);
        this._playlist.next(this.playlist);
    }
}
