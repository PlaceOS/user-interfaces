import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'signage-playlists',
    template: `
        <mat-progress-bar
            class="w-full mt-4"
            [class.opacity-0]="!(loading | async)"
            mode="indeterminate"
        ></mat-progress-bar>
        <simple-table
            class="block min-w-[48rem] text-sm"
            [data]="playlist_list"
            [columns]="[
                { key: 'name', name: 'Name' },
                { key: 'description', name: 'Description' },
                {
                    key: 'media',
                    name: 'Media',
                    content: media_template,
                    size: '10rem',
                },
                {
                    key: 'duration',
                    name: 'Duration',
                    content: duration_template,
                    size: '6rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '6rem',
                    sortable: false,
                },
            ]"
            [sortable]="true"
        ></simple-table>
        <div class="w-full h-8"></div>
        <ng-template #media_template let-row="row">
            <div class="p-4">{{ row.media.length }} Media Item(s)</div>
        </ng-template>
        <ng-template #duration_template let-data="data">
            <div class="p-4">
                <code>{{ data | mediaDuration }}</code>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button icon matRipple (click)="editItem(row)">
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    (click)="deleteItem(row)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class SignagePlaylistsComponent {
    public readonly loading = this._state.loading;
    public readonly playlists = this._state.playlists;
    public readonly media = this._state.media;

    public readonly deleteItem = (i) => this._state.removePlaylist(i);
    public readonly editItem = (i) => this._state.editPlaylist(i);

    public readonly playlist_list = combineLatest([
        this.playlists,
        this.media,
    ]).pipe(
        map(([playlists, media]) =>
            playlists.map((playlist) => ({
                ...playlist,
                duration: playlist.media.reduce(
                    (acc, item) =>
                        acc +
                        (playlist.media_durations[item] ||
                            media.find((m) => m.id === item)?.duration ||
                            15),
                    0,
                ),
            })),
        ),
    );

    constructor(private _state: SignageStateService) {}
}
