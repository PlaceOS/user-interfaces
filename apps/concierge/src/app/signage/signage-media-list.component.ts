import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';
import { listSignagePlaylistMedia, SignageMedia } from '@placeos/ts-client';
import { getUnixTime, startOfMinute } from 'date-fns';

@Component({
    selector: 'signage-media-list',
    template: `
        <div class="relative p-4">
            <h3 class="mb-4 text-center text-xl font-medium">
                {{ 'APP.CONCIERGE.SIGNAGE_MEDIA' | translate }}
            </h3>
            <mat-form-field appearance="outline" class="no-subscript w-full">
                <input
                    matInput
                    [placeholder]="'COMMON.SEARCH' | translate"
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
            <button
                icon
                matRipple
                class="absolute right-2 top-2 border border-base-300"
                [matTooltip]="'APP.CONCIERGE.SIGNAGE_MEDIA_UPLOAD' | translate"
                matTooltipPosition="left"
            >
                <app-icon>add</app-icon>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="previewFile($event)"
                />
            </button>
        </div>
        @if ((media | async)?.length > 0) {
            <div
                class="grid w-full gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"
                cdkDropList
                id="media-list"
                [cdkDropListData]="media | async"
                [cdkDropListConnectedTo]="playlist_ids"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media of media | async; track media.id) {
                    <div
                        class="relative flex flex-col items-center justify-center rounded-lg border border-base-300 bg-base-100 p-3 hover:opacity-80"
                        cdkDrag
                    >
                        @if (media.valid_from && now < media.valid_from) {
                            <div
                                class="absolute inset-0 z-0 rounded-lg bg-warning opacity-10"
                            ></div>
                        } @else if (
                            media.valid_until && now > media.valid_until
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
                        <div
                            preview
                            class="relative h-36 w-full overflow-hidden rounded-lg bg-base-200"
                        >
                            <img
                                auth
                                [source]="media.thumbnail_url"
                                *ngIf="media.thumbnail_url"
                                class="h-full w-full rounded-lg object-contain"
                            />
                            <div
                                class="absolute left-1 top-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="media.media_type === 'video'"
                                [class.text-info-content]="
                                    media.media_type === 'video'
                                "
                                [class.bg-warning]="
                                    media.media_type === 'image'
                                "
                                [class.text-warning-content]="
                                    media.media_type === 'image'
                                "
                            >
                                {{
                                    (media.media_type === 'image'
                                        ? 'COMMON.IMAGE'
                                        : 'COMMON.VIDEO'
                                    ) | translate
                                }}
                            </div>
                            <div
                                class="absolute bottom-1 right-1 rounded-lg bg-info px-2 py-1 font-mono text-xs capitalize text-info-content"
                                *ngIf="media.play_time"
                            >
                                {{ media.play_time / 1000 | mediaDuration }}
                            </div>
                        </div>
                        <div
                            class="relative top-1 flex w-full items-center justify-between"
                        >
                            <div
                                class="w-1/2 flex-1 truncate text-base-content"
                                [matTooltip]="media.name"
                            >
                                {{ media.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                aria-label="Media Actions"
                            >
                                <app-icon>more_vert</app-icon>
                            </button>
                            <mat-menu #playlist_menu="matMenu">
                                <div class="px-2">
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                        (click)="$event.stopPropagation()"
                                    >
                                        <input
                                            matInput
                                            [placeholder]="
                                                'COMMON.SEARCH' | translate
                                            "
                                            [ngModel]="
                                                playlist_search.getValue()
                                            "
                                            (ngModelChange)="
                                                playlist_search.next($event)
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                                <button
                                    mat-menu-item
                                    [disabled]="true"
                                    *ngIf="!((playlists | async)?.length > 0)"
                                >
                                    {{
                                        'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                            | translate
                                    }}
                                </button>

                                <button
                                    mat-menu-item
                                    *ngFor="let playlist of playlists | async"
                                    (click)="addToPlaylist(media.id, playlist)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <div class="pr-2">
                                            {{ playlist.name }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                            <mat-menu #menu="matMenu">
                                <button mat-menu-item (click)="editItem(media)">
                                    <div class="flex items-center space-x-2">
                                        <app-icon class="text-2xl"
                                            >edit</app-icon
                                        >
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
                                    [matMenuTriggerFor]="playlist_menu"
                                >
                                    <div class="flex items-center space-x-2">
                                        <app-icon class="text-2xl"
                                            >add</app-icon
                                        >
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_ADD_PLAYLIST'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="previewItem(media)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <app-icon class="text-2xl"
                                            >visibility</app-icon
                                        >
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
                                    (click)="removeItem(media)"
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
                    </div>
                }
            </div>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
                <app-icon class="text-6xl">hide_image</app-icon>
                <p>{{ 'APP.CONCIERGE.SIGNAGE_MEDIA_EMPTY' | translate }}</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
    standalone: false,
})
export class SignageMediaListComponent implements OnChanges {
    @Input() public playlist_count = 0;
    public readonly search = new BehaviorSubject<string>('');
    public readonly playlist_search = new BehaviorSubject<string>('');
    public readonly playlists = combineLatest([
        this.playlist_search,
        this._state.playlists,
    ]).pipe(
        map(([search, list]) =>
            list.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );
    public readonly media = combineLatest([
        this.search,
        this._state.media,
    ]).pipe(
        map(([search, media]) =>
            media.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );

    public readonly previewFile = (event) =>
        this._state.previewFileFromInput(event);

    public playlist_ids: string[] = [];

    public get now() {
        return getUnixTime(startOfMinute(Date.now()));
    }

    public readonly previewItem = (item: SignageMedia) =>
        this._state.previewMedia(item);

    public readonly editItem = (item: SignageMedia) =>
        this._state.editMedia(item);

    public readonly removeItem = async (item: SignageMedia) =>
        this._state.removeMedia(item);

    constructor(private _state: SignageStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist_count) {
            this.playlist_ids = new Array(this.playlist_count)
                .fill(0)
                .map((_, idx) => `playlist-${idx}`);
        }
    }

    // public drop(event) {}

    public async addToPlaylist(media_id: string, playlist: any) {
        const media_list = await listSignagePlaylistMedia(
            playlist.id,
        ).toPromise();
        const new_media_list = [...media_list.items, media_id];
        await this._state.updatePlaylistMedia(playlist.id, new_media_list);
    }
}
