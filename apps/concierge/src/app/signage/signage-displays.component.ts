import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { SignageStateService } from './signage-state.service';
import { map, startWith, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, notifySuccess, unique } from '@placeos/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SignagePlaylist, updateSystem } from '@placeos/ts-client';

@Component({
    selector: 'signage-displays',
    template: `
        <div class="relative h-full w-full overflow-visible flex space-x-4">
            <div sidebar class="w-64 h-full flex flex-col space-y-4 py-4">
                <h3 class="text-xl font-medium text-center">Displays</h3>
                <mat-form-field
                    appearance="outline"
                    class="w-full no-subscript"
                >
                    <input
                        matInput
                        placeholder="Search..."
                        [ngModel]="search.getValue()"
                        (ngModelChange)="search.next($event)"
                    />
                </mat-form-field>
                @if ((displays | async)?.length > 0) {
                    @for (display of displays | async; track display.id) {
                        <a
                            matRipple
                            class="w-full px-6 rounded-3xl h-12 flex items-center hover:bg-base-200"
                            [class.!bg-secondary]="
                                selected.getValue() === display.id
                            "
                            [class.text-secondary-content]="
                                selected.getValue() === display.id
                            "
                            [routerLink]="[]"
                            [queryParams]="{ display: display.id }"
                        >
                            {{ display.display_name || display.name }}
                        </a>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center p-8 space-y-2 opacity-30"
                    >
                        <app-icon class="text-6xl">hide_image</app-icon>
                        <p class="text-center">
                            {{
                                search.getValue()
                                    ? 'No matching displays found'
                                    : 'No displays'
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="relative flex flex-col flex-1 w-1/2 h-full overflow-auto rounded-lg border border-base-300 p-4 shadow space-y-4"
            >
                @if (active_display | async) {
                    <div class="flex items-center justify-center space-x-2">
                        <h3 class="text-xl font-medium">
                            {{ (active_display | async)?.display_name }}
                        </h3>
                        <div
                            class="text-xs font-mono px-2 py-1 rounded bg-base-300 capitalize"
                        >
                            {{ (active_display | async)?.orientation }}
                        </div>
                    </div>

                    @if ((active_playlists | async).length > 0) {
                        <div
                            cdkDropList
                            class="flex-1 h-1/2 overflow-auto flex flex-col space-y-2"
                            (cdkDropListDropped)="drop($event)"
                        >
                            @for (
                                item of active_playlists | async;
                                track item.id
                            ) {
                                <div
                                    cdkDrag
                                    class="w-full bg-base-100 h-20 rounded-lg flex items-center p-2 space-x-2 border border-base-300"
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
                                    <div class="text-base-content flex-1 w-1/2">
                                        <div class="truncate">
                                            {{ item.name }}
                                        </div>
                                        <div
                                            class="truncate text-sm opacity-30"
                                        >
                                            {{ item.media_count || 0 }} Media
                                            items
                                        </div>
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
                                        <a
                                            mat-menu-item
                                            [routerLink]="['/signage', 'media']"
                                            [queryParams]="{
                                                playlist: item.id,
                                            }"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <app-icon class="text-2xl"
                                                    >visibility</app-icon
                                                >
                                                <div class="pr-2">
                                                    View Playlist
                                                </div>
                                            </div>
                                        </a>
                                        <button
                                            mat-menu-item
                                            (click)="removePlaylist(item)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <app-icon
                                                    class="text-2xl text-error"
                                                    >delete</app-icon
                                                >
                                                <div class="pr-2">
                                                    Remove Playlist
                                                </div>
                                            </div>
                                        </button>
                                    </mat-menu>
                                </div>
                            }
                        </div>
                        <button btn matRipple (click)="adding = true">
                            Add Playlist
                        </button>
                    } @else {
                        <div
                            class="flex flex-col items-center justify-center p-8 space-y-2 mx-auto flex-1"
                        >
                            <div
                                class="flex flex-col items-center justify-center opacity-30"
                            >
                                <app-icon class="text-6xl">hide_image</app-icon>
                                <p>No playlists in system.</p>
                            </div>
                            <button
                                btn
                                matRipple
                                (click)="adding = true"
                                class="w-40"
                            >
                                Add Playlist
                            </button>
                        </div>
                    }
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <app-icon class="text-6xl">desktop_windows</app-icon>
                        <p>Select a display from the left to view playlists</p>
                    </div>
                }
                <search-overlay
                    *ngIf="adding"
                    [item_list]="playlists | async"
                    (selected)="addPlaylist($event)"
                    (close)="adding = false"
                ></search-overlay>
            </div>
        </div>
    `,
    styles: [``],
})
export class SignageDisplaysComponent extends AsyncHandler {
    public adding = false;
    public readonly search = new BehaviorSubject<string>('');
    public readonly loading = this._state.loading;
    public readonly displays = combineLatest([
        this.search,
        this._state.displays,
    ]).pipe(
        map(([search, list]) =>
            list.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );
    public readonly selected = new BehaviorSubject('');
    public readonly active_display = combineLatest([
        this.displays,
        this.selected,
    ]).pipe(map(([displays, id]) => displays.find((item) => item.id === id)));

    public readonly playlists = combineLatest([
        this.active_display,
        this._state.playlists,
    ]).pipe(
        map(([display, playlists]) =>
            playlists.filter(
                (_) => !display?.playlists.find((id) => _.id === id),
            ),
        ),
    );

    public readonly active_playlists = combineLatest([
        this.active_display,
        this._state.playlists,
    ]).pipe(
        map(([display, playlists]) =>
            !display
                ? []
                : display.playlists.map((id) =>
                      playlists.find((_) => _.id === id),
                  ),
        ),
        startWith([]),
    );

    constructor(
        private _state: SignageStateService,
        private _route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('display')) {
                    this.selected.next(params.get('display'));
                }
            }),
        );
    }

    public async addPlaylist(playlist: SignagePlaylist) {
        console.log('Add Playlist:', playlist);
        const system = await this.active_display.pipe(take(1)).toPromise();
        const playlists = unique([...system.playlists, playlist.id]);
        await updateSystem(
            system.id,
            { playlists, version: system.version },
            'patch',
        ).toPromise();
        notifySuccess('Successfully added playlist to the display');
        this._state.changed();
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        const system = await this.active_display.pipe(take(1)).toPromise();
        const playlists = system.playlists.filter((id) => playlist.id !== id);
        await updateSystem(
            system.id,
            { playlists, version: system.version },
            'patch',
        ).toPromise();
        notifySuccess('Successfully removed playlist from display');
        this._state.changed();
        this.adding = false;
    }

    public async drop(event: CdkDragDrop<SignagePlaylist[]>) {
        const system = await this.active_display.pipe(take(1)).toPromise();
        const playlists = [...system.playlists];
        moveItemInArray(playlists, event.previousIndex, event.currentIndex);
        await updateSystem(
            system.id,
            { playlists, version: system.version },
            'patch',
        ).toPromise();
        notifySuccess('Successfully re-ordered playlists on display');
        this._state.changed();
    }
}
