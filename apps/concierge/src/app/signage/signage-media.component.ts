import { Component, OnInit, ViewChild } from '@angular/core';

import { SignageStateService } from './signage-state.service';
import { AsyncHandler, unique } from '@placeos/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignageMediaListComponent } from './signage-media-list.component';
import { listSignagePlaylistMedia, SignagePlaylist } from '@placeos/ts-client';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
    selector: 'signage-media',
    template: `
        <div class="relative flex h-full w-full space-x-4 overflow-visible">
            <div
                sidebar
                class="flex h-full w-64 flex-col space-y-4 overflow-auto py-4"
            >
                <h3 class="text-center text-xl font-medium">
                    {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [ngModel]="search.getValue()"
                        (ngModelChange)="search.next($event)"
                    />
                </mat-form-field>
                <a
                    matRipple
                    class="flex min-h-12 w-full items-center rounded-3xl px-6 hover:bg-base-200"
                    [class.!bg-secondary]="!selected_playlist"
                    [class.text-secondary-content]="!selected_playlist"
                    [routerLink]="[]"
                    [queryParams]="{ playlist: '' }"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_ALL' | translate }}
                </a>
                <hr class="w-full" />
                @if ((playlists | async)?.length > 0) {
                    @for (playlist of playlists | async; track playlist.id) {
                        <a
                            matRipple
                            class="flex h-12 min-h-12 w-full items-center rounded-3xl px-6 hover:bg-base-200"
                            [class.!bg-secondary]="
                                selected_playlist === playlist.id
                            "
                            [class.text-secondary-content]="
                                selected_playlist === playlist.id
                            "
                            [routerLink]="[]"
                            [queryParams]="{ playlist: playlist.id }"
                            cdkDropList
                            [id]="'playlist-' + $index"
                            [cdkDropListConnectedTo]="[
                                'media-list',
                                'playlist-list',
                            ]"
                            (cdkDropListDropped)="
                                selected_playlist === playlist.id
                                    ? ''
                                    : drop(playlist, $event)
                            "
                        >
                            <div class="flex-1">
                                {{ playlist.name }}
                            </div>
                        </a>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <app-icon class="text-6xl">hide_image</app-icon>
                        <p class="text-center">
                            {{
                                (search.getValue()
                                    ? 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                ) | translate
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
                        <div class="flex w-full items-center justify-center">
                            <app-icon class="text-2xl">add</app-icon>
                            <span class="ml-2 mr-4">{{
                                'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                    | translate
                            }}</span>
                        </div>
                    </button>
                }
            </div>
            <div
                class="relative h-full w-1/2 flex-1 overflow-hidden rounded-lg border border-base-300 shadow"
                (dragover)="onEnter($event)"
                (dragenter)="onEnter($event)"
                (window:drop)="hideOverlay($event)"
            >
                <div class="h-full w-full overflow-auto">
                    <signage-media-list
                        *ngIf="!selected_playlist"
                        [playlist_count]="(playlists | async)?.length"
                    ></signage-media-list>
                    <signage-playlist-media-list
                        *ngIf="selected_playlist"
                        [playlist]="selected_playlist"
                        [playlist_count]="(playlists | async)?.length"
                    ></signage-playlist-media-list>
                </div>
                <div
                    class="absolute inset-0"
                    *ngIf="show_dropzone"
                    (dragleave)="hideOverlay($event)"
                    (drop)="previewFile($event)"
                >
                    <div
                        class="absolute inset-0 bg-base-content opacity-60"
                    ></div>
                    <div
                        class="absolute inset-4 flex flex-col items-center justify-center space-y-4 rounded-2xl border-4 border-dashed border-base-300 text-base-100"
                    >
                        <app-icon class="text-6xl">cloud_upload</app-icon>
                        <p>
                            {{
                                'APP.CONCIERGE.SIGNAGE_MEDIA_DROP_UPLOAD'
                                    | translate
                            }}
                        </p>
                    </div>
                    <input
                        type="file"
                        (change)="previewFile($event)"
                        class="absolute inset-0 opacity-0"
                    />
                </div>
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
    standalone: false,
})
export class SignageMediaComponent extends AsyncHandler implements OnInit {
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
        this._state.previewFileFromInput(event, this.selected_playlist);

    public onEnter(e) {
        this.clearTimeout('hide_overlay');
        this.show_dropzone = e?.dataTransfer?.types.includes('Files');
    }

    public hideOverlay(e) {
        if (!this.show_dropzone) return;
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

    public async drop(
        playlist: SignagePlaylist,
        event: CdkDragDrop<SignagePlaylist[]>,
    ) {
        const media = event.previousContainer.data[event.previousIndex];
        const media_list = await listSignagePlaylistMedia(
            playlist.id,
        ).toPromise();
        const new_media_list = [...media_list.items, media.id];
        await this._state.updatePlaylistMedia(playlist.id, new_media_list);
    }
}
