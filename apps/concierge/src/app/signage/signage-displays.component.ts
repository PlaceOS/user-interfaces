import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'signage-displays',
    template: `
        <mat-progress-bar
            class="w-full mt-4"
            [class.opacity-0]="!(loading | async)"
            mode="indeterminate"
        ></mat-progress-bar>
        <simple-table
            class="block min-w-[52rem] text-sm"
            [data]="display_list"
            [columns]="[
                { key: 'name', name: 'Name' },
                { key: 'description', name: 'Description' },
                { key: 'playlists', name: 'Playlists', content: playlists_template, size: '10rem' },
                { key: 'orientation', name: 'Orientation', size: '7rem' },
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
                    sortable: false
                }
            ]"
            [sortable]="true"
        ></simple-table>
        <div class="w-full h-8"></div>
        <ng-template #playlists_template let-row="row">
            <div class="p-4">{{ row.playlists.length }} Playlist(s)</div>
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
export class SignageDisplaysComponent {
    public readonly loading = this._state.loading;
    public readonly displays = this._state.displays;
    public readonly playlists = this._state.playlists;
    public readonly media = this._state.media;

    public readonly deleteItem = (i) => this._state.removePlaylist(i);
    public readonly editItem = (i) => this._state.editPlaylist(i);

    public readonly display_list = combineLatest([
        this.displays,
        this.playlists,
        this.media,
    ]).pipe(
        map(([displays, playlists, media]) =>
            (displays || []).map((display) => ({
                ...display,
                playlists:
                    display.playlists?.map((id) =>
                        playlists.find((i) => i.id === id)
                    ) || [],
                duration: display.playlists.reduce((acc, id) => {
                    const playlist = playlists.find((_) => _.id === id);
                    if (!playlist) return acc;
                    return (
                        acc +
                        playlist.media.reduce(
                            (acc, item) =>
                                acc +
                                (playlist.media_durations[item] ||
                                    media.find((m) => m.id === item)
                                        ?.duration ||
                                    15),
                            0
                        )
                    );
                }, 0),
            }))
        )
    );

    constructor(private _state: SignageStateService) {}
}
