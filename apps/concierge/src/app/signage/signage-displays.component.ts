import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'signage-displays',
    template: ` <custom-table
            class="block min-w-[52rem]"
            [dataSource]="display_list"
            [columns]="[
                'name',
                'description',
                'playlists',
                'orientation',
                'duration',
                'actions'
            ]"
            [display_column]="[
                'Name',
                'Description',
                'Media',
                'Orientation',
                'Duration',
                ' '
            ]"
            [column_size]="['8r', 'flex', '8r', '7r', '6r', '5r']"
            [template]="{
                playlists: playlists_template,
                duration: duration_template,
                actions: actions_template
            }"
        ></custom-table>
        <ng-template #playlists_template let-row="row">
            {{ row.playlists.length }} Playlist(s)
        </ng-template>
        <ng-template #duration_template let-row="row">
            <code>{{ row.duration | mediaDuration }}</code>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <button icon matRipple (click)="editItem(row)">
                <app-icon>edit</app-icon>
            </button>
            <button icon matRipple class="text-error" (click)="deleteItem(row)">
                <app-icon>delete</app-icon>
            </button>
        </ng-template>
        <mat-progress-bar
            class="absolute inset-x-0 bottom-0"
            *ngIf="loading | async"
            mode="indeterminate"
        ></mat-progress-bar>`,
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
