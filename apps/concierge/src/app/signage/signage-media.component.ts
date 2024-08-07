import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';
import { AsyncHandler } from '@placeos/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'signage-media',
    template: `
        <div class="relative h-full w-full overflow-hidden flex space-x-4">
            <div sidebar class="w-64 h-full flex flex-col space-y-4">
                <h3 class="text-xl font-medium text-center">Playlists</h3>
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
                <button
                    matRipple
                    class="w-full px-8 rounded-3xl h-12 flex items-center hover:bg-base-200"
                    [class.!bg-secondary]="!selected_playlist"
                    [class.text-secondary-content]="!selected_playlist"
                    (click)="selectPlaylist('')"
                >
                    All Media
                </button>
                <hr class="w-full" />
                @if ((playlists | async)?.length > 0) {
                    @for (playlist of playlists | async; track playlist.id) {
                        <button
                            matRipple
                            class="w-full px-8 rounded-3xl h-12 flex items-center hover:bg-base-200"
                            [class.!bg-secondary]="
                                selected_playlist === playlist.id
                            "
                            [class.text-secondary-content]="
                                selected_playlist === playlist.id
                            "
                            (click)="selectPlaylist(playlist.id)"
                        >
                            {{ playlist.name }}
                        </button>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center p-8 space-y-2 opacity-30"
                    >
                        <app-icon class="text-6xl">hide_image</app-icon>
                        <p class="text-center">
                            {{
                                search.getValue()
                                    ? 'No matching playlists found'
                                    : 'No playlists'
                            }}
                        </p>
                    </div>
                    <button
                        *ngIf="!search.getValue()"
                        btn
                        matRipple
                        class="inverse"
                        (click)="addPlaylist()"
                    >
                        <div class="flex items-center justify-center w-full">
                            <app-icon class="text-2xl">add</app-icon>
                            <span class="ml-2 mr-4">Add Playlist</span>
                        </div>
                    </button>
                }
            </div>
            <div
                class="flex-1 w-1/2 h-full overflow-auto rounded-lg bg-base-200"
            >
                <signage-media-list
                    *ngIf="!selected_playlist"
                ></signage-media-list>
                <signage-playlist-media-list
                    *ngIf="selected_playlist"
                    [playlist]="selected_playlist"
                ></signage-playlist-media-list>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                min-height: 100%;
            }
        `,
    ],
})
export class SignageMediaComponent extends AsyncHandler {
    public readonly search = new BehaviorSubject<string>('');
    public readonly loading = this._state.loading;
    public readonly playlists = combineLatest([
        this.search,
        this._state.playlists,
    ]).pipe(
        map(([search, list]) =>
            list.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );
    public selected_playlist = '';
    public show_dropzone = false;

    public readonly addPlaylist = async () => {
        const result = await this._state.editPlaylist();
        if (result) {
            this._router.navigate([
                '/signage/media',
                { query: { playlist: result.id } },
            ]);
        }
    };
    public readonly previewMedia = (item) => this._state.previewMedia(item);
    public readonly previewFile = (event) =>
        this._state.previewFileFromInput(event);

    public readonly selectPlaylist = (playlist) =>
        this._router.navigate(['/signage/media'], {
            queryParams: { playlist },
            queryParamsHandling: 'merge',
        });

    public onEnter(e) {
        this.show_dropzone = e?.dataTransfer?.types.includes('Files');
    }

    public hideOverlay(e) {
        if (!(e.target instanceof HTMLInputElement)) {
            e.preventDefault();
        }
        this.timeout('hide_overlay', () => (this.show_dropzone = false));
    }

    constructor(
        private _state: SignageStateService,
        private _router: Router,
        private _route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('playlist')) {
                    this.selected_playlist = params.get('playlist');
                }
            }),
        );
    }
}
