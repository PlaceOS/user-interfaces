import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';
import { SignagePlaylist } from './signage.classes';
import { map, take, tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'signage-playlists',
    template: `
        <custom-table
            class="block min-w-[48rem]"
            [dataSource]="playlist_list"
            [columns]="['name', 'description', 'media', 'duration', 'actions']"
            [display_column]="['Name', 'Description', 'Media', 'Duration', ' ']"
            [column_size]="['8r', 'flex', '10r', '6r', '5r']"
            [template]="{
                media: media_template,
                duration: duration_template,
                actions: actions_template
            }"
        ></custom-table>
        <ng-template #media_template let-row="row">
            {{ row.media.length }} Media Item(s)
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
        ></mat-progress-bar>
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
                    0
                ),
            }))
        )
    );

    constructor(private _state: SignageStateService) {}
}
